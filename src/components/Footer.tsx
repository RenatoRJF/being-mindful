import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B1221]/80 backdrop-blur-sm border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 md:mb-16 border-b border-slate-800/60 pb-12 md:pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text">
              Quer mais clareza, propósito e liberdade na sua jornada?
            </h2>
            <p className="text-slate-300 mb-8">
              Assine a nossa newsletter e receba conteúdos exclusivos sobre mentalidade empreendedora, renda online com consciência e os primeiros passos para construir o seu próprio negócio digital.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-amber-400 font-medium mb-4 text-center md:text-left">
                  📩 Toda semana, direto no seu e-mail:
                </h3>
                <div className="flex flex-col items-start gap-2 text-slate-300">
                  <div className="flex items-center whitespace-nowrap">
                    <span className="w-1 h-1 bg-amber-400 rounded-full mr-2"></span>
                    Reflexões práticas
                  </div>
                  <div className="flex items-center whitespace-nowrap">
                    <span className="w-1 h-1 bg-amber-400 rounded-full mr-2"></span>
                    Dicas de ação real
                  </div>
                  <div className="flex items-center whitespace-nowrap">
                    <span className="w-1 h-1 bg-amber-400 rounded-full mr-2"></span>
                    Histórias inspiradoras
                  </div>
                  <div className="flex items-center whitespace-nowrap">
                    <span className="w-1 h-1 bg-amber-400 rounded-full mr-2"></span>
                    Acesso antecipado a novos eBooks
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto md:min-w-[280px]">
                <form className="mb-4">
                  <div className="flex flex-col gap-2">
                    <input
                      type="email"
                      placeholder="Seu e-mail aqui"
                      className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/80 focus:ring-1 focus:ring-amber-500/30 [transition:border-color_0.2s_ease-out,box-shadow_0.2s_ease-out]"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      Quero receber
                    </button>
                  </div>
                </form>
                <p className="text-sm text-slate-500">
                  Não enviamos spam. Você pode sair da lista quando quiser.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Explore Section */}
          <div>
            <h3 className="text-sm font-bold mb-3 bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text tracking-wide uppercase">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/ebooks" className="text-slate-400 hover:text-amber-400 transition-colors">
                  E-books
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Podcast
                </Link>
              </li>
            </ul>
          </div>

          {/* Sobre nós Section */}
          <div>
            <h3 className="text-sm font-bold mb-3 bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text tracking-wide uppercase">
              Sobre nós
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/quem-somos" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Quem somos
                </Link>
              </li>
              <li>
                <Link href="/nossa-missao" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Nossa missão
                </Link>
              </li>
              <li>
                <Link href="/filosofia" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Filosofia
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte Section */}
          <div>
            <h3 className="text-sm font-bold mb-3 bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text tracking-wide uppercase">
              Suporte
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contato" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-amber-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Conteúdos Section */}
          <div>
            <h3 className="text-sm font-bold mb-3 bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text tracking-wide uppercase">
              Conteúdos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/ebook-gratuito" className="text-slate-400 hover:text-amber-400 transition-colors">
                  E-book gratuito
                </Link>
              </li>
              <li>
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/60 pt-8">
          <div className="text-center">
            <p className="text-sm text-slate-400">
              © {currentYear} Being Mindful. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 