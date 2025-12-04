import { Metadata } from 'next';
import Link from 'next/link';
import { Wordmark } from '@/components/Wordmark';
import { PodcastsHero } from '@/components/podcasts/PodcastsHero';
import { FeaturedPodcast } from '@/components/podcasts/FeaturedPodcast';
import { PodcastGrid } from '@/components/podcasts/PodcastGrid';
import { NetworkCTA } from '@/components/podcasts/NetworkCTA';
import { getAllPublishedSeries, getEpisodesFromRss } from '@/lib/aviary-api';
import type { SeriesWithPreview } from '@/types/podcast';

export const metadata: Metadata = {
  title: 'Podcasts | Chirpy Studio',
  description:
    'Discover AI-powered podcasts from Chirpy Studio. Premium narrative audio crafted with care.',
  keywords: [
    'podcasts',
    'AI podcasts',
    'Chirpy Studio',
    'narrative audio',
    'audio content',
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
    title: 'Chirpy Studio Podcasts',
    description: 'Discover AI-powered podcasts from Chirpy Studio. Premium narrative audio.',
    type: 'website',
    siteName: 'Chirpy Studio',
    locale: 'en_US',
    url: 'https://chirpy.studio/podcasts',
    images: [
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
    title: 'Chirpy Studio Podcasts',
    description: 'Discover AI-powered podcasts from Chirpy Studio.',
    images: ['https://chirpy.studio/og-image.png'],
  },

  alternates: {
    canonical: 'https://chirpy.studio/podcasts',
  },
};

async function getSeriesWithPreviews(): Promise<SeriesWithPreview[]> {
  const allSeries = await getAllPublishedSeries();

  // Fetch latest episode and count for each series in parallel
  const seriesWithPreviews = await Promise.all(
    allSeries.map(async (series) => {
      const episodes = await getEpisodesFromRss(series.rss_feed_url, series.key_art_url);
      return {
        ...series,
        latestEpisode: episodes[0] || null,
        episodeCount: episodes.length,
      };
    })
  );

  return seriesWithPreviews;
}

export default async function PodcastsPage() {
  const seriesWithPreviews = await getSeriesWithPreviews();

  // First series is featured
  const featuredSeries = seriesWithPreviews[0];

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
      <PodcastsHero />

      {/* Featured Podcast */}
      {featuredSeries && <FeaturedPodcast series={featuredSeries} />}

      {/* All Shows Grid (excluding featured) */}
      {seriesWithPreviews.length > 1 && (
        <PodcastGrid
          series={seriesWithPreviews}
          excludeSlug={featuredSeries?.slug}
        />
      )}

      {/* Network CTA */}
      <NetworkCTA />

      {/* Bottom padding for sticky player */}
      <div className="h-24" />
    </div>
  );
}
