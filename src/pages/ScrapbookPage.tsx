import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Scrapbook } from '../components/Scrapbook';
import { ContinueButton } from '../components/ContinueButton';
import { birthdayData, type PhotoMemory } from '../data/birthday';

interface PhotoPageProps {
  onPhotoClick: (photo: PhotoMemory) => void;
}

export const ScrapbookPage: React.FC<PhotoPageProps> = ({ onPhotoClick }) => {
  const scrapbookPhotos = birthdayData.photos.filter((p) => p.style === 'scrapbook');

  return (
    <PageTransition>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <Scrapbook photos={scrapbookPhotos} onPhotoClick={onPhotoClick} />
        <div className="mt-8 mb-12 flex justify-center z-10">
          <ContinueButton
            to="/photos/carousel"
            label="Next Chapter: Spotlight Carousel"
          />
        </div>
      </div>
    </PageTransition>
  );
};
