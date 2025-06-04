'use client';

import { motion } from 'framer-motion';
import React from 'react';
import type { HTMLMotionProps } from 'framer-motion';

type MotionDivProps = HTMLMotionProps<'div'>;
type MotionSpanProps = HTMLMotionProps<'span'>;

export const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  function MotionDiv({ children, ...props }, ref) {
    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    );
  }
);

export const MotionSpan = React.forwardRef<HTMLSpanElement, MotionSpanProps>(
  function MotionSpan({ children, ...props }, ref) {
    return (
      <motion.span ref={ref} {...props}>
        {children}
      </motion.span>
    );
  }
); 