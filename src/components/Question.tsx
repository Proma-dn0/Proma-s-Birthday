import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { birthdayData } from '../data/birthday';

interface QuestionProps {
  promptLead?: string;
  questionText?: string;
  onAnswered: () => void;
}

export const Question: React.FC<QuestionProps> = ({
  promptLead = birthdayData.question.promptLead,
  questionText = birthdayData.question.questionText,
  onAnswered,
}) => {
  const responses = birthdayData.question.noButtonStages;
  const [noText, setNoText] = useState(responses[0] || 'NO 🙈');
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNoClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Select a different random response from the playful list
    const otherResponses = responses.filter((r) => r !== noText);
    const randomResponse = otherResponses[Math.floor(Math.random() * otherResponses.length)] || responses[0];
    setNoText(randomResponse);
    setNoAttempts((prev) => prev + 1);

    // Responsive movement boundaries
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const minDistance = isMobile ? 16 : 32;
    const maxDistance = isMobile ? 38 : 85;

    const minX = isMobile ? -20 : -50;
    const maxX = isMobile ? 25 : 75;
    const minY = isMobile ? -16 : -32;
    const maxY = isMobile ? 18 : 35;

    // Generate nearby randomized position with minimum movement distance
    setNoPosition((prev) => {
      let nextX = prev.x;
      let nextY = prev.y;

      for (let i = 0; i < 20; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = minDistance + Math.random() * (maxDistance - minDistance);

        const candX = Math.max(minX, Math.min(maxX, prev.x + Math.cos(angle) * distance));
        const candY = Math.max(minY, Math.min(maxY, prev.y + Math.sin(angle) * distance));

        const movement = Math.hypot(candX - prev.x, candY - prev.y);
        if (movement >= minDistance * 0.75) {
          nextX = candX;
          nextY = candY;
          break;
        }
      }

      return { x: Math.round(nextX), y: Math.round(nextY) };
    });
  };

  const handleYesClick = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (isTransitioning) return;
    setIsTransitioning(true);
    onAnswered();
  };

  return (
    <section id="question" className="relative py-10 sm:py-20 px-3 sm:px-6 flex justify-center items-center w-full">
        <div className="w-full max-w-[calc(100vw-2rem)] sm:max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl shadow-rose-900/5 border border-rose-100 text-center overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-blush-200/50 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-champagne-200/50 rounded-full blur-2xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key="question-box"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-blush-100/90 text-rose-600 flex items-center justify-center mb-5 shadow-sm">
                  <HelpCircle className="w-6 h-6" />
                </div>

                <span className="text-xs sm:text-sm uppercase tracking-widest text-stone-500 font-medium mb-2">
                  {promptLead}
                </span>

                <h3 className="font-serif text-[clamp(1.35rem,4.5vw,2.25rem)] text-wine-950 font-normal leading-snug mb-6 sm:mb-8">
                  {questionText}
                </h3>

                {/* Answer Buttons Container */}
                <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 relative min-h-[85px] w-full">
                  {/* STABLE YES BUTTON */}
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={handleYesClick}
                    className="question-button touch-manipulation min-h-[48px] px-7 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-wine-800 to-rose-600 text-white font-medium text-sm sm:text-base shadow-md shadow-rose-900/20 hover:shadow-lg transition-shadow flex items-center justify-center gap-2 cursor-pointer select-none w-full xs:w-auto"
                  >
                    <span>{birthdayData.question.yesButtonText}</span>
                  </motion.button>

                  {/* PLAYFUL INFINITE NO BUTTON */}
                  <motion.button
                    animate={{
                      x: noPosition.x,
                      y: noPosition.y,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    }}
                    whileTap={{ scale: 0.96 }}
                    onClick={handleNoClick}
                    className="question-button touch-manipulation min-h-[48px] px-5 sm:px-6 py-3.5 rounded-full bg-stone-100 hover:bg-rose-50 text-stone-700 hover:text-wine-800 font-medium text-xs sm:text-sm border border-stone-200/80 shadow-sm transition-colors cursor-pointer select-none w-full xs:w-auto text-center"
                  >
                    <span>{noText}</span>
                  </motion.button>
                </div>

                {/* Playful hint that appears after attempting NO */}
                {noAttempts > 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-rose-500/80 font-handwriting text-base mt-4"
                  >
                    (Hint: There is really only one right answer here 😉)
                  </motion.p>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
  );
};
