'use client';

import { blogPosts } from '@/lib/blog-data';
import dynamic from 'next/dynamic';
import { Suspense, useState, useEffect } from 'react';
import { MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Dynamically import the blog list component with no SSR
const BlogList = dynamic(() => import('@/components/blog/BlogList'), {
  ssr: false
});

// Function to normalize text by removing accents
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

// Loading component for the blog list
function BlogListLoading() {
  return (
    <div className="space-y-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-slate-800/50 rounded-xl p-6 animate-pulse">
          <div className="h-4 w-24 bg-slate-700 rounded mb-3" />
          <div className="h-8 w-3/4 bg-slate-700 rounded mb-4" />
          <div className="h-4 w-full bg-slate-700 rounded mb-2" />
          <div className="h-4 w-2/3 bg-slate-700 rounded" />
        </div>
      ))}
    </div>
  );
}

const POSTS_PER_PAGE = 5;

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = blogPosts.filter(post => {
    const normalizedSearch = normalizeText(searchTerm);
    return (
      normalizeText(post.title).includes(normalizedSearch) ||
      post.sections.some(section => 
        (section.content && normalizeText(section.content).includes(normalizedSearch)) ||
        (section.title && normalizeText(section.title).includes(normalizedSearch)) ||
        section.items?.some(item => 
          normalizeText(item.title).includes(normalizedSearch) ||
          normalizeText(item.content).includes(normalizedSearch)
        )
      )
    );
  });

  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of the blog list
    window.scrollTo({
      top: document.querySelector('h1')?.offsetTop || 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#0B1221] pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-brand text-transparent bg-clip-text">
          Blog: Descubra, Aprenda, Cresça
        </h1>
        <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl">
          Descubra ideias práticas, reflexões profundas e passos reais para transformar sua mentalidade, criar seu próprio negócio e viver de forma livre, consciente e bem-sucedida.
        </p>

        {/* Search Input */}
        <div className="relative mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-400 focus:outline-none focus:border-brand-teal/50 focus:ring-1 focus:ring-brand-teal/50 transition-colors"
            />
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-teal/60" />
          </div>
          {searchTerm && (
            <p className="mt-2 text-sm text-slate-400">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
            </p>
          )}
        </div>

        <Suspense fallback={<BlogListLoading />}>
          <BlogList posts={paginatedPosts} />
        </Suspense>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:bg-slate-800/70 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-800/50 disabled:hover:text-slate-400 transition-colors"
            >
              <ChevronLeftIcon className="w-5 h-5 text-brand-teal" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-gradient-brand text-white'
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800/70 hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:bg-slate-800/70 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-800/50 disabled:hover:text-slate-400 transition-colors"
            >
              <ChevronRightIcon className="w-5 h-5 text-brand-teal" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 