import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Wordmark } from '@/components/Wordmark';
import { SeriesHero } from '@/components/podcasts/SeriesHero';
import { SubscribeButtons } from '@/components/podcasts/SubscribeButtons';
import { EpisodeList } from '@/components/podcasts/EpisodeList';
import { MorePodcasts } from '@/components/podcasts/MorePodcasts';
import { NetworkCTA } from '@/components/podcasts/NetworkCTA';
import {
  getSeriesBySlug,
  getEpisodesFromRss,
  getAllPublishedSeries,
  getCategories,
} from '@/lib/aviary-api';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const series = await getSeriesBySlug(slug);

  if (!series) {
    return {
      title: 'Podcast Not Found | Chirpy Studio',
      robots: { index: false, follow: false },
    };
  }

  // Get categories for keywords
  const categories = getCategories(series);

  // Build rich description
  const description = series.description || series.tagline || `Listen to ${series.name} - an AI-powered podcast from Chirpy Studio`;
  const shortDescription = description.length > 160
    ? description.slice(0, 157) + '...'
    : description;

  // Build keywords from categories and series info
  const keywords = [
    series.name,
    'podcast',
    'AI podcast',
    'Chirpy Studio',
    ...categories,
    series.config.content_type === 'fiction' ? 'audio fiction' : 'audio content',
  ].filter(Boolean);

  return {
    title: `${series.name} | Chirpy Studio Podcast`,
    description: shortDescription,
    keywords,
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
      title: `${series.name} | Chirpy Studio`,
      description: shortDescription,
      type: 'website',
      siteName: 'Chirpy Studio',
      locale: 'en_US',
      url: `https://chirpy.studio/podcasts/${slug}`,
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
    },

    twitter: {
      card: 'summary_large_image',
      site: '@chirpystudio',
      creator: '@chirpystudio',
      title: series.name,
      description: shortDescription,
      images: series.key_art_url
        ? [{ url: series.key_art_url, alt: `${series.name} podcast cover art` }]
        : ['https://chirpy.studio/og-image.png'],
    },

    alternates: {
      canonical: `https://chirpy.studio/podcasts/${slug}`,
      types: series.config.rss_feed_url
        ? {
            'application/rss+xml': series.config.rss_feed_url,
          }
        : undefined,
    },

    other: {
      'podcast:rss': series.config.rss_feed_url || '',
    },
  };
}

export default async function PodcastSeriesPage({ params }: PageProps) {
  const { slug } = await params;

  // Fetch series and all published series in parallel
  const [series, allSeries] = await Promise.all([
    getSeriesBySlug(slug),
    getAllPublishedSeries(),
  ]);

  if (!series) {
    notFound();
  }

  // Fetch episodes from RSS feed (public, contains published episodes only)
  const episodes = await getEpisodesFromRss(series.rss_feed_url);

  return (
    <div className="min-h-screen bg-[#0B0E14]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#202635] bg-[#0B0E14]/90 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Wordmark />
          </Link>
          <Link
            href="/"
            className="text-sm text-[#A7B0C0] hover:text-white transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <SeriesHero series={series} />

      {/* Subscribe Section */}
      {series.config.rss_feed_url && (
        <section className="max-w-4xl mx-auto px-6 py-8 border-b border-[#202635]">
          <h2 className="text-lg font-semibold mb-4 text-white">Subscribe</h2>
          <SubscribeButtons feedUrl={series.config.rss_feed_url} />
        </section>
      )}

      {/* Episodes */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6 text-white">
          {episodes.length} {episodes.length === 1 ? 'Episode' : 'Episodes'}
        </h2>
        <EpisodeList episodes={episodes} seriesSlug={slug} />
      </section>

      {/* CTA Banner */}
      <NetworkCTA variant="compact" />

      {/* More from Chirpy Studio */}
      <MorePodcasts currentSlug={slug} allSeries={allSeries} />

      {/* Bottom padding for sticky player */}
      <div className="h-24" />
    </div>
  );
}
