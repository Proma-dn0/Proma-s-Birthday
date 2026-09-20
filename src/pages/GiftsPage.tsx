import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { GiftSection } from '../components/GiftSection';
import { ContinueButton } from '../components/ContinueButton';

export const GiftsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <GiftSection onOpenLetter={() => navigate('/letter')} />
        <div className="mt-8 mb-12 flex justify-center z-10">
          <ContinueButton
            to="/letter"
            label="Open the Letter"
          />
        </div>
      </div>
    </PageTransition>
  );
};
