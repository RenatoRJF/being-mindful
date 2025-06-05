'use client';

import React, { type ComponentType, type SVGProps } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/blog-data';
import { 
  ExclamationTriangleIcon,
  AcademicCapIcon,
  KeyIcon,
  SparklesIcon,
  BookOpenIcon,
  RocketLaunchIcon,
  PencilSquareIcon,
  CheckBadgeIcon,
  HeartIcon,
  ArrowTrendingUpIcon,
  BookmarkIcon
} from '@heroicons/react/24/solid';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

function isTipSection(text: string): boolean {
  return text.trim().startsWith('💡 Dica:') || text.trim().startsWith('Dica:');
}

function isReflectionSection(text: string): boolean {
  return text.trim().startsWith('🧠 Reflita:') || text.trim().startsWith('Reflita:');
}

function isSectionHeader(text: string): boolean {
  const sectionHeaders = [
    // Introduction variations
    'Pensamento e Ação',
    'Conhecimento e Liderança',
    'Sonhos e Crenças',
    'Transformação e Liberdade',
    'Medo e Possibilidade',
    // Main sections
    'As 5 Crenças Limitantes',
    'O Que é Visão Empreendedora?',
    'A Importância da Iniciativa',
    'Como Começar',
    'O Medo do Fracasso',
    'O Poder do Risco',
    // Conclusion variations
    'Conclusão',
    'Conclusão:',
    'Considerações Finais',
    'Considerações Finais:',
    'Próximos Passos',
    'Próximos Passos:',
    'Reflexão Final',
    'Reflexão Final:'
  ];
  
  const trimmedText = text.trim();
  return sectionHeaders.some(header => 
    trimmedText === header || 
    trimmedText === header.toUpperCase() ||
    trimmedText.startsWith(header + ':')
  );
}

// Move iconMap to the top level for reuse
const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  '❌': ExclamationTriangleIcon,  // Warning/error
  '🧠': AcademicCapIcon,          // Learning/reflection
  '🎯': KeyIcon,                  // Key points
  '💡': SparklesIcon,             // Ideas/insights
  '📌': BookmarkIcon,             // Important notes
  '🚀': RocketLaunchIcon,         // Action/momentum
  '✍️': PencilSquareIcon,         // Writing/creation
  '✅': CheckBadgeIcon,           // Success/completion
  '🌱': HeartIcon,                // Growth/inspiration
  '📘': BookOpenIcon,             // Books/learning
  '👉': ArrowTrendingUpIcon       // Call to action
};

function formatEnumeratedContent(content: string | React.ReactNode): React.ReactNode {
  if (typeof content !== 'string') {
    return content;
  }

  // First, replace all emoji icons in the entire content
  const contentWithIcons = content.split('\n').map(line => {
    // Skip icon replacement for lines that start with numbers
    if (line.match(/^\d+\./)) {
      return { line, icon: null };
    }

    // Replace any emoji at the start of the line
    const iconMatch = line.match(/^([^\w\s]+)\s+/);
    if (iconMatch) {
      const emoji = iconMatch[1];
      const Icon = iconMap[emoji];
      if (Icon) {
        return {
          line: line.replace(/^[^\w\s]+\s+/, ''),
          icon: <Icon key={emoji} className="w-6 h-6 inline-block mr-3 text-amber-400" />
        };
      }
    }
    return { line, icon: null };
  });

  return contentWithIcons.map(({ line, icon }, index) => {
    // Check if this is a section header
    if (isSectionHeader(line)) {
      return (
        <div key={index} className="my-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 via-amber-100 to-white text-transparent bg-clip-text">
            {line}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mt-2 rounded-full" />
        </div>
      );
    }

    // Check if the line contains an enumerated item
    const match = line.match(/^(?:[^\d]*)(\d+\.\s+)(.+)$/);
    if (match) {
      const [, number, content] = match;
      const parts = content.split(/([""].+?[""])/);
      
      return (
        <div key={index} className="mb-6">
          <div className="flex items-start gap-3">
            <span className="text-amber-300 font-bold text-2xl flex-shrink-0">{number}</span>
            <div className="text-lg font-medium text-slate-200">
              {parts.map((part, partIndex) => {
                if (part.startsWith('"') && part.endsWith('"')) {
                  return (
                    <span key={partIndex} className="text-xl font-semibold text-slate-100">
                      {part}
                    </span>
                  );
                }
                return part;
              })}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div key={index} className="mb-6">
        <div className="flex items-start gap-3">
          {icon}
          <div className="text-lg font-medium text-slate-200">{line}</div>
        </div>
      </div>
    );
  });
}

function BlogContent({ content }: { content: string[] }) {
  return (
    <div className="space-y-6">
      {content.map((paragraph, index) => {
        const isTip = isTipSection(paragraph);
        const isReflection = isReflectionSection(paragraph);
        const contentWithoutEmoji = paragraph
          .replace(/^💡\s*Dica:\s*/, 'Dica: ')
          .replace(/^🧠\s*Reflita:\s*/, 'Reflita: ');
        
        const formattedContent = formatEnumeratedContent(contentWithoutEmoji);
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            className={`
              ${isTip ? 'bg-amber-500/10 border border-amber-500/20 rounded-xl p-6' : ''}
              ${isReflection ? 'bg-slate-700/30 border border-slate-600/30 rounded-xl p-6' : ''}
            `}
          >
            <div className={`text-lg text-slate-300 whitespace-pre-line ${(isTip || isReflection) ? 'flex items-start' : ''}`}>
              {isTip ? (
                <>
                  <SparklesIcon className="w-6 h-6 text-amber-400 mr-3 flex-shrink-0 mt-1" />
                  {formattedContent}
                </>
              ) : isReflection ? (
                <>
                  <AcademicCapIcon className="w-6 h-6 text-amber-400 mr-3 flex-shrink-0 mt-1" />
                  {formattedContent}
                </>
              ) : (
                formattedContent
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0B1221] pt-32 pb-16">
      <article className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-slate-400 mb-8">
            <span>Por</span>
            <span className="text-amber-400 font-medium">{post.author}</span>
          </div>

          {post.quote && (
            <blockquote className="border-l-2 border-amber-500/30 pl-6 mb-12">
              <p className="text-xl text-slate-300 italic mb-3">{post.quote.text}</p>
              <footer className="text-amber-400">— {post.quote.author}</footer>
            </blockquote>
          )}

          <BlogContent content={post.content} />

          {post.callToAction && (
            <motion.div
              className="mt-16 bg-slate-800/50 rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-amber-400 mb-4 flex items-center">
                <BookOpenIcon className="w-8 h-8 mr-3" />
                {post.callToAction.title}
              </h2>
              <p className="text-slate-300 mb-6">
                {post.callToAction.description}
              </p>
              <Link
                href={post.callToAction.link}
                className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform"
              >
                <ArrowTrendingUpIcon className="w-7 h-7 mr-2" />
                {post.callToAction.linkText}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </article>
    </div>
  );
} 