'use client';

import { useState } from 'react';
import { AudioSampleCard } from './AudioSampleCard';

const samples = [
  {
    genre: 'Cinematic Fiction',
    title: 'The Last Signal',
    description: 'Rich sound design, dramatic scoring, immersive storytelling',
    duration: '4:32',
    waveformStyle: 'dramatic' as const,
  },
  {
    genre: 'Guided Meditation',
    title: 'Morning Stillness',
    description: 'Gentle narration, ambient soundscapes, breathing cues',
    duration: '6:15',
    waveformStyle: 'calm' as const,
  },
  {
    genre: 'Documentary',
    title: 'The Forgotten Expedition',
    description: 'Compelling narration, archival atmosphere, factual storytelling',
    duration: '5:48',
    waveformStyle: 'balanced' as const,
  },
];

export function AudioShowcase() {
  const [showToast, setShowToast] = useState(false);

  const handlePlayClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Hear what&apos;s <span className="gradient-text">possible</span>
          </h2>
          <p className="text-[#A7B0C0] text-lg max-w-2xl mx-auto animate-fade-in-up delay-100">
            Three genres. One platform. Full production quality.
          </p>
        </div>

        {/* Sample Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {samples.map((sample, index) => (
            <div
              key={sample.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <AudioSampleCard {...sample} onPlay={handlePlayClick} />
            </div>
          ))}
        </div>

        {/* Inspirational Prompt */}
        <div className="text-center mt-12 animate-fade-in-up delay-300">
          <p className="text-2xl md:text-3xl font-semibold">
            What will <span className="gradient-text">you</span> create?
          </p>
        </div>
      </div>

      {/* Shared Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl bg-[#10141D] border border-[#202635] shadow-2xl animate-fade-in-up z-50">
          <p className="text-base text-white">
            Samples coming soon — <a href="#signup" className="text-[#F97316] hover:underline font-medium">join the waitlist!</a>
          </p>
        </div>
      )}
    </section>
  );
}
