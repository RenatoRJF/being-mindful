'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

type MobileMenuProps = {
  links: Array<{
    href: string;
    label: string;
    onClick?: (e: React.MouseEvent) => void;
  }>;
  isQuemSomosInView?: boolean;
};

export function MobileMenu({ links, isQuemSomosInView }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="relative z-[9999]">
      {/* Burger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden p-2 text-slate-400 hover:text-white transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          )}
        </svg>
      </button>

      {/* Portal for overlay and sidebar */}
      <div className="relative z-[9999]">
        {/* Sidebar Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm sm:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 h-[100dvh] w-72 bg-slate-900/95 backdrop-blur-lg border-r border-slate-800/50 sm:hidden shadow-xl"
            >
              <div className="flex flex-col h-full min-h-[100dvh]">
                {/* Logo */}
                <div className="p-6 border-b border-slate-800/50">
                  <Link 
                    href="/" 
                    className="inline-block"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src="/logo.png"
                      alt="Being Mindful"
                      width={40}
                      height={40}
                      className="w-auto h-8"
                      priority
                    />
                  </Link>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-6 overscroll-contain">
                  <ul className="space-y-2 px-4">
                    {links.map((link) => {
                      const isQuemSomosActive = pathname === '/' && isQuemSomosInView;
                      const isActive = link.href === '/#quem-somos'
                        ? isQuemSomosActive
                        : pathname === link.href && !isQuemSomosActive;

                      return (
                        <li key={link.href}>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              if (link.onClick) {
                                link.onClick(e);
                              } else {
                                router.push(link.href);
                              }
                              setIsOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                              isActive
                                ? 'bg-brand-teal/10 text-brand-teal shadow-lg shadow-brand-teal/5'
                                : 'text-slate-300 hover:bg-slate-800/50 hover:text-white hover:shadow-lg hover:shadow-white/5'
                            }`}
                          >
                            {link.label}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-slate-800/50">
                  <p className="text-sm text-slate-400 text-center">
                    © {new Date().getFullYear()} Being Mindful
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 