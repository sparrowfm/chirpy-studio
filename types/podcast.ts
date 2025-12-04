// Series data from Aviary API (Wren service)
export interface Series {
  id: string;
  name: string;
  description?: string;
  tagline?: string;
  key_art_url?: string;
  config: SeriesConfig;
  created_at: string;
  updated_at: string;
}

export interface SeriesConfig {
  rss_feed_url?: string;
  starling_feed_id?: string;
  itunes_categories?: ITunesCategorySelection;
  tone?: string;
  content_type?: 'fiction' | 'non-fiction' | 'hybrid';
  genre?: string;
  target_audience?: string;
}

export interface ITunesCategorySelection {
  primary?: {
    category: string;
    subcategory?: string;
  };
  secondary?: {
    category: string;
    subcategory?: string;
  };
}

// Episode data from Aviary API (Wren service)
export interface Episode {
  id: string;
  seriesId: string;
  title: string;
  description?: string;
  summary?: string;
  tags?: string[];
  status: EpisodeStatus;
  finalMixUrl?: string;
  audioUrl?: string;
  rssPublishedAt?: string;
  rssGuid?: string;
  word_timestamps?: WordTimestamp[];
  createdAt: string;
  updatedAt: string;
}

export type EpisodeStatus =
  | 'draft'
  | 'researching'
  | 'research_complete'
  | 'processing'
  | 'tts_completed'
  | 'generating_sdc'
  | 'sdc_ready'
  | 'assets_gathering'
  | 'assets_ready'
  | 'mixing'
  | 'completed'
  | 'failed';

export interface WordTimestamp {
  word: string;
  start: number;
  end: number;
}

// Transformed episode for display in UI
export interface DisplayEpisode {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  publishedAt: Date;
  durationSeconds: number;
  formattedDuration: string;
  /** Wren episode ID for fetching transcript (extracted from RSS GUID) */
  wrenEpisodeId?: string;
}

// Audio player state
export interface PlayerState {
  currentEpisode: DisplayEpisode | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
}

export type PlayerAction =
  | { type: 'PLAY'; episode: DisplayEpisode }
  | { type: 'PAUSE' }
  | { type: 'RESUME' }
  | { type: 'SEEK'; time: number }
  | { type: 'UPDATE_TIME'; time: number }
  | { type: 'SET_DURATION'; duration: number }
  | { type: 'SET_PLAYBACK_RATE'; rate: number }
  | { type: 'CLOSE' };
