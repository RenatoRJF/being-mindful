'use client';

import { motion } from 'framer-motion';
import { PlayIcon, ClockIcon, MicrophoneIcon, SparklesIcon, HeartIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { HoverCard } from '@/components/HoverCard';

// Mock data for podcast episodes
const featuredEpisodes = [
  {
    id: 1,
    title: "Mentalidade Empreendedora: Como Começar do Zero",
    description: "Neste episódio, exploramos os primeiros passos para desenvolver uma mentalidade empreendedora e como superar os medos iniciais.",
    duration: "45:30",
    category: "Empreendedorismo",
    image: "/podcast/episode-1.jpg",
    audioUrl: "/podcast/episode-1.mp3",
    date: "2024-03-15"
  },
  {
    id: 2,
    title: "Liberdade Financeira: Estratégias Práticas",
    description: "Descubra como construir múltiplas fontes de renda e alcançar a liberdade financeira através de estratégias testadas e comprovadas.",
    duration: "52:15",
    category: "Finanças",
    image: "/podcast/episode-2.jpg",
    audioUrl: "/podcast/episode-2.mp3",
    date: "2024-03-08"
  },
  {
    id: 3,
    title: "Mindfulness no Trabalho: Produtividade com Propósito",
    description: "Aprenda técnicas de mindfulness para aumentar sua produtividade e encontrar mais significado no seu trabalho diário.",
    duration: "38:45",
    category: "Produtividade",
    image: "/podcast/episode-3.jpg",
    audioUrl: "/podcast/episode-3.mp3",
    date: "2024-03-01"
  }
];

const categories = [
  {
    name: "Empreendedorismo",
    description: "Estratégias e mentalidade para empreender com propósito",
    icon: <SparklesIcon className="w-6 h-6" />,
    episodeCount: 12
  },
  {
    name: "Finanças",
    description: "Gestão financeira e construção de riqueza consciente",
    icon: <ChartBarIcon className="w-6 h-6" />,
    episodeCount: 8
  },
  {
    name: "Produtividade",
    description: "Técnicas e hábitos para uma vida mais produtiva",
    icon: <HeartIcon className="w-6 h-6" />,
    episodeCount: 15
  },
  {
    name: "Desenvolvimento Pessoal",
    description: "Crescimento pessoal e transformação de vida",
    icon: <MicrophoneIcon className="w-6 h-6" />,
    episodeCount: 10
  }
];

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-[#0B1221] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-8 py-24 sm:px-10 lg:px-8 lg:py-32 relative">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text lg:text-5xl">
                Being Mindful Podcast
              </h1>
              <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gradient-to-r from-amber-500/50 via-amber-400/50 to-transparent rounded-full" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-slate-300 lg:text-xl"
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
                <PlayIcon className="w-4 h-4 text-amber-400" />
                <span>45+ episódios</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-amber-400" />
                <span>30-60 min por episódio</span>
              </div>
            </motion.div>
          </div>

          {/* Featured Episodes */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredEpisodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <HoverCard className="h-full bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 cursor-pointer">
                  <div className="aspect-video bg-slate-900 relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center transform transition-transform group-hover:scale-110">
                        <PlayIcon className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-amber-400 mb-3">
                      <span className="px-2 py-1 rounded-full bg-amber-500/10">
                        {episode.category}
                      </span>
                      <span>•</span>
                      <span>{episode.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-amber-400 transition-colors">
                      {episode.title}
                    </h3>
                    
                    <p className="text-slate-400 line-clamp-2 mb-4">
                      {episode.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span>{new Date(episode.date).toLocaleDateString('pt-BR', { 
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}</span>
                      <button className="text-amber-400 hover:text-amber-300 transition-colors">
                        Ouvir episódio →
                      </button>
                    </div>
                  </div>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-[#0D1627] py-24">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text lg:text-4xl">
              Explore por Categorias
            </h2>
            <p className="text-base text-slate-400 lg:text-xl">
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
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {category.name}
                  </h3>
                  <p className="text-slate-400 mb-4">
                    {category.description}
                  </p>
                  <div className="text-sm text-amber-400">
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
        
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text lg:text-4xl">
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
    </div>
  );
} 