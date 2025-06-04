'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function CornerLogo() {
  return (
    <motion.div
      className="fixed top-8 left-8 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.19, 1, 0.22, 1], // Custom easing for smooth entrance
      }}
    >
      <Link href="/">
        <motion.div
          className="rounded-xl shadow-[0_0_20px_rgba(200,200,200,0.15)] transition-shadow"
          initial={{
            boxShadow: '0 0 20px rgba(200,200,200,0.15)'
          }}
          animate={{
            boxShadow: '0 0 20px rgba(200,200,200,0.15)'
          }}
          whileHover={{
            boxShadow: '0 0 30px rgba(200,200,200,0.3), 0 0 60px rgba(200,200,200,0.15)',
            scale: 1.02,
            transition: {
              duration: 0.4,
              ease: [0.19, 1, 0.22, 1]
            }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            initial={{ filter: 'brightness(1)' }}
            whileHover={{ 
              filter: 'brightness(1.1)',
              transition: { duration: 0.4 }
            }}
          >
            <Image
              src="/logo.png"
              alt="Being Mindful Logo"
              width={64}
              height={64}
              className="rounded-xl transition-all"
              priority
            />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
} 