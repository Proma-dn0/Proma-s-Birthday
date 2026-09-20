import React, { useState } from 'react';
import { Camera, Heart, Sparkles } from 'lucide-react';
import { resolveAssetUrl } from '../utils/assetHelper';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  title?: string;
  memoryNumber?: number;
  aspectRatio?: 'portrait' | 'landscape' | 'square' | 'wide' | 'auto';
  className?: string;
}

function getFormatCandidates(src?: string): string[] {
  if (!src) return [];
  const resolved = resolveAssetUrl(src);
  const match = resolved.match(/^(.*)\.(jpg|jpeg|png|webp)$/i);
  if (match) {
    const basePath = match[1];
    const origExt = match[2].toLowerCase();
    const allExts = ['jpg', 'jpeg', 'png', 'webp'];
    const reordered = [origExt, ...allExts.filter((e) => e !== origExt)];
    return reordered.map((ext) => `${basePath}.${ext}`);
  }
  return [resolved];
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  title,
  memoryNumber,
  aspectRatio = 'portrait',
  className = '',
  ...props
}) => {
  const [prevSrc, setPrevSrc] = useState(src);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Synchronize state when src changes
  if (src !== prevSrc) {
    setPrevSrc(src);
    setCandidateIndex(0);
    setImageLoaded(false);
    setHasError(false);
  }

  const candidates = getFormatCandidates(src);
  const currentSrc = candidates[candidateIndex] || src;

  const handleError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  // Aspect ratio class mapping
  const aspectClass = {
    portrait: 'aspect-[4/5]',
    landscape: 'aspect-[4/3]',
    square: 'aspect-square',
    wide: 'aspect-[16/9]',
    auto: 'h-auto',
  }[aspectRatio];

  // Romantic gradient palettes for fallback cards based on memory number
  const gradientPalettes = [
    'from-rose-100 via-blush-200 to-champagne-100',
    'from-champagne-100 via-blush-100 to-rose-200',
    'from-blush-200 via-rose-100 to-ivory-200',
    'from-wine-900/10 via-rose-100 to-champagne-200/50',
  ];
  const gradientClass = gradientPalettes[(memoryNumber || 1) % gradientPalettes.length];

  return (
    <div className={`relative overflow-hidden bg-ivory-200 ${aspectClass} ${className}`}>
      {/* Loading & Fallback Representation */}
      {(!imageLoaded || hasError) && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br ${gradientClass} transition-opacity duration-700`}
        >
          {/* Subtle decorative elements */}
          <div className="absolute top-3 right-3 text-rose-300/60">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <div className="absolute bottom-3 left-3 text-rose-300/40">
            <Heart className="w-4 h-4 fill-rose-300/30" />
          </div>

          {/* Center emblem */}
          <div className="w-12 h-12 rounded-full bg-white/70 shadow-sm backdrop-blur-sm flex items-center justify-center text-wine-700 mb-3 border border-rose-200/60 group-hover:scale-110 transition-transform">
            <Camera className="w-5 h-5 text-rose-600" />
          </div>

          {/* Memory tag & title */}
          {memoryNumber !== undefined && (
            <span className="text-[10px] tracking-widest uppercase font-medium text-wine-600/70 mb-1 font-sans">
              Memory #{memoryNumber < 10 ? `0${memoryNumber}` : memoryNumber}
            </span>
          )}
          {title && (
            <h4 className="font-serif text-sm md:text-base font-semibold text-wine-900 line-clamp-2 px-2">
              {title}
            </h4>
          )}
          <p className="text-[11px] font-handwriting text-stone-600 mt-1">
            {hasError ? "A special moment of us" : "Loading our memory..."}
          </p>
        </div>
      )}

      {/* Real Image with smooth fade-in */}
      {!hasError && currentSrc && (
        <img
          key={currentSrc}
          src={currentSrc}
          alt={alt || title || "Proma's Birthday Memory"}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={handleError}
          className={`w-full h-full object-cover transition-all duration-700 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          {...props}
        />
      )}
    </div>
  );
};
