import { blogPosts } from '@/lib/blog-data';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the blog list component with no SSR
const BlogList = dynamic(() => import('@/components/blog/BlogList'), {
  ssr: false
});

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

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0B1221] pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-white via-amber-100 to-amber-200 text-transparent bg-clip-text">
          Blog
        </h1>
        <Suspense fallback={<BlogListLoading />}>
          <BlogList posts={blogPosts} />
        </Suspense>
      </div>
    </div>
  );
} 