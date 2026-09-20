import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { CinematicGallery } from '../components/CinematicGallery';
import { ContinueButton } from '../components/ContinueButton';
import { birthdayData, type PhotoMemory } from '../data/birthday';

interface PhotoPageProps {
  onPhotoClick: (photo: PhotoMemory) => void;
}

export const CinematicPage: React.FC<PhotoPageProps> = ({ onPhotoClick }) => {
  const cinematicPhotos = birthdayData.photos.filter((p) => p.style === 'cinematic');

  return (
    <PageTransition>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <CinematicGallery photos={cinematicPhotos} onPhotoClick={onPhotoClick} />
        <div className="mt-8 mb-12 flex justify-center z-10">
          <ContinueButton
            to="/photos/masonry"
            label="Next Chapter: Mosaic Wall"
          />
        </div>
      </div>
    </PageTransition>
  );
};
