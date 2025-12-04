'use client';

import { useState } from 'react';
import { useAudioPlayer } from '@/lib/audio-player-context';
import { formatDuration } from '@/lib/aviary-api';

const PLAYBACK_RATES = [1, 1.25, 1.5, 1.75, 2];

export function AudioPlayer() {
  const { state, pause, resume, seek, setPlaybackRate, close } = useAudioPlayer();
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);

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

  const skipBackward = () => {
    seek(Math.max(0, state.currentTime - 15));
  };

  const skipForward = () => {
    seek(Math.min(state.duration, state.currentTime + 15));
  };

  const cyclePlaybackRate = () => {
    const currentIndex = PLAYBACK_RATES.indexOf(state.playbackRate);
    const nextIndex = (currentIndex + 1) % PLAYBACK_RATES.length;
    setPlaybackRate(PLAYBACK_RATES[nextIndex]);
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
          {/* Skip Backward 15s */}
          <button
            onClick={skipBackward}
            className="hidden sm:flex shrink-0 p-2 text-[#A7B0C0] hover:text-white transition-colors relative"
            aria-label="Skip back 15 seconds"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 4v6h6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold mt-0.5">15</span>
          </button>

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

          {/* Skip Forward 15s */}
          <button
            onClick={skipForward}
            className="hidden sm:flex shrink-0 p-2 text-[#A7B0C0] hover:text-white transition-colors relative"
            aria-label="Skip forward 15 seconds"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 4v6h-6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold mt-0.5">15</span>
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

          {/* Playback Speed Control */}
          <div className="relative">
            <button
              onClick={cyclePlaybackRate}
              onContextMenu={(e) => {
                e.preventDefault();
                setShowSpeedMenu(!showSpeedMenu);
              }}
              className="px-2 py-1 text-sm font-mono text-[#A7B0C0] hover:text-white transition-colors border border-[#202635] rounded hover:border-[#F97316]/50"
              aria-label={`Playback speed ${state.playbackRate}x. Click to cycle, right-click for menu`}
              title="Click to cycle speed, right-click for menu"
            >
              {state.playbackRate}x
            </button>

            {/* Speed Menu (shown on right-click) */}
            {showSpeedMenu && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowSpeedMenu(false)}
                />
                <div className="absolute bottom-full right-0 mb-2 bg-[#10141D] border border-[#202635] rounded-lg shadow-xl z-20 overflow-hidden">
                  {PLAYBACK_RATES.map((rate) => (
                    <button
                      key={rate}
                      onClick={() => {
                        setPlaybackRate(rate);
                        setShowSpeedMenu(false);
                      }}
                      className={`block w-full px-4 py-2 text-sm font-mono text-left transition-colors ${
                        state.playbackRate === rate
                          ? 'text-[#F97316] bg-[#F97316]/10'
                          : 'text-[#A7B0C0] hover:text-white hover:bg-[#202635]'
                      }`}
                    >
                      {rate}x
                    </button>
                  ))}
                </div>
              </>
            )}
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
