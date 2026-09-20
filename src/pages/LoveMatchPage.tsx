import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { LoveMatch } from '../components/LoveMatch';

export const LoveMatchPage: React.FC = () => {
  return (
    <PageTransition>
      <LoveMatch />
    </PageTransition>
  );
};
