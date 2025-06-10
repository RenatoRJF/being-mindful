'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeftIcon, SparklesIcon, LightBulbIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { BlogPost } from '@/lib/blog-data';
import { PodcastPlayer } from './PodcastPlayer';

const getSectionIcon = (type: string) => {
  switch (type) {
    case 'introduction':
      return <AcademicCapIcon className="w-6 h-6 text-brand-teal" />;
    case 'tip':
      return <LightBulbIcon className="w-6 h-6 text-brand-teal" />;
    case 'conclusion':
      return <SparklesIcon className="w-6 h-6 text-brand-teal" />;
    default:
      return null;
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
};

export default function AnimatedBlogContent({ post }: { post: BlogPost }) {
  return (
    <div className="prose prose-invert prose-slate max-w-none">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link 
          href="/blog"
          className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 transition-colors group"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform text-brand-teal" />
          <span>Voltar para todos os posts</span>
        </Link>
      </motion.div>

      {/* Title and subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="relative">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-brand text-transparent bg-clip-text">
            {post.title}
          </h1>
          <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gradient-brand opacity-50 rounded-full" />
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="text-sm">Por {post.author}</span>
          <span className="text-sm">•</span>
          <span className="text-sm">{formatDate(post.publicationDate)}</span>
          <span className="text-sm">•</span>
          <span className="text-sm">Blog</span>
        </div>
      </motion.div>

      {/* Main title */}
      {post.sections.find(section => section.type === 'main-title') && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative">
            <h1 className="text-3xl font-bold lg:text-4xl bg-gradient-brand text-transparent bg-clip-text">
              {post.sections.find(section => section.type === 'main-title')?.content}
            </h1>
            <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gradient-brand opacity-50 rounded-full" />
          </div>
        </motion.div>
      )}

      {/* Quote if exists */}
      {post.quote && (
        <motion.blockquote
          className="border-l-2 border-brand-teal/30 pl-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-slate-300 italic mb-2">{post.quote.text}</p>
          <footer className="text-brand-teal text-sm">— {post.quote.author}</footer>
        </motion.blockquote>
      )}

      {/* Podcast player if exists */}
      {post.podcast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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

      {/* Content */}
      {post.sections.map((section, index) => {
        // Skip main-title as it's handled separately
        if (section.type === 'main-title') return null;

        const delay = 0.1 * (index + 1);

        switch (section.type) {
          case 'introduction':
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay }}
                className="mb-8"
              >
                <div className="relative">
                  <h2 className="text-2xl font-semibold mb-4 text-brand-teal">{section.title}</h2>
                  <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gradient-brand opacity-50 rounded-full" />
                </div>
                <div className="space-y-4 text-slate-300">
                  {section.content?.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            );

          case 'tip':
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay }}
                className="bg-gradient-to-r from-brand-teal/5 to-transparent p-6 rounded-lg mb-8"
              >
                {section.title && (
                  <div className="flex items-center gap-3 mb-4">
                    {getSectionIcon(section.type)}
                    <div className="relative">
                      <h3 className="text-xl text-white font-bold">
                        {section.title}
                      </h3>
                      <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gradient-brand opacity-50 rounded-full" />
                    </div>
                  </div>
                )}
                {section.content && (
                  <p className="text-slate-200 leading-relaxed mb-4">
                    {section.content}
                  </p>
                )}
              </motion.div>
            );

          case 'numerable-section':
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay }}
                className="mb-8"
              >
                {section.title && (
                  <div className="flex items-center gap-3 mb-6">
                    {getSectionIcon(section.type)}
                    <div className="relative">
                      <h3 className="text-xl text-white font-bold">{section.title}</h3>
                      <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gradient-brand opacity-50 rounded-full" />
                    </div>
                  </div>
                )}
                {section.content && (
                  <p className="text-slate-300 leading-relaxed mb-6">{section.content}</p>
                )}
                {section.items && (
                  <div className="space-y-6 mt-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex gap-4">
                        {item.number && (
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-brand-teal/20 to-brand-purple/20 flex items-center justify-center">
                            <span className="text-brand-teal font-semibold">{item.number}</span>
                          </div>
                        )}
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2 text-white">
                            {item.title}
                          </h4>
                          <p className="text-slate-300 leading-relaxed">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );

          case 'conclusion':
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay }}
                className="bg-gradient-to-r from-brand-teal/10 to-transparent p-8 rounded-lg border border-brand-teal/20 mb-8"
              >
                {section.title && (
                  <div className="flex items-center gap-3 mb-4">
                    {getSectionIcon(section.type)}
                    <div className="relative">
                      <h3 className="text-2xl bg-gradient-brand text-transparent bg-clip-text font-bold">
                        {section.title}
                      </h3>
                      <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gradient-brand opacity-50 rounded-full" />
                    </div>
                  </div>
                )}
                {section.content && (
                  <p className="text-slate-200 text-lg leading-relaxed">
                    {section.content}
                  </p>
                )}
              </motion.div>
            );

          default:
            return null;
        }
      })}

      {/* Call to Action if exists */}
      {post.callToAction && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-br from-brand-teal/10 via-brand-purple/10 to-transparent border border-brand-teal/20 shadow-lg"
        >
          <div className="relative">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-brand text-transparent bg-clip-text">
              {post.callToAction.title}
            </h2>
            <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gradient-brand opacity-50 rounded-full" />
          </div>
          <p className="text-slate-200 text-lg mb-6 leading-relaxed mt-4">{post.callToAction.description}</p>
          <Link
            href={post.callToAction.link}
            className="inline-flex items-center px-6 py-3 bg-gradient-brand text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-brand-teal/20"
          >
            {post.callToAction.linkText}
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
          </Link>
        </motion.div>
      )}
    </div>
  );
} 