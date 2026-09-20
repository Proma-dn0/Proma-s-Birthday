import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { Question } from '../components/Question';

export const QuestionPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAnswered = () => {
    navigate('/question-2');
  };

  return (
    <PageTransition>
      <Question onAnswered={handleAnswered} />
    </PageTransition>
  );
};
