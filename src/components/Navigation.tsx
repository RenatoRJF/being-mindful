'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Início' },
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
              const isActive = pathname === link.href;
              
              return (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="relative px-3 py-2 text-sm font-medium transition-colors"
                  >
                    <span className={`relative z-10 ${isActive ? 'text-amber-400' : 'text-slate-300 hover:text-white'}`}>
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navigation-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30
                        }}
                      />
                    )}
                  </Link>
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