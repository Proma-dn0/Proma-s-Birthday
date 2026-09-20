import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, PartyPopper } from 'lucide-react';
import { birthdayData } from '../data/birthday';
import { fireBirthdayConfetti } from '../utils/confetti';

export const BirthdayReveal: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (isInView) {
      fireBirthdayConfetti();
    }
  }, [isInView]);

  return (
    <section
      id="reveal"
      ref={ref}
      className="relative py-12 sm:py-20 md:py-28 px-4 sm:px-6 text-center overflow-hidden flex flex-col items-center justify-center min-h-[70vh] min-h-[70dvh] w-full"
    >
      {/* Light Burst Glow behind title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[550px] h-[70vw] max-h-[550px] bg-gradient-to-tr from-rose-200/40 via-champagne-200/30 to-blush-200/40 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center w-full">
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-wine-800 text-xs sm:text-sm font-medium tracking-widest uppercase mb-4 sm:mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-champagne-600" />
          <span>{birthdayData.birthdayReveal.preTitle}</span>
        </motion.div>

        {/* Grand Typography Reveal */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,7.5vw,5.5rem)] font-serif font-medium text-wine-950 tracking-tight leading-[1.1] mb-4 sm:mb-6"
        >
          {birthdayData.birthdayReveal.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif italic text-[clamp(1.1rem,3.5vw,1.5rem)] text-rose-700 max-w-xl mb-3 sm:mb-4 px-2"
        >
          "{birthdayData.birthdayReveal.sparkleText}"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-stone-600 font-light text-xs sm:text-base md:text-lg max-w-xl leading-relaxed mb-8 sm:mb-10 px-2"
        >
          {birthdayData.birthdayReveal.message}
        </motion.p>

        {/* Wishes Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10 px-2"
        >
          {birthdayData.birthdayReveal.wishes.map((wish, index) => (
            <span
              key={index}
              className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/70 backdrop-blur-sm border border-rose-200/70 text-wine-900 text-xs sm:text-sm font-medium shadow-sm hover:border-rose-300 transition-colors"
            >
              🌸 {wish}
            </span>
          ))}
        </motion.div>

        {/* Interactive Confetti Popping Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => fireBirthdayConfetti()}
          className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full bg-white text-wine-800 text-xs sm:text-sm font-medium border border-rose-200 shadow-sm hover:shadow-md transition-all group touch-manipulation cursor-pointer"
        >
          <PartyPopper className="w-4 h-4 text-rose-500 group-hover:rotate-12 transition-transform" />
          <span>Pop more confetti ✨</span>
        </motion.button>
      </div>
    </section>
  );
};
