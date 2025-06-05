'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedStatsProps {
  number: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}

export function AnimatedStats({ 
  number = 25000, 
  suffix = '+', 
  duration = 2,
  delay = 0.2 
}: AnimatedStatsProps) {
  const [count, setCount] = useState(24950);
  const [hasAnimated, setHasAnimated] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateNumber();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      if (observerRef.current && elementRef.current) {
        observerRef.current.unobserve(elementRef.current);
      }
    };
  }, []);

  const animateNumber = () => {
    let start = 24950;
    const end = number;
    const incrementTime = (duration * 1000) / (end - start);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString('pt-BR');
  };

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      <div className="text-5xl md:text-7xl font-bold text-amber-400 mb-4 tracking-tight">
        <span className="inline-block">
          {formatNumber(count)}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: duration + 0.1 }}
            className="inline-block ml-1"
          >
            {suffix}
          </motion.span>
        </span>
      </div>
    </motion.div>
  );
} 