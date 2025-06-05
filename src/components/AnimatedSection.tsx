'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

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

  return (
    <AnimatePresence mode="wait">
      <motion.section
        initial={{ opacity: 0.2, y: yOffset }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0.2, y: -yOffset }}
        viewport={{ 
          margin: "-100px",
          amount: 0.3 // Trigger when 30% of the section is visible
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