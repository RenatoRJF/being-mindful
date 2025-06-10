'use client';

import { useEffect } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { event as gaEvent } from '@/lib/gtag';
import { PodcastPlayer } from '@/components/blog/PodcastPlayer';
import { podcastEpisodes } from '@/lib/podcast-data';
import { SuggestedEpisodes } from '@/components/podcast/SuggestedEpisodes';

interface PodcastEpisodePageProps {
  params: {
    slug: string;
  };
}

export default function PodcastEpisodePage({ params }: PodcastEpisodePageProps) {
  const episode = podcastEpisodes.find(ep => ep.slug === params.slug);

  useEffect(() => {
    if (!episode) return;

    // Track page view duration
    const startTime = Date.now();
    
    return () => {
      const duration = Math.floor((Date.now() - startTime) / 1000); // duration in seconds
      gaEvent({
        action: 'page_duration',
        category: 'Podcast',
        label: episode.title,
        value: duration
      });
    };
  }, [episode]);

  if (!episode) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0B1221] text-white">
      <article>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-2xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link
                href="/podcast"
                className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 transition-colors group"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform text-brand-teal" />
                <span>Voltar para episódios</span>
              </Link>
            </motion.div>

            {/* Episode Header */}
            <div className="mb-8 sm:mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <h1 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-brand text-transparent bg-clip-text lg:text-4xl">
                    {episode.title}
                  </h1>
                  <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gradient-brand opacity-50 rounded-full" />
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-base text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-brand-teal" />
                    <span>{episode.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-brand-teal" />
                    <span>{episode.duration}</span>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-slate-300 mb-8">
                  {episode.description}
                </p>
              </motion.div>

              {/* Topics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <div className="flex flex-wrap gap-2.5">
                  {episode.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-brand-teal/10 text-brand-teal rounded-full text-sm border border-brand-teal/20"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Podcast Player */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full"
              >
                <PodcastPlayer
                  episodeId={episode.id}
                  title={episode.title}
                  durationDisplay={episode.duration}
                  audioUrl={episode.audioUrl}
                />
              </motion.div>
            </div>

            {/* Episode Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="prose prose-invert max-w-none mb-12"
            >
              <div className="space-y-6">
                <div className="whitespace-pre-line text-base sm:text-lg text-slate-300 leading-relaxed">
                  {episode.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>

                {episode.keyPoints && (
                  <div className="mt-8 bg-gradient-to-b from-slate-800/50 to-slate-800/30 rounded-2xl p-6 sm:p-8 border border-slate-700/50">
                    <h3 className="text-lg sm:text-xl font-semibold mb-6 bg-gradient-brand text-transparent bg-clip-text">
                      Neste episódio, você vai descobrir:
                    </h3>
                    <ul className="space-y-4">
                      {episode.keyPoints.map((point, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          className="flex items-start gap-3 group"
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center mt-0.5">
                            <span className="text-brand-teal text-sm group-hover:scale-110 transition-transform">
                              •
                            </span>
                          </span>
                          <span className="text-slate-300 text-base sm:text-lg group-hover:text-white transition-colors">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Key Takeaways */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-slate-800/50 rounded-xl p-6 mb-12"
            >
              <h2 className="text-lg font-semibold mb-4 bg-gradient-brand text-transparent bg-clip-text">
                Principais Aprendizados
              </h2>
              <ul className="space-y-3.5">
                {episode.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-2.5" />
                    <span className="text-slate-300 text-base">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Related Blog Post */}
            {episode.relatedBlogPost && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-slate-800/50 rounded-xl p-6 mb-12"
              >
                <h2 className="text-lg font-semibold mb-4 bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text">
                  Conteúdo Relacionado
                </h2>
                <Link 
                  href={`/blog/${episode.relatedBlogPost.slug}`}
                  className="block p-4 bg-amber-500/5 rounded-lg hover:bg-amber-500/10 transition-colors"
                >
                  <h3 className="text-white font-semibold mb-2 text-base">
                    {episode.relatedBlogPost.title}
                  </h3>
                  <p className="text-slate-300 text-sm">
                    {episode.relatedBlogPost.description}
                  </p>
                  <span className="inline-flex items-center text-amber-400 text-sm mt-3 group">
                    Ler artigo
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            )}

            {/* Suggested Episodes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <SuggestedEpisodes
                episodes={podcastEpisodes}
                currentEpisodeId={episode.id}
              />
            </motion.div>
          </div>
        </div>
      </article>
    </div>
  );
} 