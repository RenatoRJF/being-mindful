'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/blog-data';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0B1221] pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1 
          className="text-4xl font-bold mb-8 bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blog
        </motion.h1>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <h2 className="text-2xl font-semibold mb-4 text-white group-hover:text-amber-400 transition-colors">
                    {post.title}
                  </h2>
                  {post.quote && (
                    <blockquote className="border-l-2 border-amber-500/30 pl-4 mb-4">
                      <p className="text-slate-300 italic mb-2">{post.quote.text}</p>
                      <footer className="text-amber-400 text-sm">— {post.quote.author}</footer>
                    </blockquote>
                  )}
                  <p className="text-slate-400 line-clamp-3">
                    {post.content[0]}
                  </p>
                  <div className="mt-4 flex items-center text-amber-400 text-sm font-medium">
                    Ler mais
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
} 