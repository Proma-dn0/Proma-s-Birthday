import React from 'react';
import { motion } from 'framer-motion';
import type { PhotoMemory } from '../data/birthday';
import { ImageWithFallback } from './ImageWithFallback';
import { Sparkles } from 'lucide-react';

interface PolaroidGalleryProps {
  photos: PhotoMemory[];
  onPhotoClick: (photo: PhotoMemory) => void;
}

export const PolaroidGallery: React.FC<PolaroidGalleryProps> = ({ photos, onPhotoClick }) => {
  // Rotations for the 5 polaroids to make them look naturally scattered
  const rotations = [-3, 2, -2, 3, -1.5];
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  return (
    <section className="relative py-12 sm:py-20 px-3 sm:px-6 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/70 border border-rose-200 text-wine-800 text-xs font-sans tracking-widest uppercase mb-3">
          <Sparkles className="w-3 h-3 text-champagne-600" />
          <span>Style 01 • Polaroid Keepsakes</span>
        </div>
        <h3 className="font-serif text-[clamp(1.5rem,5vw,2.25rem)] text-wine-950 font-normal">
          Little Moments, Forever Yours
        </h3>
        <p className="text-stone-500 font-light text-xs sm:text-sm mt-2">
          A few moments that deserve to stay forever.
        </p>
      </div>

      {/* Polaroid Cards Grid / Scattered Flex */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
        {photos.map((photo, index) => {
          const rot = rotations[index % rotations.length];
          const activeRot = isMobile ? rot * 0.3 : rot;
          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                zIndex: 20,
                transition: { duration: 0.25 },
              }}
              whileTap={{ scale: 0.98 }}
              style={{ transform: `rotate(${activeRot}deg)` }}
              onClick={() => onPhotoClick(photo)}
              className="group cursor-pointer bg-white p-3 sm:p-3.5 pb-5 sm:pb-6 rounded-md shadow-polaroid hover:shadow-polaroid-hover transition-shadow duration-300 w-[260px] xs:w-[280px] max-w-full relative border border-stone-200/50"
            >
              {/* Tape Accent */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 washi-tape opacity-80 z-10 transform -rotate-1 group-hover:rotate-0 transition-transform" />

              {/* Photo Area */}
              <div className="relative overflow-hidden rounded-[2px] bg-ivory-200 border border-stone-100">
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  title={photo.title}
                  memoryNumber={photo.id}
                  aspectRatio="square"
                  className="w-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Polaroid Handwritten Caption Area */}
              <div className="mt-4 px-1 text-center">
                <p className="font-handwriting text-xl sm:text-2xl text-stone-800 tracking-wide line-clamp-1">
                  {photo.title}
                </p>
                <p className="font-handwriting text-sm sm:text-base text-rose-600/90 mt-0.5 line-clamp-1">
                  {photo.note || photo.caption}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
