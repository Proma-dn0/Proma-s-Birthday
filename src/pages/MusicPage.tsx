import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { MusicPlayer } from '../components/MusicPlayer';
import { ContinueButton } from '../components/ContinueButton';

export const MusicPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <MusicPlayer />
        <div className="mt-8 mb-12 flex justify-center z-10">
          <ContinueButton
            to="/gifts"
            label="Open Your Gifts"
          />
        </div>
      </div>
    </PageTransition>
  );
};
