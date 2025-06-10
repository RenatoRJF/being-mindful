'use client';

import { motion } from 'framer-motion';
import { PlayIcon, ClockIcon, MicrophoneIcon, SparklesIcon, HeartIcon, ChartBarIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline';
import { HoverCard } from '@/components/HoverCard';
import Link from 'next/link';
import { podcastEpisodes } from '@/lib/podcast-data';

const categories = [
  {
    name: "Empreendedorismo",
    description: "Estratégias e mentalidade para empreender com propósito",
    icon: <SparklesIcon className="w-6 h-6 text-brand-teal" />,
    episodeCount: 12
  },
  {
    name: "Finanças",
    description: "Gestão financeira e construção de riqueza consciente",
    icon: <ChartBarIcon className="w-6 h-6 text-brand-teal" />,
    episodeCount: 8
  },
  {
    name: "Produtividade",
    description: "Técnicas e hábitos para uma vida mais produtiva",
    icon: <HeartIcon className="w-6 h-6 text-brand-teal" />,
    episodeCount: 15
  },
  {
    name: "Desenvolvimento Pessoal",
    description: "Crescimento pessoal e transformação de vida",
    icon: <MicrophoneIcon className="w-6 h-6 text-brand-teal" />,
    episodeCount: 10
  }
];

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-[#0B1221] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/10 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-brand text-transparent bg-clip-text">
                Being Mindful Podcast
              </h1>
              <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gradient-brand opacity-50 rounded-full" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg lg:text-xl text-slate-300"
            >
              Conhecimento transformador em formato de áudio. Aprenda, cresça e evolua enquanto se move.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center gap-4 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <PlayIcon className="w-4 h-4 text-brand-teal" />
                <span>45+ episódios</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-brand-teal" />
                <span>30-60 min por episódio</span>
              </div>
            </motion.div>
          </div>

          {/* Featured Episodes */}
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {podcastEpisodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/podcast/${episode.slug}`} className="block h-full group">
                  <HoverCard className="h-full bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 transition-all duration-300 hover:border-brand-teal/30 hover:bg-slate-800/80">
                    {/* Audio Visualization Section */}
                    <div className="relative p-6 flex items-center gap-6 border-b border-slate-700/50">
                      {/* Play Button */}
                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-brand opacity-0 group-hover:opacity-20 rounded-full blur transition-opacity" />
                        <div className="relative w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center transform transition-transform group-hover:scale-110">
                          <PlayIcon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Audio Wave Animation */}
                      <div className="flex-1 flex items-end gap-1 h-12">
                        {[...Array(20)].map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-brand-teal/80 to-brand-purple/80 rounded-full transform origin-bottom transition-all duration-300"
                            style={{
                              height: `${Math.max(15, Math.random() * 100)}%`,
                              animation: `audioWave${i % 5} 1.5s ease-in-out infinite`,
                              animationDelay: `${i * 0.1}s`
                            }}
                          />
                        ))}
                      </div>

                      {/* Duration with Icon */}
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <ClockIcon className="w-4 h-4" />
                        <span>{episode.duration}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      {/* Category and Episode Number */}
                      <div className="flex items-center gap-3 text-sm text-brand-teal mb-4">
                        <span className="px-3 py-1 rounded-full bg-brand-teal/10 flex items-center gap-2">
                          <SpeakerWaveIcon className="w-4 h-4" />
                          {episode.category}
                        </span>
                        <span className="text-slate-400">Episódio {episode.id}</span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-brand-teal transition-colors">
                        {episode.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-base text-slate-400 line-clamp-2 mb-4">
                        {episode.description}
                      </p>
                      
                      {/* Topics */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {episode.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="text-xs px-2 py-1 rounded-full bg-slate-700/30 text-slate-300"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      
                      {/* Footer */}
                      <div className="flex items-center justify-between text-sm mt-auto">
                        <span className="text-slate-500">{episode.publishDate}</span>
                        <span className="text-brand-teal group-hover:translate-x-1 transition-transform flex items-center gap-1">
                          Ouvir agora
                          <PlayIcon className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </HoverCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-[#0B1221] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-brand text-transparent bg-clip-text">
              Explore por Categorias
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-400">
              Conteúdo organizado para facilitar seu aprendizado
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <HoverCard className="h-full bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                    {category.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 mb-4">
                    {category.description}
                  </p>
                  <div className="text-sm text-brand-teal">
                    {category.episodeCount} episódios
                  </div>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1627] via-slate-900/50 to-[#0B1221]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold bg-gradient-brand text-transparent bg-clip-text lg:text-4xl">
                Não perca nenhum episódio
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Assine nosso podcast e receba novos episódios diretamente no seu app favorito
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <button className="px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018 0-3.878 3.132-7.018 7-7.018 1.89 0 3.47.696 4.68 1.806l-1.53 1.53C14.69 7.436 13.5 6.982 12.14 6.982c-2.786 0-5.04 2.254-5.04 5.018s2.254 5.018 5.04 5.018c1.36 0 2.55-.454 3.35-1.346l1.53 1.53c-1.21 1.11-2.79 1.806-4.68 1.806z"/>
                </svg>
                Google Podcasts
              </button>
              <button className="px-6 py-3 bg-[#872EC4] text-white rounded-lg font-medium hover:bg-[#7A29B0] transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm-1.98 16.5c-2.16 0-3.9-1.74-3.9-3.9s1.74-3.9 3.9-3.9c.9 0 1.74.3 2.4.9l1.5-1.5c-1.14-.96-2.64-1.5-4.2-1.5-3.3 0-6 2.7-6 6s2.7 6 6 6c1.56 0 3.06-.54 4.2-1.5l-1.5-1.5c-.66.6-1.5.9-2.4.9zm7.98-3.9c0 2.16-1.74 3.9-3.9 3.9-.9 0-1.74-.3-2.4-.9l-1.5 1.5c1.14.96 2.64 1.5 4.2 1.5 3.3 0 6-2.7 6-6s-2.7-6-6-6c-1.56 0-3.06.54-4.2 1.5l1.5 1.5c.66-.6 1.5-.9 2.4-.9 2.16 0 3.9 1.74 3.9 3.9z"/>
                </svg>
                Spotify
              </button>
              <button className="px-6 py-3 bg-[#FC7E0F] text-white rounded-lg font-medium hover:bg-[#E67300] transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm-1.98 16.5c-2.16 0-3.9-1.74-3.9-3.9s1.74-3.9 3.9-3.9c.9 0 1.74.3 2.4.9l1.5-1.5c-1.14-.96-2.64-1.5-4.2-1.5-3.3 0-6 2.7-6 6s2.7 6 6 6c1.56 0 3.06-.54 4.2-1.5l-1.5-1.5c-.66.6-1.5.9-2.4.9zm7.98-3.9c0 2.16-1.74 3.9-3.9 3.9-.9 0-1.74-.3-2.4-.9l-1.5 1.5c1.14.96 2.64 1.5 4.2 1.5 3.3 0 6-2.7 6-6s-2.7-6-6-6c-1.56 0-3.06.54-4.2 1.5l1.5 1.5c.66-.6 1.5-.9 2.4-.9 2.16 0 3.9 1.74 3.9 3.9z"/>
                </svg>
                Apple Podcasts
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes audioWave0 {
          0%, 100% {
            transform: scaleY(0.3);
          }
          50% {
            transform: scaleY(0.9);
          }
        }

        @keyframes audioWave1 {
          0%, 100% {
            transform: scaleY(0.5);
          }
          50% {
            transform: scaleY(1);
          }
        }

        @keyframes audioWave2 {
          0%, 100% {
            transform: scaleY(0.2);
          }
          50% {
            transform: scaleY(0.7);
          }
        }

        @keyframes audioWave3 {
          0%, 100% {
            transform: scaleY(0.4);
          }
          50% {
            transform: scaleY(0.8);
          }
        }

        @keyframes audioWave4 {
          0%, 100% {
            transform: scaleY(0.1);
          }
          50% {
            transform: scaleY(0.6);
          }
        }
      `}</style>
    </div>
  );
} 