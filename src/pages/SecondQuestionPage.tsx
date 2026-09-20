import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { Question } from '../components/Question';
import { birthdayData } from '../data/birthday';

export const SecondQuestionPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAnswered = () => {
    navigate('/love-match');
  };

  return (
    <PageTransition>
      <Question
        promptLead={birthdayData.question2?.promptLead || 'BEFORE WE CONTINUE...'}
        questionText={birthdayData.question2?.questionText || 'Am I special to you?'}
        onAnswered={handleAnswered}
      />
    </PageTransition>
  );
};
