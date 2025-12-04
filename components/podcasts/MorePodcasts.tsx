import Image from 'next/image';
import Link from 'next/link';
import type { SeriesWithSlug } from '@/lib/aviary-api';
import { getCategories } from '@/lib/aviary-api';

interface MorePodcastsProps {
  currentSlug: string;
  allSeries: SeriesWithSlug[];
}

export function MorePodcasts({ currentSlug, allSeries }: MorePodcastsProps) {
  // Filter out the current series
  const otherSeries = allSeries.filter((s) => s.slug !== currentSlug);

  if (otherSeries.length === 0) {
    return null;
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 border-t border-[#202635]">
      <h2 className="text-2xl font-bold mb-2 text-white">
        More from Chirpy Studio
      </h2>
      <p className="text-[#A7B0C0] mb-8">
        Discover other AI-powered podcasts
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherSeries.map((series) => {
          const categories = getCategories(series);
          return (
            <Link
              key={series.id}
              href={`/podcasts/${series.slug}`}
              className="group block rounded-2xl bg-[#10141D] border border-[#202635] hover:border-[#F97316]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#F97316]/5 overflow-hidden"
            >
              {/* Cover Art */}
              <div className="relative aspect-square w-full">
                {series.key_art_url ? (
                  <Image
                    src={series.key_art_url}
                    alt={series.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#F97316] to-[#D946EF] flex items-center justify-center">
                    <span className="text-4xl font-bold text-white/30">
                      {series.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                {/* Category */}
                {categories.length > 0 && (
                  <span className="text-xs text-[#F97316] font-medium uppercase tracking-wide">
                    {categories[0]}
                  </span>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mt-1 group-hover:text-[#F97316] transition-colors line-clamp-2">
                  {series.name}
                </h3>

                {/* Tagline */}
                {series.tagline && (
                  <p className="text-sm text-[#A7B0C0] mt-2 line-clamp-2">
                    {series.tagline}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
