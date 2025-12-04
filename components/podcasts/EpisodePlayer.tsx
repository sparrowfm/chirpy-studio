'use client';

import { useAudioPlayer } from '@/lib/audio-player-context';
import type { DisplayEpisode } from '@/types/podcast';

interface EpisodePlayerProps {
  episode: DisplayEpisode;
}

export function EpisodePlayer({ episode }: EpisodePlayerProps) {
  const { play, pause, state } = useAudioPlayer();

  const isCurrentEpisode = state.currentEpisode?.id === episode.id;
  const isPlaying = isCurrentEpisode && state.isPlaying;

  const handlePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play(episode);
    }
  };

  return (
    <div className="flex items-center gap-4">
      {/* Large Play Button */}
      <button
        onClick={handlePlayPause}
        className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-[#F97316] to-[#D946EF] flex items-center justify-center shadow-lg shadow-[#F97316]/20 hover:scale-105 transition-transform"
        aria-label={isPlaying ? 'Pause episode' : 'Play episode'}
      >
        {isPlaying ? (
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Status Text */}
      <div className="flex-1">
        {isPlaying ? (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-1 bg-[#F97316] rounded-full animate-pulse"
                  style={{
                    height: `${8 + i * 4}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
            <span className="text-[#F97316] font-medium">Now Playing</span>
          </div>
        ) : isCurrentEpisode ? (
          <span className="text-[#A7B0C0]">Paused</span>
        ) : (
          <span className="text-white font-medium">Play Episode</span>
        )}
        {episode.durationSeconds > 0 && (
          <p className="text-sm text-[#A7B0C0] mt-1">
            {episode.formattedDuration}
          </p>
        )}
      </div>
    </div>
  );
}
