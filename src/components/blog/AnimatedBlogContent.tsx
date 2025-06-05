'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ClockIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { calculateReadingTime } from '@/lib/blog-data';
import type { BlogPost } from '@/lib/blog-data';

export function AnimatedBlogContent({ post }: { post: BlogPost }) {
  return (
    <>
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link 
          href="/blog"
          className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors group"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para todos os posts</span>
        </Link>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {post.title}
      </motion.h1>

      {/* Reading time */}
      <motion.div
        className="flex items-center gap-2 text-amber-400/80 text-sm mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ClockIcon className="w-4 h-4" />
        <span>{calculateReadingTime(post.content)} min de leitura</span>
      </motion.div>

      {/* Quote if exists */}
      {post.quote && (
        <motion.blockquote
          className="border-l-2 border-amber-500/30 pl-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-slate-300 italic mb-2">{post.quote.text}</p>
          <footer className="text-amber-400 text-sm">— {post.quote.author}</footer>
        </motion.blockquote>
      )}

      {/* Content */}
      <motion.div
        className="prose prose-invert prose-amber max-w-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {post.content.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="text-slate-300 leading-relaxed mb-6"
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </>
  );
} 