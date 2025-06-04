'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedText({ children, delay = 0, className }: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        ease: 'easeOut',
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 