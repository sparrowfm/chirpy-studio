'use client';

import { useState } from 'react';

interface AudioSampleCardProps {
  genre: string;
  title: string;
  description: string;
  duration: string;
  waveformStyle: 'dramatic' | 'calm' | 'balanced';
}

// Static waveform with different patterns based on style
function StaticWaveform({ style }: { style: 'dramatic' | 'calm' | 'balanced' }) {
  // Generate bar heights based on style
  const getBarHeights = () => {
    const barCount = 40;
    const heights: number[] = [];

    for (let i = 0; i < barCount; i++) {
      const position = i / barCount;
      let height: number;

      switch (style) {
        case 'dramatic':
          // Dynamic peaks and valleys
          height = 20 + Math.sin(position * Math.PI * 4) * 35 + Math.sin(position * Math.PI * 7) * 25;
          break;
        case 'calm':
          // Lower, gentler waves
          height = 15 + Math.sin(position * Math.PI * 2) * 15 + Math.cos(position * Math.PI * 3) * 10;
          break;
        case 'balanced':
          // Even, consistent pattern
          height = 25 + Math.sin(position * Math.PI * 3) * 20;
          break;
        default:
          height = 30;
      }

      heights.push(Math.max(8, Math.min(80, height)));
    }

    return heights;
  };

  const heights = getBarHeights();

  return (
    <div className="flex items-center justify-center gap-[2px] h-16 w-full">
      {heights.map((height, i) => (
        <div
          key={i}
          className="w-[2px] rounded-full bg-gradient-to-b from-[#F97316] to-[#D946EF] opacity-70"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

export function AudioSampleCard({
  genre,
  title,
  description,
  duration,
  waveformStyle,
}: AudioSampleCardProps) {
  const [showToast, setShowToast] = useState(false);

  const handlePlayClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="gradient-border p-6 relative group hover:scale-[1.02] transition-transform duration-300">
      {/* Genre Badge */}
      <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r from-[#F97316]/20 to-[#D946EF]/20 text-[#F97316]">
        {genre}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-[#A7B0C0] text-sm mb-4">{description}</p>

      {/* Waveform + Play Button Container */}
      <div className="flex items-center gap-4 mt-4">
        {/* Play Button */}
        <button
          onClick={handlePlayClick}
          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#F97316]/20"
          style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
          aria-label={`Play ${title}`}
        >
          <svg
            className="w-5 h-5 text-white ml-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        {/* Waveform */}
        <div className="flex-1">
          <StaticWaveform style={waveformStyle} />
        </div>

        {/* Duration */}
        <span className="text-[#A7B0C0] text-sm font-mono shrink-0">{duration}</span>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 rounded-lg bg-[#10141D] border border-[#202635] shadow-lg animate-fade-in-up z-10">
          <p className="text-sm text-white whitespace-nowrap">
            Sample coming soon — <a href="#signup" className="text-[#F97316] hover:underline">join the waitlist!</a>
          </p>
        </div>
      )}
    </div>
  );
}
