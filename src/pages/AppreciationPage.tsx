import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Appreciation } from '../components/Appreciation';

export const AppreciationPage: React.FC = () => {
  return (
    <PageTransition className="text-center">
      <Appreciation />
    </PageTransition>
  );
};
