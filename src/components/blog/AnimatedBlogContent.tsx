'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ClockIcon, ArrowLeftIcon, SparklesIcon, LightBulbIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { BlogPost, calculateReadingTime } from '@/lib/blog-data';
import { PodcastPlayer } from './PodcastPlayer';

const getSectionIcon = (type: string) => {
  switch (type) {
    case 'introduction':
      return <AcademicCapIcon className="w-6 h-6 text-amber-400" />;
    case 'tip':
      return <LightBulbIcon className="w-6 h-6 text-amber-400" />;
    case 'conclusion':
      return <SparklesIcon className="w-6 h-6 text-amber-400" />;
    default:
      return null;
  }
};

export default function AnimatedBlogContent({ post }: { post: BlogPost }) {
  return (
    <div className="prose prose-invert max-w-none">
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
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text">
          {post.title}
        </h1>
        <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gradient-to-r from-amber-500/50 via-amber-400/50 to-transparent rounded-full" />
      </motion.div>

      {/* Reading time and podcast info */}
      <motion.div
        className="flex items-center gap-4 text-amber-400/80 text-sm mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex items-center gap-2">
          <ClockIcon className="w-4 h-4" />
          <span>{calculateReadingTime(post.sections.map(section => section.content || '').filter(Boolean))} min de leitura</span>
        </div>
      </motion.div>

      {/* Podcast player if available */}
      {post.podcast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <PodcastPlayer
            episodeId={post.podcast.episodeId}
            title={post.podcast.title}
            durationDisplay={post.podcast.duration}
            audioUrl={post.podcast.audioUrl}
          />
        </motion.div>
      )}

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
        className="space-y-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {post.sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${
              section.type === 'tip' ? 'bg-gradient-to-r from-amber-500/5 to-transparent p-6 rounded-lg' :
              section.type === 'conclusion' ? 'bg-gradient-to-r from-amber-500/10 to-transparent p-8 rounded-lg border border-amber-500/20' :
              ''
            }`}
          >
            {section.title && (
              <div className="flex items-center gap-3 mb-4">
                {getSectionIcon(section.type)}
                <div className="relative">
                  <h2 className={`${
                    section.type === 'introduction' || section.type === 'conclusion' 
                      ? 'text-2xl bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text' 
                      : 'text-xl text-white'
                  } font-bold`}>
                    {section.title}
                  </h2>
                  {(section.type === 'introduction' || section.type === 'conclusion') && (
                    <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gradient-to-r from-amber-500/50 via-amber-400/50 to-transparent rounded-full" />
                  )}
                </div>
              </div>
            )}
            {section.content && (
              <p className={`${
                section.type === 'tip' ? 'text-slate-200' :
                section.type === 'conclusion' ? 'text-slate-200 text-lg' :
                'text-slate-300'
              } leading-relaxed mb-4`}>
                {section.content}
              </p>
            )}
            {section.items && (
              <div className="space-y-6 mt-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex gap-4">
                    {item.number && (
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center">
                        <span className="text-amber-400 font-semibold">{item.number}</span>
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action if exists */}
      {post.callToAction && (
        <motion.div
          className="mt-16 p-8 rounded-xl bg-gradient-to-br from-amber-500/10 via-amber-600/10 to-transparent border border-amber-500/20 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-3 text-amber-400">{post.callToAction.title}</h3>
          <p className="text-slate-200 text-lg mb-6 leading-relaxed">{post.callToAction.description}</p>
          <Link
            href={post.callToAction.link}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/20"
          >
            {post.callToAction.linkText}
          </Link>
        </motion.div>
      )}
    </div>
  );
} 