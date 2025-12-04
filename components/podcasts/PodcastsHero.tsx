'use client';

import { WaveformAnimationCSS } from '@/components/WaveformAnimation';

export function PodcastsHero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F97316]/5 via-transparent to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Title with gradient */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
          <span className="bg-gradient-to-r from-[#F97316] to-[#D946EF] bg-clip-text text-transparent">
            Chirpy Studio
          </span>{' '}
          <span className="text-white">Podcasts</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#A7B0C0] mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
          AI-powered narrative audio, crafted with care
        </p>

        {/* Waveform animation */}
        <div className="animate-fade-in-up delay-200">
          <WaveformAnimationCSS className="opacity-60" />
        </div>
      </div>
    </section>
  );
}
