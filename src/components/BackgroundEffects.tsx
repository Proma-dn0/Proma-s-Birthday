import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundEffects: React.FC = () => {
  // Precomputed subtle floating elements to prevent re-renders
  const floatingElements = [
    { id: 1, size: 14, left: '8%', duration: 18, delay: 0, opacity: 0.2 },
    { id: 2, size: 20, left: '22%', duration: 24, delay: 3, opacity: 0.15 },
    { id: 3, size: 12, left: '38%', duration: 16, delay: 5, opacity: 0.25 },
    { id: 4, size: 16, left: '55%', duration: 22, delay: 2, opacity: 0.18 },
    { id: 5, size: 10, left: '72%', duration: 19, delay: 7, opacity: 0.2 },
    { id: 6, size: 18, left: '88%', duration: 25, delay: 1, opacity: 0.15 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Soft Ambient Radial Lights */}
      <div className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-blush-200/30 blur-[100px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-rose-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-champagne-200/25 blur-[100px] pointer-events-none" />

      {/* Floating Petals / Soft Heart Particles */}
      {floatingElements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute text-rose-300"
          style={{
            left: el.left,
            fontSize: `${el.size}px`,
            opacity: el.opacity,
          }}
          initial={{ y: '110vh', rotate: 0 }}
          animate={{
            y: '-10vh',
            rotate: [0, 90, 180, 270, 360],
            x: [0, 15, -15, 10, 0],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          🌸
        </motion.div>
      ))}

      {/* Fine grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-60 mix-blend-multiply" />
    </div>
  );
};
