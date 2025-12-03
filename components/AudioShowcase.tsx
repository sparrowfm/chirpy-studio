'use client';

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
  return (
    <section className="py-20 px-6">
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
              <AudioSampleCard {...sample} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
