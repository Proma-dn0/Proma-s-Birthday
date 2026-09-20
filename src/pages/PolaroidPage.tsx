import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { PolaroidGallery } from '../components/PolaroidGallery';
import { ContinueButton } from '../components/ContinueButton';
import { birthdayData, type PhotoMemory } from '../data/birthday';

interface PhotoPageProps {
  onPhotoClick: (photo: PhotoMemory) => void;
}

export const PolaroidPage: React.FC<PhotoPageProps> = ({ onPhotoClick }) => {
  const polaroidPhotos = birthdayData.photos.filter((p) => p.style === 'polaroid');

  return (
    <PageTransition>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <PolaroidGallery photos={polaroidPhotos} onPhotoClick={onPhotoClick} />
        <div className="mt-8 mb-12 flex justify-center z-10">
          <ContinueButton
            to="/photos/cinematic"
            label="Next Chapter: Cinema Frames"
          />
        </div>
      </div>
    </PageTransition>
  );
};
