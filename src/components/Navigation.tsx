'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Suspense, useEffect, useState } from 'react';

function NavigationContent() {
  const pathname = usePathname();
  const router = useRouter();
  const [isQuemSomosInView, setIsQuemSomosInView] = useState(false);

  useEffect(() => {
    if (pathname !== '/') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsQuemSomosInView(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
        rootMargin: '-100px 0px' // Add some margin to make it feel more natural
      }
    );

    const quemSomosSection = document.getElementById('quem-somos');
    if (quemSomosSection) {
      observer.observe(quemSomosSection);
    }

    return () => {
      if (quemSomosSection) {
        observer.unobserve(quemSomosSection);
      }
    };
  }, [pathname]);

  const links = [
    { 
      href: '/', 
      label: 'Início',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        if (pathname === '/') {
          // If we're on the home page, scroll to the top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          // If we're on another page, navigate to home
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
          // If we're on the home page, scroll to the section
          const element = document.getElementById('quem-somos');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // If we're on another page, navigate to home and then scroll
          router.push('/#quem-somos');
        }
      }
    },
    { href: '/podcast', label: 'Podcast' },
    { href: '/blog', label: 'Blog' },
    { href: '/ebooks', label: 'E-books' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-slate-900/80 to-transparent backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="font-[--font-fraunces] text-2xl font-bold bg-gradient-to-br from-white via-amber-100 to-amber-200 text-transparent bg-clip-text tracking-tighter">
                BM
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-8">
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
                    <span className={`relative z-10 ${isActive ? 'text-amber-400' : 'text-slate-300 hover:text-white'}`}>
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500"
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

          {/* Right side spacing for symmetry */}
          <div className="flex-shrink-0 w-[40px]" />
        </div>
      </div>
    </nav>
  );
}

// Loading state for navigation
function NavigationLoading() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-slate-900/80 to-transparent backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-slate-700 rounded animate-pulse" />
          </div>
          <ul className="flex items-center gap-8">
            {[1, 2, 3].map((i) => (
              <li key={i}>
                <div className="w-16 h-4 bg-slate-700 rounded animate-pulse" />
              </li>
            ))}
          </ul>
          <div className="flex-shrink-0 w-[40px]" />
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