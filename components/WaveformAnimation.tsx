'use client';

import { useEffect, useRef } from 'react';

interface WaveformAnimationProps {
  className?: string;
}

export function WaveformAnimation({ className = '' }: WaveformAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    let animationId: number;
    let time = 0;

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerY = height / 2;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, '#F97316');    // Orange
      gradient.addColorStop(0.5, '#D946EF');  // Magenta
      gradient.addColorStop(1, '#F97316');    // Orange

      // Number of bars
      const barCount = 60;
      const barWidth = 3;
      const gap = (width - barCount * barWidth) / (barCount + 1);

      ctx.fillStyle = gradient;

      for (let i = 0; i < barCount; i++) {
        // Create organic wave motion using multiple sine waves
        const x = gap + i * (barWidth + gap);

        // Multiple frequencies for organic movement
        const wave1 = Math.sin((i * 0.15) + (time * 0.02)) * 0.3;
        const wave2 = Math.sin((i * 0.08) + (time * 0.015)) * 0.4;
        const wave3 = Math.sin((i * 0.2) + (time * 0.025)) * 0.3;

        // Combine waves with some randomness
        const amplitude = (wave1 + wave2 + wave3 + 1) / 2;
        const maxHeight = height * 0.7;
        const barHeight = Math.max(4, amplitude * maxHeight);

        // Draw rounded bar
        const y = centerY - barHeight / 2;
        const radius = barWidth / 2;

        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, radius);
        ctx.fill();
      }

      time += 1;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-32 ${className}`}
      style={{ opacity: 0.8 }}
    />
  );
}

// Alternative: Pure CSS waveform (simpler, works without JS)
export function WaveformAnimationCSS({ className = '' }: WaveformAnimationProps) {
  const bars = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div className={`flex items-center justify-center gap-[3px] sm:gap-[4px] md:gap-[5px] h-32 w-full max-w-3xl mx-auto ${className}`}>
      {bars.map((i) => (
        <div
          key={i}
          className="w-[3px] sm:w-[4px] rounded-full bg-gradient-to-b from-[#F97316] to-[#D946EF]"
          style={{
            animation: `waveform 1.2s ease-in-out infinite`,
            animationDelay: `${i * 0.04}s`,
            height: '20%',
          }}
        />
      ))}
      <style jsx>{`
        @keyframes waveform {
          0%, 100% {
            height: 20%;
            opacity: 0.6;
          }
          50% {
            height: 80%;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
