"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CourseDetails() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Course data mapping
  const courseData = {
    "vastu-foundation-course": {
      title: "Vastu Foundation Course",
      description: "Learn the fundamental principles of Vastu Shastra and how to apply them in modern living spaces.",
      price: "₹9,999",
      duration: "8 weeks",
      lessons: "12 lessons",
      image: "https://images.unsplash.com/photo-1618221118493-9cfa1a38c92e?q=80&w=1000&auto=format&fit=crop",
      overview: "This comprehensive foundation course introduces you to the ancient science of Vastu Shastra. You'll learn about the five elements, directions, and how energy flows within living spaces. Perfect for beginners who want to understand how to create harmony in their homes and workplaces.",
      curriculum: [
        "Introduction to Vastu Shastra and its origins",
        "Understanding the five elements (Pancha Bhoota)",
        "Importance of directions in Vastu",
        "Vastu for different rooms in a home",
        "Vastu remedies for common problems",
        "Modern applications of Vastu principles",
        "Practical case studies and solutions",
        "Final assessment and certification"
      ],
      instructor: "Dr. Rajesh Sharma",
      instructorBio: "Dr. Rajesh Sharma has over 15 years of experience practicing and teaching Vastu Shastra. He has consulted on over 500 properties and helped countless families bring harmony to their living spaces."
    },
    "vastu-professional-course": {
      title: "Vastu Professional Course",
      description: "Advanced training for aspiring Vastu consultants with practical applications and case studies.",
      price: "₹24,999",
      duration: "16 weeks",
      lessons: "24 lessons",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
      overview: "This professional-level course is designed for those who want to become Vastu consultants. Building on foundation knowledge, this advanced course covers complex Vastu calculations, professional consulting methods, and business establishment techniques.",
      curriculum: [
        "Advanced Vastu principles and calculations",
        "Commercial property Vastu considerations",
        "Site selection and land evaluation",
        "Building design and architecture integration",
        "Advanced remedies and solutions",
        "Client consultation techniques",
        "Business setup and marketing for Vastu consultants",
        "Professional certification and practice guidelines"
      ],
      instructor: "Prof. Amita Verma",
      instructorBio: "Prof. Amita Verma is a renowned Vastu expert with over two decades of experience. She has authored three books on Vastu Shastra and regularly conducts workshops internationally."
    },
    "effective-parenting-through-vastu": {
      title: "Effective Parenting Through Vastu",
      description: "Learn how to create nurturing environments for children using Vastu principles.",
      price: "₹7,999",
      duration: "6 weeks",
      lessons: "8 lessons",
      image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=1000&auto=format&fit=crop",
      overview: "This specialized course focuses on applying Vastu principles to create supportive environments for children's development. Learn how room layouts, colors, and element placement can positively influence children's behavior, learning abilities, and overall well-being.",
      curriculum: [
        "Vastu principles for children's bedrooms",
        "Study room optimization for better concentration",
        "Color psychology and element placement",
        "Creating positive energy zones for play",
        "Vastu for different developmental stages",
        "Remedies for behavioral and sleep issues",
        "Practical implementation in modern homes",
        "Personalized planning workshop"
      ],
      instructor: "Smt. Priya Agarwal",
      instructorBio: "Smt. Priya Agarwal combines her expertise in child psychology with Vastu principles. She has helped hundreds of families create nurturing spaces for children of all ages."
    },
    "pendulum-dowsing-foundation-course": {
      title: "Pendulum Dowsing Foundation Course",
      description: "Learn the basics of pendulum dowsing and how to use it for energy detection and decision making.",
      price: "₹6,999",
      duration: "4 weeks",
      lessons: "6 lessons",
      image: "https://images.unsplash.com/photo-1515942661900-94b3d1972591?q=80&w=1000&auto=format&fit=crop",
      overview: "This introductory course teaches the ancient art of pendulum dowsing. You'll learn how to select and program your pendulum, ask effective questions, interpret responses, and use dowsing for various applications including space clearing and decision-making.",
      curriculum: [
        "History and science behind pendulum dowsing",
        "Selecting and programming your pendulum",
        "Establishing your personal dowsing protocol",
        "Formulating effective questions",
        "Dowsing for energy detection in spaces",
        "Applications in daily decision making",
        "Practice sessions and exercises",
        "Integration with other intuitive practices"
      ],
      instructor: "Mr. Vikram Mehta",
      instructorBio: "Mr. Vikram Mehta has been practicing dowsing for over 12 years and has trained hundreds of students in this intuitive art. His practical approach makes dowsing accessible to beginners."
    },
    "pendulum-dowsing-course-level-2": {
      title: "Pendulum Dowsing Course Level 2",
      description: "Advanced pendulum dowsing techniques for space clearing, health assessments, and energy work.",
      price: "₹8,999",
      duration: "6 weeks",
      lessons: "9 lessons",
      image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=1000&auto=format&fit=crop",
      overview: "Building on foundation dowsing skills, this advanced course explores complex dowsing applications including space clearing, energy balancing, health assessments, and map dowsing. Develop your intuitive abilities and learn professional dowsing protocols.",
      curriculum: [
        "Advanced pendulum techniques and movements",
        "Working with charts and diagrams",
        "Space clearing and energy balancing protocols",
        "Map and location dowsing techniques",
        "Remote dowsing methods",
        "Health and wellbeing applications",
        "Working with clients professionally",
        "Ethics and responsibilities in dowsing practice"
      ],
      instructor: "Mrs. Sunita Kapoor",
      instructorBio: "Mrs. Sunita Kapoor is an internationally certified dowsing practitioner with expertise in space clearing and energy healing. She brings 15 years of professional experience to her teaching."
    }
  };
  
  // Get course data based on slug
  const course = courseData[slug as keyof typeof courseData] || {
    title: "Course Not Found",
    description: "The requested course could not be found.",
    price: "N/A",
    duration: "N/A",
    lessons: "N/A",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1000&auto=format&fit=crop",
    overview: "No information available.",
    curriculum: [],
    instructor: "N/A",
    instructorBio: "No information available."
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f29]/80 to-[#302b63]/60" />
        </div>
        
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{course.title}</h1>
              <p className="text-lg text-white/90 mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                  Duration: {course.duration}
                </div>
                <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                  Lessons: {course.lessons}
                </div>
                <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                  Price: {course.price}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex border-b mb-8">
            <button 
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-3 font-medium ${activeTab === "overview" ? "border-b-2 border-[#7a2323] text-[#7a2323]" : "text-gray-500"}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab("curriculum")}
              className={`px-6 py-3 font-medium ${activeTab === "curriculum" ? "border-b-2 border-[#7a2323] text-[#7a2323]" : "text-gray-500"}`}
            >
              Curriculum
            </button>
            <button 
              onClick={() => setActiveTab("instructor")}
              className={`px-6 py-3 font-medium ${activeTab === "instructor" ? "border-b-2 border-[#7a2323] text-[#7a2323]" : "text-gray-500"}`}
            >
              Instructor
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="mb-12">
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                <p className="text-gray-700 mb-6">{course.overview}</p>
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
                  <ul className="space-y-2">
                    {course.curriculum.slice(0, 4).map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 text-[#7a2323]">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
            
            {activeTab === "curriculum" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="bg-[#7a2323] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                          {index + 1}
                        </div>
                        <h3 className="font-medium">{item}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {activeTab === "instructor" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-4">Meet Your Instructor</h2>
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-full md:w-1/3 aspect-square rounded-lg bg-gray-200 overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/300?u=${course.instructor}`}
                      alt={course.instructor}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-semibold mb-2">{course.instructor}</h3>
                    <p className="text-gray-600 mb-4">Course Instructor</p>
                    <p className="text-gray-700">{course.instructorBio}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          
          {/* Enrollment Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-2">Ready to Enroll?</h2>
            <p className="text-gray-600 mb-6">Start your journey with this transformative course today.</p>
            <Button className="bg-[#7a2323] hover:bg-[#5a1a1a] text-lg px-8 py-6">
              Enroll Now for {course.price}
            </Button>
            <p className="mt-4 text-sm text-gray-500">30-day money-back guarantee. No questions asked.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 