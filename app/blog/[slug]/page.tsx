"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string;
  publishDate: string;
  author?: string;
  category?: string;
  tags?: string[];
  status?: string;
  content?: string;
}

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/slug/${slug}`, { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.status !== "Published") return null;
    return data;
  } catch {
    return null;
  }
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const blog = await getBlog(slug);
  if (!blog) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#7a2323]/90 dark:to-[#5a1a1a] py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/blog" className="text-[#7a2323] dark:text-[#FFD700] font-semibold mb-8 inline-block hover:underline">← Back to Blog</Link>
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 md:p-10 border border-[#7a2323]/10 dark:border-[#FFD700]/20">
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-6">
            <Image
              src={blog.imageUrl.startsWith('http') ? blog.imageUrl : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${blog.imageUrl}`}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
            <span className="absolute top-4 left-4 z-20 bg-[#FFD700] text-[#7a2323] font-semibold text-xs px-3 py-1 rounded-full shadow-md">
              {new Date(blog.publishDate).toLocaleDateString()}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white mb-4">{blog.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.category && (
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{blog.category}</span>
            )}
            {blog.tags && blog.tags.length > 0 && blog.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <div className="flex items-center text-xs text-gray-400 mb-6">
            {blog.author && <span>By {blog.author}</span>}
          </div>
          <div className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200">
            {/* Render blog content as HTML if available, else show excerpt */}
            <div dangerouslySetInnerHTML={{ __html: blog.content || blog.excerpt }} />
          </div>
        </div>
      </div>
    </main>
  );
} 