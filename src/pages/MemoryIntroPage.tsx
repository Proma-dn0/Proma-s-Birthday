import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { MemoryIntro } from '../components/MemoryIntro';
import { ContinueButton } from '../components/ContinueButton';

export const MemoryIntroPage: React.FC = () => {
  return (
    <PageTransition className="text-center">
      <MemoryIntro />
      <div className="mt-8 mb-6 flex justify-center z-10">
        <ContinueButton
          to="/photos/polaroid"
          label="Show me the memories"
        />
      </div>
    </PageTransition>
  );
};
