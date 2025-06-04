'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: {
    src: string;
    alt: string;
  };
}

export function AnimatedButton({ 
  href, 
  children, 
  variant = 'primary',
  icon 
}: AnimatedButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        rounded-full border border-solid transition-colors flex items-center justify-center gap-2 
        font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8
        min-w-[180px] sm:min-w-[200px]
        ${isPrimary 
          ? 'bg-foreground text-background border-transparent hover:bg-[#383838] dark:hover:bg-[#ccc]' 
          : 'border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent'
        }
      `}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
      initial={{ scale: 1 }}
    >
      {icon && (
        <motion.div
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            className="dark:invert"
            src={icon.src}
            alt={icon.alt}
            width={20}
            height={20}
          />
        </motion.div>
      )}
      <motion.span
        initial={{ y: 0 }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </motion.a>
  );
} 