'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/blog-data';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0B1221] pt-32 pb-16">
      <article className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text">
            {post.title}
          </h1>

          {post.quote && (
            <blockquote className="border-l-2 border-amber-500/30 pl-6 mb-12">
              <p className="text-xl text-slate-300 italic mb-3">{post.quote.text}</p>
              <footer className="text-amber-400">— {post.quote.author}</footer>
            </blockquote>
          )}

          <div className="space-y-6">
            {post.content.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-lg text-slate-300 whitespace-pre-line"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {post.callToAction && (
            <motion.div
              className="mt-16 bg-slate-800/50 rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-amber-400 mb-4">
                {post.callToAction.title}
              </h2>
              <p className="text-slate-300 mb-6">
                {post.callToAction.description}
              </p>
              <Link
                href={post.callToAction.link}
                className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform"
              >
                {post.callToAction.linkText}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </article>
    </div>
  );
} 