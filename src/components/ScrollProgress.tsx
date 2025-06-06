import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ScrollProgressProps {
  /** Height of the progress bar in pixels */
  height?: number;
  /** Background color of the track */
  backgroundColor?: string;
  /** Start color of the gradient */
  gradientStart?: string;
  /** End color of the gradient */
  gradientEnd?: string;
  /** Z-index of the progress bar */
  zIndex?: number;
  /** Position of the progress bar */
  position?: 'top' | 'bottom';
  /** Duration of the transition animation in seconds */
  transitionDuration?: number;
}

export function ScrollProgress({
  height = 2,
  backgroundColor = 'rgb(30 41 59 / 0.5)', // slate-800/50
  gradientStart = '#f59e0b', // amber-500
  gradientEnd = '#f97316', // orange-500
  zIndex = 9999,
  position = 'top',
  transitionDuration = 0.1
}: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll values
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
      
      // Update progress
      setProgress(Math.min(scrollPercent, 100));
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed left-0 right-0"
      style={{
        height: `${height}px`,
        backgroundColor,
        zIndex,
        [position]: 0
      }}
    >
      <motion.div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`
        }}
        transition={{
          duration: transitionDuration
        }}
      />
    </div>
  );
} 