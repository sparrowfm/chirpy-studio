'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAudioPlayer } from '@/lib/audio-player-context';
import { getCategories } from '@/lib/aviary-api';
import { SubscribeButtons } from './SubscribeButtons';
import type { SeriesWithPreview } from '@/types/podcast';

interface FeaturedPodcastProps {
  series: SeriesWithPreview;
}

export function FeaturedPodcast({ series }: FeaturedPodcastProps) {
  const { play, pause, state } = useAudioPlayer();
  const categories = getCategories(series);

  const isCurrentlyPlaying =
    state.currentEpisode?.id === series.latestEpisode?.id && state.isPlaying;

  const handlePlayPreview = () => {
    if (!series.latestEpisode) return;

    if (isCurrentlyPlaying) {
      pause();
    } else {
      play(series.latestEpisode);
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 border-b border-[#202635]">
      <h2 className="text-sm font-medium text-[#F97316] uppercase tracking-wider mb-6">
        Featured
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Cover Art */}
        <div className="flex-shrink-0 w-full md:w-72">
          <Link href={`/podcasts/${series.slug}`} className="block">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/30 hover:shadow-[#F97316]/10 transition-shadow">
              {series.key_art_url ? (
                <Image
                  src={series.key_art_url}
                  alt={series.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 288px"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#F97316] to-[#D946EF] flex items-center justify-center">
                  <span className="text-7xl font-bold text-white/30">
                    {series.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </Link>
        </div>

        {/* Info */}
        <div className="flex-1">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
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

          {/* Title */}
          <Link href={`/podcasts/${series.slug}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-white hover:text-[#F97316] transition-colors">
              {series.name}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-[#A7B0C0] mt-3 leading-relaxed">
            {series.description || series.tagline}
          </p>

          {/* Episode Count */}
          <p className="text-sm text-[#A7B0C0] mt-4">
            {series.episodeCount} {series.episodeCount === 1 ? 'Episode' : 'Episodes'}
          </p>

          {/* Latest Episode Preview */}
          {series.latestEpisode && (
            <div className="mt-6 p-4 bg-[#10141D] rounded-xl border border-[#202635]">
              <div className="flex items-start gap-4">
                {/* Play Button */}
                <button
                  onClick={handlePlayPreview}
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#F97316] to-[#D946EF] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                  aria-label={isCurrentlyPlaying ? 'Pause' : 'Play latest episode'}
                >
                  {isCurrentlyPlaying ? (
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-white ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                {/* Episode Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#A7B0C0] uppercase tracking-wide mb-1">
                    Latest Episode
                  </p>
                  <p className="text-white font-medium line-clamp-1">
                    {series.latestEpisode.title}
                  </p>
                  {series.latestEpisode.durationSeconds > 0 && (
                    <p className="text-sm text-[#A7B0C0] mt-1">
                      {series.latestEpisode.formattedDuration}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Subscribe Buttons */}
          {series.rss_feed_url && (
            <div className="mt-6">
              <SubscribeButtons feedUrl={series.rss_feed_url} />
            </div>
          )}

          {/* View All Episodes Link */}
          <div className="mt-6">
            <Link
              href={`/podcasts/${series.slug}`}
              className="inline-flex items-center gap-2 text-[#F97316] hover:text-white transition-colors font-medium"
            >
              View all episodes
              <svg
                className="w-4 h-4"
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
