'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PodcastEpisode } from '@/lib/podcast-data';
import { PlayIcon } from '@heroicons/react/24/outline';

interface SuggestedEpisodesProps {
  episodes: PodcastEpisode[];
  currentEpisodeId: string;
}

export function SuggestedEpisodes({ episodes, currentEpisodeId }: SuggestedEpisodesProps) {
  // Filter out current episode and get suggested episodes
  const suggestedEpisodes = episodes.filter(ep => ep.id !== currentEpisodeId);

  if (suggestedEpisodes.length === 0) return null;

  return (
    <div className="w-full mt-8 sm:mt-12 lg:mt-0">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-0">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text">
          Episódios Sugeridos
        </h2>
        
        <div className="space-y-3 sm:space-y-4">
          {suggestedEpisodes.map((episode) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Link
                href={`/podcast/${episode.slug}`}
                className="block group w-full"
              >
                <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 transition-all duration-300 hover:border-amber-500/30 hover:bg-slate-800/80">
                  <div className="relative p-3 sm:p-4 md:p-5">
                    <div className="flex gap-3 md:gap-4">
                      <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-500/10 flex items-center justify-center transform transition-transform group-hover:scale-110">
                        <PlayIcon className="w-4 h-4 md:w-5 md:h-5 text-brand-teal" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start sm:items-center gap-3 md:gap-4">
                          <div className="flex-1">
                            <h3 className="text-sm md:text-base font-medium text-white group-hover:text-amber-400 transition-colors line-clamp-2 leading-tight">
                              {episode.title}
                            </h3>
                            <div className="flex items-center gap-2 text-xs md:text-sm text-amber-400 mt-1.5 md:mt-2">
                              <span className="inline-flex px-2 py-0.5 rounded-full bg-amber-500/10 whitespace-nowrap">
                                {episode.category}
                              </span>
                              <span className="text-slate-500">{episode.duration}</span>
                            </div>
                          </div>
                          <span className="hidden sm:block flex-shrink-0 text-amber-400 transform transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <span className="sm:hidden absolute bottom-3 right-3 text-amber-400 transform transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 