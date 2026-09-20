import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { MasonryGallery } from '../components/MasonryGallery';
import { ContinueButton } from '../components/ContinueButton';
import { birthdayData, type PhotoMemory } from '../data/birthday';

interface PhotoPageProps {
  onPhotoClick: (photo: PhotoMemory) => void;
}

export const MasonryPage: React.FC<PhotoPageProps> = ({ onPhotoClick }) => {
  const masonryPhotos = birthdayData.photos.filter((p) => p.style === 'masonry');

  return (
    <PageTransition>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <MasonryGallery photos={masonryPhotos} onPhotoClick={onPhotoClick} />
        <div className="mt-8 mb-12 flex justify-center z-10">
          <ContinueButton
            to="/photos/filmstrip"
            label="Next Chapter: 35mm Film Roll"
          />
        </div>
      </div>
    </PageTransition>
  );
};
