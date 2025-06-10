'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Suspense, useEffect, useState } from 'react';
import { MobileMenu } from './MobileMenu';
import { ScrollProgress } from './ScrollProgress';
import Image from 'next/image';
import { SocialLinks } from './SocialLinks';

function NavigationContent() {
  const pathname = usePathname();
  const router = useRouter();
  const [isQuemSomosInView, setIsQuemSomosInView] = useState(false);

  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      const section = document.getElementById('quem-somos');
      if (!section) return;

      const windowHeight = window.innerHeight;
      const rect = section.getBoundingClientRect();
      const inView = rect.top <= windowHeight * 0.6 && rect.bottom >= windowHeight * 0.4;
      setIsQuemSomosInView(inView);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const links = [
    { 
      href: '/', 
      label: 'Início',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        if (pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          router.push('/');
        }
      }
    },
    { 
      href: '/#quem-somos', 
      label: 'Quem somos',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        if (pathname === '/') {
          const element = document.getElementById('quem-somos');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          router.push('/#quem-somos');
        }
      }
    },
    { href: '/podcast', label: 'Podcast' },
    { href: '/blog', label: 'Blog' },
    { href: '/ebooks', label: 'E-books' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-30 bg-gradient-to-b from-slate-900/80 to-transparent backdrop-blur-sm">
        {pathname === '/' && <ScrollProgress />}

        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image src="/logo.svg" alt="Logo" width={36} height={36} />
              </Link>
            </div>

            {/* Mobile Menu */}
            <MobileMenu links={links} isQuemSomosInView={isQuemSomosInView} />

            {/* Desktop Navigation Links */}
            <ul className="hidden sm:flex items-center gap-8">
              {links.map((link) => {
                const isQuemSomosActive = pathname === '/' && isQuemSomosInView;
                const isActive = link.href === '/#quem-somos'
                  ? isQuemSomosActive
                  : pathname === link.href && !isQuemSomosActive;
                
                return (
                  <li key={link.href} className="relative">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (link.onClick) {
                          link.onClick(e);
                        } else {
                          router.push(link.href);
                        }
                      }}
                      className="relative px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
                    >
                      <span className={`relative z-10 ${isActive ? 'text-brand-teal' : 'text-slate-300 hover:text-white'}`}>
                        {link.label}
                      </span>
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-brand"
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          exit={{ opacity: 0, scaleX: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                            opacity: { duration: 0.2 }
                          }}
                          style={{ transformOrigin: "left" }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Social Links */}
            <div className="hidden sm:block">
              <SocialLinks className="flex-row" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// Loading state for navigation
function NavigationLoading() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-gradient-to-b from-slate-900/80 to-transparent backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-slate-700/50 rounded-lg animate-pulse" />
          </div>
          <ul className="hidden sm:flex items-center gap-8">
            {[1, 2, 3].map((i) => (
              <li key={i}>
                <div className="w-16 h-4 bg-slate-700 rounded animate-pulse" />
              </li>
            ))}
          </ul>
          <div className="sm:hidden">
            <div className="w-6 h-6 bg-slate-700 rounded animate-pulse" />
          </div>
          <div className="hidden sm:block flex-shrink-0 w-[40px]" />
        </div>
      </div>
    </nav>
  );
}

export function Navigation() {
  return (
    <Suspense fallback={<NavigationLoading />}>
      <NavigationContent />
    </Suspense>
  );
} 