'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down';
}

export function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) {
  const yOffset = direction === 'up' ? 30 : -30;
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <AnimatePresence mode="wait">
      <motion.section
        initial={{ 
          opacity: isDesktop ? 0.2 : 1, 
          y: yOffset 
        }}
        whileInView={{ 
          opacity: isDesktop ? 1 : 1, 
          y: 0 
        }}
        exit={{ 
          opacity: isDesktop ? 0.2 : 1, 
          y: -yOffset 
        }}
        viewport={{ 
          margin: "-100px",
          amount: 0.3
        }}
        transition={{ 
          duration: 0.8,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98]
        }}
        className={`${className} transition-opacity`}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
} 