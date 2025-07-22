"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Quote, 
  Star, 
  ChevronRight, 
  ChevronLeft, 
  GraduationCap, 
  Home, 
  Building, 
  User, 
  BookOpen,
  Award
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface Testimonial {
  _id: string;
  name: string;
  designation: string;
  content: string;
  rating: number;
  mediaUrl: string;
  mediaType: "image" | "video" | "none";
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

interface StudentSuccessStory {
  _id: string;
  name: string;
  designation: string;
  content: string;
  rating: number;
  mediaUrl: string;
  mediaType: "image" | "video" | "none";
  location?: string;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

// Static YouTube video data to avoid API key exposure
const staticYoutubeVideos: YouTubeVideo[] = [
  {
    id: "Wl_VXgYPLXM",
    title: "Vastu Sanjivanii Testimonial - Client Success Story",
    thumbnail: "https://i.ytimg.com/vi/Wl_VXgYPLXM/hqdefault.jpg",
    publishedAt: "2023-06-15T10:30:00Z"
  },
  {
    id: "eTqDJRE_QYU",
    title: "How Vastu Changed My Life - Client Experience",
    thumbnail: "https://i.ytimg.com/vi/eTqDJRE_QYU/hqdefault.jpg",
    publishedAt: "2023-07-20T14:15:00Z"
  },
  {
    id: "oVxOMOA82Rk",
    title: "Business Success After Vastu Consultation",
    thumbnail: "https://i.ytimg.com/vi/oVxOMOA82Rk/hqdefault.jpg",
    publishedAt: "2023-08-05T09:45:00Z"
  },
  {
    id: "YQHsXMglC9A",
    title: "Home Transformation Journey with Vastu Principles",
    thumbnail: "https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg",
    publishedAt: "2023-09-12T11:20:00Z"
  },
  {
    id: "JGwWNGJdvx8",
    title: "Vastu Sanjivanii - Client Review and Experience",
    thumbnail: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg",
    publishedAt: "2023-10-18T16:30:00Z"
  }
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeClientTestimonialIndex, setActiveClientTestimonialIndex] = useState(0);
  const [pauseAutoScroll, setPauseAutoScroll] = useState(false);
  const [studentSuccessStories, setStudentSuccessStories] = useState<StudentSuccessStory[]>([]);
  const [isLoadingStories, setIsLoadingStories] = useState(true);
  const [errorStories, setErrorStories] = useState<string | null>(null);
  const [youtubeVideos, setYoutubeVideos] = useState<YouTubeVideo[]>(staticYoutubeVideos);
  const [isLoadingVideos, setIsLoadingVideos] = useState(false);
  const [errorVideos, setErrorVideos] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(staticYoutubeVideos[0]?.id || null);
  
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`);
        if (!response.ok) throw new Error("Failed to fetch testimonials");
        const data = await response.json();
        // Only show active testimonials, sorted by order
        setTestimonials(
          data.filter((t: Testimonial) => t.isActive !== false).sort((a: Testimonial, b: Testimonial) => a.order - b.order)
        );
      } catch (err: unknown) {
        const error = err as Error;
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestimonials();

    // Fetch student success stories
    const fetchStories = async () => {
      try {
        setIsLoadingStories(true);
        setErrorStories(null);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student-success-stories`);
        if (!response.ok) throw new Error("Failed to fetch student success stories");
        const data = await response.json();
        setStudentSuccessStories(
          data.filter((s: StudentSuccessStory) => s.isActive !== false).sort((a: StudentSuccessStory, b: StudentSuccessStory) => a.order - b.order)
        );
      } catch (err: unknown) {
        const error = err as Error;
        setErrorStories(error.message);
      } finally {
        setIsLoadingStories(false);
      }
    };
    fetchStories();

    // No need to fetch YouTube videos anymore as we're using static data
    // This avoids exposing API keys in client-side code
  }, []);

  const handlePrevClient = () => {
    setActiveClientTestimonialIndex(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  const handleNextClient = () => {
    setActiveClientTestimonialIndex(prev => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Auto-scroll effect for student testimonials
  useEffect(() => {
    if (pauseAutoScroll) return;
    
    const interval = setInterval(() => {
      const container = document.getElementById('student-testimonials-container');
      if (container) {
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
          // Reset scroll position when reaching the end
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll to next item
          container.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 5000); // Scroll every 5 seconds
    
    return () => clearInterval(interval);
  }, [pauseAutoScroll]);
  
  // Add CSS to hide scrollbars
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0f0f29] to-[#7a2323] py-20">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <div className="h-1 w-24 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover how Vastu Sanjivanii has transformed homes, businesses, and lives through powerful Vastu principles and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] mb-4">
              Client Testimonials
            </h2>
            <div className="h-1 w-20 bg-[#7a2323]/60 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read the remarkable transformations our clients experienced after implementing our Vastu remedies.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {isLoading ? (
              <div className="flex items-center justify-center h-40">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto"></div>
                <span className="ml-4 text-gray-600">Loading testimonials...</span>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center h-40 text-red-500">
                <span>Error: {error}</span>
              </div>
            ) : testimonials.length === 0 ? (
              <div className="flex items-center justify-center h-40 text-gray-500">
                <span>No testimonials found.</span>
              </div>
            ) : (
              <motion.div
                key={activeClientTestimonialIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-xl p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <div className="flex items-center mb-6">
                      <Quote className="text-[#7a2323] h-10 w-10 mr-4 rotate-180" />
                      <h3 className="text-2xl font-bold text-[#7a2323]">
                        {testimonials[activeClientTestimonialIndex].designation || testimonials[activeClientTestimonialIndex].name}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-lg mb-8 italic">
                      "{testimonials[activeClientTestimonialIndex].content}"
                    </p>
                    <div className="flex items-center">
                      <div className="bg-[#7a2323] h-12 w-12 rounded-full flex items-center justify-center mr-4">
                        <User className="text-white h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {testimonials[activeClientTestimonialIndex].name}
                        </h4>
                        <p className="text-gray-500">
                          {testimonials[activeClientTestimonialIndex].designation}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#0f0f29]/5 to-[#7a2323]/5 rounded-lg p-8">
                    {testimonials[activeClientTestimonialIndex].mediaType !== 'none' && testimonials[activeClientTestimonialIndex].mediaUrl ? (
                      testimonials[activeClientTestimonialIndex].mediaType === 'image' ? (
                        <img
                          src={testimonials[activeClientTestimonialIndex].mediaUrl.startsWith('http')
                            ? testimonials[activeClientTestimonialIndex].mediaUrl
                            : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${testimonials[activeClientTestimonialIndex].mediaUrl}`}
                          alt={testimonials[activeClientTestimonialIndex].name}
                          className="w-full h-full object-cover rounded-lg"
                          onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                      ) : (
                        <video
                          src={testimonials[activeClientTestimonialIndex].mediaUrl.startsWith('http')
                            ? testimonials[activeClientTestimonialIndex].mediaUrl
                            : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${testimonials[activeClientTestimonialIndex].mediaUrl}`}
                          className="w-full h-full object-cover rounded-lg"
                          controls
                        />
                      )
                    ) : (
                      <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                        <User className="h-10 w-10 text-[#7a2323]" />
                      </div>
                    )}
                  </div>
                </div>
                {/* Navigation Controls */}
                <div className="flex justify-between mt-8">
                  <button 
                    onClick={handlePrevClient}
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6 text-[#7a2323]" />
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_: Testimonial, index: number) => (
                      <button 
                        key={index}
                        onClick={() => setActiveClientTestimonialIndex(index)}
                        className={`h-3 w-3 rounded-full transition-colors ${
                          index === activeClientTestimonialIndex 
                            ? "bg-[#7a2323]" 
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={handleNextClient}
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                  >
                    <ChevronRight className="h-6 w-6 text-[#7a2323]" />
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#f0f0f0] to-[#e8e8e8]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] mb-4">
              Video Testimonials
            </h2>
            <div className="h-1 w-20 bg-[#7a2323]/60 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch these heartfelt video testimonials from our clients sharing their transformative Vastu experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#7a2323] rounded-full flex items-center justify-center cursor-pointer">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-white ml-1"></div>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=60" 
                  alt="Residential Vastu Success" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#7a2323] mb-2">Home Transformation Story</h3>
                <p className="text-gray-600 mb-4">
                  "After implementing Vastu changes, our home became more peaceful and prosperous. Watch how our lives changed."
                </p>
                <div className="flex items-center">
                  <div className="bg-[#7a2323] h-10 w-10 rounded-full flex items-center justify-center mr-3">
                    <Home className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Sharma Family</h4>
                    <p className="text-gray-500 text-sm">Delhi</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#7a2323] rounded-full flex items-center justify-center cursor-pointer">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-white ml-1"></div>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&auto=format&fit=crop&q=60" 
                  alt="Office Vastu Success" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#7a2323] mb-2">Business Success Story</h3>
                <p className="text-gray-600 mb-4">
                  "Our business revenue increased by 40% after implementing Vastu Sanjivanii's office remedies. See our journey."
                </p>
                <div className="flex items-center">
                  <div className="bg-[#7a2323] h-10 w-10 rounded-full flex items-center justify-center mr-3">
                    <Building className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Tech Solutions Inc.</h4>
                    <p className="text-gray-500 text-sm">Mumbai</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#7a2323] rounded-full flex items-center justify-center cursor-pointer">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-white ml-1"></div>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&auto=format&fit=crop&q=60" 
                  alt="Health Improvement" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#7a2323] mb-2">Health Recovery Journey</h3>
                <p className="text-gray-600 mb-4">
                  "Chronic health issues resolved after simple Vastu corrections. Watch my incredible health transformation."
                </p>
                <div className="flex items-center">
                  <div className="bg-[#7a2323] h-10 w-10 rounded-full flex items-center justify-center mr-3">
                    <User className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Priya Malhotra</h4>
                    <p className="text-gray-500 text-sm">Bangalore</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#7a2323] hover:bg-[#5a1a1a]">
              Watch More Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Custom YouTube Video Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#7a2323] mb-4">
              Featured Video Testimonials
            </h2>
            <div className="h-1 w-20 bg-[#7a2323]/60 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-xl mx-auto">
              Hear directly from our clients about their life-changing experiences with Vastu Sanjivanii.
            </p>
          </div>

          {/* Video Gallery */}
          {(() => {
            const playlistVideos = [
              { id: "CR8PWwWuRDU", title: "Testimonial Video 1", thumbnail: "https://i.ytimg.com/vi/CR8PWwWuRDU/hqdefault.jpg" },
              { id: "OoMA4YbnZgE", title: "Testimonial Video 2", thumbnail: "https://i.ytimg.com/vi/OoMA4YbnZgE/hqdefault.jpg" },
              { id: "abDcGFXUivA", title: "Testimonial Video 3", thumbnail: "https://i.ytimg.com/vi/abDcGFXUivA/hqdefault.jpg" },
              { id: "NwZoL3vXvQM", title: "Testimonial Video 4", thumbnail: "https://i.ytimg.com/vi/NwZoL3vXvQM/hqdefault.jpg" },
              { id: "H4qmUYIWIFg", title: "Testimonial Video 5", thumbnail: "https://i.ytimg.com/vi/H4qmUYIWIFg/hqdefault.jpg" },
              { id: "kTqrVYk4AGo", title: "Testimonial Video 6", thumbnail: "https://i.ytimg.com/vi/kTqrVYk4AGo/hqdefault.jpg" },
              { id: "FIjBA8Ld1Is", title: "Testimonial Video 7", thumbnail: "https://i.ytimg.com/vi/FIjBA8Ld1Is/hqdefault.jpg" },
              { id: "wXourFvu3g4", title: "Testimonial Video 8", thumbnail: "https://i.ytimg.com/vi/wXourFvu3g4/hqdefault.jpg" },
              { id: "QYsQOV1zry8", title: "Testimonial Video 9", thumbnail: "https://i.ytimg.com/vi/QYsQOV1zry8/hqdefault.jpg" },
              { id: "R5DNLhUN4iQ", title: "Testimonial Video 10", thumbnail: "https://i.ytimg.com/vi/R5DNLhUN4iQ/hqdefault.jpg" },
              { id: "oSd7SFLeO1c", title: "Testimonial Video 11", thumbnail: "https://i.ytimg.com/vi/oSd7SFLeO1c/hqdefault.jpg" },
              { id: "eOgcD-0ru5g", title: "Testimonial Video 12", thumbnail: "https://i.ytimg.com/vi/eOgcD-0ru5g/hqdefault.jpg" },
              { id: "X1qT3m6xCvw", title: "Testimonial Video 13", thumbnail: "https://i.ytimg.com/vi/X1qT3m6xCvw/hqdefault.jpg" },
              { id: "6DJsG795DNM", title: "Testimonial Video 14", thumbnail: "https://i.ytimg.com/vi/6DJsG795DNM/hqdefault.jpg" },
              { id: "jbIxsG-q1Y8", title: "Testimonial Video 15", thumbnail: "https://i.ytimg.com/vi/jbIxsG-q1Y8/hqdefault.jpg" },
              { id: "ARpnEFZHpeM", title: "Testimonial Video 16", thumbnail: "https://i.ytimg.com/vi/ARpnEFZHpeM/hqdefault.jpg" },
              { id: "yu8mI9EgPek", title: "Testimonial Video 17", thumbnail: "https://i.ytimg.com/vi/yu8mI9EgPek/hqdefault.jpg" },
              { id: "3xVwnfZg130", title: "Testimonial Video 18", thumbnail: "https://i.ytimg.com/vi/3xVwnfZg130/hqdefault.jpg" },
              { id: "OkpHx9W6Gi0", title: "Testimonial Video 19", thumbnail: "https://i.ytimg.com/vi/OkpHx9W6Gi0/hqdefault.jpg" },
              { id: "Hjgh6m_V1a8", title: "Testimonial Video 20", thumbnail: "https://i.ytimg.com/vi/Hjgh6m_V1a8/hqdefault.jpg" },
            ];
            const [selectedVideo, setSelectedVideo] = useState(playlistVideos[0].id);
            return (
              <div>
                {/* Main Video Player */}
                <div className="flex justify-center mb-8">
                  <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      width="100%"
                      height="400"
                      src={`https://www.youtube.com/embed/${selectedVideo}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
                {/* Thumbnails Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                  {playlistVideos.map((video, idx) => (
                    <div
                      key={video.id}
                      className={`cursor-pointer rounded-lg overflow-hidden shadow transition-transform hover:-translate-y-1 border-2 ${selectedVideo === video.id ? 'border-[#7a2323]' : 'border-transparent'}`}
                      onClick={() => setSelectedVideo(video.id)}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-3 bg-white">
                        <h4 className="text-sm font-semibold text-[#7a2323] line-clamp-2">{video.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Health Vastu Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#7a2323] mb-4">
              Health Vastu
            </h2>
            <div className="h-1 w-20 bg-[#7a2323]/60 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-xl mx-auto">
              Explore our Health Vastu video testimonials and insights.
            </p>
          </div>

          {/* Health Vastu Video Gallery */}
          {(() => {
            const healthVastuVideos = [
              { id: "TxRGx_1C6vk", title: "Health Vastu Video 1", thumbnail: "https://i.ytimg.com/vi/TxRGx_1C6vk/hqdefault.jpg" },
              { id: "H_64RL6dp80", title: "Health Vastu Video 2", thumbnail: "https://i.ytimg.com/vi/H_64RL6dp80/hqdefault.jpg" },
              { id: "Pl5ACUXYe44", title: "Health Vastu Video 3", thumbnail: "https://i.ytimg.com/vi/Pl5ACUXYe44/hqdefault.jpg" },
              { id: "JSi5ESAf95g", title: "Health Vastu Video 4", thumbnail: "https://i.ytimg.com/vi/JSi5ESAf95g/hqdefault.jpg" },
              { id: "6I1_bGCFBLs", title: "Health Vastu Video 5", thumbnail: "https://i.ytimg.com/vi/6I1_bGCFBLs/hqdefault.jpg" },
              { id: "9DBzY3nGwew", title: "Health Vastu Video 6", thumbnail: "https://i.ytimg.com/vi/9DBzY3nGwew/hqdefault.jpg" },
              { id: "BRT-X-s2b6s", title: "Health Vastu Video 7", thumbnail: "https://i.ytimg.com/vi/BRT-X-s2b6s/hqdefault.jpg" },
              { id: "bnC_fwfCubk", title: "Health Vastu Video 8", thumbnail: "https://i.ytimg.com/vi/bnC_fwfCubk/hqdefault.jpg" },
              { id: "KpLNs89Ybso", title: "Health Vastu Video 9", thumbnail: "https://i.ytimg.com/vi/KpLNs89Ybso/hqdefault.jpg" },
              { id: "Jylo4q_niBQ", title: "Health Vastu Video 10", thumbnail: "https://i.ytimg.com/vi/Jylo4q_niBQ/hqdefault.jpg" },
              { id: "T_F4Jk7UUuk", title: "Health Vastu Video 11", thumbnail: "https://i.ytimg.com/vi/T_F4Jk7UUuk/hqdefault.jpg" },
              { id: "30N5x879hxg", title: "Health Vastu Video 12", thumbnail: "https://i.ytimg.com/vi/30N5x879hxg/hqdefault.jpg" },
              { id: "WQcgwybuwm8", title: "Health Vastu Video 13", thumbnail: "https://i.ytimg.com/vi/WQcgwybuwm8/hqdefault.jpg" },
              { id: "qUxCBYveV4A", title: "Health Vastu Video 14", thumbnail: "https://i.ytimg.com/vi/qUxCBYveV4A/hqdefault.jpg" },
              { id: "nXBwMY0UD2U", title: "Health Vastu Video 15", thumbnail: "https://i.ytimg.com/vi/nXBwMY0UD2U/hqdefault.jpg" },
              { id: "Qcdm8P3q-MI", title: "Health Vastu Video 16", thumbnail: "https://i.ytimg.com/vi/Qcdm8P3q-MI/hqdefault.jpg" },
              { id: "NhOgfubex5w", title: "Health Vastu Video 17", thumbnail: "https://i.ytimg.com/vi/NhOgfubex5w/hqdefault.jpg" },
            ];
            const [selectedHealthVideo, setSelectedHealthVideo] = useState(healthVastuVideos[0].id);
            return (
              <div>
                {/* Main Video Player */}
                <div className="flex justify-center mb-8">
                  <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      width="100%"
                      height="400"
                      src={`https://www.youtube.com/embed/${selectedHealthVideo}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
                {/* Thumbnails Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                  {healthVastuVideos.map((video, idx) => (
                    <div
                      key={video.id}
                      className={`cursor-pointer rounded-lg overflow-hidden shadow transition-transform hover:-translate-y-1 border-2 ${selectedHealthVideo === video.id ? 'border-[#7a2323]' : 'border-transparent'}`}
                      onClick={() => setSelectedHealthVideo(video.id)}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-3 bg-white">
                        <h4 className="text-sm font-semibold text-[#7a2323] line-clamp-2">{video.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] mb-4">
              Student Success Stories
            </h2>
            <div className="h-1 w-20 bg-[#7a2323]/60 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our students who have mastered Vastu and Pendulum Dowsing through our comprehensive courses.
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Left fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f8f8f8] to-transparent z-10"></div>
            
            {/* Right fade effect */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f8f8f8] to-transparent z-10"></div>
            
            {/* Carousel container */}
            <div 
              id="student-testimonials-container"
              className="flex overflow-x-auto pb-6 hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseEnter={() => setPauseAutoScroll(true)}
              onMouseLeave={() => setPauseAutoScroll(false)}
            >
              {isLoadingStories ? (
                <div className="text-center w-full py-10 text-gray-500">Loading student success stories...</div>
              ) : errorStories ? (
                <div className="text-center w-full py-10 text-red-500">{errorStories}</div>
              ) : (
                <div className="flex gap-6 pl-4">
                  {studentSuccessStories.map((story) => (
                    <motion.div
                      key={story._id}
                      variants={fadeIn}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden min-w-[300px] max-w-[300px] flex-shrink-0 transform transition-all hover:-translate-y-2 hover:shadow-xl"
                    >
                      <div className="h-48 relative flex items-center justify-center bg-gray-100">
                        {story.mediaType === 'image' && story.mediaUrl ? (
                          <Image
                            src={story.mediaUrl.startsWith('http') ? story.mediaUrl : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${story.mediaUrl}`}
                            alt={story.name}
                            fill
                            className="object-cover"
                          />
                        ) : story.mediaType === 'video' && story.mediaUrl ? (
                          <video controls className="w-full h-full object-cover">
                            <source src={story.mediaUrl.startsWith('http') ? story.mediaUrl : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${story.mediaUrl}`}/>
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                          <div className="p-6 text-white">
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="flex items-center">
                              <GraduationCap className="h-4 w-4 mr-2" />
                              {story.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex mb-4">
                          {[...Array(story.rating || 5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-4 line-clamp-4">
                          "{story.content}"
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-sm flex items-center">
                            <Award className="h-4 w-4 mr-1" /> Certified Student
                          </span>
                          <span className="text-gray-500 text-sm">{story.location}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Manual navigation indicators */}
            <div className="flex justify-center mt-6">
              <div className="flex gap-2">
                {studentSuccessStories.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => {
                      const container = document.getElementById('student-testimonials-container');
                      if (container) {
                        container.scrollTo({ 
                          left: index * 320, 
                          behavior: 'smooth' 
                        });
                      }
                    }}
                    className="h-3 w-3 rounded-full bg-gray-300 hover:bg-[#7a2323] transition-colors"
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="https://achieverslifestyle.com/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#7a2323] hover:bg-[#5a1a1a]">
                Enroll in Our Courses
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0f0f29] to-[#7a2323] py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied clients and students who have experienced the power of Vastu Sanjivanii.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
              <a href="/contact">
                <Button className="bg-white text-[#7a2323] hover:bg-gray-100">
                  Book a Consultation
                </Button>
              </a>
              <a href="/courses">
                <Button variant="outline" className="text-[#7a2323] border-white hover:bg-white/10">
                  Explore Our Courses
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}