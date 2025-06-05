'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlayIcon, PauseIcon, ArrowPathIcon } from '@heroicons/react/24/solid';
import { useState, useRef, useEffect } from 'react';
import { MotionDiv } from '@/components/motion';
import { event as gaEvent } from '@/lib/gtag';

interface EbookPageProps {
  params: {
    slug: string;
  };
}

const HoverCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <MotionDiv
    className={`${className}`}
    whileHover={{ 
      scale: 1.02,
      transition: { duration: 0.2 }
    }}
  >
    {children}
  </MotionDiv>
);

const DiscountBadge = ({ discount }: { discount: string }) => (
  <div className="absolute -top-3 -right-3 bg-amber-500 text-white px-3 py-1.5 rounded-lg text-sm font-bold animate-pulse z-10">
    -{discount}
  </div>
);

const ebook = {
  slug: '7-passos-para-uma-vida-bem-sucedida',
  title: '7 Passos para Ser Bem-Sucedido na Vida',
  subtitle: 'Um guia essencial para clareza, equilíbrio e crescimento real',
  description: 'Criado pelos especialistas da Being Mindful, este eBook é um guia essencial para quem busca clareza, equilíbrio e crescimento real. Você vai descobrir como transformar sua mentalidade, definir seu próprio conceito de sucesso, criar metas possíveis, usar melhor o tempo, proteger sua energia e, acima de tudo, agir com intenção todos os dias.',
  features: [
    'Descubra o poder de uma mentalidade que atrai oportunidades e supera obstáculos',
    'Aprenda a definir sucesso nos seus próprios termos e trace um caminho autêntico',
    'Domine a arte de transformar grandes sonhos em passos práticos e alcançáveis',
    'Maximize seu potencial descobrindo como os bem-sucedidos gerenciam seu tempo',
    'Desenvolva práticas poderosas para manter alta performance sem se esgotar',
    'Entenda como criar um ambiente que naturalmente te impulsiona ao crescimento',
    'Liberte-se do perfeccionismo e aprenda a progredir de verdade'
  ],
  benefits: [
    {
      title: 'Clareza Mental',
      description: 'Desenvolva uma mentalidade focada e aprenda a definir seu próprio conceito de sucesso'
    },
    {
      title: 'Ação Consciente',
      description: 'Transforme conhecimento em prática com exercícios simples e eficazes'
    },
    {
      title: 'Crescimento Real',
      description: 'Crie um mapa personalizado para seu desenvolvimento contínuo'
    }
  ],
  price: {
    original: 'R$ 12,00',
    current: 'R$ 7,00',
    discount: '42%'
  },
  team: {
    name: 'Time Being Mindful',
    role: 'Especialistas em Mindfulness e Desenvolvimento Pessoal',
    bio: 'A Being Mindful reúne especialistas dedicados a tornar o desenvolvimento pessoal mais acessível e efetivo. Nossa equipe multidisciplinar combina décadas de experiência em práticas contemplativas, psicologia positiva e desenvolvimento humano. Integramos conhecimentos ancestrais com ciência moderna para criar metodologias práticas e transformadoras, sempre com o compromisso de ajudar as pessoas a encontrarem clareza, equilíbrio e propósito em suas vidas.'
  },
  coverImage: '/ebooks/7-passos-para-uma-vida-bem-sucedida.png'
};

const HoverButton = ({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => (
  <MotionDiv
    className={`${className}`}
    whileHover={{ 
      scale: 1.02,
      transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
  >
    {children}
  </MotionDiv>
);

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        gaEvent({
          action: 'audio_pause',
          category: 'Audio',
          label: '7 Passos para uma Vida Bem-sucedida',
          value: Math.floor(currentTime)
        });
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            setError(true);
          });
        }
        gaEvent({
          action: 'audio_play',
          category: 'Audio',
          label: '7 Passos para uma Vida Bem-sucedida',
          value: Math.floor(currentTime)
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleReplay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      setIsFinished(false);
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setError(true);
        });
      }
      setIsPlaying(true);
      gaEvent({
        action: 'audio_replay',
        category: 'Audio',
        label: '7 Passos para uma Vida Bem-sucedida'
      });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setIsFinished(true);
    gaEvent({
      action: 'audio_complete',
      category: 'Audio',
      label: '7 Passos para uma Vida Bem-sucedida',
      value: Math.floor(duration)
    });
  };

  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && audioRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const percentage = x / rect.width;
      const newTime = percentage * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setIsFinished(false);
      gaEvent({
        action: 'audio_seek',
        category: 'Audio',
        label: '7 Passos para uma Vida Bem-sucedida',
        value: Math.floor(newTime)
      });
    }
  };

  return (
    <div className="mt-6 bg-slate-800/50 rounded-xl p-4 space-y-4">
      <div className="flex items-center gap-4">
        <button
          onClick={isFinished ? handleReplay : togglePlay}
          className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
        >
          {isFinished ? (
            <ArrowPathIcon className="w-6 h-6 text-white" />
          ) : isPlaying ? (
            <PauseIcon className="w-6 h-6 text-white" />
          ) : (
            <PlayIcon className="w-6 h-6 text-white" />
          )}
        </button>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-amber-400">PRÉVIA EM ÁUDIO</h3>
          {error ? (
            <p className="text-sm text-amber-200">Erro ao carregar o áudio</p>
          ) : isFinished ? (
            <p className="text-sm text-slate-300">Clique para ouvir novamente</p>
          ) : (
            <p className="text-sm text-slate-300">Ouça uma introdução do conteúdo</p>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div 
          ref={progressBarRef}
          className="h-1.5 bg-slate-700 rounded-full overflow-hidden cursor-pointer relative"
          onClick={handleProgressBarClick}
        >
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-100"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
          <div 
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: `${(currentTime / duration) * 100}%` }}
          >
            <div className="w-3 h-3 bg-white rounded-full shadow-lg -ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
        <div className="flex justify-between text-xs text-slate-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <audio
        ref={audioRef}
        src="/audios/podcast__7_passos_para_uma_vida_bemsucedida.mp3"
        onError={() => setError(true)}
        onEnded={handleEnded}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        className="hidden"
      />
    </div>
  );
};

export default function EbookPage({ params }: EbookPageProps) {
  useEffect(() => {
    // Track page view duration
    const startTime = Date.now();
    
    return () => {
      const duration = Math.floor((Date.now() - startTime) / 1000); // duration in seconds
      gaEvent({
        action: 'page_duration',
        category: 'Page',
        label: '7 Passos para uma Vida Bem-sucedida',
        value: duration
      });
    };
  }, []);

  const handlePurchaseClick = () => {
    gaEvent({
      action: 'purchase_click',
      category: 'Purchase',
      label: '7 Passos para uma Vida Bem-sucedida',
      value: 47 // Price in BRL
    });
  };

  if (params.slug !== ebook.slug) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0B1221] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-8 sm:px-10 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-center">
            {/* Book Cover - Shown first on mobile */}
            <div className="w-full order-1 lg:order-2 lg:w-1/2">
              <div className="relative max-w-[280px] mx-auto sm:max-w-md lg:max-w-none">
                <MotionDiv 
                  className="relative rounded-2xl p-4 flex items-center justify-center"
                  animate={{
                    y: [0, -4, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src={ebook.coverImage}
                    alt={`${ebook.title} capa`}
                    className="w-full h-auto max-h-[400px] lg:max-h-[600px] object-contain"
                    width={400}
                    height={533}
                    priority
                    quality={100}
                  />
                </MotionDiv>
                <AudioPlayer />
              </div>
            </div>

            {/* Content */}
            <div className="w-full order-2 lg:order-1 lg:w-1/2 space-y-6">
              <div className="space-y-3">
                <h2 className="text-amber-400 font-medium text-base tracking-wider">EBOOK EXCLUSIVO</h2>
                <h1 className="text-3xl font-bold leading-tight bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text lg:text-5xl">
                  {ebook.title}
                </h1>
                <p className="text-lg text-amber-100/80">
                  {ebook.subtitle}
                </p>
              </div>
              
              <p className="text-base text-slate-300 leading-relaxed lg:text-lg">
                {ebook.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <div className="relative inline-flex">
                  <DiscountBadge discount={ebook.price.discount} />
                  <HoverButton 
                    className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-base font-semibold sm:w-auto lg:text-lg"
                    onClick={handlePurchaseClick}
                  >
                    <span className="flex flex-col items-center sm:items-start">
                      <span className="text-sm line-through opacity-75">{ebook.price.original}</span>
                      <span className="text-lg">Garantir por {ebook.price.current}</span>
                    </span>
                  </HoverButton>
                </div>
                <HoverButton 
                  className="w-full px-6 py-4 bg-slate-800/50 rounded-xl text-base font-semibold sm:w-auto lg:text-lg"
                  onClick={() => {
                    gaEvent({
                      action: 'preview_click',
                      category: 'Preview',
                      label: '7 Passos para uma Vida Bem-sucedida'
                    });
                  }}
                >
                  Ver prévia gratuita
                </HoverButton>
              </div>

              {/* Social Proof */}
              <HoverCard className="flex items-center gap-3 bg-slate-800/30 p-4 rounded-xl cursor-pointer">
                <div className="flex -space-x-2">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 border-2 border-slate-800 sm:w-8 sm:h-8" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 lg:text-base">
                  <span className="text-amber-400 font-semibold">+150 pessoas</span> já compraram este e-book esta semana
                </p>
              </HoverCard>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-[#0D1627] py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-8">
          <div className="text-center mb-10 space-y-3">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text lg:text-4xl">
              Transforme sua vida hoje
            </h2>
            <p className="text-base text-slate-400 lg:text-xl">
              Descubra como nosso e-book pode ajudar você a alcançar seus objetivos
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {ebook.benefits.map((benefit, index) => (
              <HoverCard 
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl cursor-pointer lg:p-8"
              >
                <h3 className="text-xl font-semibold mb-3 text-amber-100 lg:text-2xl lg:mb-4">{benefit.title}</h3>
                <p className="text-base text-slate-300 lg:text-lg">{benefit.description}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#0B1221] py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text lg:text-4xl lg:mb-8">
                O que você vai aprender
              </h2>
              <div className="space-y-4 lg:space-y-6">
                {ebook.features.map((feature, index) => (
                  <HoverCard 
                    key={index}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center font-semibold text-base lg:w-10 lg:h-10">
                      {index + 1}
                    </div>
                    <p className="text-base text-slate-300 pt-1 lg:text-lg">{feature}</p>
                  </HoverCard>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <HoverCard className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center cursor-pointer lg:w-16 lg:h-16">
                    <svg className="w-6 h-6 text-white lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </HoverCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-[#0D1627] py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-8">
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 lg:p-12">
              <div className="flex flex-col items-center gap-6 text-center md:flex-row md:gap-12 md:text-left">
                <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center shadow-lg lg:w-48 lg:h-48">
                  <span className="font-[--font-fraunces] text-4xl font-bold bg-gradient-to-br from-white via-amber-100 to-amber-200 text-transparent bg-clip-text tracking-tighter lg:text-6xl">
                    BM
                  </span>
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text lg:text-3xl">
                      {ebook.team.name}
                    </h2>
                    <p className="text-amber-400 font-medium text-base lg:text-lg">{ebook.team.role}</p>
                  </div>
                  <p className="text-base text-slate-300 lg:text-xl">
                    {ebook.team.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0B1221] py-12 sm:py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-8 sm:px-10 lg:px-8 text-center">
          <span className="inline-block text-amber-400 font-semibold mb-4 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/20 text-sm lg:text-base">
            Oferta por Tempo Limitado
          </span>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text lg:text-4xl lg:mb-6">
            Comece sua transformação hoje
          </h2>
          <p className="text-base text-slate-400 mb-8 lg:text-xl lg:mb-12">
            Não perca mais tempo. Aprenda os 7 passos fundamentais para uma vida bem-sucedida 
            e comece sua jornada de transformação agora mesmo.
          </p>
          <div className="flex justify-center">
            <div className="relative inline-flex">
              <DiscountBadge discount={ebook.price.discount} />
              <HoverButton className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-base font-semibold lg:px-12 lg:py-6 lg:text-xl">
                <span className="flex flex-col items-center">
                  <span className="text-sm line-through opacity-75">{ebook.price.original}</span>
                  <span className="text-lg">Garantir por {ebook.price.current}</span>
                </span>
              </HoverButton>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-400 lg:text-base">
            🔒 Pagamento 100% seguro • Satisfação garantida
          </p>
        </div>
      </div>
    </div>
  );
} 