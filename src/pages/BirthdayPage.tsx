import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { BirthdayReveal } from '../components/BirthdayReveal';
import { ContinueButton } from '../components/ContinueButton';

export const BirthdayPage: React.FC = () => {
  return (
    <PageTransition className="text-center">
      <BirthdayReveal />
      <div className="mt-6 mb-8 flex justify-center z-10">
        <ContinueButton
          to="/memories"
          label="See what I made for you"
        />
      </div>
    </PageTransition>
  );
};
