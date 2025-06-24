"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Star, ChevronRight, Users } from "lucide-react";
import CourseImageFallback from "@/components/CourseImageFallback";
import { courses } from "@/lib/courseData";

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  // Filter courses by category
  const filteredCourses = activeCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === activeCategory);
  
  // Categories
  const categories = [
    { id: "all", name: "All Courses" },
    { id: "vastu", name: "Vastu Courses" },
    { id: "dowsing", name: "Dowsing Courses" },
  ];

  // Featured course
  const featuredCourse = courses.find(course => course.featured);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <CourseImageFallback
            src="/images/courses/hero-banner.jpg"
            fallbackSrc="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1469&auto=format&fit=crop"
            alt="Courses Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f29]/85 to-[#7a2323]/70" />
        </div>
        
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Transform Your Space & Life
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Discover the ancient wisdom of Vastu Shastra and modern energy techniques through our expert-led courses
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button className="bg-[#7a2323] hover:bg-[#5a1a1a] text-lg px-8 py-6">
                Explore Courses
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20 text-lg px-8 py-6">
                View Testimonials
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Course */}
      {featuredCourse && (
        <div className="bg-gradient-to-r from-[#0f0f29]/5 to-[#7a2323]/5 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Featured Course</h2>
              <div className="h-1 w-20 bg-[#7a2323] mx-auto"></div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 items-center bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="lg:w-1/2 h-[300px] lg:h-[400px] relative overflow-hidden">
                <CourseImageFallback 
                  src={featuredCourse.localImage} 
                  fallbackSrc={featuredCourse.remoteImage}
                  alt={featuredCourse.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#7a2323] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
              <div className="lg:w-1/2 p-6 lg:p-10">
                <h3 className="text-3xl font-bold mb-3">{featuredCourse.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-500 flex items-center">
                    <Star className="fill-yellow-500 h-4 w-4 mr-1" /> {featuredCourse.rating}
                  </span>
                  <span className="text-gray-500 flex items-center">
                    <Users className="h-4 w-4 mr-1" /> {featuredCourse.students}+ students
                  </span>
                  <span className="text-gray-500">
                    By {featuredCourse.instructor}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 text-lg">{featuredCourse.description}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-[#7a2323]" />
                    {featuredCourse.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="h-5 w-5 mr-2 text-[#7a2323]" />
                    {featuredCourse.lessons}
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="block text-gray-500 text-sm">Price</span>
                    <span className="text-2xl font-bold text-[#7a2323]">{featuredCourse.price}</span>
                  </div>
                  <Link href={`/courses/${featuredCourse.id}`}>
                    <Button className="bg-[#7a2323] hover:bg-[#5a1a1a] flex items-center">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Course Listing Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Category Filters */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-3">Browse Our Courses</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our comprehensive range of courses designed to help you master Vastu Shastra and energy techniques
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeCategory === category.id
                    ? "bg-[#7a2323] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="h-52 overflow-hidden relative">
                <CourseImageFallback 
                  src={course.localImage} 
                  fallbackSrc={course.remoteImage}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <Link href={`/courses/${course.id}`} className="w-full">
                      <Button className="bg-[#7a2323] hover:bg-[#5a1a1a] w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#7a2323] font-medium">{course.category === "vastu" ? "Vastu Shastra" : "Pendulum Dowsing"}</span>
                  <div className="flex items-center">
                    <Star className="fill-yellow-500 h-4 w-4 mr-1" />
                    <span className="text-sm">{course.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    {course.lessons}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="font-bold text-lg text-[#7a2323]">{course.price}</div>
                  {course.instructor && (
                    <div className="text-sm text-gray-500">By {course.instructor}</div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* No Courses Found */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-medium text-gray-600 mb-4">No courses found in this category</h3>
            <p className="text-gray-500 mb-8">Please try another category or check back later</p>
            <Button 
              onClick={() => setActiveCategory("all")}
              className="bg-[#7a2323] hover:bg-[#5a1a1a]"
            >
              View All Courses
            </Button>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-[#0f0f29]/10 to-[#7a2323]/10 p-10 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of students who have transformed their lives through our expert-led courses
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/courses/vastu-foundation-course">
              <Button className="bg-[#7a2323] hover:bg-[#5a1a1a]">
                Get Started with Foundation Course
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-[#7a2323] text-[#7a2323] hover:bg-[#7a2323] hover:text-white">
                Contact for Custom Program
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 