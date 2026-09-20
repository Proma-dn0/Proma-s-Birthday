import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { FinalSurprise } from '../components/FinalSurprise';

export const FinalPage: React.FC = () => {
  const navigate = useNavigate();

  const handleReplay = () => {
    navigate('/');
  };

  return (
    <PageTransition className="p-0">
      <FinalSurprise onReplay={handleReplay} />
    </PageTransition>
  );
};
