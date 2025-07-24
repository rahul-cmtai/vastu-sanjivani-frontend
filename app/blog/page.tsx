"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  publishDate: string;
  author: string;
  category: string;
  tags: string[];
  status: "Draft" | "Published";
  metaTitle?: string;
  metaDescription?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Fallback data for development/testing when API is not available
const fallbackBlogs: Blog[] = [
  {
    _id: "1",
    title: "Introduction to Vastu Shastra",
    slug: "introduction-to-vastu-shastra",
    content: "<p>Learn about the ancient Indian science of architecture and how it can transform your living spaces.</p>",
    excerpt: "Learn about the ancient Indian science of architecture and how it can transform your living spaces.",
    imageUrl: "/images/home/vastu.png",
    publishDate: new Date().toISOString(),
    author: "Dr. Sharma",
    category: "Vastu",
    tags: ["vastu", "beginners", "architecture"],
    status: "Published",
    metaTitle: "Introduction to Vastu Shastra - Learn the Basics",
    metaDescription: "Discover the ancient Indian science of Vastu Shastra and how it can transform your living spaces for better energy flow and harmony."
  },
  {
    _id: "2",
    title: "Pendulum Dowsing Basics",
    slug: "pendulum-dowsing-basics",
    content: "<p>Discover the fundamentals of pendulum dowsing and how it can help you make better decisions.</p>",
    excerpt: "Discover the fundamentals of pendulum dowsing and how it can help you make better decisions.",
    imageUrl: "/images/home/Pendulum Dowsing 4.png",
    publishDate: new Date(Date.now() - 86400000).toISOString(), // Yesterday
    author: "Rahul Rajput",
    category: "Dowsing",
    tags: ["pendulum", "dowsing", "energy"],
    status: "Published",
    metaTitle: "Pendulum Dowsing Basics - A Beginner's Guide",
    metaDescription: "Learn the fundamentals of pendulum dowsing and discover how this ancient practice can help you make better decisions in your daily life."
  },
  {
    _id: "3",
    title: "Numerology and Your Home",
    slug: "numerology-and-your-home",
    content: "<p>Explore how numerology principles can be applied to your home for better harmony and success.</p>",
    excerpt: "Explore how numerology principles can be applied to your home for better harmony and success.",
    imageUrl: "/images/home/numerology.png",
    publishDate: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    author: "Ananya Gupta",
    category: "Numerology",
    tags: ["numerology", "home", "harmony"],
    status: "Published",
    metaTitle: "Numerology and Your Home - Create Harmony",
    metaDescription: "Discover how to apply numerology principles to your home for better harmony, success, and positive energy flow."
  }
];

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Check if NEXT_PUBLIC_API_URL is defined
        if (!process.env.NEXT_PUBLIC_API_URL) {
          throw new Error("API URL is not defined. Check your environment variables.");
        }
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
        if (!response.ok) {
          throw new Error(`Failed to fetch blogs (Status: ${response.status})`);
        }
        
        const data = await response.json();
        setBlogs(data.filter((b: Blog) => b.status === "Published"));
        setUseFallback(false);
      } catch (err: unknown) {
        console.error("Error fetching blogs:", err);
        setError((err as Error).message);
        setUseFallback(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBlogs();
  }, []);

  // Use fallback data if API request failed
  useEffect(() => {
    if (useFallback) {
      setBlogs(fallbackBlogs);
    }
  }, [useFallback]);

  // Use either actual blogs or fallback data
  const displayBlogs = blogs.length > 0 ? blogs : (useFallback ? fallbackBlogs : []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#7a2323]/90 dark:to-[#5a1a1a] py-16">
      <div className="container mx-auto px-4">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-bold text-[#7a2323] dark:text-white mb-10 text-center">Our Blog</motion.h1>
        
        {useFallback && (
          <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 mx-auto max-w-3xl">
            <p className="font-medium">Note: Showing placeholder content</p>
            <p className="text-sm mt-1">The blog API is currently unavailable. This is fallback content for development purposes.</p>
          </div>
        )}
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7a2323] mx-auto"></div>
            <span className="ml-4 text-gray-600">Loading blogs...</span>
          </div>
        ) : error && !useFallback ? (
          <div className="text-center py-20">
            <div className="text-red-500 mb-4">{error}</div>
            <p className="text-gray-600">Unable to load blog posts at this time.</p>
          </div>
        ) : displayBlogs.length === 0 ? (
          <div className="text-center text-gray-500 py-20">No blog posts found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayBlogs.map((blog) => (
              <Link href={`/blog/${blog.slug}`} key={blog._id} className="block">
                <motion.div
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(122,35,35,0.18)' }}
                  className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-transparent hover:border-[#7a2323] dark:hover:border-[#FFD700] overflow-hidden flex flex-col transition-all duration-300 h-full"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image 
                      src={blog.imageUrl.startsWith('http') || blog.imageUrl.startsWith('/') ? blog.imageUrl : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${blog.imageUrl}`} 
                      alt={blog.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
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
                    {/* Category badge */}
                    <span className="absolute top-4 right-4 z-20 bg-blue-100 text-blue-800 font-semibold text-xs px-3 py-1 rounded-full shadow-md">
                      {blog.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 text-base font-medium">
                      {blog.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags && blog.tags.length > 0 && blog.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-xs text-gray-400 mb-4">
                      {blog.author && (
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          By {blog.author}
                        </span>
                      )}
                    </div>
                    <div className="mt-auto flex justify-end">
                      <span className="inline-block px-5 py-2 rounded-lg bg-[#7a2323] hover:bg-[#FFD700] text-white hover:text-[#7a2323] font-bold shadow transition-colors duration-300 border-2 border-[#7a2323] hover:border-[#FFD700]">
                        Read More
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
} 