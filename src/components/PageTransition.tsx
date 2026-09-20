import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  transitionType?: 'default' | 'fade';
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`min-h-screen min-h-[100dvh] w-full flex flex-col justify-center items-center px-3 sm:px-6 py-8 sm:py-12 relative overflow-x-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};
