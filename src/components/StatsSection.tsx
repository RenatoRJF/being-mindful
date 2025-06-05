'use client';

import { motion } from 'framer-motion';
import { AnimatedStats } from './AnimatedStats';

export function StatsSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1221] via-slate-900/50 to-[#0B1221]" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text"
          >
            Junte-se a Milhares de Entusiastas Diários!
          </motion.h2>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/[0.03] via-amber-500/[0.05] to-amber-500/[0.03] rounded-xl" />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-[#0B1221]/60 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-amber-500/10"
            >
              <AnimatedStats 
                number={25000} 
                suffix="+" 
                duration={2.5}
              />
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-slate-200 mb-6"
              >
                Pessoas acessam nosso site todos os dias
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="space-y-4"
              >
                <p className="text-lg text-slate-300">
                  Faça parte de uma comunidade que confia no nosso conteúdo e recursos para o sucesso.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                  <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                  <span>Número atualizado em tempo real</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 