import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { birthdayData } from '../data/birthday';
import { HeartOutlineSvg } from './HeartOutlineSvg';

export const LoveMatch: React.FC = () => {
  const navigate = useNavigate();
  const [percentage, setPercentage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const hasNavigatedRef = useRef(false);

  const checkAndNavigate = useCallback(
    (val: number) => {
      if (val >= 80 && !hasNavigatedRef.current) {
        hasNavigatedRef.current = true;
        setIsDragging(false);
        // Micro-pause (120ms) so user visibly sees the heart reach the 80% mark before page fades out
        setTimeout(() => {
          navigate('/appreciation');
        }, 120);
      }
    },
    [navigate]
  );

  const updateFromPointer = useCallback(
    (clientX: number) => {
      if (!trackRef.current || hasNavigatedRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      if (rect.width <= 0) return;
      const rawX = clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, rawX / rect.width));
      const nextPercent = Math.round(ratio * 100);
      setPercentage(nextPercent);
      checkAndNavigate(nextPercent);
    },
    [checkAndNavigate]
  );

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (hasNavigatedRef.current) return;
    e.preventDefault();
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromPointer(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || hasNavigatedRef.current) return;
    e.preventDefault();
    updateFromPointer(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // Pointer capture release safety
      }
    }
  };

  // Keyboard navigation accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (hasNavigatedRef.current) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      const nextVal = Math.min(100, percentage + 2);
      setPercentage(nextVal);
      checkAndNavigate(nextVal);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      setPercentage((prev) => Math.max(0, prev - 2));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setPercentage(0);
    }
  };

  // Window pointer listeners fallback for dragging outside bounds
  useEffect(() => {
    if (!isDragging || hasNavigatedRef.current) return;

    const onGlobalMove = (e: PointerEvent) => {
      updateFromPointer(e.clientX);
    };

    const onGlobalUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('pointermove', onGlobalMove);
    window.addEventListener('pointerup', onGlobalUp);
    window.addEventListener('pointercancel', onGlobalUp);

    return () => {
      window.removeEventListener('pointermove', onGlobalMove);
      window.removeEventListener('pointerup', onGlobalUp);
      window.removeEventListener('pointercancel', onGlobalUp);
    };
  }, [isDragging, updateFromPointer]);

  return (
    <section id="love-match" className="relative py-10 sm:py-20 px-3 sm:px-6 flex justify-center items-center w-full">
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

          {/* Existing decorative top heart icon */}
          <div className="w-12 h-12 rounded-2xl bg-blush-100/90 text-rose-600 flex items-center justify-center mb-5 shadow-sm mx-auto">
            <HeartOutlineSvg size={22} strokeWidth={2.2} className="text-rose-600" />
          </div>

          {/* Top Label */}
          <span className="text-xs sm:text-sm uppercase tracking-widest text-stone-500 font-medium mb-2 block">
            {birthdayData.loveMatch.promptLead}
          </span>

          {/* Main Question Heading */}
          <h3 className="font-serif text-[clamp(1.35rem,4.5vw,2.25rem)] text-wine-950 font-normal leading-snug mb-8 sm:mb-12">
            {birthdayData.loveMatch.questionText}
          </h3>

          {/* HORIZONTAL SLIDER ARENA (SINGLE DRAGGABLE HEART) */}
          <div className="relative w-full max-w-[280px] xs:max-w-xs sm:max-w-md mx-auto mb-6 px-1 sm:px-3 select-none">
            {/* Track Value Extremes */}
            <div className="flex justify-between items-center text-xs font-mono text-stone-400 mb-3 px-1">
              <span>0%</span>
              <span>100%</span>
            </div>

            {/* Interactive Slider Track */}
            <div
              ref={trackRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onKeyDown={handleKeyDown}
              role="slider"
              aria-label="Your love percentage"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={percentage}
              tabIndex={0}
              className="relative h-14 flex items-center cursor-pointer touch-none focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded-full"
            >
              {/* Background Track Bar */}
              <div className="absolute inset-x-0 h-2.5 bg-stone-200/90 rounded-full overflow-hidden">
                {/* Active Fill Gradient */}
                <div
                  className="h-full bg-gradient-to-r from-rose-300 via-rose-500 to-wine-700 transition-all duration-75"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              {/* Single Draggable Vector Heart Handle */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 touch-none cursor-grab active:cursor-grabbing z-20 flex items-center justify-center transition-transform duration-75 pointer-events-none"
                style={{ left: `${percentage}%` }}
              >
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 1.16 }}
                  animate={percentage >= 80 ? { scale: [1, 1.25, 1.1] } : { scale: 1 }}
                  className="w-11 h-11 rounded-full bg-white shadow-md shadow-rose-900/15 border-2 border-rose-400 flex items-center justify-center text-rose-600 hover:border-rose-500 transition-colors"
                >
                  <HeartOutlineSvg
                    size={20}
                    fillOpacity={(percentage / 100) * 0.25}
                    strokeWidth={2.4}
                  />
                </motion.div>
              </div>
            </div>

            {/* Current Percentage Display */}
            <div className="flex flex-col items-center justify-center mt-4">
              <span className="font-serif text-3xl sm:text-4xl text-wine-950 font-normal tracking-tight">
                {percentage}%
              </span>
              <p className="text-xs text-stone-400 font-sans tracking-wide mt-2">
                {percentage >= 80 ? 'Special beyond measure ♡' : birthdayData.loveMatch.dragPrompt}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
