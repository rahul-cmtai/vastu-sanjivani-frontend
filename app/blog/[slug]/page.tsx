"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

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
const fallbackBlogData: Blog = {
  _id: "fallback-id",
  title: "Sample Blog Post",
  slug: "sample-blog-post",
  content: "<p>This is a sample blog post content. The API connection might not be available at the moment.</p><p>This is a placeholder content that appears when the API request fails.</p><h2>Why am I seeing this?</h2><p>You might be seeing this because:</p><ul><li>The API server is not running</li><li>The environment variables are not set correctly</li><li>There's a network issue</li><li>The blog post with this slug doesn't exist</li></ul>",
  excerpt: "This is a sample excerpt for testing purposes.",
  imageUrl: "/images/home/3.jpg",
  publishDate: new Date().toISOString(),
  author: "Test Author",
  category: "Test Category",
  tags: ["test", "development", "placeholder"],
  status: "Published",
  metaTitle: "Sample Blog Post | Vastu Sanjivni",
  metaDescription: "This is a sample blog post for testing purposes when the API is unavailable."
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      if (!slug) {
        setError("Blog slug is missing");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        
        console.log(`Fetching blog with slug: ${slug}`);
        
        // Check if NEXT_PUBLIC_API_URL is defined
        if (!process.env.NEXT_PUBLIC_API_URL) {
          throw new Error("API URL is not defined. Check your environment variables.");
        }
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/slug/${slug}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Blog post not found");
          }
          throw new Error(`Failed to fetch blog details (Status: ${response.status})`);
        }
        
        const data = await response.json();
        console.log("Blog data received:", data);
        setBlog(data);
        setUseFallback(false);
      } catch (err: unknown) {
        console.error("Error fetching blog:", err);
        setError((err as Error).message);
        setUseFallback(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBlogDetail();
  }, [slug]);

  // Use fallback data if API request failed and we're in development
  useEffect(() => {
    if (useFallback && slug) {
      console.log("Using fallback blog data for development");
      setBlog({
        ...fallbackBlogData,
        slug: slug as string
      });
    }
  }, [useFallback, slug]);

  const displayBlog = blog || fallbackBlogData;

  // Format the date nicely
  const formattedDate = displayBlog ? new Date(displayBlog.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : '';

  return (
    <>
      {displayBlog && (
        <Head>
          <title>{displayBlog.metaTitle || displayBlog.title}</title>
          <meta name="description" content={displayBlog.metaDescription || displayBlog.excerpt} />
          <meta property="og:title" content={displayBlog.title} />
          <meta property="og:description" content={displayBlog.excerpt} />
          {displayBlog.imageUrl && (
            <meta property="og:image" content={displayBlog.imageUrl.startsWith('http') ? displayBlog.imageUrl : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${displayBlog.imageUrl}`} />
          )}
        </Head>
      )}
      
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#7a2323]/90 dark:to-[#5a1a1a] py-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7a2323] mx-auto"></div>
              <span className="ml-4 text-gray-600">Loading blog details...</span>
            </div>
          ) : error && !useFallback ? (
            <div className="text-center py-20">
              <div className="text-red-500 mb-4">{error}</div>
              <p className="text-gray-600 mb-6">Unable to load the blog post at this time.</p>
              <Link href="/blog" className="inline-flex items-center text-[#7a2323] hover:text-[#FFD700] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Blogs
              </Link>
            </div>
          ) : displayBlog ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.7 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Back button */}
              <div className="p-4">
                <Link href="/blog" className="inline-flex items-center text-[#7a2323] hover:text-[#FFD700] font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Blogs
                </Link>
              </div>

              {/* Hero image */}
              <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
                <Image 
                  src={displayBlog.imageUrl.startsWith('http') || displayBlog.imageUrl.startsWith('/') ? displayBlog.imageUrl : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${displayBlog.imageUrl}`} 
                  alt={displayBlog.title} 
                  fill 
                  className="object-cover" 
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Category badge */}
                <span className="absolute top-4 right-4 z-20 bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full shadow-md">
                  {displayBlog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10">
                {/* Title and meta */}
                <div className="mb-8">
                  <h1 className="text-3xl md:text-5xl font-bold text-[#7a2323] dark:text-white mb-4">{displayBlog.title}</h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formattedDate}
                    </span>
                    
                    {displayBlog.author && (
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {displayBlog.author}
                      </span>
                    )}
                    
                    {displayBlog.updatedAt && (
                      <span className="flex items-center text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Updated: {new Date(displayBlog.updatedAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>

                  {/* Tags */}
                  {displayBlog.tags && displayBlog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {displayBlog.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Blog excerpt as intro */}
                {displayBlog.excerpt && (
                  <div className="mb-6 text-lg font-medium text-gray-700 dark:text-gray-300 italic border-l-4 border-[#7a2323] pl-4 py-2">
                    {displayBlog.excerpt}
                  </div>
                )}

                {/* Blog content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: displayBlog.content }} />
                </div>

                {useFallback && (
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
                    <p className="font-medium">Note: This is placeholder content.</p>
                    <p className="text-sm mt-1">The actual blog content could not be loaded from the API. This is a fallback display for development purposes.</p>
                  </div>
                )}

                {/* Author info if available */}
                {displayBlog.author && (
                  <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-[#7a2323] dark:text-white">About the Author</h3>
                        <p className="text-gray-600 dark:text-gray-400">{displayBlog.author}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Share buttons */}
                <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-[#7a2323] dark:text-white mb-4">Share this article</h3>
                  <div className="flex space-x-4">
                    <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                      </svg>
                    </button>
                    <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </button>
                    <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                    <button className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Related posts section could be added here */}
              </div>
            </motion.div>
          ) : (
            <div className="text-center text-gray-500 py-20">Blog post not found.</div>
          )}
        </div>
      </main>
    </>
  );
} 