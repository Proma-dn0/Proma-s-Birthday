import React from 'react';
import { motion } from 'framer-motion';
import type { PhotoMemory } from '../data/birthday';
import { ImageWithFallback } from './ImageWithFallback';
import { Bookmark, Heart, Sparkles, Smile } from 'lucide-react';

interface ScrapbookProps {
  photos: PhotoMemory[];
  onPhotoClick: (photo: PhotoMemory) => void;
}

export const Scrapbook: React.FC<ScrapbookProps> = ({ photos, onPhotoClick }) => {
  // Scrapbook sticker & positioning layout for 5 memories
  const scrapbookItems = [
    {
      tapeColor: 'bg-rose-200/80',
      tapeAngle: '-rotate-2',
      tilt: '-rotate-1 sm:-rotate-3',
      sticker: '💌 Our Favorite Trip',
      doodle: '🌿',
    },
    {
      tapeColor: 'bg-champagne-200/80',
      tapeAngle: 'rotate-3',
      tilt: 'rotate-1 sm:rotate-2',
      sticker: '✨ Always Smiling',
      doodle: '☕',
    },
    {
      tapeColor: 'bg-blush-300/80',
      tapeAngle: '-rotate-1',
      tilt: '-rotate-2 sm:-rotate-2',
      sticker: '😂 Unfiltered Joy',
      doodle: '🎨',
    },
    {
      tapeColor: 'bg-rose-200/80',
      tapeAngle: 'rotate-2',
      tilt: 'rotate-2 sm:rotate-3',
      sticker: '❄️ Cozy Moments',
      doodle: '🧣',
    },
    {
      tapeColor: 'bg-champagne-200/80',
      tapeAngle: '-rotate-3',
      tilt: '-rotate-1 sm:-rotate-1',
      sticker: '🏮 A Special Wish',
      doodle: '💖',
    },
  ];

  return (
    <section className="relative py-12 sm:py-20 md:py-24 px-3 sm:px-6 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/70 border border-rose-200 text-wine-800 text-xs font-sans tracking-widest uppercase mb-3">
          <Bookmark className="w-3 h-3 text-wine-700" />
          <span>Style 05 • Scrapbook Journal</span>
        </div>
        <h3 className="font-serif text-[clamp(1.5rem,5vw,2.25rem)] text-wine-950 font-normal">
          Taped Pages & Hand-Drawn Memories
        </h3>
        <p className="text-stone-500 font-light text-xs sm:text-sm mt-2">
          Little keepsakes and scribbled thoughts pasted with love
        </p>
      </div>

      {/* Scrapbook Board Container */}
      <div className="relative bg-[#FCF8F2] border-2 border-dashed border-rose-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-lg">
        {/* Decorative corner staples/elements */}
        <div className="absolute top-4 left-4 text-rose-300">
          <Heart className="w-5 h-5 fill-rose-200" />
        </div>
        <div className="absolute bottom-4 right-4 text-champagne-400">
          <Sparkles className="w-5 h-5" />
        </div>

        {/* Scattered Keepsake Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {photos.map((photo, index) => {
            const config = scrapbookItems[index % scrapbookItems.length];
            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.04,
                  rotate: 0,
                  zIndex: 25,
                  transition: { duration: 0.2 },
                }}
                className={`relative cursor-pointer transition-transform ${config.tilt}`}
                onClick={() => onPhotoClick(photo)}
              >
                {/* Washi Tape at Top */}
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 ${config.tapeColor} ${config.tapeAngle} backdrop-blur-sm shadow-sm z-10 border-x border-dashed border-stone-400/40`}
                />

                {/* Scrapbook Card Box */}
                <div className="bg-white p-3.5 pb-5 rounded-lg shadow-md border border-stone-200/80 group">
                  <div className="overflow-hidden rounded-md bg-stone-100">
                    <ImageWithFallback
                      src={photo.src}
                      alt={photo.alt}
                      title={photo.title}
                      memoryNumber={photo.id}
                      aspectRatio="square"
                      className="w-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Handwritten Scrapbook Note */}
                  <div className="mt-3 px-1">
                    <div className="flex items-center justify-between">
                      <span className="text-base sm:text-lg font-handwriting font-bold text-wine-900">
                        {photo.title}
                      </span>
                      <span className="text-base">{config.doodle}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 font-light mt-1 line-clamp-2">
                      {photo.caption}
                    </p>

                    {/* Cute sticker note */}
                    <div className="mt-3 flex items-center pt-2 border-t border-dashed border-stone-200">
                      <span className="inline-flex items-center gap-1 text-[11px] font-handwriting text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200/60">
                        <Smile className="w-3 h-3" />
                        {photo.note || config.sticker}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
