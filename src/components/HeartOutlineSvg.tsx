import React from 'react';

interface HeartOutlineSvgProps {
  className?: string;
  size?: number;
  fillOpacity?: number;
  strokeWidth?: number;
}

export const HeartOutlineSvg: React.FC<HeartOutlineSvgProps> = ({
  className = '',
  size = 28,
  fillOpacity = 0,
  strokeWidth = 2,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      fillOpacity={fillOpacity}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
};
