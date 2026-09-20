import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { birthdayData } from '../data/birthday';
import { HeartOutlineSvg } from './HeartOutlineSvg';

export const Appreciation: React.FC = () => {
  const navigate = useNavigate();

  // 10-second automatic timer starting strictly on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/birthday');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="relative min-h-[80vh] min-h-[80dvh] w-full flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 text-center select-none">
      {/* Subtle Warm Pink/Cream Glow in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[28rem] h-72 sm:h-[28rem] bg-blush-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-champagne-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center justify-center w-full px-2">
        {/* Phase 1: Small heart/icon fades in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-12 h-12 rounded-2xl bg-blush-100/90 text-rose-600 flex items-center justify-center mb-6 sm:mb-8 shadow-sm"
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HeartOutlineSvg size={24} strokeWidth={2.2} className="text-rose-600" />
          </motion.div>
        </motion.div>

        {/* Phase 2: "Oh, really?" */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(1.75rem,6.5vw,3.75rem)] text-wine-950 font-normal tracking-tight leading-tight mb-3 sm:mb-6"
        >
          {birthdayData.appreciation.line1}
        </motion.h2>

        {/* Phase 3: "I knew it. ♡" */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(1.35rem,5vw,3rem)] text-rose-600 italic font-medium leading-tight mb-6 sm:mb-10"
        >
          {birthdayData.appreciation.line2}
        </motion.p>

        {/* Phase 4: "Thank you, truly." */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-stone-600 font-sans text-[clamp(0.95rem,3.5vw,1.25rem)] font-light tracking-wide"
        >
          {birthdayData.appreciation.line3}
        </motion.p>
      </div>
    </section>
  );
};
