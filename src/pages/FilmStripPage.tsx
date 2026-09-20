import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { FilmStrip } from '../components/FilmStrip';
import { ContinueButton } from '../components/ContinueButton';
import { birthdayData, type PhotoMemory } from '../data/birthday';

interface PhotoPageProps {
  onPhotoClick: (photo: PhotoMemory) => void;
}

export const FilmStripPage: React.FC<PhotoPageProps> = ({ onPhotoClick }) => {
  const filmPhotos = birthdayData.photos.filter((p) => p.style === 'filmstrip');

  return (
    <PageTransition>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <FilmStrip photos={filmPhotos} onPhotoClick={onPhotoClick} />
        <div className="mt-8 mb-12 flex justify-center z-10">
          <ContinueButton
            to="/photos/scrapbook"
            label="Next Chapter: Scrapbook Journal"
          />
        </div>
      </div>
    </PageTransition>
  );
};
