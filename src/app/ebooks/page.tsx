"use client";

import Link from "next/link";
import Image from "next/image";

const ebooks = [
  {
    slug: "7-passos-para-uma-vida-bem-sucedida",
    title: "Mindfulness Basics",
    description: "A comprehensive guide to mindfulness meditation practices.",
    author: "John Doe",
    coverImage: "/ebooks/7-passos-para-uma-vida-bem-sucedida.png",
  },
];

export default function EbooksPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">E-Books</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ebooks.map((ebook) => (
            <Link
              key={ebook.slug}
              href={`/ebooks/${ebook.slug}`}
              className="group"
            >
              <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                <div className=" flex items-center justify-center p-4">
                  <Image
                    src={ebook.coverImage}
                    alt={`${ebook.title} cover`}
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                    width={300}
                    height={400}
                    priority
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                    {ebook.title}
                  </h2>
                  <p className="text-gray-600 mb-2 line-clamp-2">
                    {ebook.description}
                  </p>
                  <p className="text-sm text-gray-500">By {ebook.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
