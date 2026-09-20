import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Hero } from '../components/Hero';
import { Intro } from '../components/Intro';
import { useAudioContext } from '../hooks/useAudioContext';

interface HomePageProps {
  introShown: boolean;
  setIntroShown: (shown: boolean) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ introShown, setIntroShown }) => {
  const navigate = useNavigate();
  const { isPlaying, play } = useAudioContext();
  const [showIntro, setShowIntro] = useState(!introShown);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIntroShown(true);
  };

  const handleBegin = () => {
    if (!isPlaying) {
      play().catch(() => {});
    }
    navigate('/question');
  };

  return (
    <>
      <AnimatePresence>
        {showIntro && <Intro onComplete={handleIntroComplete} />}
      </AnimatePresence>

      <PageTransition className="text-center">
        <Hero onBegin={handleBegin} />
      </PageTransition>
    </>
  );
};
