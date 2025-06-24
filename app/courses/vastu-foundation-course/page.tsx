"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Award, Calendar, Video, Users, MessageCircle, BookOpen, ChevronRight, Star } from "lucide-react";

export default function VastuFoundationCourse() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedModule, setSelectedModule] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState(2);
  
  const course = {
    title: "Vastu Foundation Course",
    subtitle: "Vaastu Sanjivanii Training Course (Foundation Course)",
    description: "Learn the fundamental principles of Vastu Shastra and apply them in modern living spaces to create harmony and prosperity.",
    price: "₹9,999",
    duration: "1 year access",
    lessons: "8 modules",
    image: "/images/vastu-foundation-header.jpg",
    overview: "This comprehensive foundation course introduces you to the ancient science of Vastu Shastra. You'll learn about energies, directions, and how they influence your living spaces. Perfect for beginners who want to understand how to create harmony in their homes and workplaces through proper space arrangement and energy flow management.",
    benefits: [
      "Course completion certificate",
      "1 year access of course videos",
      "6 months weekly Live webinar support for FREE",
      "Access to private Facebook group (Exclusively for members)",
      "Access of telegram group (Exclusively for members)"
    ],
    rating: 4.9,
    students: 1250,
    saveAmount: "₹45,993"
  };
  
  const modules = [
    {
      title: "Dream Home Model Orientation Program",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1470&auto=format&fit=crop",
      content: [
        "How Vastu Shastra is helpful in today's life",
        "How to Identify your Dream Life",
        "Analysis of present scenario",
        "Seeding the vision of Dream Home through different exercises",
        "Survey of successful businesses",
        "Survey of same facing houses",
        "What things to master in a building to convert it into a Dream Home",
        "Dream Life Meditation",
        "What is the connection between our house and our dream life",
        "How our house affects our mind and body"
      ]
    },
    {
      title: "Zonify Your Home",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1374&auto=format&fit=crop",
      content: [
        "How directions control your life",
        "To identify Best direction for your Bedroom",
        "Effect of Drawing Room in different directions",
        "Effect of Dining Room in different directions",
        "Effect of Kitchen in different directions",
        "Effect of Wash Room in different directions",
        "The problematic areas of your building",
        "Secret of frequent failures in life",
        "Secret of frequent health issues",
        "Secret of scoring good marks in studies",
        "The effect of right facing while doing any activity",
        "How to select right facing for different activities",
        "How to solve different problems just by choosing right directions for yourself"
      ]
    },
    {
      title: "3 Steps To Zonify A Space Professionally",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1540544914515-99c5eb642bdf?q=80&w=1470&auto=format&fit=crop",
      content: [
        "The complete working on a layout",
        "How to take out center of a building accurately",
        "How to find out center of an irregular plot/floor",
        "How to take accurate readings from a Magnetic Compass",
        "How to avoid Errors Of Magnetic Compass",
        "How to grid a layout like a professional"
      ]
    },
    {
      title: "Remedify Your Space",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1470&auto=format&fit=crop",
      content: [
        "Importance of Entrances",
        "32 Types Of Entrances",
        "Effects of East Entrances",
        "Effects of North Entrances",
        "Effects Of South Entrances",
        "Effects Of West Entrances",
        "Positive & Negative Entrances",
        "How to Remedy a Negative Entrance",
        "How to Remedy a toilet",
        "How to Remedy a kitchen"
      ]
    },
    {
      title: "Master Your Space",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?q=80&w=1470&auto=format&fit=crop",
      content: [
        "Why the Right Placement of different Objects is required",
        "The Effect of different Objects in Different Directions",
        "The Effect of Washing Machine in Different Directions",
        "The Effect Of Inverter/ Generator in Different Directions",
        "The Effect of LCD in Different Directions",
        "The Effect of Dustbin in Different Directions",
        "The Effect of Study Table & Many More Things in Different Directions",
        "How to decide the Right Location of any Object",
        "How to Decide the Location of any Painting/Sculpture in a Building as a Remedy"
      ]
    },
    {
      title: "Process Of Plot Selection",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1373&auto=format&fit=crop",
      content: [
        "Auspicious plots on the basis of roads",
        "Plot selection based on shapes",
        "Shermukhi plots",
        "Gaumukhi plots",
        "Extended Plots",
        "Cut Plots",
        "Different Vedhs",
        "Soil Examination",
        "Other Criterias of Plot Selection"
      ]
    },
    {
      title: "House Selection | Construction Process",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=1470&auto=format&fit=crop",
      content: [
        "Basic rules of Building constructions",
        "Effects of building height",
        "Effects of Boring/underground tank",
        "Effects of overhead tanks",
        "Effects of plants",
        "Vastu And Staircases",
        "Precautions to be taken in building construction",
        "Location of Septic tanks",
        "How to decide Plot and building entrance",
        "How to mark location of septic tanks in plot and building",
        "How to mark location of boring in plot and building",
        "Vastu of Flats"
      ]
    },
    {
      title: "Sample Case Studies & Power Sessions",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=1470&auto=format&fit=crop",
      content: [
        "Practical Case Studies",
        "Problem solving technique",
        "Frequently asked questions",
        "Power Sessions Recordings"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      profession: "Architect",
      image: "https://i.pravatar.cc/150?img=11",
      text: "The Vastu Foundation Course completely changed my approach to architectural design. I now incorporate these principles in every project, and my clients are amazed by the positive energy in their spaces."
    },
    {
      name: "Priya Malhotra",
      profession: "Interior Designer",
      image: "https://i.pravatar.cc/150?img=5",
      text: "As an interior designer, I was skeptical at first, but the scientific approach to Vastu in this course won me over. The practical applications and case studies were particularly valuable."
    },
    {
      name: "Amit Patel",
      profession: "Homeowner",
      image: "https://i.pravatar.cc/150?img=12",
      text: "After implementing the Vastu principles I learned in this course, there has been a noticeable improvement in my family's well-being and harmony. The investment was absolutely worth it!"
    },
    {
      name: "Neha Gupta",
      profession: "Real Estate Consultant",
      image: "https://i.pravatar.cc/150?img=9",
      text: "This course has given me a competitive edge in the real estate market. I can now offer valuable insights to my clients about property selection based on Vastu principles."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1470&auto=format&fit=crop"
            alt={course.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f29]/90 to-[#7a2323]/80" />
        </div>
        
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="flex gap-2 items-center mb-4">
                <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full flex items-center text-sm">
                  <Star className="fill-yellow-400 h-4 w-4 mr-1" /> {course.rating} ({course.students}+ students)
                </div>
                <div className="bg-[#7a2323] text-white px-4 py-1 rounded-full text-sm">Pearl Membership</div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">{course.title}</h1>
              <h2 className="text-xl md:text-2xl text-yellow-300 mb-6">{course.subtitle}</h2>
              <p className="text-lg text-white/90 mb-8">{course.description}</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {course.duration}
                </div>
                <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {course.lessons}
                </div>
                <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Save {course.saveAmount}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Module Showcase */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">What You Will Learn</h2>
            <div className="h-1 w-20 bg-[#7a2323] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive curriculum covers all aspects of Vastu Shastra, from foundational concepts to advanced applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.slice(0, 4).map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={module.image} 
                    alt={module.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <Button 
                      variant="outline" 
                      className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#7a2323]"
                      onClick={() => {
                        setSelectedModule(index);
                        setActiveTab("curriculum");
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{module.title}</h3>
                  <div className="text-[#7a2323] text-sm mb-3">Individual Price: {module.price}</div>
                  <ul className="space-y-1">
                    {module.content.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <Check className="h-4 w-4 text-[#7a2323] mr-2 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                    <li className="text-xs text-gray-500 italic">
                      + {module.content.length - 2} more topics
                    </li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {modules.slice(4).map((module, index) => (
              <motion.div
                key={index + 4}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={module.image} 
                    alt={module.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <Button 
                      variant="outline" 
                      className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#7a2323]"
                      onClick={() => {
                        setSelectedModule(index + 4);
                        setActiveTab("curriculum");
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{module.title}</h3>
                  <div className="text-[#7a2323] text-sm mb-3">Individual Price: {module.price}</div>
                  <ul className="space-y-1">
                    {module.content.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <Check className="h-4 w-4 text-[#7a2323] mr-2 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                    <li className="text-xs text-gray-500 italic">
                      + {module.content.length - 2} more topics
                    </li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-50 inline-block px-6 py-3 rounded-lg mb-4">
              <div className="text-gray-500 mb-2">Individual modules total value</div>
              <div className="text-2xl font-bold line-through text-red-600">₹55,992</div>
            </div>
            <h3 className="text-2xl font-bold mb-6">Get All 8 Modules + Additional Benefits for just ₹9,999</h3>
            <Button className="bg-[#7a2323] hover:bg-[#5a1a1a] text-lg px-8 py-6">
              Enroll in Complete Course
            </Button>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex border-b mb-8 overflow-x-auto whitespace-nowrap">
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
              onClick={() => setActiveTab("benefits")}
              className={`px-6 py-3 font-medium ${activeTab === "benefits" ? "border-b-2 border-[#7a2323] text-[#7a2323]" : "text-gray-500"}`}
            >
              Membership Benefits
            </button>
            <button 
              onClick={() => setActiveTab("testimonials")}
              className={`px-6 py-3 font-medium ${activeTab === "testimonials" ? "border-b-2 border-[#7a2323] text-[#7a2323]" : "text-gray-500"}`}
            >
              Testimonials
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="mb-12">
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-4">Complete Vastu Foundation Course</h2>
                  <h3 className="text-xl text-[#7a2323] mb-6">Join Pearl Membership for Comprehensive Training</h3>
                  <p className="text-gray-700 mb-6 text-lg">{course.overview}</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Why Learn Vastu Shastra?</h3>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                    <div className="flex items-start">
                      <div className="bg-[#7a2323]/10 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-[#7a2323]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Improve Home Energy</h4>
                        <p className="text-gray-600 text-sm">Create positive energy flow in your living spaces</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#7a2323]/10 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-[#7a2323]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Enhance Prosperity</h4>
                        <p className="text-gray-600 text-sm">Apply principles that attract wealth and abundance</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#7a2323]/10 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-[#7a2323]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Professional Development</h4>
                        <p className="text-gray-600 text-sm">Add valuable skills to your design or architecture career</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#7a2323]/10 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-[#7a2323]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Reduce Negativity</h4>
                        <p className="text-gray-600 text-sm">Identify and remedy problem areas in your home</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Who Should Take This Course?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Homeowners</span> - Learn to optimize your living spaces for better energy flow and family harmony</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Interior Designers</span> - Add Vastu principles to your design services for a competitive edge</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Architects</span> - Incorporate ancient wisdom into modern building design</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Real Estate Professionals</span> - Gain insights to better advise clients on property selection</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Spiritual Practitioners</span> - Deepen your understanding of energy and space</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <Button 
                    className="bg-[#7a2323] hover:bg-[#5a1a1a] text-lg px-10 py-6"
                    onClick={() => setActiveTab("curriculum")}
                  >
                    View Course Curriculum <ChevronRight className="ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}
            
            {activeTab === "curriculum" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Module List */}
                  <div className="w-full lg:w-1/3">
                    <h2 className="text-2xl font-bold mb-4">Course Modules</h2>
                    <div className="space-y-3">
                      {modules.map((module, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedModule(index)}
                          className={`w-full text-left p-4 rounded-lg ${
                            selectedModule === index 
                              ? "bg-[#7a2323] text-white" 
                              : "bg-white hover:bg-gray-100 border"
                          }`}
                        >
                          <p className="font-medium">{module.title}</p>
                          {selectedModule === index && (
                            <p className="text-sm mt-1 text-white/80">Click for details</p>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Module Details */}
                  <div className="w-full lg:w-2/3">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                      <div className="h-48 relative">
                        <img 
                          src={modules[selectedModule].image} 
                          alt={modules[selectedModule].title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                          <div className="p-6">
                            <h2 className="text-2xl font-bold text-white">{modules[selectedModule].title}</h2>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-[#7a2323] font-semibold mb-6">Individual price: {modules[selectedModule].price}</p>
                        
                        <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
                        <ul className="space-y-3 text-gray-700 mb-6">
                          {modules[selectedModule].content.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="text-[#7a2323] shrink-0 h-5 w-5 mr-2 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-600">Individual modules can be purchased separately, but for the best value and complete learning experience, consider our Pearl Membership.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeTab === "benefits" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Pearl Membership Benefits</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4 text-[#7a2323]">Complete Course Access</h3>
                    <ul className="space-y-4">
                      {modules.map((module, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="text-green-600 shrink-0 h-5 w-5 mr-2 mt-0.5" />
                          <span>{module.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4 text-[#7a2323]">Additional Benefits</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Award className="text-green-600 shrink-0 h-5 w-5 mr-2 mt-0.5" />
                        <span>Course completion certificate</span>
                      </li>
                      <li className="flex items-start">
                        <Video className="text-green-600 shrink-0 h-5 w-5 mr-2 mt-0.5" />
                        <span>1 year access of course videos</span>
                      </li>
                      <li className="flex items-start">
                        <Calendar className="text-green-600 shrink-0 h-5 w-5 mr-2 mt-0.5" />
                        <span>6 months weekly Live webinar support for FREE</span>
                      </li>
                      <li className="flex items-start">
                        <Users className="text-green-600 shrink-0 h-5 w-5 mr-2 mt-0.5" />
                        <span>Access to private Facebook group (Exclusively for members)</span>
                      </li>
                      <li className="flex items-start">
                        <MessageCircle className="text-green-600 shrink-0 h-5 w-5 mr-2 mt-0.5" />
                        <span>Access of telegram group (Exclusively for members)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#7a2323]/10 to-[#302b63]/10 p-8 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-4">Why Choose Pearl Membership?</h3>
                  <p className="mb-4">Individual modules cost ₹6,999.00 each. Buying all 8 modules separately would cost you ₹55,992.</p>
                  <p className="font-bold">With Pearl Membership, you get all 8 modules PLUS additional benefits at just ₹9,999 — saving over ₹45,000!</p>
                </div>
              </motion.div>
            )}

            {activeTab === "testimonials" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">What Our Students Say</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {testimonials.slice(0, visibleTestimonials).map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-md"
                    >
                      <div className="flex items-center mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-14 h-14 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.profession}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700">{testimonial.text}</p>
                    </motion.div>
                  ))}
                </div>
                
                {visibleTestimonials < testimonials.length && (
                  <div className="text-center mt-6">
                    <Button 
                      variant="outline" 
                      className="border-[#7a2323] text-[#7a2323] hover:bg-[#7a2323] hover:text-white"
                      onClick={() => setVisibleTestimonials(testimonials.length)}
                    >
                      Show More Testimonials
                    </Button>
                  </div>
                )}
              </motion.div>
            )}
          </div>
          
          {/* Enrollment Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-[#0f0f29] to-[#7a2323] rounded-lg shadow-lg p-8 md:p-10 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-2">Ready to Transform Your Space?</h2>
            <p className="text-lg mb-8 text-white/90">Enroll in our Vastu Foundation Course and learn how to create harmony in your living spaces.</p>
            <div className="mb-6">
              <div className="text-sm text-white/60 line-through mb-1">Individual Modules: ₹55,992</div>
              <div className="text-3xl font-bold">Pearl Membership: ₹9,999</div>
            </div>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-12 py-7">
              Enroll Now
            </Button>
            <p className="mt-4 text-sm text-white/70">30-day money-back guarantee. No questions asked.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 