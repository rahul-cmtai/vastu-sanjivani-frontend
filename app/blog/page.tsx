"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

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
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const data = await response.json();
        setBlogs(data.filter((b: Blog) => b.status === "Published"));
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#7a2323]/90 dark:to-[#5a1a1a] py-16">
      <div className="container mx-auto px-4">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-bold text-[#7a2323] dark:text-white mb-10 text-center">Our Blog</motion.h1>
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7a2323] mx-auto"></div>
            <span className="ml-4 text-gray-600">Loading blogs...</span>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-20">{error}</div>
        ) : blogs.length === 0 ? (
          <div className="text-center text-gray-500 py-20">No blog posts found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <motion.div
                key={blog._id}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(122,35,35,0.18)' }}
                className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-transparent hover:border-[#7a2323] dark:hover:border-[#FFD700] overflow-hidden flex flex-col transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image src={blog.imageUrl.startsWith('http') ? blog.imageUrl : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${blog.imageUrl}`} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  {/* Gradient overlay, fades out on hover */}
                  <motion.div
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#7a2323]/80 via-[#7a2323]/30 to-transparent z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"
                  />
                  {/* Dark overlay appears on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.35 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-black z-10 pointer-events-none group-hover:opacity-35 transition-opacity duration-500"
                  />
                  {/* Title on image */}
                  <h2 className="absolute bottom-4 left-4 right-4 z-20 text-2xl font-extrabold text-white drop-shadow-lg group-hover:text-[#FFD700] transition-colors duration-300">
                    {blog.title}
                  </h2>
                  {/* Date badge */}
                  <span className="absolute top-4 left-4 z-20 bg-[#FFD700] text-[#7a2323] font-semibold text-xs px-3 py-1 rounded-full shadow-md">
                    {new Date(blog.publishDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 text-base font-medium">
                    {blog.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.category && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {blog.category}
                      </span>
                    )}
                    {blog.tags && blog.tags.length > 0 && blog.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-xs text-gray-400 mb-4">
                    {blog.author && <span>By {blog.author}</span>}
                  </div>
                  <div className="mt-auto flex justify-end">
                    <Link href={`/blog/${blog.slug}`} className="inline-block px-5 py-2 rounded-lg bg-[#7a2323] hover:bg-[#FFD700] text-white hover:text-[#7a2323] font-bold shadow transition-colors duration-300 border-2 border-[#7a2323] hover:border-[#FFD700]">
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
} 