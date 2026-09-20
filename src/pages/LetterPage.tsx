import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Letter } from '../components/Letter';
import { ContinueButton } from '../components/ContinueButton';

export const LetterPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <Letter />
        <div className="mt-8 mb-12 flex justify-center z-10">
          <ContinueButton
            to="/final"
            label="One Last Thing"
          />
        </div>
      </div>
    </PageTransition>
  );
};
