'use client';

import { useAudioPlayer } from '@/lib/audio-player-context';
import { formatDuration } from '@/lib/aviary-api';

export function AudioPlayer() {
  const { state, pause, resume, seek, close } = useAudioPlayer();

  if (!state.currentEpisode) {
    return null;
  }

  const progress = state.duration > 0 ? (state.currentTime / state.duration) * 100 : 0;

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const percentage = clickPosition / rect.width;
    const newTime = percentage * state.duration;
    seek(newTime);
  };

  const handlePlayPause = () => {
    if (state.isPlaying) {
      pause();
    } else {
      resume();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#10141D]/95 backdrop-blur-lg border-t border-[#202635] shadow-2xl shadow-black/50">
      <div className="max-w-4xl mx-auto px-4 py-3">
        {/* Progress Bar */}
        <div
          className="h-1 bg-[#202635] rounded-full cursor-pointer mb-3 group"
          onClick={handleSeek}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#F97316] to-[#D946EF] relative transition-all duration-100"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Play/Pause Button */}
          <button
            onClick={handlePlayPause}
            className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)',
            }}
            aria-label={state.isPlaying ? 'Pause' : 'Play'}
          >
            {state.isPlaying ? (
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
            <p className="text-sm font-semibold text-white truncate">
              {state.currentEpisode.title}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#A7B0C0]">
              <span className="font-mono">{formatDuration(state.currentTime)}</span>
              <span>/</span>
              <span className="font-mono">{formatDuration(state.duration)}</span>
            </div>
          </div>

          {/* Skip Backward/Forward */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => seek(Math.max(0, state.currentTime - 15))}
              className="p-2 text-[#A7B0C0] hover:text-white transition-colors"
              aria-label="Skip back 15 seconds"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
              </svg>
            </button>
            <button
              onClick={() => seek(Math.min(state.duration, state.currentTime + 30))}
              className="p-2 text-[#A7B0C0] hover:text-white transition-colors"
              aria-label="Skip forward 30 seconds"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
              </svg>
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={close}
            className="p-2 text-[#A7B0C0] hover:text-white transition-colors"
            aria-label="Close player"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
