import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Wordmark } from '@/components/Wordmark';
import { SeriesHero } from '@/components/podcasts/SeriesHero';
import { SubscribeButtons } from '@/components/podcasts/SubscribeButtons';
import { EpisodeList } from '@/components/podcasts/EpisodeList';
import { AudioPlayer } from '@/components/podcasts/AudioPlayer';
import { AudioPlayerProvider } from '@/lib/audio-player-context';
import {
  getSeriesBySlug,
  getEpisodesFromRss,
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
    };
  }

  const description = series.description || series.tagline || `Listen to ${series.name}`;

  return {
    title: `${series.name} | Chirpy Studio`,
    description,
    openGraph: {
      title: series.name,
      description,
      type: 'website',
      siteName: 'Chirpy Studio',
      images: series.key_art_url
        ? [
            {
              url: series.key_art_url,
              width: 1200,
              height: 1200,
              alt: series.name,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: series.name,
      description,
      images: series.key_art_url ? [series.key_art_url] : undefined,
    },
    alternates: {
      canonical: `https://chirpy.studio/podcasts/${slug}`,
      types: series.config.rss_feed_url
        ? {
            'application/rss+xml': series.config.rss_feed_url,
          }
        : undefined,
    },
  };
}

export default async function PodcastSeriesPage({ params }: PageProps) {
  const { slug } = await params;
  const series = await getSeriesBySlug(slug);

  if (!series) {
    notFound();
  }

  // Fetch episodes from RSS feed (public, contains published episodes only)
  const episodes = await getEpisodesFromRss(series.rss_feed_url);

  return (
    <AudioPlayerProvider>
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
        <section className="max-w-4xl mx-auto px-6 py-8 pb-32">
          <h2 className="text-2xl font-bold mb-6 text-white">
            {episodes.length} {episodes.length === 1 ? 'Episode' : 'Episodes'}
          </h2>
          <EpisodeList episodes={episodes} />
        </section>

        {/* Sticky Audio Player */}
        <AudioPlayer />
      </div>
    </AudioPlayerProvider>
  );
}
