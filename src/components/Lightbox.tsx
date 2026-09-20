import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import type { PhotoMemory } from '../data/birthday';
import { ImageWithFallback } from './ImageWithFallback';

interface LightboxProps {
  photos: PhotoMemory[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < photos.length;
  const currentPhoto = isOpen ? photos[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(nextIdx);
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex + 1) % photos.length;
    onNavigate(nextIdx);
  }, [currentIndex, photos.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Touch swipe support for mobile
  const touchStartX = React.useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext(); // swipe left -> next
    } else if (diff < -50) {
      handlePrev(); // swipe right -> prev
    }
    touchStartX.current = null;
  };

  return (
    <AnimatePresence>
      {isOpen && currentPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/90 backdrop-blur-xl p-2 sm:p-4 md:p-8"
          onClick={onClose}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Top Controls Bar */}
          <div className="absolute top-3 sm:top-4 left-0 right-0 px-4 sm:px-6 flex items-center justify-between z-20 pointer-events-none">
            {/* Memory Counter Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-ivory-100 text-[11px] sm:text-xs font-sans tracking-widest uppercase pointer-events-auto">
              <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
              <span>
                Memory {currentIndex + 1} of {photos.length}
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Lightbox"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-ivory-50 border border-white/15 flex items-center justify-center transition-colors pointer-events-auto cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Photo"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/25 text-ivory-50 border border-white/15 flex items-center justify-center transition-all cursor-pointer group"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Photo"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/25 text-ivory-50 border border-white/15 flex items-center justify-center transition-all cursor-pointer group"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Center Card with Image and Story */}
          <motion.div
            key={currentPhoto.id}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-4xl max-h-[90vh] max-h-[90dvh] w-full bg-stone-900/95 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Frame */}
            <div className="md:w-3/5 w-full bg-black/60 flex items-center justify-center relative overflow-hidden min-h-[200px] sm:min-h-[300px] max-h-[45vh] md:max-h-[80vh]">
              <ImageWithFallback
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                title={currentPhoto.title}
                memoryNumber={currentPhoto.id}
                aspectRatio="auto"
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>

            {/* Content Details Panel */}
            <div className="md:w-2/5 w-full p-4 sm:p-6 md:p-8 flex flex-col justify-start bg-stone-900 text-ivory-100 overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-[11px] font-sans tracking-widest uppercase px-2.5 py-1 rounded-md bg-rose-900/40 text-rose-300 border border-rose-800/40">
                    {currentPhoto.tag || `Style: ${currentPhoto.style}`}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-medium mb-2 sm:mb-3">
                  {currentPhoto.title}
                </h3>

                <p className="text-stone-300 font-light text-xs sm:text-base leading-relaxed mb-4 sm:mb-6">
                  {currentPhoto.caption}
                </p>

                {currentPhoto.note && (
                  <div className="p-3.5 rounded-xl bg-wine-950/60 border border-rose-900/30 text-rose-200 font-handwriting text-base sm:text-lg">
                    "{currentPhoto.note}"
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
