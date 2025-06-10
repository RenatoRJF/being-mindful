'use client';

import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  withLine?: boolean;
}

const sizeClasses = {
  sm: 'text-lg md:text-xl',
  md: 'text-xl md:text-2xl',
  lg: 'text-2xl md:text-3xl',
  xl: 'text-3xl md:text-4xl',
  '2xl': 'text-4xl md:text-5xl',
  '3xl': 'text-5xl md:text-6xl lg:text-7xl',
};

export function Title({ 
  as: Component = 'h2',
  size = 'xl',
  withLine = true,
  children,
  className = '',
  ...props 
}: TitleProps) {
  return (
    <div className="relative inline-block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Component
          className={`
            font-bold bg-gradient-brand text-transparent bg-clip-text
            ${sizeClasses[size]}
            ${className}
          `}
          {...props}
        >
          {children}
        </Component>
        {withLine && (
          <motion.div
            className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gradient-brand opacity-50 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        )}
      </motion.div>
    </div>
  );
} 