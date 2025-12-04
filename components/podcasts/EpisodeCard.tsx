'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { DisplayEpisode } from '@/types/podcast';
import { useAudioPlayer } from '@/lib/audio-player-context';
import { ShareButton } from './ShareButton';

interface EpisodeCardProps {
  episode: DisplayEpisode;
  episodeNumber?: number;
  seriesSlug?: string;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function EpisodeCard({ episode, episodeNumber, seriesSlug }: EpisodeCardProps) {
  const { state, play, pause, resume } = useAudioPlayer();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [isLoadingTranscript, setIsLoadingTranscript] = useState(false);

  const isCurrentEpisode = state.currentEpisode?.id === episode.id;
  const isPlaying = isCurrentEpisode && state.isPlaying;

  // Check if description is long enough to need expansion
  const descriptionNeedsExpansion = episode.description.length > 150;

  const handlePlayClick = () => {
    if (isCurrentEpisode) {
      if (isPlaying) {
        pause();
      } else {
        resume();
      }
    } else {
      play(episode);
    }
  };

  const handleTranscriptClick = async () => {
    if (showTranscript) {
      setShowTranscript(false);
      return;
    }

    // If we already loaded the transcript, just show it
    if (transcript !== null) {
      setShowTranscript(true);
      return;
    }

    // Fetch transcript from API
    if (!episode.wrenEpisodeId) {
      return;
    }

    setIsLoadingTranscript(true);
    try {
      const response = await fetch(`/api/episodes/${episode.wrenEpisodeId}`);
      if (response.ok) {
        const data = await response.json();
        setTranscript(data.transcript || '');
        setShowTranscript(true);
      }
    } catch (error) {
      console.error('Failed to fetch transcript:', error);
    } finally {
      setIsLoadingTranscript(false);
    }
  };

  const artworkUrl = episode.imageUrl || episode.seriesImageUrl;

  return (
    <div className="group relative p-4 sm:p-6 rounded-2xl bg-[#10141D] border border-[#202635] hover:border-[#F97316]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#F97316]/5">
      <div className="flex gap-3 sm:gap-4">
        {/* Artwork with Play Overlay */}
        <button
          onClick={handlePlayClick}
          className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden relative group/play"
          aria-label={isPlaying ? `Pause ${episode.title}` : `Play ${episode.title}`}
        >
          {artworkUrl ? (
            <Image
              src={artworkUrl}
              alt=""
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#F97316] to-[#D946EF]" />
          )}
          {/* Play/Pause Overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
              isPlaying
                ? 'bg-black/40'
                : 'bg-black/0 group-hover/play:bg-black/40'
            }`}
          >
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                isPlaying
                  ? 'scale-100 opacity-100'
                  : 'scale-75 opacity-0 group-hover/play:scale-100 group-hover/play:opacity-100'
              }`}
              style={{
                background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)',
              }}
            >
              {isPlaying ? (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
          </div>
        </button>

        {/* Episode Info */}
        <div className="flex-1 min-w-0">
          {/* Episode Number & Date */}
          <div className="flex items-center gap-3 text-sm text-[#A7B0C0] mb-1">
            {episodeNumber && (
              <span className="font-mono">#{episodeNumber}</span>
            )}
            <span>{formatDate(episode.publishedAt)}</span>
            {episode.durationSeconds > 0 && (
              <>
                <span className="text-[#202635]">|</span>
                <span className="font-mono">{episode.formattedDuration}</span>
              </>
            )}
          </div>

          {/* Title */}
          {seriesSlug ? (
            <Link
              href={`/podcasts/${seriesSlug}/episodes/${episode.id}`}
              className="block"
            >
              <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 sm:line-clamp-1 group-hover:text-[#F97316] transition-colors hover:text-[#F97316]">
                {episode.title}
              </h3>
            </Link>
          ) : (
            <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 sm:line-clamp-1 group-hover:text-[#F97316] transition-colors">
              {episode.title}
            </h3>
          )}

          {/* Description */}
          {episode.description && (
            <div>
              <p
                className={`text-sm text-[#A7B0C0] leading-relaxed ${
                  isExpanded ? '' : 'line-clamp-2'
                }`}
              >
                {episode.description}
              </p>
              <div className="flex items-center gap-3 mt-1">
                {descriptionNeedsExpansion && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-sm text-[#F97316] hover:text-[#D946EF] transition-colors font-medium"
                  >
                    {isExpanded ? 'Show less' : 'Show more'}
                  </button>
                )}
                {episode.wrenEpisodeId && (
                  <button
                    onClick={handleTranscriptClick}
                    disabled={isLoadingTranscript}
                    className="text-sm text-[#F97316] hover:text-[#D946EF] transition-colors font-medium flex items-center gap-1 disabled:opacity-50"
                  >
                    {isLoadingTranscript ? (
                      <>
                        <svg className="animate-spin w-3 h-3" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Loading...
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {showTranscript ? 'Hide transcript' : 'View transcript'}
                      </>
                    )}
                  </button>
                )}
                <ShareButton
                  title={episode.title}
                  description={episode.description.slice(0, 100)}
                  url={seriesSlug ? `https://chirpy.studio/podcasts/${seriesSlug}/episodes/${episode.id}` : undefined}
                />
              </div>
            </div>
          )}

          {/* Transcript */}
          {showTranscript && transcript && (
            <div className="mt-4 p-4 bg-[#0B0E14] rounded-xl border border-[#202635]">
              <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <svg className="w-4 h-4 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Transcript
              </h4>
              <p className="text-sm text-[#A7B0C0] leading-relaxed whitespace-pre-line">
                {transcript}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Playing indicator */}
      {isCurrentEpisode && (
        <div className="absolute top-3 right-3">
          <div className="flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-1 bg-gradient-to-t from-[#F97316] to-[#D946EF] rounded-full ${
                  isPlaying ? 'animate-pulse' : ''
                }`}
                style={{
                  height: isPlaying ? `${12 + i * 4}px` : '8px',
                  animationDelay: `${i * 100}ms`,
                  transition: 'height 0.2s ease',
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
