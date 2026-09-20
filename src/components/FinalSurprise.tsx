import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';
import { birthdayData } from '../data/birthday';
import { fireBirthdayConfetti } from '../utils/confetti';

interface FinalSurpriseProps {
  onReplay: () => void;
}

export const FinalSurprise: React.FC<FinalSurpriseProps> = ({ onReplay }) => {
  return (
    <section
      id="final-surprise"
      className="relative min-h-screen min-h-[100dvh] py-16 sm:py-24 md:py-32 px-4 sm:px-6 flex flex-col items-center justify-center text-center bg-night-950 text-ivory-100 overflow-hidden w-full"
    >
      {/* Ambient Starlight & Cosmic Rose Glow */}
      <div className="absolute inset-0 bg-dark-grain opacity-80 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[600px] h-[80vw] max-h-[600px] bg-wine-900/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-rose-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Tiny Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${(i * 17) % 95}%`,
              left: `${(i * 23) % 95}%`,
              width: `${(i % 3) + 1.5}px`,
              height: `${(i % 3) + 1.5}px`,
            }}
            animate={{
              opacity: [0.2, 0.9, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: (i * 0.3) % 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center w-full">
        {/* Suspense Lead */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-stone-400 font-sans tracking-[0.3em] uppercase text-xs sm:text-sm font-light mb-6 sm:mb-8"
        >
          {birthdayData.finalSurprise.suspenseText}
        </motion.p>

        {/* Pulsing Glowing Heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6 sm:mb-8 relative cursor-pointer"
          onClick={() => fireBirthdayConfetti()}
        >
          <motion.div
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rose-950/80 border border-rose-600/40 flex items-center justify-center shadow-lg shadow-rose-900/40"
          >
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-rose-400 fill-rose-500" />
          </motion.div>
          <div className="absolute -top-1 -right-1 text-champagne-400">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
        </motion.div>

        {/* Main Emotional Climax */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-[clamp(2rem,7vw,4.5rem)] font-serif font-normal text-white tracking-tight mb-6 sm:mb-8 leading-tight"
        >
          {birthdayData.finalSurprise.mainTitle}
        </motion.h2>

        {/* Heartfelt Message Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="space-y-2.5 sm:space-y-3 mb-8 sm:mb-12 px-2"
        >
          {birthdayData.finalSurprise.heartfeltMessage.map((line, idx) => (
            <p
              key={idx}
              className="text-[clamp(1rem,3.5vw,1.25rem)] text-stone-300 font-serif italic font-light leading-relaxed"
            >
              "{line}"
            </p>
          ))}
        </motion.div>

        {/* Closing Promise */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 1.6 }}
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/5 border border-white/10 text-rose-200 text-[11px] sm:text-xs font-sans tracking-widest uppercase mb-10 sm:mb-16"
        >
          <Sparkles className="w-4 h-4 text-champagne-400" />
          <span>{birthdayData.finalSurprise.closingPromise}</span>
        </motion.div>

        {/* Relive / Replay Button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 2 }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onReplay}
          className="inline-flex items-center gap-2 min-h-[44px] px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-ivory-100 text-xs tracking-wider transition-all touch-manipulation cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
          <span>{birthdayData.finalSurprise.replayCta}</span>
        </motion.button>
      </div>
    </section>
  );
};
