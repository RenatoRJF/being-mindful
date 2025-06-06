"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';
import { PlayIcon } from '@heroicons/react/24/solid';

const MotionDiv = motion.div;

const ebooks = [
  {
    slug: "7-passos-para-uma-vida-bem-sucedida",
    title: "7 Passos para Ser Bem-Sucedido na Vida",
    subtitle: "Um guia essencial para clareza, equilíbrio e crescimento real",
    description: "Criado pelos especialistas da Being Mindful, este eBook é um guia essencial para quem busca clareza, equilíbrio e crescimento real. Você vai descobrir como transformar sua mentalidade, definir seu próprio conceito de sucesso, criar metas possíveis, usar melhor o tempo, proteger sua energia e, acima de tudo, agir com intenção todos os dias.",
    author: "Being Mindful",
    coverImage: "/ebooks/7-passos-para-uma-vida-bem-sucedida.png",
    price: {
      original: "R$ 20,00",
      current: "R$ 12,00",
      discount: "40%"
    },
    features: [
      "Descubra o poder de uma mentalidade que atrai oportunidades",
      "Aprenda a definir sucesso nos seus próprios termos",
      "Domine a arte de transformar grandes sonhos em passos práticos",
      "Maximize seu potencial com técnicas de gestão de tempo",
      "Desenvolva práticas para manter alta performance sem se esgotar"
    ],
    audioPreview: {
      duration: "15:30",
      url: "/audios/podcast__7_passos_para_uma_vida_bemsucedida.mp3"
    }
  }
];

const HoverCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <MotionDiv
    className={className}
    whileHover={{ 
      scale: 1.02,
      transition: { duration: 0.2 }
    }}
  >
    {children}
  </MotionDiv>
);

const DiscountBadge = ({ discount }: { discount: string }) => (
  <div className="absolute -top-2 -right-6 bg-amber-500 text-white px-2 py-1 rounded-lg text-sm font-bold animate-pulse z-10">
    -{discount}
  </div>
);

export default function EbooksPage() {
  return (
    <div className="min-h-screen bg-[#0B1221] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-16 sm:px-10 lg:px-8 lg:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="relative inline-block">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text lg:text-5xl">
                E-books Exclusivos
              </h1>
              <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gradient-to-r from-amber-500/50 via-amber-400/50 to-transparent rounded-full" />
            </div>
            <p className="text-lg text-slate-300 lg:text-xl">
              Conhecimento transformador para impulsionar sua jornada de crescimento pessoal e profissional
            </p>
          </div>

          <div className="grid gap-8 max-w-5xl mx-auto">
            {ebooks.map((ebook) => (
              <HoverCard key={ebook.slug} className="group">
                <Link href={`/ebooks/${ebook.slug}`}>
                  <div className="bg-slate-800/50 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-slate-800/70">
                    <div className="flex flex-col lg:flex-row">
                      {/* Cover Image */}
                      <div className="relative lg:w-1/2 min-h-[400px] lg:min-h-[800px] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
                        <MotionDiv
                          className="relative w-full h-full flex items-center justify-center p-6"
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
                            className="w-auto h-auto max-h-[95%] object-contain"
                            width={1000}
                            height={1600}
                            priority
                          />
                        </MotionDiv>
                      </div>

                      {/* Content */}
                      <div className="lg:w-1/2 p-8 flex flex-col">
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <h2 className="text-xl font-semibold bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text lg:text-2xl">
                              {ebook.title}
                            </h2>
                            <p className="text-amber-100/80 text-sm lg:text-base">
                              {ebook.subtitle}
                            </p>
                          </div>

                          <p className="text-slate-300 text-sm lg:text-base">
                            {ebook.description}
                          </p>

                          {/* Features */}
                          <div className="space-y-3">
                            {ebook.features.map((feature, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">
                                  {index + 1}
                                </div>
                                <p className="text-sm text-slate-300 lg:text-base">{feature}</p>
                              </div>
                            ))}
                          </div>

                          {/* Audio Preview */}
                          <div className="flex items-center gap-2 text-amber-400/80 text-sm">
                            <PlayIcon className="w-4 h-4" />
                            <span>Prévia em áudio • {ebook.audioPreview.duration}</span>
                          </div>

                          {/* Price and CTA */}
                          <div className="flex items-center justify-between pt-4">
                            <div className="relative pr-6">
                              <DiscountBadge discount={ebook.price.discount} />
                              <div className="flex flex-col">
                                <span className="text-sm line-through text-slate-400">{ebook.price.original}</span>
                                <span className="text-lg font-semibold text-amber-400">{ebook.price.current}</span>
                              </div>
                            </div>
                            <div className="text-amber-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                              Ver detalhes
                              <svg
                                className="ml-2 w-4 h-4 inline-block"
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#0B1221] py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text lg:text-4xl">
              Por que nossos e-books são diferentes?
            </h2>
            <p className="text-base text-slate-400 lg:text-xl">
              Conhecimento prático e transformador, desenvolvido por especialistas
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Conteúdo Prático",
                description: "Aprenda com exercícios e técnicas que você pode aplicar imediatamente"
              },
              {
                title: "Baseado em Evidências",
                description: "Metodologias testadas e comprovadas por especialistas"
              },
              {
                title: "Suporte Contínuo",
                description: "Acesso a materiais complementares e atualizações"
              }
            ].map((benefit, index) => (
              <HoverCard
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl cursor-pointer lg:p-8"
              >
                <h3 className="text-xl font-semibold mb-3 text-amber-100 lg:text-2xl lg:mb-4">
                  {benefit.title}
                </h3>
                <p className="text-base text-slate-300 lg:text-lg">
                  {benefit.description}
                </p>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
