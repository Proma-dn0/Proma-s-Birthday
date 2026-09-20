import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, MailOpen } from 'lucide-react';
import { birthdayData } from '../data/birthday';
import { fireHeartBurst } from '../utils/confetti';

export const Letter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    fireHeartBurst(0.5, 0.4);
  };

  return (
    <section id="letter" className="relative py-12 sm:py-20 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/70 border border-rose-200 text-wine-800 text-xs font-sans tracking-widest uppercase mb-3">
          <MailOpen className="w-3 h-3 text-wine-700" />
          <span>A Letter From the Heart</span>
        </div>
        <h3 className="font-serif text-[clamp(1.5rem,5vw,2.25rem)] text-wine-950 font-normal">
          For Your Eyes Only
        </h3>
        <p className="text-stone-500 font-light text-xs sm:text-sm mt-2">
          A physical note to hold close, written just for you
        </p>
      </div>

      {/* Envelope / Letter Interactive Experience */}
      <div className="flex flex-col items-center w-full">
        {!isOpen ? (
          /* CLOSED ENVELOPE WITH WAX SEAL */
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-lg bg-[#FAF0E6] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-rose-200/80 text-center relative overflow-hidden group cursor-pointer"
            onClick={handleOpen}
          >
            {/* Envelope Flap Illusion */}
            <div className="absolute top-0 inset-x-0 h-24 sm:h-28 bg-gradient-to-b from-[#F2E3D5] to-transparent border-b border-rose-200/50 pointer-events-none" />

            {/* Label stamp */}
            <div className="mb-6 pt-2 sm:pt-4">
              <span className="text-[11px] sm:text-xs uppercase font-mono tracking-[0.25em] text-wine-700/80 border-b border-rose-300 pb-1">
                {birthdayData.letter.envelopeLabel}
              </span>
            </div>

            {/* Wax Seal Button */}
            <div className="my-6 sm:my-8 flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-wine-950 via-wine-800 to-rose-700 shadow-xl border-2 border-champagne-300 flex items-center justify-center relative cursor-pointer"
              >
                {/* Wax seal ring */}
                <div className="absolute inset-1 rounded-full border border-rose-400/40" />
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-champagne-200 fill-champagne-200" />
              </motion.div>
              <span className="font-handwriting text-lg sm:text-xl text-wine-800 mt-4">
                Tap wax seal to break & open
              </span>
            </div>

            <p className="text-xs text-stone-500 font-light max-w-xs mx-auto">
              Sealed with gratitude, quiet admiration, and heartfelt friendship.
            </p>
          </motion.div>
        ) : (
          /* OPENED LETTER STATIONERY */
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl bg-[#FCFAF7] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl border border-rose-200/90 relative"
          >
            {/* Fine stationery watermark border */}
            <div className="absolute inset-2 sm:inset-4 rounded-xl sm:rounded-2xl border border-rose-200/40 pointer-events-none" />

            {/* Header: Date & Postmark */}
            <div className="flex justify-between items-center pb-4 sm:pb-6 border-b border-rose-100 text-[11px] sm:text-xs text-stone-400 font-sans tracking-widest uppercase">
              <span>{birthdayData.letter.date}</span>
              <div className="flex items-center gap-1 text-rose-500">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Special Keepsake</span>
              </div>
            </div>

            {/* Letter Content Body */}
            <div className="pt-8 space-y-6 text-stone-800 leading-relaxed font-serif">
              <h4 className="text-2xl sm:text-3xl text-wine-950 font-normal">
                {birthdayData.letter.salutation}
              </h4>

              {birthdayData.letter.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-base sm:text-lg leading-relaxed ${
                    index === 2 || paragraph.includes('[PERSONAL_LETTER]')
                      ? 'p-4 rounded-xl bg-blush-50/80 border border-rose-200/70 text-wine-900 font-sans text-sm sm:text-base italic'
                      : 'text-stone-700 font-light'
                  }`}
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-6">
                <p className="text-sm font-light text-stone-500 mb-2">
                  {birthdayData.letter.closing}
                </p>
                {birthdayData.letter.signature ? (
                  <p className="font-handwriting text-3xl sm:text-4xl text-wine-800 font-bold">
                    {birthdayData.letter.signature}
                  </p>
                ) : null}
              </div>

              {birthdayData.letter.postscript && (
                <div className="pt-6 border-t border-rose-100 text-xs sm:text-sm font-handwriting text-stone-500">
                  {birthdayData.letter.postscript}
                </div>
              )}
            </div>

            {/* Fold Letter Back CTA */}
            <div className="mt-10 pt-6 border-t border-stone-100 flex justify-center">
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs text-stone-400 hover:text-wine-800 underline underline-offset-4 tracking-wider transition-colors cursor-pointer"
              >
                Fold and seal the letter again
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
