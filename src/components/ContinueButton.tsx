import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ContinueButtonProps {
  to: string;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ContinueButton: React.FC<ContinueButtonProps> = ({
  to,
  label = 'Continue',
  icon,
  className = '',
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
    navigate(to);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={`group relative inline-flex items-center justify-center gap-3 min-h-[48px] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-wine-800 to-rose-700 text-ivory-50 text-sm sm:text-base font-medium tracking-wide shadow-lg shadow-wine-900/15 hover:shadow-wine-900/25 transition-all duration-300 touch-manipulation cursor-pointer ${className}`}
    >
      <span>{label}</span>
      {icon ? (
        <span>{icon}</span>
      ) : (
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
      )}
      {/* Shimmer highlight overlay */}
      <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.button>
  );
};
