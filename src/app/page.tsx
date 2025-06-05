import { AnimatedLogo } from "@/components/AnimatedLogo";
import { AnimatedText } from "@/components/AnimatedText";
import { AnimatedButton } from "@/components/AnimatedButton";
import { StatsSection } from "@/components/StatsSection";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0B1221]">
      <div className="flex-grow">
        <AnimatedSection 
          className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
          direction="up"
        >
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <AnimatedLogo />
            
            <AnimatedText delay={0.2} className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              <ol>
                <li className="mb-2 tracking-[-.01em]">
                  Get started by editing{" "}
                  <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                    src/app/page.tsx
                  </code>
                  .
                </li>
                <li className="tracking-[-.01em]">
                  Save and see your changes instantly.
                </li>
              </ol>
            </AnimatedText>

            <AnimatedText delay={0.4} className="flex gap-4 items-center flex-col sm:flex-row">
              <AnimatedButton 
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                variant="secondary"
                icon={{
                  src: "/vercel.svg",
                  alt: "Vercel logomark"
                }}
              >
                Deploy now
              </AnimatedButton>

              <AnimatedButton 
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                variant="secondary"
              >
                Read our docs
              </AnimatedButton>
            </AnimatedText>
          </main>

          <AnimatedText delay={0.6} className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            <AnimatedButton 
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              variant="secondary"
              icon={{
                src: "/file.svg",
                alt: "File icon"
              }}
            >
              Learn
            </AnimatedButton>

            <AnimatedButton 
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              variant="secondary"
              icon={{
                src: "/window.svg",
                alt: "Window icon"
              }}
            >
              Examples
            </AnimatedButton>

            <AnimatedButton 
              href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              variant="secondary"
              icon={{
                src: "/globe.svg",
                alt: "Globe icon"
              }}
            >
              Go to nextjs.org →
            </AnimatedButton>
          </AnimatedText>
        </AnimatedSection>

        <AnimatedSection 
          delay={0.2} 
          className="relative"
          direction="down"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1221] via-slate-900/50 to-slate-900/80" />
          
          <div className="relative py-16 md:py-32">
            <div className="max-w-6xl mx-auto px-6">
              <div className="max-w-3xl mx-auto mb-12 md:mb-20">
                <h2 className="text-3xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text text-center">
                  Quem Somos – Being Mindful
                </h2>
                
                <div className="prose prose-lg prose-invert mx-auto">
                  <div className="space-y-4 md:space-y-6 text-slate-300">
                    <p className="text-xl text-slate-200 leading-relaxed">
                      Na Being Mindful, acreditamos que o sucesso verdadeiro vai muito além de dinheiro ou status.
                    </p>

                    <p className="text-xl font-medium text-white leading-relaxed">
                      Nosso propósito é ajudar pessoas comuns a conquistarem liberdade — financeira, emocional e pessoal — por meio de uma nova forma de empreender: com consciência, clareza e propósito.
                    </p>

                    <div className="text-lg space-y-2 leading-relaxed">
                      <p>Sabemos que o mundo mudou.</p>
                      <p>Hoje, qualquer pessoa pode viver de renda online.</p>
                      <p>Mas poucas sabem como fazer isso de forma estruturada, sustentável… e com equilíbrio.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-r from-amber-500/[0.03] via-amber-500/[0.05] to-amber-500/[0.03] rounded-xl md:rounded-2xl" />
                
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start max-w-5xl mx-auto">
                  <div>
                    <h3 className="text-lg font-medium text-amber-400 mb-4 md:mb-6">
                      O que nos torna diferentes:
                    </h3>
                    <div className="grid gap-3 md:gap-4">
                      <div className="flex items-center gap-3 bg-[#0B1221]/60 backdrop-blur-sm p-4 md:p-5 rounded-lg border border-amber-500/10">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                        <span className="text-slate-200">Mentalidade empreendedora</span>
                      </div>
                      <div className="flex items-center gap-3 bg-[#0B1221]/60 backdrop-blur-sm p-4 md:p-5 rounded-lg border border-amber-500/10">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                        <span className="text-slate-200">Rotina com intenção</span>
                      </div>
                      <div className="flex items-center gap-3 bg-[#0B1221]/60 backdrop-blur-sm p-4 md:p-5 rounded-lg border border-amber-500/10">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                        <span className="text-slate-200">Negócio digital com alma</span>
                      </div>
                      <div className="flex items-center gap-3 bg-[#0B1221]/60 backdrop-blur-sm p-4 md:p-5 rounded-lg border border-amber-500/10">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                        <span className="text-slate-200">Ação prática, sem fórmulas mágicas</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:pt-12">
                    <div className="space-y-4 md:space-y-6 text-slate-300">
                      <p className="text-lg">
                        Somos um grupo de especialistas apaixonados por desenvolvimento pessoal e liberdade consciente.
                      </p>
                      <div>
                        <p className="text-white font-medium mb-2">E nossa missão é clara:</p>
                        <p className="text-xl text-amber-400 font-medium">
                          te ajudar a construir uma vida que te dê orgulho — uma escolha de cada vez.
                        </p>
                      </div>

                      <div className="pt-6 md:pt-8 space-y-1 text-lg italic">
                        <p>Seja muito bem-vindo(a).</p>
                        <p>Você não está aqui por acaso.</p>
                        <p className="text-amber-400 font-medium">E sua jornada de crescimento começa agora.</p>
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

        <div className="h-16 md:h-24 bg-gradient-to-b from-slate-900/80 to-[#0B1221]"></div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
