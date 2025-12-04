import type { Series, Episode, DisplayEpisode } from '@/types/podcast';

// Wren API is hosted on studio.chirpy.studio (Vercel)
const WREN_API_URL = 'https://studio.chirpy.studio';
// RSS feeds are hosted on rss.chirpy.studio
const RSS_BASE_URL = 'https://rss.chirpy.studio';

interface FetchOptions {
  revalidate?: number;
}

async function wrenFetch<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const apiKey = process.env.AVIARY_API_KEY;

  if (!apiKey) {
    throw new Error('AVIARY_API_KEY environment variable is not set');
  }

  const response = await fetch(`${WREN_API_URL}${endpoint}`, {
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json',
    },
    next: { revalidate: options.revalidate ?? 300 }, // 5 minute cache
  });

  if (!response.ok) {
    throw new Error(`Wren API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Convert series name to URL-friendly slug
 */
function nameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Construct RSS feed URL from slug
 * TODO: This should be stored in Wren's series config.rss_feed_url
 * See: https://github.com/your-org/aviary-v2/issues/XXX
 */
export function getRssFeedUrl(slug: string): string {
  return `${RSS_BASE_URL}/feeds/${slug}`;
}

/**
 * Get a series by its URL slug (e.g., 'fact-frenzy')
 * Matches by: RSS feed URL slug, starling_feed_id, series ID, or slugified series name
 * Also populates the RSS feed URL if not present
 */
export async function getSeriesBySlug(slug: string): Promise<(Series & { rss_feed_url: string }) | null> {
  try {
    const { series } = await wrenFetch<{ series: Series[] }>('/api/series', {
      revalidate: 300,
    });

    // Try multiple matching strategies
    const matchedSeries = series.find((s) => {
      // 1. Match RSS feed URL contains the slug
      if (s.config.rss_feed_url?.includes(`/feeds/${slug}`)) return true;
      // 2. Match starling_feed_id
      if (s.config.starling_feed_id === slug) return true;
      // 3. Match series ID directly
      if (s.id === slug) return true;
      // 4. Match slugified series name
      if (nameToSlug(s.name) === slug) return true;
      return false;
    });

    if (!matchedSeries) return null;

    // Ensure RSS feed URL is populated (use stored value or construct from slug)
    const rss_feed_url = matchedSeries.config.rss_feed_url || getRssFeedUrl(slug);

    return {
      ...matchedSeries,
      rss_feed_url,
      config: {
        ...matchedSeries.config,
        rss_feed_url,
      },
    };
  } catch (error) {
    console.error('Failed to fetch series by slug:', error);
    return null;
  }
}

/**
 * Get all published episodes for a series from Wren API
 * Filters to only completed episodes with audio
 */
export async function getEpisodes(seriesId: string): Promise<Episode[]> {
  try {
    const response = await wrenFetch<{ success?: boolean; episodes: Episode[] }>(
      `/api/episodes?seriesId=${seriesId}`,
      { revalidate: 300 }
    );

    // Filter to completed episodes with final mix audio
    return response.episodes.filter(
      (ep) => ep.status === 'completed' && (ep.finalMixUrl || ep.audioUrl)
    );
  } catch (error) {
    console.error('Failed to fetch episodes:', error);
    return [];
  }
}

/**
 * Parsed RSS item for display
 */
interface RssEpisode {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  pubDate: string;
  duration?: string;
}

/**
 * Parse RSS feed to get episodes directly
 * This is a fallback/alternative to the Wren API
 */
export async function getEpisodesFromRss(feedUrl: string): Promise<DisplayEpisode[]> {
  try {
    const response = await fetch(feedUrl, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`RSS fetch error: ${response.status}`);
    }

    const xmlText = await response.text();

    // Simple XML parsing for RSS items
    const episodes: DisplayEpisode[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xmlText)) !== null) {
      const itemXml = match[1];

      const title = extractTag(itemXml, 'title');
      const description = extractTag(itemXml, 'description') || extractTag(itemXml, 'itunes:summary');
      const guid = extractTag(itemXml, 'guid');
      const pubDate = extractTag(itemXml, 'pubDate');
      const enclosureMatch = itemXml.match(/<enclosure[^>]*url="([^"]+)"/);
      const audioUrl = enclosureMatch?.[1] || '';
      const durationStr = extractTag(itemXml, 'itunes:duration');

      if (title && audioUrl) {
        // Only use itunes:duration if available - don't estimate from file size
        // as bitrate varies and estimates are inaccurate
        const durationSeconds = parseDuration(durationStr || '');
        episodes.push({
          id: guid || title,
          title: cleanHtml(title),
          description: cleanHtml(description || ''),
          audioUrl,
          publishedAt: pubDate ? new Date(pubDate) : new Date(),
          durationSeconds,
          formattedDuration: formatDuration(durationSeconds),
        });
      }
    }

    return episodes;
  } catch (error) {
    console.error('Failed to fetch episodes from RSS:', error);
    return [];
  }
}

/**
 * Extract tag content from XML string
 */
function extractTag(xml: string, tag: string): string | null {
  // Handle CDATA
  const cdataMatch = xml.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`, 'i'));
  if (cdataMatch) return cdataMatch[1];

  // Handle regular content
  const regularMatch = xml.match(new RegExp(`<${tag}[^>]*>([^<]*)</${tag}>`, 'i'));
  return regularMatch?.[1] || null;
}

/**
 * Clean HTML entities and tags
 */
function cleanHtml(text: string): string {
  return text
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

/**
 * Parse iTunes duration format (HH:MM:SS or MM:SS or seconds)
 */
function parseDuration(durationStr: string): number {
  if (!durationStr) return 0;

  // If it's just a number, assume seconds
  if (/^\d+$/.test(durationStr)) {
    return parseInt(durationStr, 10);
  }

  // Parse HH:MM:SS or MM:SS
  const parts = durationStr.split(':').map(Number);
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  }

  return 0;
}

/**
 * Calculate episode duration from word timestamps
 */
export function calculateDuration(episode: Episode): number {
  if (!episode.word_timestamps?.length) {
    return 0;
  }
  const lastWord = episode.word_timestamps[episode.word_timestamps.length - 1];
  return Math.ceil(lastWord.end);
}

/**
 * Format duration in seconds to MM:SS or HH:MM:SS format
 */
export function formatDuration(seconds: number): string {
  if (seconds <= 0) {
    return '--:--';
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Transform raw Episode to DisplayEpisode for UI rendering
 */
export function toDisplayEpisode(episode: Episode): DisplayEpisode {
  const durationSeconds = calculateDuration(episode);

  return {
    id: episode.id,
    title: episode.title,
    description: episode.description || episode.summary || '',
    audioUrl: episode.finalMixUrl || episode.audioUrl || '',
    publishedAt: episode.rssPublishedAt
      ? new Date(episode.rssPublishedAt)
      : new Date(episode.createdAt),
    durationSeconds,
    formattedDuration: formatDuration(durationSeconds),
  };
}

/**
 * Extract iTunes categories as a flat array of strings for display
 */
export function getCategories(series: Series): string[] {
  const categories: string[] = [];
  const itunes = series.config.itunes_categories;

  if (itunes?.primary) {
    categories.push(itunes.primary.category);
    if (itunes.primary.subcategory) {
      categories.push(itunes.primary.subcategory);
    }
  }

  if (itunes?.secondary) {
    categories.push(itunes.secondary.category);
    if (itunes.secondary.subcategory) {
      categories.push(itunes.secondary.subcategory);
    }
  }

  // Fallback to genre if no iTunes categories
  if (categories.length === 0 && series.config.genre) {
    categories.push(series.config.genre);
  }

  // Remove duplicates
  return [...new Set(categories)];
}
