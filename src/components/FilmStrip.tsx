import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import type { PhotoMemory } from '../data/birthday';
import { ImageWithFallback } from './ImageWithFallback';
import { Film, ChevronLeft, ChevronRight } from 'lucide-react';

interface FilmStripProps {
  photos: PhotoMemory[];
  onPhotoClick: (photo: PhotoMemory) => void;
}

export const FilmStrip: React.FC<FilmStripProps> = ({ photos, onPhotoClick }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-12 sm:py-20 md:py-24 px-2 sm:px-6 max-w-7xl mx-auto w-full overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/70 border border-rose-200 text-wine-800 text-xs font-sans tracking-widest uppercase mb-3">
          <Film className="w-3 h-3 text-wine-700" />
          <span>Style 04 • 35mm Film Roll</span>
        </div>
        <h3 className="font-serif text-[clamp(1.5rem,5vw,2.25rem)] text-wine-950 font-normal">
          Captured on 35mm Cellulose
        </h3>
        <p className="text-stone-500 font-light text-xs sm:text-sm mt-2">
          Swipe along the film reel to explore the negative frames
        </p>
      </div>

      {/* Film Reel Outer Wrapper */}
      <div className="relative bg-stone-950 py-4 px-2 sm:px-6 rounded-2xl sm:rounded-3xl shadow-2xl border border-stone-800">
        {/* Top Sprocket Perforations */}
        <div className="h-6 w-full sprocket-border opacity-70 mb-3" />

        {/* Scroll Controls (Desktop) */}
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll Film Left"
          className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-stone-900/80 hover:bg-rose-900/80 text-white border border-white/20 items-center justify-center transition-all shadow-lg cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => scroll('right')}
          aria-label="Scroll Film Right"
          className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-stone-900/80 hover:bg-rose-900/80 text-white border border-white/20 items-center justify-center transition-all shadow-lg cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Horizontal Film Frames Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 px-2 sm:px-4 scrollbar-none snap-x snap-mandatory touch-pan-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => onPhotoClick(photo)}
              className="flex-shrink-0 w-[230px] xs:w-[260px] sm:w-[300px] snap-center cursor-pointer group"
            >
              {/* Individual Film Frame Box */}
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800 shadow-lg relative">
                {/* Frame Heading / Number */}
                <div className="flex justify-between items-center text-[10px] font-mono text-stone-500 mb-2 px-1">
                  <span>ISO 400</span>
                  <span className="text-amber-500/80 font-bold">▲ {photo.id}A</span>
                  <span>SAFETY FILM</span>
                </div>

                {/* Photo Aspect Frame */}
                <div className="overflow-hidden rounded-lg relative aspect-[4/3] bg-black">
                  <ImageWithFallback
                    src={photo.src}
                    alt={photo.alt}
                    title={photo.title}
                    memoryNumber={photo.id}
                    aspectRatio="landscape"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Grain & Color Filter overlay */}
                  <div className="absolute inset-0 bg-amber-500/5 mix-blend-color pointer-events-none" />
                </div>

                {/* Frame Details */}
                <div className="mt-3 px-1">
                  <h4 className="font-serif text-white text-base font-medium truncate">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-stone-400 font-light truncate mt-0.5">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Sprocket Perforations */}
        <div className="h-6 w-full sprocket-border opacity-70 mt-3" />
      </div>
    </section>
  );
};
