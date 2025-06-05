import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import dynamic from 'next/dynamic';

// Dynamically import the blog content component with no SSR
const AnimatedBlogContent = dynamic(() => import('@/components/blog/AnimatedBlogContent').then(mod => mod.default), {
  ssr: false
});

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0B1221] pt-32 pb-16">
      <article className="max-w-3xl mx-auto px-6">
        <AnimatedBlogContent post={post} />
      </article>
    </div>
  );
} 