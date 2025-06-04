'use client';

import Link from 'next/link';
import { MotionDiv, MotionSpan } from './motion';

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
          className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center shadow-lg transition-all duration-300"
          whileHover={{
            scale: 1.02,
            boxShadow: '0 0 30px rgba(200,200,200,0.2)',
          }}
          whileTap={{ scale: 0.98 }}
        >
          <MotionSpan
            className="font-[--font-fraunces] text-2xl font-bold bg-gradient-to-br from-white via-amber-100 to-amber-200 text-transparent bg-clip-text tracking-tighter"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            BM
          </MotionSpan>
        </MotionDiv>
      </Link>
    </MotionDiv>
  );
} 