import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PhotoMemory } from '../data/birthday';
import { ImageWithFallback } from './ImageWithFallback';
import { ChevronLeft, ChevronRight, Maximize2, Layers } from 'lucide-react';

interface MemoryCarouselProps {
  photos: PhotoMemory[];
  onPhotoClick: (photo: PhotoMemory) => void;
}

export const MemoryCarousel: React.FC<MemoryCarouselProps> = ({ photos, onPhotoClick }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((c) => (c - 1 + photos.length) % photos.length);
  };

  const next = () => {
    setCurrent((c) => (c + 1) % photos.length);
  };

  const photo = photos[current] || photos[0];

  return (
    <section className="relative py-12 sm:py-20 px-3 sm:px-6 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/70 border border-rose-200 text-wine-800 text-xs font-sans tracking-widest uppercase mb-3">
          <Layers className="w-3 h-3 text-wine-700" />
          <span>Style 06 • Memory Spotlight Carousel</span>
        </div>
        <h3 className="font-serif text-[clamp(1.5rem,5vw,2.25rem)] text-wine-950 font-normal">
          Centerstage for Our Most Cherished Times
        </h3>
        <p className="text-stone-500 font-light text-xs sm:text-sm mt-2">
          Step through each memory one by one
        </p>
      </div>

      {/* Main Carousel Card */}
      <div className="relative flex flex-col items-center w-full">
        <div className="w-full max-w-2xl relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onPhotoClick(photo)}
              className="group cursor-pointer bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-stone-200/70"
            >
              {/* Photo Area */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-stone-100 overflow-hidden">
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  title={photo.title}
                  memoryNumber={photo.id}
                  aspectRatio="auto"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Memory badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 px-2.5 sm:px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] sm:text-xs font-sans tracking-wider border border-white/20">
                  Memory #{photo.id < 10 ? `0${photo.id}` : photo.id}
                </div>

                {/* Fullscreen hover hint */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                  <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>

              {/* Caption and Information Below */}
              <div className="p-4 sm:p-8 text-center bg-white">
                {photo.tag && (
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-rose-600 font-medium">
                    {photo.tag}
                  </span>
                )}

                <h4 className="font-serif text-xl sm:text-3xl text-wine-950 font-medium mt-1 mb-2">
                  {photo.title}
                </h4>

                <p className="text-stone-600 font-light text-xs sm:text-base max-w-md mx-auto leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev/Next Carousel Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous Slide"
            className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-wine-900 shadow-md border border-stone-200 flex items-center justify-center transition-all z-20 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next Slide"
            className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-wine-900 shadow-md border border-stone-200 flex items-center justify-center transition-all z-20 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center gap-2 mt-6">
          {photos.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setCurrent(idx)}
              aria-label={`Jump to memory ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === current ? 'w-8 bg-rose-600' : 'w-2 bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
