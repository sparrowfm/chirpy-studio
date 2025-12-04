import type { DisplayEpisode } from '@/types/podcast';
import { EpisodeCard } from './EpisodeCard';

interface EpisodeListProps {
  episodes: DisplayEpisode[];
}

export function EpisodeList({ episodes }: EpisodeListProps) {
  if (episodes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[#A7B0C0]">No episodes available yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {episodes.map((episode, index) => (
        <EpisodeCard
          key={episode.id}
          episode={episode}
          episodeNumber={episodes.length - index}
        />
      ))}
    </div>
  );
}
