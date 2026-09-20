import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Disc, Play, Volume2, VolumeX } from 'lucide-react';
import { useAudioContext } from '../hooks/useAudioContext';

const chapterRoutes: string[] = [
  '/',
  '/question',
  '/question-2',
  '/love-match',
  '/appreciation',
  '/birthday',
  '/memories',
  '/photos/polaroid',
  '/photos/cinematic',
  '/photos/masonry',
  '/photos/filmstrip',
  '/photos/scrapbook',
  '/photos/carousel',
  '/music',
  '/gifts',
  '/letter',
  '/final',
];

export const ProgressIndicator: React.FC = () => {
  const location = useLocation();
  const { isPlaying, isMuted, togglePlay, toggleMute } = useAudioContext();

  const currentIdx = chapterRoutes.indexOf(location.pathname);
  const activeIndex = currentIdx !== -1 ? currentIdx : 0;
  const progressPercent = ((activeIndex + 1) / chapterRoutes.length) * 100;

  return (
    <>
      {/* Top Global Page Progress Bar */}
      <div className="fixed top-0 inset-x-0 h-[3px] bg-rose-200/30 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-rose-400 via-rose-600 to-champagne-400 transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Small Elegant Floating Music Control (Play/Pause + Mute/Unmute) */}
      <div
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] sm:bottom-6 sm:right-6 z-40 flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-full bg-wine-900/90 text-ivory-50 shadow-xl border border-rose-800/40 backdrop-blur-md transition-all"
        role="region"
        aria-label="Birthday Soundtrack Control"
      >
        {/* Play / Pause Toggle Button */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause birthday music' : 'Play birthday music'}
          title={isPlaying ? 'Pause music' : 'Play music'}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-400/50"
        >
          {isPlaying ? (
            <Disc className="w-5 h-5 text-rose-300 animate-spin-slow" />
          ) : (
            <Play className="w-5 h-5 text-rose-200 fill-rose-200/40 ml-0.5" />
          )}
        </motion.button>

        {/* Mute / Unmute Toggle Button */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute birthday music' : 'Mute birthday music'}
          title={isMuted ? 'Unmute music' : 'Mute music'}
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full hover:bg-white/10 text-rose-300 flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-400/50"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-rose-400" />
          ) : (
            <Volume2 className="w-4 h-4 text-rose-200" />
          )}
        </motion.button>
      </div>
    </>
  );
};
