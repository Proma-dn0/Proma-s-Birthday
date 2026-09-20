import React from 'react';
import { motion } from 'framer-motion';
import type { PhotoMemory } from '../data/birthday';
import { ImageWithFallback } from './ImageWithFallback';
import { LayoutGrid, Maximize2 } from 'lucide-react';

interface MasonryGalleryProps {
  photos: PhotoMemory[];
  onPhotoClick: (photo: PhotoMemory) => void;
}

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({ photos, onPhotoClick }) => {
  // Asymmetrical aspect ratio pattern for 6 photos
  const aspectRatios: ('portrait' | 'landscape' | 'square')[] = [
    'portrait',  // 1: Tall
    'landscape', // 2: Wide
    'square',    // 3: Square
    'square',    // 4: Square
    'portrait',  // 5: Tall
    'landscape', // 6: Wide
  ];

  return (
    <section className="relative py-12 sm:py-20 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/70 border border-rose-200 text-wine-800 text-xs font-sans tracking-widest uppercase mb-3">
          <LayoutGrid className="w-3 h-3 text-wine-700" />
          <span>Style 03 • Mosaic Memory Wall</span>
        </div>
        <h3 className="font-serif text-[clamp(1.5rem,5vw,2.25rem)] text-wine-950 font-normal">
          An Asymmetrical Tapestry of Smiles
        </h3>
        <p className="text-stone-500 font-light text-xs sm:text-sm mt-2">
          Pieces of time that fit together into a beautiful mosaic
        </p>
      </div>

      {/* Responsive Masonry Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
        {photos.map((photo, index) => {
          const ratio = aspectRatios[index % aspectRatios.length];
          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() => onPhotoClick(photo)}
              className="break-inside-avoid relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border border-stone-200/60"
            >
              <ImageWithFallback
                src={photo.src}
                alt={photo.alt}
                title={photo.title}
                memoryNumber={photo.id}
                aspectRatio={ratio}
                className="w-full group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay with Romantic Information */}
              <div className="absolute inset-0 bg-gradient-to-t from-wine-950/85 via-wine-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-sans tracking-widest uppercase text-rose-300 font-medium">
                    Memory #{photo.id < 10 ? `0${photo.id}` : photo.id}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="font-serif text-lg sm:text-xl font-medium text-white mb-1">
                  {photo.title}
                </h4>

                <p className="text-xs sm:text-sm text-stone-200 font-light line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
