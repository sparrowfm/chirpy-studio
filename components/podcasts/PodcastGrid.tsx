import { PodcastDiscoveryCard } from './PodcastDiscoveryCard';
import type { SeriesWithPreview } from '@/types/podcast';

interface PodcastGridProps {
  series: SeriesWithPreview[];
  /** Optional: Exclude a series from the grid (e.g., featured one) */
  excludeSlug?: string;
}

export function PodcastGrid({ series, excludeSlug }: PodcastGridProps) {
  const filteredSeries = excludeSlug
    ? series.filter((s) => s.slug !== excludeSlug)
    : series;

  if (filteredSeries.length === 0) {
    return null;
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-2 text-white">All Shows</h2>
      <p className="text-[#A7B0C0] mb-8">
        Browse our complete catalog
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSeries.map((s, index) => (
          <div
            key={s.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <PodcastDiscoveryCard series={s} />
          </div>
        ))}
      </div>
    </section>
  );
}
