import { createContext } from 'react';

export interface AudioContextType {
  isPlaying: boolean;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  togglePlay: () => void;
  play: () => Promise<void>;
  pause: () => void;
  toggleMute: () => void;
  seek: (time: number) => void;
  audioError: boolean;
  isSynthesized: boolean;
}

export const AudioContext = createContext<AudioContextType | null>(null);
