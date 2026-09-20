import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { birthdayData } from '../data/birthday';

interface HeroProps {
  onBegin: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBegin }) => {
  return (
    <section className="relative min-h-[85vh] min-h-[85dvh] flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center z-10 w-full">
        {/* Subtle romantic pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-blush-100/90 border border-rose-200/80 text-wine-800 text-xs sm:text-sm font-medium tracking-wider mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-champagne-600" />
          <span>{birthdayData.hero.dateBadge}</span>
          <Heart className="w-3 h-3 text-rose-500 fill-rose-400" />
        </motion.div>

        {/* Grand Birthday Greeting */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.25rem,6.5vw,4.5rem)] font-serif font-normal text-wine-950 tracking-tight leading-[1.15] mb-4 sm:mb-6"
        >
          Happy Birthday, <br />
          <span className="italic font-serif bg-gradient-to-r from-wine-800 via-rose-600 to-wine-900 bg-clip-text text-transparent font-medium">
            {birthdayData.config.herName}
          </span>
        </motion.h1>

        {/* Supporting Poetry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="space-y-2 mb-8 sm:mb-10 max-w-lg px-2"
        >
          <p className="font-serif text-[clamp(1.1rem,3.5vw,1.5rem)] text-stone-700 italic leading-snug">
            "{birthdayData.hero.subtitle}"
          </p>
          <p className="text-stone-600 text-xs sm:text-base font-light leading-relaxed">
            {birthdayData.hero.description}
          </p>
        </motion.div>

        {/* Magnetic CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBegin}
            className="group relative inline-flex items-center justify-center gap-3 min-h-[48px] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-wine-800 to-rose-700 text-ivory-50 text-sm sm:text-base font-medium tracking-wide shadow-lg shadow-wine-900/15 hover:shadow-wine-900/25 transition-all duration-300 touch-manipulation cursor-pointer"
          >
            <span>{birthdayData.hero.ctaButton}</span>
            <span className="group-hover:translate-x-1.5 transition-transform duration-300">
              &rarr;
            </span>
            {/* Shimmer highlight */}
            <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.button>
        </motion.div>
      </div>

    </section>
  );
};
