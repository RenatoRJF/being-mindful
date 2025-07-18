'use client';

import { useEffect } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { event as gaEvent } from '@/lib/gtag';
import { PodcastPlayer } from '@/components/blog/PodcastPlayer';

const MotionDiv = motion.div;

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
  <div className="absolute -top-3 -right-3 bg-brand-teal text-white px-3 py-1.5 rounded-lg text-sm font-bold animate-pulse z-10">
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
    original: 'R$ 20,00',
    current: 'R$ 12,00',
    discount: '40%'
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

const AudioPlayer = () => {
  return (
    <PodcastPlayer
      episodeId="preview"
      title="7 Passos para uma Vida Bem-sucedida"
      durationDisplay="5:30"
      audioUrl="/audios/podcast__7_passos_para_uma_vida_bemsucedida.mp3"
    />
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
    <div className="min-h-screen bg-[#0B1221] text-white pt-20 sm:pt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-10 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-center">
            {/* Book Cover - Shown first on mobile */}
            <div className="w-full order-1 lg:order-2 lg:w-1/2">
              <div className="relative w-full max-w-[320px] mx-auto sm:max-w-md lg:max-w-none">
                <MotionDiv 
                  className="relative rounded-2xl p-2 sm:p-4 flex items-center justify-center"
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
                    className="w-full h-auto max-w-full max-h-[450px] object-contain"
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
                <h2 className="text-brand-teal font-medium text-base tracking-wider">EBOOK EXCLUSIVO</h2>
                <h1 className="text-3xl font-bold leading-tight bg-gradient-brand text-transparent bg-clip-text lg:text-5xl">
                  {ebook.title}
                </h1>
                <p className="text-lg text-brand-teal/80">
                  {ebook.subtitle}
                </p>
              </div>
              
              <p className="text-base text-slate-300 leading-relaxed lg:text-lg">
                {ebook.description}
              </p>

              {/* Social Proof */}
              <div className="space-y-4">
                <HoverCard className="flex items-center gap-3 bg-gradient-brand/10 p-4 rounded-xl cursor-pointer border border-brand-teal/20">
                  <div className="flex -space-x-2">
                    {[1,2,3].map((i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-gradient-brand border-2 border-slate-800 sm:w-8 sm:h-8" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 lg:text-base">
                    <span className="text-brand-teal font-semibold">+17.000 pessoas</span> já transformaram suas vidas com este e-book
                  </p>
                </HoverCard>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Avaliações', value: '4.9/5' },
                    { label: 'Downloads', value: '17k+' }
                  ].map((stat, index) => (
                    <HoverCard 
                      key={index}
                      className="bg-slate-800/30 p-3 rounded-lg text-center cursor-pointer"
                    >
                      <div className="text-2xl font-bold bg-gradient-brand text-transparent bg-clip-text">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        {stat.label}
                      </div>
                    </HoverCard>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <div className="relative inline-flex w-full sm:w-auto">
                  <DiscountBadge discount={ebook.price.discount} />
                  <HoverButton 
                    className="w-full px-6 py-4 bg-gradient-brand rounded-xl text-base font-semibold lg:text-lg"
                    onClick={handlePurchaseClick}
                  >
                    <span className="flex flex-col items-center sm:items-start">
                      <span className="text-sm line-through opacity-75">{ebook.price.original}</span>
                      <span className="text-lg">Garantir por {ebook.price.current}</span>
                    </span>
                  </HoverButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-[#0B1221] py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-8">
          <div className="text-center mb-10 space-y-3">
            <h2 className="text-2xl font-bold bg-gradient-brand text-transparent bg-clip-text lg:text-4xl">
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
                <h3 className="text-xl font-semibold mb-3 text-brand-teal lg:text-2xl lg:mb-4">{benefit.title}</h3>
                <p className="text-base text-slate-300 lg:text-lg">{benefit.description}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#0B1221] py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-brand text-transparent bg-clip-text lg:text-4xl lg:mb-8">
                O que você vai aprender
              </h2>
              <div className="space-y-4 lg:space-y-6">
                {ebook.features.map((feature, index) => (
                  <HoverCard 
                    key={index}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-brand rounded-full flex items-center justify-center font-semibold text-base lg:w-10 lg:h-10">
                      {index + 1}
                    </div>
                    <p className="text-base text-slate-300 pt-1 lg:text-lg">{feature}</p>
                  </HoverCard>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 lg:p-12 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-brand opacity-10 blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-brand opacity-10 blur-2xl rounded-full translate-x-1/2 translate-y-1/2" />
                
                {/* Quote content */}
                <div className="relative">
                  <svg className="w-12 h-12 text-brand-teal/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote className="mb-6">
                    <p className="text-2xl font-[--font-fraunces] text-white leading-relaxed lg:text-3xl">
                      &ldquo;A jornada de mil milhas começa com um único passo.&rdquo;
                    </p>
                  </blockquote>
                  <footer className="text-brand-teal font-medium">
                    <cite className="not-italic">
                      — Lao Tsé
                    </cite>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-[#0B1221] py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-8">
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 lg:p-12">
              <div className="flex flex-col items-center gap-6 text-center md:flex-row md:gap-12 md:text-left">
                <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center shadow-lg lg:w-48 lg:h-48">
                  <Image
                    src="/logo.png"
                    alt="Time Being Mindful"
                    width={96}
                    height={96}
                    className="w-24 h-24 lg:w-36 lg:h-36"
                    priority
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    <h2 className="text-2xl font-bold bg-gradient-brand text-transparent bg-clip-text lg:text-3xl">
                      {ebook.team.name}
                    </h2>
                    <p className="text-brand-teal font-medium text-base lg:text-lg">{ebook.team.role}</p>
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
        <div className="max-w-3xl mx-auto px-4 sm:px-10 lg:px-8 text-center">
          <span className="inline-block text-brand-teal font-semibold mb-4 px-4 py-2 bg-brand-teal/10 rounded-full border border-brand-teal/20 text-sm lg:text-base">
            Oferta por Tempo Limitado
          </span>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-brand text-transparent bg-clip-text lg:text-4xl lg:mb-6">
            Comece sua transformação hoje
          </h2>
          <p className="text-base text-slate-400 mb-8 lg:text-xl lg:mb-12">
            Não perca mais tempo. Aprenda os 7 passos fundamentais para uma vida bem-sucedida 
            e comece sua jornada de transformação agora mesmo.
          </p>
          <div className="flex justify-center">
            <div className="relative inline-flex">
              <DiscountBadge discount={ebook.price.discount} />
              <HoverButton className="w-full px-8 py-4 bg-gradient-brand rounded-xl text-base font-semibold lg:px-12 lg:py-6 lg:text-xl">
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