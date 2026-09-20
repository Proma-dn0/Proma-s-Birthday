import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PhotoMemory } from '../data/birthday';
import { ImageWithFallback } from './ImageWithFallback';
import { Maximize2, ChevronLeft, ChevronRight, Film } from 'lucide-react';

interface CinematicGalleryProps {
  photos: PhotoMemory[];
  onPhotoClick: (photo: PhotoMemory) => void;
}

export const CinematicGallery: React.FC<CinematicGalleryProps> = ({ photos, onPhotoClick }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentPhoto = photos[activeIdx] || photos[0];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="relative py-12 sm:py-20 px-3 sm:px-6 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/70 border border-rose-200 text-wine-800 text-xs font-sans tracking-widest uppercase mb-3">
          <Film className="w-3 h-3 text-wine-700" />
          <span>Style 02 • Fullscreen Cinematic</span>
        </div>
        <h3 className="font-serif text-[clamp(1.5rem,5vw,2.25rem)] text-wine-950 font-normal">
          Like a Scene From a Movie
        </h3>
        <p className="text-stone-500 font-light text-xs sm:text-sm mt-2">
          Every memory with you feels like cinematic magic
        </p>
      </div>

      {/* Main Viewport Theater Display */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-night-900 border border-stone-800 shadow-2xl">
        <div className="relative h-[340px] xs:h-[420px] sm:h-[520px] md:h-[600px] w-full flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhoto.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 cursor-pointer group"
              onClick={() => onPhotoClick(currentPhoto)}
            >
              {/* Background Photo */}
              <ImageWithFallback
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                title={currentPhoto.title}
                memoryNumber={currentPhoto.id}
                aspectRatio="wide"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 pointer-events-none" />

              {/* Expand Hint */}
              <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-ivory-100 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Fullscreen</span>
              </div>

              {/* Frame Info Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-8 md:p-10 z-20 text-left">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="px-2.5 py-1 rounded bg-rose-900/60 border border-rose-700/50 text-rose-200 text-[10px] sm:text-xs font-sans tracking-widest uppercase">
                    Cinema Frame #{currentPhoto.id < 10 ? `0${currentPhoto.id}` : currentPhoto.id}
                  </span>
                </div>

                <h4 className="font-serif text-xl sm:text-3xl md:text-4xl text-white font-medium mb-1.5 sm:mb-2 leading-tight">
                  {currentPhoto.title}
                </h4>

                <p className="text-stone-300 font-light text-xs sm:text-base max-w-xl line-clamp-2">
                  {currentPhoto.caption}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Cinema Slide"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Cinema Slide"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="bg-night-950/90 p-2 sm:p-4 border-t border-white/10 flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto">
          {photos.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveIdx(idx)}
              className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                idx === activeIdx
                  ? 'border-rose-400 scale-105 shadow-md shadow-rose-950'
                  : 'border-white/15 opacity-60 hover:opacity-100'
              }`}
            >
              <ImageWithFallback
                src={p.src}
                alt={p.alt}
                title={p.title}
                memoryNumber={p.id}
                aspectRatio="auto"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
