'use client';

import { AnimatedButton } from "@/components/AnimatedButton";
import { StatsSection } from "@/components/StatsSection";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const position = (scrolled / maxScroll) * 100;
      setGradientPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToQuemSomos = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('quem-somos');
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (window.location.hash === '#quem-somos') {
      setTimeout(() => {
        const element = document.getElementById('quem-somos');
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="min-h-screen min-w-screen flex flex-col bg-[#0B1221] relative overflow-hidden">
      {/* Main Background */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none">
        {/* Gradient Background */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-brand-purple/10 via-transparent to-brand-teal/5" />
        
        {/* Radial Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-brand-purple/20 via-brand-purple/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-brand-teal/20 via-brand-teal/5 to-transparent rounded-full blur-3xl" />
        
        {/* Dots Pattern */}
        <div className="absolute inset-0 w-full h-full bg-[url('/dots-pattern.svg')] bg-repeat opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      </div>

      <div className="flex-grow relative w-full">
        {/* Hero Section */}
        <div className="relative min-h-screen md:h-screen w-full">
          <AnimatedSection 
            className="relative h-full w-full flex items-center justify-center overflow-hidden pb-24 md:pb-0"
            direction="up"
          >
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-48 md:pt-56 pb-12 md:pb-24 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6 md:mb-8"
              >
                <motion.div 
                  className="relative inline-block mb-6 md:mb-8"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative">
                    <span className="block px-6 py-2 text-sm md:text-base font-medium bg-gradient-to-r from-brand-purple/10 via-brand-teal/10 to-brand-purple/10 rounded-full border border-brand-purple/20">
                      <span className="bg-gradient-brand text-transparent bg-clip-text">
                        Desperte sua melhor versão
                      </span>
                    </span>
                    <div className="absolute -inset-px bg-gradient-to-r from-brand-purple/50 via-brand-purple/10 to-brand-purple/50 rounded-full blur-md opacity-20" />
                  </div>
                </motion.div>

                <div>
                  <div className="relative inline-block mb-4 md:mb-6">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-brand text-transparent bg-clip-text leading-tight">
                      Transforme sua vida com
                    </h1>
                    <div className="absolute -bottom-3 left-0 w-3/4 h-[3px] bg-gradient-brand opacity-50 rounded-full" />
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6">
                    <span className="text-brand-teal">mindfulness e propósito</span>
                  </h1>
                </div>
                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Descubra como viver com mais consciência, clareza e equilíbrio através de nossa abordagem única que combina mindfulness e desenvolvimento pessoal.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12"
              >
                <AnimatedButton 
                  href="#quem-somos"
                  variant="primary"
                  onClick={scrollToQuemSomos}
                >
                  Conheça nossa missão
                </AnimatedButton>
                <AnimatedButton 
                  href="/blog"
                  variant="secondary"
                  openInNewTab={false}
                >
                  Explore nosso conteúdo
                </AnimatedButton>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-12"
              >
                {[
                  {
                    icon: "/meditation.svg",
                    title: "Mindfulness Diário",
                    description: "Práticas simples e eficazes para integrar a consciência plena no seu dia a dia"
                  },
                  {
                    icon: "/growth.svg",
                    title: "Crescimento Pessoal",
                    description: "Ferramentas e insights para desenvolver seu potencial e alcançar seus objetivos"
                  },
                  {
                    icon: "/balance.svg",
                    title: "Vida Equilibrada",
                    description: "Estratégias para harmonizar trabalho, vida pessoal e bem-estar"
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="relative p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm"
                  >
                    <div className="absolute -inset-px bg-gradient-to-r from-brand-purple/10 via-brand-purple/5 to-transparent rounded-xl" />
                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-purple/20 to-brand-teal/20 flex items-center justify-center mb-4">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={24}
                          height={24}
                          className="text-brand-teal"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm text-slate-400">Scroll para descobrir mais</span>
                  <div className="w-6 h-10 rounded-full border-2 border-slate-400 flex items-start p-1">
                    <motion.div
                      className="w-full h-2 bg-slate-400 rounded-full"
                      animate={{
                        y: [0, 20, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* About Section */}
        <AnimatedSection 
          delay={0.2} 
          className="relative"
          direction="down"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1221] via-[#0B1221]/50 to-[#0B1221]/80" />
          
          <div className="relative py-16 md:py-32">
            <div id="quem-somos" className="max-w-6xl mx-auto px-6 scroll-mt-[400px]">
              <div className="max-w-3xl mx-auto mb-12 md:mb-20">
                <div className="relative">
                  <h2 className="text-3xl font-bold mb-8 md:mb-12 bg-gradient-brand text-transparent bg-clip-text text-center">
                    Quem Somos – Being Mindful
                  </h2>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-brand opacity-50 rounded-full" />
                </div>
                
                <div className="prose prose-lg prose-invert mx-auto">
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                    Somos um grupo de especialistas apaixonados por desenvolvimento pessoal e liberdade consciente. 
                    Sabemos que muitas pessoas buscam uma vida mais equilibrada e significativa. 
                    <span className="text-white">Mas poucas sabem como fazer isso de forma estruturada, sustentável… e com equilíbrio.</span>
                  </p>
                </div>
              </div>

              <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <div className="order-2 lg:order-1">
                  <div className="space-y-6 md:space-y-8">
                    <div>
                      <p className="text-white font-medium mb-3">E nossa missão é clara:</p>
                      <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed">
                        Te ajudar a construir uma vida que te dê orgulho — uma escolha de cada vez.
                      </p>
                    </div>

                    <div className="pt-6 md:pt-8 space-y-2 text-lg italic text-slate-300">
                      <p>Seja muito bem-vindo(a).</p>
                      <p>Você não está aqui por acaso.</p>
                      <p className="text-brand-teal font-medium">E sua jornada de crescimento começa agora.</p>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="relative">
                      <h3 className="text-2xl font-medium text-brand-teal mb-8 md:mb-10">
                        O que nos torna diferentes:
                      </h3>
                      <div className="space-y-8 md:space-y-10">
                        <div className="group">
                          <div className="flex items-start gap-6">
                            <div className="relative mt-2">
                              <div 
                                className="w-3 h-3 bg-gradient-to-r from-brand-teal/60 via-brand-purple/60 to-brand-teal/60 rounded-full group-hover:scale-110 group-hover:opacity-100 transition-all shadow-[0_0_10px_rgba(45,212,191,0.3)] ring-2 ring-brand-teal/20 opacity-60"
                                style={{
                                  backgroundSize: '200% 100%',
                                  backgroundPosition: `${gradientPosition}% 0`
                                }}
                              />
                            </div>
                            <div>
                              <h4 className="text-xl text-white font-medium mb-2 group-hover:text-brand-teal transition-colors">
                                Mentalidade empreendedora
                              </h4>
                              <p className="text-slate-300 leading-relaxed">
                                Desenvolvemos uma mentalidade forte e resiliente, essencial para o sucesso sustentável.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="group">
                          <div className="flex items-start gap-6">
                            <div className="relative mt-2">
                              <div 
                                className="w-3 h-3 bg-gradient-to-r from-brand-teal/60 via-brand-purple/60 to-brand-teal/60 rounded-full group-hover:scale-110 group-hover:opacity-100 transition-all shadow-[0_0_10px_rgba(45,212,191,0.3)] ring-2 ring-brand-teal/20 opacity-60"
                                style={{
                                  backgroundSize: '200% 100%',
                                  backgroundPosition: `${gradientPosition}% 0`
                                }}
                              />
                            </div>
                            <div>
                              <h4 className="text-xl text-white font-medium mb-2 group-hover:text-brand-teal transition-colors">
                                Rotina com intenção
                              </h4>
                              <p className="text-slate-300 leading-relaxed">
                                Criamos hábitos e rotinas que alinham suas ações com seus objetivos mais profundos.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="group">
                          <div className="flex items-start gap-6">
                            <div className="relative mt-2">
                              <div 
                                className="w-3 h-3 bg-gradient-to-r from-brand-teal/60 via-brand-purple/60 to-brand-teal/60 rounded-full group-hover:scale-110 group-hover:opacity-100 transition-all shadow-[0_0_10px_rgba(45,212,191,0.3)] ring-2 ring-brand-teal/20 opacity-60"
                                style={{
                                  backgroundSize: '200% 100%',
                                  backgroundPosition: `${gradientPosition}% 0`
                                }}
                              />
                            </div>
                            <div>
                              <h4 className="text-xl text-white font-medium mb-2 group-hover:text-brand-teal transition-colors">
                                Negócio digital com alma
                              </h4>
                              <p className="text-slate-300 leading-relaxed">
                                Construímos negócios que refletem seus valores e geram impacto positivo genuíno.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="group">
                          <div className="flex items-start gap-6">
                            <div className="relative mt-2">
                              <div 
                                className="w-3 h-3 bg-gradient-to-r from-brand-teal/60 via-brand-purple/60 to-brand-teal/60 rounded-full group-hover:scale-110 group-hover:opacity-100 transition-all shadow-[0_0_10px_rgba(45,212,191,0.3)] ring-2 ring-brand-teal/20 opacity-60"
                                style={{
                                  backgroundSize: '200% 100%',
                                  backgroundPosition: `${gradientPosition}% 0`
                                }}
                              />
                            </div>
                            <div>
                              <h4 className="text-xl text-white font-medium mb-2 group-hover:text-brand-teal transition-colors">
                                Ação prática, sem fórmulas mágicas
                              </h4>
                              <p className="text-slate-300 leading-relaxed">
                                Focamos em estratégias comprovadas e ações concretas que trazem resultados reais.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection 
          delay={0.3}
          direction="up"
        >
          <StatsSection />
        </AnimatedSection>
      </div>
    </main>
  );
}
