import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { birthdayData } from '../data/birthday';

interface IntroProps {
  onComplete: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState(1);
  const [prefersReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    // Timed cinematic sequence
    const t2 = setTimeout(() => setPhase(2), 750);   // Phase 2: Little surprise
    const t3 = setTimeout(() => setPhase(3), 1650);  // Phase 3: Her name (Proma)
    const t4 = setTimeout(() => setPhase(4), 2550);  // Phase 4: Birthday reveal
    const t5 = setTimeout(() => onComplete(), 3600); // Phase 5: Fade to welcome page

    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  // Letters of her name for soft staggered reveal
  const nameLetters = (birthdayData.config.herName || "Proma").split("");

  // Deterministic tiny background floating elements
  const decorElements = [
    { type: 'petal', top: '22%', left: '18%', size: 14, delay: 0 },
    { type: 'heart', top: '28%', left: '78%', size: 12, delay: 0.4 },
    { type: 'sparkle', top: '65%', left: '24%', size: 10, delay: 0.8 },
    { type: 'petal', top: '72%', left: '72%', size: 16, delay: 0.2 },
    { type: 'heart', top: '15%', left: '60%', size: 10, delay: 0.6 },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory-100 px-4 sm:px-6 text-center select-none overflow-hidden min-h-screen min-h-[100dvh]"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 0.98,
        filter: 'blur(4px)',
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* Paper / fine grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-50 pointer-events-none" />

      {/* Extremely subtle ambient blush glow */}
      <div className="absolute w-[80vw] max-w-[420px] h-[80vw] max-h-[420px] rounded-full bg-rose-200/35 blur-3xl pointer-events-none" />

      {/* Tiny subtle hand-drawn background floating elements */}
      {!prefersReducedMotion &&
        decorElements.map((item, idx) => (
          <motion.div
            key={idx}
            className="absolute pointer-events-none opacity-40"
            style={{ top: item.top, left: item.left }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              y: [0, -8, 0],
              scale: [0.9, 1.05, 0.9],
            }}
            transition={{
              duration: 3.5,
              delay: item.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {item.type === 'petal' && (
              <svg width={item.size} height={item.size} viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C8 6 4 11 6 17C8 23 16 23 18 17C20 11 16 6 12 2Z"
                  fill="#EAA8B4"
                  opacity="0.75"
                />
              </svg>
            )}
            {item.type === 'heart' && (
              <svg width={item.size} height={item.size} viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="#D4A5A5"
                  opacity="0.7"
                />
              </svg>
            )}
            {item.type === 'sparkle' && (
              <svg width={item.size} height={item.size} viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 0 Q12 12 0 12 Q12 12 12 24 Q12 12 24 12 Q12 12 12 0 Z"
                  fill="#C7A765"
                  opacity="0.8"
                />
              </svg>
            )}
          </motion.div>
        ))}

      {/* Main Content Area */}
      <div className="relative z-10 max-w-sm sm:max-w-md flex flex-col items-center justify-center">
        {/* CENTERPIECE: Cute hand-drawn heart with orbiting sparkles */}
        <div className="relative mb-6 flex items-center justify-center w-24 h-24">
          {/* Orbiting Sparkle Top Left: ✦ */}
          <motion.div
            className="absolute -top-1 -left-1 text-champagne-500"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: phase >= 1 ? [0.4, 0.9, 0.4] : 0,
              scale: phase >= 1 ? [0.8, 1.15, 0.8] : 0,
              rotate: [0, 45, 90],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0 Q12 12 0 12 Q12 12 12 24 Q12 12 24 12 Q12 12 12 0 Z" />
            </svg>
          </motion.div>

          {/* Tiny Outline Heart: ♡ */}
          <motion.div
            className="absolute top-1 -right-3 text-rose-400/80 font-serif text-sm"
            initial={{ opacity: 0 }}
            animate={{
              opacity: phase >= 2 ? 0.85 : 0,
              y: phase >= 2 ? [0, -3, 0] : 0,
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            ♡
          </motion.div>

          {/* Center Sweet Hand-Drawn Heart ♥ */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{
              scale: phase >= 2 ? (prefersReducedMotion ? 1 : [1, 1.08, 1]) : 0.85,
              opacity: 1,
              rotate: prefersReducedMotion ? 0 : [0, -3, 3, 0],
            }}
            transition={{
              scale: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 0.5 },
            }}
            className="w-16 h-16 rounded-full bg-white/80 border border-rose-200/80 shadow-sm flex items-center justify-center backdrop-blur-sm"
          >
            {/* Custom SVG Heart with gentle blush/wine fill */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="drop-shadow-sm transition-transform duration-500"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="#DC8B9A"
              />
            </svg>
          </motion.div>

          {/* Orbiting Sparkle Bottom Right: ✦ */}
          <motion.div
            className="absolute -bottom-1 -right-1 text-champagne-500"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: phase >= 2 ? [0.4, 1, 0.4] : 0,
              scale: phase >= 2 ? [0.8, 1.2, 0.8] : 0,
              rotate: [0, -45, -90],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0 Q12 12 0 12 Q12 12 12 24 Q12 12 24 12 Q12 12 12 0 Z" />
            </svg>
          </motion.div>

          {/* Outward drifting tiny petal burst on Phase 4 */}
          {phase >= 4 && !prefersReducedMotion && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0.7, 0], scale: [0.8, 1.8], x: [0, 25], y: [0, -18] }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="absolute pointer-events-none"
            >
              🌸
            </motion.div>
          )}
        </div>

        {/* PHASE 1: "psst..." (0.0s → 0.7s) */}
        <AnimatePresence mode="wait">
          {phase === 1 && (
            <motion.span
              key="psst"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 0.75, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.45 }}
              className="text-stone-400 font-handwriting text-xl sm:text-2xl tracking-wider block"
            >
              psst...
            </motion.span>
          )}
        </AnimatePresence>

        {/* PHASE 2: "Something special is waiting for you..." (0.7s → 1.6s) */}
        <AnimatePresence>
          {phase >= 2 && (
            <motion.p
              key="special"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="text-stone-500 font-sans text-xs sm:text-sm tracking-wide font-light mb-2"
            >
              Something special is waiting for you…
            </motion.p>
          )}
        </AnimatePresence>

        {/* PHASE 3: "Proma ♡" with soft letter-by-letter reveal (1.6s → 2.5s) */}
        <AnimatePresence>
          {phase >= 3 && (
            <motion.div
              key="name-container"
              className="flex items-center justify-center my-1"
            >
              <h1 className="text-[clamp(2.25rem,7vw,3.75rem)] font-serif text-wine-900 tracking-tight font-medium flex items-center justify-center">
                {nameLetters.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
              {/* Sweet little heart beside her name */}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: nameLetters.length * 0.07 + 0.1,
                  duration: 0.35,
                  type: 'spring',
                  stiffness: 300,
                }}
                className="text-rose-500 font-serif text-2xl sm:text-3xl ml-2 inline-block select-none"
              >
                ♡
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PHASE 4: "your little birthday surprise ♡" (2.5s → 3.2s) */}
        <AnimatePresence>
          {phase >= 4 && (
            <motion.div
              key="reveal-note"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mt-2 flex items-center gap-1.5 text-rose-700/85 text-xs sm:text-sm font-handwriting text-base sm:text-lg tracking-wide"
            >
              <span>your little birthday surprise ♡</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
