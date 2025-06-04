'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AnimatedLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        ease: 'easeOut'
      }}
    >
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </motion.div>
  );
} 