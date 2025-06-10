'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ClockIcon, PlayIcon } from '@heroicons/react/24/solid';
import { calculateReadingTime } from '@/lib/blog-data';
import type { BlogPost } from '@/lib/blog-data';
import { useState, useEffect } from 'react';

// Hook to get actual audio duration
function useAudioDurations(posts: BlogPost[]) {
  const [durations, setDurations] = useState<Record<string, string>>({});

  useEffect(() => {
    const audioElements: HTMLAudioElement[] = [];
    const newDurations: Record<string, string> = {};

    posts.forEach(post => {
      if (!post.podcast?.audioUrl) return;

      const audio = new Audio(post.podcast.audioUrl);
      audioElements.push(audio);
      
      const handleLoadedMetadata = () => {
        const minutes = Math.floor(audio.duration / 60);
        const seconds = Math.floor(audio.duration % 60);
        newDurations[post.slug] = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        setDurations(prev => ({ ...prev, [post.slug]: newDurations[post.slug] }));
      };

      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.load();
    });

    return () => {
      audioElements.forEach(audio => {
        audio.removeEventListener('loadedmetadata', () => {});
      });
    };
  }, [posts]);

  return durations;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
};

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const audioDurations = useAudioDurations(posts);

  // Helper function to get the first text content from sections
  const getFirstTextContent = (post: BlogPost) => {
    const firstContentSection = post.sections.find(section => section.content);
    return firstContentSection?.content || '';
  };

  // Helper function to format duration
  const formatDuration = (duration: string) => {
    if (!duration) return '';
    const [minutes, seconds] = duration.split(':').map(Number);
    return `${minutes} min ${seconds > 0 ? `${seconds} seg` : ''}`;
  };

  return (
    <div className="space-y-8">
      {posts.map((post, index) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group"
        >
          <Link href={`/blog/${post.slug}`}>
            <div className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-2 text-brand-teal/80 text-sm">
                  <ClockIcon className="w-4 h-4 text-brand-teal" />
                  <span>{calculateReadingTime(post.sections.map(section => section.content || '').filter(Boolean))} min de leitura</span>
                </div>
                {post.podcast && (
                  <div className="flex items-center gap-2 text-brand-teal/80 text-sm">
                    <PlayIcon className="w-4 h-4 text-brand-teal" />
                    <span>{formatDuration(audioDurations[post.slug])}</span>
                  </div>
                )}
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-white group-hover:text-brand-teal transition-colors">
                {post.title}
              </h2>
              {post.quote && (
                <blockquote className="border-l-2 border-brand-teal/30 pl-4 mb-4">
                  <p className="text-slate-300 italic mb-2">{post.quote.text}</p>
                  <footer className="text-brand-teal text-sm">— {post.quote.author}</footer>
                </blockquote>
              )}
              <p className="text-slate-400 line-clamp-3">
                {getFirstTextContent(post)}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-brand-teal text-sm font-medium">
                  {post.podcast ? 'Ouvir episódio' : 'Ler mais'}
                  <svg
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform inline-block"
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
                <div className="text-slate-500 text-sm">
                  {formatDate(post.publicationDate)}
                </div>
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
} 