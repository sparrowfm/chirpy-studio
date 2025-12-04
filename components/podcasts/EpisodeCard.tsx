'use client';

import type { DisplayEpisode } from '@/types/podcast';
import { useAudioPlayer } from '@/lib/audio-player-context';

interface EpisodeCardProps {
  episode: DisplayEpisode;
  episodeNumber?: number;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function EpisodeCard({ episode, episodeNumber }: EpisodeCardProps) {
  const { state, play, pause, resume } = useAudioPlayer();

  const isCurrentEpisode = state.currentEpisode?.id === episode.id;
  const isPlaying = isCurrentEpisode && state.isPlaying;

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

  return (
    <div className="group relative p-6 rounded-2xl bg-[#10141D] border border-[#202635] hover:border-[#F97316]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#F97316]/5">
      <div className="flex gap-4">
        {/* Play Button */}
        <button
          onClick={handlePlayClick}
          className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#F97316]/20"
          style={{
            background: isPlaying
              ? 'linear-gradient(135deg, #D946EF 0%, #F97316 100%)'
              : 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)',
          }}
          aria-label={isPlaying ? `Pause ${episode.title}` : `Play ${episode.title}`}
        >
          {isPlaying ? (
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
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
          <h3 className="text-lg font-semibold text-white mb-2 truncate group-hover:text-[#F97316] transition-colors">
            {episode.title}
          </h3>

          {/* Description */}
          {episode.description && (
            <p className="text-sm text-[#A7B0C0] line-clamp-2 leading-relaxed">
              {episode.description}
            </p>
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
