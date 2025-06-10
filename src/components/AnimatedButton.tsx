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
  onClick?: (e: React.MouseEvent) => void;
}

export function AnimatedButton({ 
  href, 
  children, 
  variant = 'primary',
  icon,
  onClick
}: AnimatedButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <motion.a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        rounded-full border transition-all duration-300 flex items-center justify-center gap-2 
        font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8
        min-w-[180px] sm:min-w-[200px]
        ${isPrimary 
          ? 'bg-gradient-brand text-white shadow-lg hover:shadow-brand-teal/20 hover:scale-[1.02] border-transparent' 
          : 'border-slate-300/20 hover:border-brand-teal/30 hover:bg-brand-purple/5'
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
          className={isPrimary ? 'text-white' : 'text-brand-purple'}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={20}
            height={20}
            className={!isPrimary ? 'opacity-50' : ''}
          />
        </motion.div>
      )}
      <motion.span
        initial={{ y: 0 }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className={!isPrimary ? 'text-slate-300' : ''}
      >
        {children}
      </motion.span>
    </motion.a>
  );
} 