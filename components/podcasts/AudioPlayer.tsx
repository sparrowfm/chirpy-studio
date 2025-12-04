'use client';

import { useState, useEffect } from 'react';
import { useAudioPlayer } from '@/lib/audio-player-context';
import { formatDuration } from '@/lib/aviary-api';

const PLAYBACK_RATES = [1, 1.25, 1.5, 1.75, 2];

export function AudioPlayer() {
  const { state, pause, resume, seek, setPlaybackRate, close } = useAudioPlayer();
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showExpanded, setShowExpanded] = useState(false);

  // Handle expand animation
  useEffect(() => {
    if (isExpanded) {
      setShowExpanded(true);
      // Trigger animation on next frame
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else if (showExpanded) {
      setIsAnimating(false);
      // Wait for animation to complete before hiding
      const timer = setTimeout(() => {
        setShowExpanded(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isExpanded, showExpanded]);

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

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (state.isPlaying) {
      pause();
    } else {
      resume();
    }
  };

  const skipBackward = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    seek(Math.max(0, state.currentTime - 15));
  };

  const skipForward = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    seek(Math.min(state.duration, state.currentTime + 15));
  };

  const cyclePlaybackRate = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const currentIndex = PLAYBACK_RATES.indexOf(state.playbackRate);
    const nextIndex = (currentIndex + 1) % PLAYBACK_RATES.length;
    setPlaybackRate(PLAYBACK_RATES[nextIndex]);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    close();
  };

  const handleMiniplayerClick = () => {
    setIsExpanded(true);
  };

  // Expanded full-screen player (mobile-optimized)
  const expandedPlayer = showExpanded && (
    <div
      className={`fixed inset-0 z-50 bg-[#0B0E14] flex flex-col transition-all duration-300 ease-out ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#202635]">
        <button
          onClick={() => setIsExpanded(false)}
          className="p-2 -ml-2 text-[#A7B0C0] hover:text-white transition-colors"
          aria-label="Minimize player"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <span className="text-sm text-[#A7B0C0]">Now Playing</span>
        <button
          onClick={handleClose}
          className="p-2 -mr-2 text-[#A7B0C0] hover:text-white transition-colors"
          aria-label="Close player"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-8">
        {/* Album Art Placeholder */}
        <div
          className={`w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-gradient-to-br from-[#F97316] to-[#D946EF] flex items-center justify-center shadow-2xl shadow-[#F97316]/20 mb-8 transition-all duration-500 delay-100 ${
            isAnimating ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        >
          <svg className="w-24 h-24 text-white/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>

        {/* Episode Title (full, no truncation) */}
        <h2
          className={`text-xl sm:text-2xl font-bold text-white text-center mb-2 px-4 transition-all duration-300 delay-150 ${
            isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          {state.currentEpisode.title}
        </h2>

        {/* Description preview if available */}
        {state.currentEpisode.description && (
          <p
            className={`text-sm text-[#A7B0C0] text-center line-clamp-2 mb-6 px-4 max-w-md transition-all duration-300 delay-200 ${
              isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {state.currentEpisode.description}
          </p>
        )}

        {/* Progress Bar */}
        <div
          className={`w-full max-w-md mb-4 transition-all duration-300 delay-200 ${
            isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div
            className="h-2 bg-[#202635] rounded-full cursor-pointer group"
            onClick={handleSeek}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#F97316] to-[#D946EF] relative transition-all duration-100"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-lg" />
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-[#A7B0C0] font-mono">
            <span>{formatDuration(state.currentTime)}</span>
            <span>{formatDuration(state.duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div
          className={`flex items-center justify-center gap-6 mt-4 transition-all duration-300 delay-250 ${
            isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          {/* Skip Backward 15s */}
          <button
            onClick={skipBackward}
            className="p-3 text-[#A7B0C0] hover:text-white transition-colors relative"
            aria-label="Skip back 15 seconds"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 4v6h6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold mt-0.5">15</span>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={handlePlayPause}
            className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)',
            }}
            aria-label={state.isPlaying ? 'Pause' : 'Play'}
          >
            {state.isPlaying ? (
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Skip Forward 15s */}
          <button
            onClick={skipForward}
            className="p-3 text-[#A7B0C0] hover:text-white transition-colors relative"
            aria-label="Skip forward 15 seconds"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 4v6h-6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold mt-0.5">15</span>
          </button>
        </div>

        {/* Playback Speed */}
        <div
          className={`flex items-center gap-2 mt-6 transition-all duration-300 delay-300 ${
            isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          {PLAYBACK_RATES.map((rate) => (
            <button
              key={rate}
              onClick={() => setPlaybackRate(rate)}
              className={`px-3 py-1.5 text-sm font-mono rounded-full transition-colors ${
                state.playbackRate === rate
                  ? 'bg-gradient-to-r from-[#F97316] to-[#D946EF] text-white'
                  : 'text-[#A7B0C0] hover:text-white border border-[#202635] hover:border-[#F97316]/50'
              }`}
            >
              {rate}x
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Render both - expanded player animates in/out, miniplayer always visible underneath
  return (
    <>
      {expandedPlayer}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#10141D]/95 backdrop-blur-lg border-t border-[#202635] shadow-2xl shadow-black/50 cursor-pointer sm:cursor-default"
        onClick={handleMiniplayerClick}
      >
      <div className="max-w-4xl mx-auto px-4 py-3">
        {/* Progress Bar */}
        <div
          className="h-1 bg-[#202635] rounded-full cursor-pointer mb-3 group"
          onClick={(e) => {
            e.stopPropagation();
            handleSeek(e);
          }}
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

          {/* Episode Info - Tappable area with expand hint on mobile */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white line-clamp-2 sm:truncate">
              {state.currentEpisode.title}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#A7B0C0]">
              <span className="font-mono">{formatDuration(state.currentTime)}</span>
              <span>/</span>
              <span className="font-mono">{formatDuration(state.duration)}</span>
              <span className="sm:hidden text-[#F97316]">· Tap to expand</span>
            </div>
          </div>

          {/* Playback Speed Control */}
          <div className="relative hidden sm:block">
            <button
              onClick={(e) => {
                e.stopPropagation();
                cyclePlaybackRate();
              }}
              onContextMenu={(e) => {
                e.preventDefault();
                e.stopPropagation();
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSpeedMenu(false);
                  }}
                />
                <div className="absolute bottom-full right-0 mb-2 bg-[#10141D] border border-[#202635] rounded-lg shadow-xl z-20 overflow-hidden">
                  {PLAYBACK_RATES.map((rate) => (
                    <button
                      key={rate}
                      onClick={(e) => {
                        e.stopPropagation();
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
            onClick={handleClose}
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
    </>
  );
}
