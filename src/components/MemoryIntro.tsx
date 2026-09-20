import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { birthdayData } from '../data/birthday';

export const MemoryIntro: React.FC = () => {
  return (
    <section id="memories-intro" className="relative py-12 sm:py-20 md:py-28 px-4 sm:px-6 text-center w-full">
      <div className="max-w-2xl mx-auto flex flex-col items-center w-full">
        {/* Subtle icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center text-rose-500 mb-6 border border-rose-200 shadow-sm"
        >
          <Heart className="w-5 h-5 fill-rose-300" />
        </motion.div>

        {/* Chapter marker */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.25em] text-wine-600/80 font-medium mb-3"
        >
          {birthdayData.memoryIntro.title}
        </motion.span>

        {/* Poetic Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="space-y-3 mb-6 px-2"
        >
          <h3 className="font-serif text-[clamp(1.4rem,4.5vw,2.25rem)] text-wine-950 font-normal leading-snug">
            "{birthdayData.memoryIntro.quoteLine1}
          </h3>
          <h3 className="font-serif text-[clamp(1.4rem,4.5vw,2.25rem)] text-rose-700 italic font-medium leading-snug">
            {birthdayData.memoryIntro.quoteLine2}"
          </h3>
        </motion.div>

        {/* Subtext description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-stone-600 font-light text-sm sm:text-base leading-relaxed max-w-lg mb-8"
        >
          {birthdayData.memoryIntro.subtext}
        </motion.p>

        {/* Visual divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-rose-300 to-transparent mb-4"
        />

        <div className="flex items-center gap-1.5 text-xs text-stone-400">
          <Sparkles className="w-3 h-3 text-champagne-500" />
          <span className="tracking-widest uppercase text-[10px]">Explore 6 visual styles ahead</span>
        </div>
      </div>
    </section>
  );
};
