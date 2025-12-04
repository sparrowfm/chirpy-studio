import Image from 'next/image';
import type { Series } from '@/types/podcast';
import { getCategories } from '@/lib/aviary-api';
import { GenreBadge } from './GenreBadge';

interface SeriesHeroProps {
  series: Series;
}

export function SeriesHero({ series }: SeriesHeroProps) {
  const categories = getCategories(series);

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F97316]/10 via-transparent to-transparent" />

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Key Art */}
          <div className="shrink-0 w-full md:w-auto flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10">
              {series.key_art_url ? (
                <Image
                  src={series.key_art_url}
                  alt={series.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#F97316] to-[#D946EF] flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/30">
                    {series.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Series Info */}
          <div className="flex-1 text-center md:text-left">
            {/* Genre Badges */}
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                {categories.slice(0, 3).map((category) => (
                  <GenreBadge key={category} category={category} />
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">{series.name}</span>
            </h1>

            {/* Tagline */}
            {series.tagline && (
              <p className="text-xl md:text-2xl text-[#A7B0C0] mb-4">
                {series.tagline}
              </p>
            )}

            {/* Description */}
            {series.description && (
              <p className="text-[#A7B0C0] leading-relaxed max-w-2xl">
                {series.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
