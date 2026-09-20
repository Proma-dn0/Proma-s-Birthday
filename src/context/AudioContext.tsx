import React from 'react';
import { useAudio } from '../hooks/useAudio';
import { birthdayData } from '../data/birthday';
import { AudioContext } from './audioContextDef';

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audio = useAudio(birthdayData.music.audioSrc);

  return (
    <AudioContext.Provider value={audio}>
      {children}
    </AudioContext.Provider>
  );
};
