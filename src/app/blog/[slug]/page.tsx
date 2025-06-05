import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import { AnimatedBlogContent } from '@/components/blog/AnimatedBlogContent';

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