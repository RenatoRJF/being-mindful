'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MotionDiv } from './motion';

export function MonogramLogo() {
  return (
    <MotionDiv
      className="fixed top-8 left-8 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      <Link href="/">
        <MotionDiv
          className="w-16 h-16 rounded-xl bg-gradient-brand shadow-lg transition-all duration-300 hover:shadow-brand-teal/20 flex items-center justify-center"
          whileHover={{
            scale: 1.02,
            boxShadow: '0 0 30px rgba(45, 212, 191, 0.2)',
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Image
            src="/logo.png"
            alt="Time Being Mindful"
            width={48}
            height={48}
            className="w-12 h-12"
            priority
          />
        </MotionDiv>
      </Link>
    </MotionDiv>
  );
} 