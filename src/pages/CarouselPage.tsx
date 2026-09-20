import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { MemoryCarousel } from '../components/MemoryCarousel';
import { ContinueButton } from '../components/ContinueButton';
import { birthdayData, type PhotoMemory } from '../data/birthday';

interface PhotoPageProps {
  onPhotoClick: (photo: PhotoMemory) => void;
}

export const CarouselPage: React.FC<PhotoPageProps> = ({ onPhotoClick }) => {
  const carouselPhotos = birthdayData.photos.filter((p) => p.style === 'carousel');

  return (
    <PageTransition>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <MemoryCarousel photos={carouselPhotos} onPhotoClick={onPhotoClick} />
        <div className="mt-8 mb-12 flex justify-center z-10">
          <ContinueButton
            to="/music"
            label="Listen to Our Song"
          />
        </div>
      </div>
    </PageTransition>
  );
};
