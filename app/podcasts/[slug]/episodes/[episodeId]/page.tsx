import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Wordmark } from '@/components/Wordmark';
import { EpisodePlayer } from '@/components/podcasts/EpisodePlayer';
import { SubscribeButtons } from '@/components/podcasts/SubscribeButtons';
import { ShareButton } from '@/components/podcasts/ShareButton';
import { MorePodcasts } from '@/components/podcasts/MorePodcasts';
import { NetworkCTA } from '@/components/podcasts/NetworkCTA';
import {
  getSeriesBySlug,
  getEpisodesFromRss,
  getAllPublishedSeries,
  getCategories,
} from '@/lib/aviary-api';

interface PageProps {
  params: Promise<{ slug: string; episodeId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, episodeId } = await params;
  const series = await getSeriesBySlug(slug);

  if (!series) {
    return {
      title: 'Episode Not Found | Chirpy Studio',
      robots: { index: false, follow: false },
    };
  }

  const episodes = await getEpisodesFromRss(series.rss_feed_url);
  const episode = episodes.find((ep) => ep.id === episodeId);

  if (!episode) {
    return {
      title: 'Episode Not Found | Chirpy Studio',
      robots: { index: false, follow: false },
    };
  }

  const description =
    episode.description.length > 160
      ? episode.description.slice(0, 157) + '...'
      : episode.description;

  return {
    title: `${episode.title} | ${series.name} | Chirpy Studio`,
    description,
    keywords: [
      episode.title,
      series.name,
      'podcast episode',
      'AI podcast',
      'Chirpy Studio',
      ...getCategories(series),
    ],
    authors: [{ name: 'Chirpy Studio' }],
    creator: 'Chirpy Studio',
    publisher: 'Chirpy Studio',

    // Block search engines for now
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },

    openGraph: {
      title: `${episode.title} | ${series.name}`,
      description,
      type: 'music.song', // Best fit for audio content
      siteName: 'Chirpy Studio',
      locale: 'en_US',
      url: `https://chirpy.studio/podcasts/${slug}/episodes/${episodeId}`,
      images: series.key_art_url
        ? [
            {
              url: series.key_art_url,
              width: 1400,
              height: 1400,
              alt: `${series.name} podcast cover art`,
              type: 'image/png',
            },
          ]
        : [
            {
              url: 'https://chirpy.studio/og-image.png',
              width: 1200,
              height: 630,
              alt: 'Chirpy Studio - AI-Powered Narrative Audio',
            },
          ],
      audio: episode.audioUrl
        ? [
            {
              url: episode.audioUrl,
              type: 'audio/mpeg',
            },
          ]
        : undefined,
    },

    twitter: {
      card: 'summary_large_image',
      site: '@chirpystudio',
      creator: '@chirpystudio',
      title: `${episode.title} | ${series.name}`,
      description,
      images: series.key_art_url
        ? [{ url: series.key_art_url, alt: `${series.name} podcast cover art` }]
        : ['https://chirpy.studio/og-image.png'],
    },

    alternates: {
      canonical: `https://chirpy.studio/podcasts/${slug}/episodes/${episodeId}`,
    },
  };
}

export default async function EpisodePage({ params }: PageProps) {
  const { slug, episodeId } = await params;

  // Fetch series, episodes, and all series in parallel
  const [series, allSeries] = await Promise.all([
    getSeriesBySlug(slug),
    getAllPublishedSeries(),
  ]);

  if (!series) {
    notFound();
  }

  const episodes = await getEpisodesFromRss(series.rss_feed_url);
  const episode = episodes.find((ep) => ep.id === episodeId);

  if (!episode) {
    notFound();
  }

  // Find episode index for numbering
  const episodeIndex = episodes.findIndex((ep) => ep.id === episodeId);
  const episodeNumber = episodes.length - episodeIndex;

  // Get adjacent episodes for navigation
  const prevEpisode = episodes[episodeIndex + 1];
  const nextEpisode = episodes[episodeIndex - 1];

  const categories = getCategories(series);

  return (
    <div className="min-h-screen bg-[#0B0E14]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#202635] bg-[#0B0E14]/90 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Wordmark />
          </Link>
          <Link
            href={`/podcasts/${slug}`}
            className="text-sm text-[#A7B0C0] hover:text-white transition-colors"
          >
            &larr; Back to {series.name}
          </Link>
        </div>
      </header>

      {/* Episode Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cover Art */}
          <div className="flex-shrink-0 w-full md:w-64">
            <Link href={`/podcasts/${slug}`} className="block">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                {series.key_art_url ? (
                  <Image
                    src={series.key_art_url}
                    alt={series.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 256px"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#F97316] to-[#D946EF] flex items-center justify-center">
                    <span className="text-6xl font-bold text-white/30">
                      {series.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </Link>
          </div>

          {/* Episode Info */}
          <div className="flex-1">
            {/* Series Link */}
            <Link
              href={`/podcasts/${slug}`}
              className="text-[#F97316] hover:text-white transition-colors text-sm font-medium"
            >
              {series.name}
            </Link>

            {/* Categories */}
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {categories.slice(0, 3).map((cat) => (
                  <span
                    key={cat}
                    className="text-xs font-medium text-[#F97316] bg-[#F97316]/10 px-3 py-1 rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}

            {/* Episode Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-white mt-4">
              {episode.title}
            </h1>

            {/* Metadata */}
            <div className="flex items-center gap-3 text-sm text-[#A7B0C0] mt-3">
              <span>Episode {episodeNumber}</span>
              <span className="text-[#202635]">|</span>
              <span>
                {episode.publishedAt.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              {episode.durationSeconds > 0 && (
                <>
                  <span className="text-[#202635]">|</span>
                  <span className="font-mono">{episode.formattedDuration}</span>
                </>
              )}
            </div>

            {/* Audio Player */}
            <div className="mt-6">
              <EpisodePlayer episode={episode} />
            </div>

            {/* Share Button */}
            <div className="mt-4">
              <ShareButton
                title={`${episode.title} | ${series.name}`}
                description={episode.description}
                url={`https://chirpy.studio/podcasts/${slug}/episodes/${episodeId}`}
              />
            </div>

            {/* Subscribe */}
            {series.rss_feed_url && (
              <div className="mt-6">
                <p className="text-sm text-[#A7B0C0] mb-3">Subscribe to this podcast</p>
                <SubscribeButtons feedUrl={series.rss_feed_url} />
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-white mb-4">About this episode</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-[#A7B0C0] whitespace-pre-line leading-relaxed">
              {episode.description}
            </p>
          </div>
        </div>

        {/* Episode Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
          {prevEpisode ? (
            <Link
              href={`/podcasts/${slug}/episodes/${prevEpisode.id}`}
              className="flex items-center gap-3 p-4 bg-[#10141D] rounded-xl border border-[#202635] hover:border-[#F97316]/30 transition-colors group"
            >
              <svg
                className="w-5 h-5 text-[#A7B0C0] group-hover:text-[#F97316] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <div>
                <p className="text-xs text-[#A7B0C0]">Previous Episode</p>
                <p className="text-white font-medium line-clamp-1">{prevEpisode.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextEpisode ? (
            <Link
              href={`/podcasts/${slug}/episodes/${nextEpisode.id}`}
              className="flex items-center gap-3 p-4 bg-[#10141D] rounded-xl border border-[#202635] hover:border-[#F97316]/30 transition-colors group text-right sm:text-left sm:flex-row-reverse"
            >
              <svg
                className="w-5 h-5 text-[#A7B0C0] group-hover:text-[#F97316] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <div>
                <p className="text-xs text-[#A7B0C0]">Next Episode</p>
                <p className="text-white font-medium line-clamp-1">{nextEpisode.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </main>

      {/* CTA Banner */}
      <NetworkCTA variant="compact" />

      {/* More from Chirpy Studio */}
      <MorePodcasts currentSlug={slug} allSeries={allSeries} />

      {/* Bottom padding for sticky player */}
      <div className="h-24" />
    </div>
  );
}
