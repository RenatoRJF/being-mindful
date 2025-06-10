'use client';

import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useLikes } from '@/hooks/useLikes';

interface LikeButtonProps {
  contentId: string;
  type: 'podcast' | 'blog';
  className?: string;
}

export function LikeButton({ contentId, type, className = '' }: LikeButtonProps) {
  const { isLiked, likeCount, toggleLike } = useLikes(contentId, type);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.button
        onClick={toggleLike}
        whileTap={{ scale: 0.8 }}
        className="relative group"
        aria-label={isLiked ? 'Unlike' : 'Like'}
      >
        {/* Background heart (always visible) */}
        <HeartOutline 
          className={`w-6 h-6 ${isLiked ? 'text-brand-teal' : 'text-slate-400 group-hover:text-brand-teal/60'} transition-colors`}
        />
        
        {/* Filled heart (visible when liked) */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isLiked ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="absolute inset-0"
        >
          <HeartSolid className="w-6 h-6 text-brand-teal" />
        </motion.div>
      </motion.button>

      {/* Like count */}
      <span className={`text-sm ${isLiked ? 'text-brand-teal' : 'text-slate-400'} transition-colors`}>
        {likeCount}
      </span>
    </div>
  );
} 