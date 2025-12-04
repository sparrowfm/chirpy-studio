'use client';

import {
  createContext,
  useContext,
  useReducer,
  useRef,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react';
import type { DisplayEpisode, PlayerState, PlayerAction } from '@/types/podcast';

const initialState: PlayerState = {
  currentEpisode: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
};

function playerReducer(state: PlayerState, action: PlayerAction): PlayerState {
  switch (action.type) {
    case 'PLAY':
      return {
        ...state,
        currentEpisode: action.episode,
        isPlaying: true,
        currentTime: 0,
        duration: action.episode.durationSeconds || 0,
      };
    case 'PAUSE':
      return { ...state, isPlaying: false };
    case 'RESUME':
      return { ...state, isPlaying: true };
    case 'SEEK':
      return { ...state, currentTime: action.time };
    case 'UPDATE_TIME':
      return { ...state, currentTime: action.time };
    case 'SET_DURATION':
      return { ...state, duration: action.duration };
    case 'CLOSE':
      return initialState;
    default:
      return state;
  }
}

interface PlayerContextValue {
  state: PlayerState;
  play: (episode: DisplayEpisode) => void;
  pause: () => void;
  resume: () => void;
  seek: (time: number) => void;
  close: () => void;
}

const PlayerContext = createContext<PlayerContextValue | null>(null);

export function AudioPlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [state, dispatch] = useReducer(playerReducer, initialState);

  // Initialize audio element on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && !audioRef.current) {
      audioRef.current = new Audio();

      audioRef.current.addEventListener('timeupdate', () => {
        if (audioRef.current) {
          dispatch({ type: 'UPDATE_TIME', time: audioRef.current.currentTime });
        }
      });

      audioRef.current.addEventListener('loadedmetadata', () => {
        if (audioRef.current) {
          dispatch({ type: 'SET_DURATION', duration: audioRef.current.duration });
        }
      });

      audioRef.current.addEventListener('ended', () => {
        dispatch({ type: 'PAUSE' });
      });

      audioRef.current.addEventListener('pause', () => {
        dispatch({ type: 'PAUSE' });
      });

      audioRef.current.addEventListener('play', () => {
        dispatch({ type: 'RESUME' });
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  const play = useCallback((episode: DisplayEpisode) => {
    if (audioRef.current) {
      // If switching episodes, load new source
      if (state.currentEpisode?.id !== episode.id) {
        audioRef.current.src = episode.audioUrl;
        audioRef.current.load();
      }
      audioRef.current.play().catch((error) => {
        console.error('Failed to play audio:', error);
      });
      dispatch({ type: 'PLAY', episode });
    }
  }, [state.currentEpisode?.id]);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    dispatch({ type: 'PAUSE' });
  }, []);

  const resume = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Failed to resume audio:', error);
      });
    }
    dispatch({ type: 'RESUME' });
  }, []);

  const seek = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
    dispatch({ type: 'SEEK', time });
  }, []);

  const close = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }
    dispatch({ type: 'CLOSE' });
  }, []);

  return (
    <PlayerContext.Provider value={{ state, play, pause, resume, seek, close }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
}
