"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Star, AlertTriangle, Calendar, Award } from "lucide-react";
import Link from "next/link";

export default function PendulumDowsingCourseLevel2() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedModule, setSelectedModule] = useState(0);
  
  const course = {
    title: "Pendulum Dowsing Course Level 2",
    subtitle: "Advanced Techniques for Energy Scanning",
    description: "Advanced pendulum dowsing techniques for scanning energy, health assessments, and decision making.",
    regularPrice: "₹6,999.00",
    price: "₹4,999.00",
    savePercentage: "28%",
    duration: "Lifetime access",
    type: "Advanced Course",
    image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=1000&auto=format&fit=crop",
    overview: "Building on foundation dowsing skills, this advanced course explores complex dowsing applications including energy scanning, personality assessment, health indices, and compatibility testing. Develop your intuitive abilities and learn professional dowsing protocols.",
    eligibility: "You must have completed Pendulum Dowsing Foundation Course.",
    rating: 4.9,
    students: 620
  };
  
  const scanCategories = [
    {
      title: "Energy Scanning",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
      content: [
        "ENERGY OF A PERSON/ PLACE/ THING",
        "ENERGY OF A HOUSE",
        "VASTU OF A BUILDING"
      ]
    },
    {
      title: "Personal Assessment",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1000&auto=format&fit=crop",
      content: [
        "PERSONALITY INDEX OF A STRANGER",
        "IQ INDEX OF A PERSON",
        "HEALTH INDEX"
      ]
    },
    {
      title: "Predictive Analysis",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
      content: [
        "BENEFIT OF ANYTHING",
        "POSSIBILITY INDEX OF ANY EVENT",
        "COMPATIBILITY WITH ANY PERSON/BRAND/OBJECT/MEDICINE"
      ]
    }
  ];

  const applicationModules = [
    {
      title: "Decision Making",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
      content: [
        "TAKING RIGHT DECISIONS IN LIFE",
        "Evaluating multiple options",
        "Timing decisions for optimal outcomes",
        "Identifying potential obstacles"
      ]
    },
    {
      title: "Vastu Applications",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
      content: [
        "SELECTING THE RIGHT REMEDY AS PER VASTU",
        "Detecting energy imbalances in spaces",
        "Identifying optimal placement for objects",
        "Measuring effectiveness of remedies"
      ]
    },
    {
      title: "Personal Insights",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
      content: [
        "PERSONALITY TRAITS OF A STRANGER",
        "Compatibility in relationships",
        "Career path guidance",
        "Personal development opportunities"
      ]
    },
    {
      title: "Advanced Applications",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
      content: [
        "AND MUCH MORE",
        "Health and wellness scanning",
        "Remote energy assessment",
        "Professional dowsing protocols"
      ]
    }
  ];

  const benefits = [
    "Develop advanced scanning abilities for energy assessment",
    "Learn to make accurate personality and health assessments",
    "Master compatibility testing for better decision making",
    "Apply dowsing to Vastu practices for enhanced results",
    "Gain professional-level dowsing skills for personal and client work"
  ];

  const testimonials = [
    {
      name: "Vikram Singh",
      location: "Jaipur",
      text: "After completing the Level 1 course, this advanced training has transformed my practice. I can now accurately scan energies and provide valuable insights to my clients."
    },
    {
      name: "Priya Desai",
      location: "Pune",
      text: "The techniques for scanning personality traits and compatibility have been incredibly accurate. This course has given me tools I use daily in my wellness practice."
    },
    {
      name: "Amit Sharma",
      location: "Delhi",
      text: "Learning to apply dowsing to Vastu remedies has been game-changing. I can now confidently select the most effective solutions for my home and office spaces."
    }
  ];

  const relatedCourse = {
    title: "Pendulum Dowsing Foundation Course",
    description: "Learn the basics of pendulum dowsing and how to use it for energy detection and decision making.",
    regularPrice: "₹2,100.00",
    price: "₹1,100.00"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={course.image}
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
                <div className="bg-[#7a2323] text-white px-4 py-1 rounded-full text-sm">{course.type}</div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">{course.title}</h1>
              <h2 className="text-xl md:text-2xl text-yellow-300 mb-6">{course.subtitle}</h2>
              <p className="text-lg text-white/90 mb-4">{course.description}</p>
              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3 mb-6 text-white flex items-start">
                <AlertTriangle className="h-5 w-5 mr-2 shrink-0 text-yellow-300" />
                <p className="text-sm">
                  <span className="font-semibold text-yellow-300">Eligibility:</span> {course.eligibility}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {course.duration}
                </div>
                <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Save {course.savePercentage}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Price Banner */}
      <div className="bg-gradient-to-r from-[#0f0f29]/5 to-[#7a2323]/5">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="text-xl md:text-2xl font-bold text-[#7a2323] mr-3">Special Offer:</div>
              <div className="text-gray-500 text-lg line-through mr-3">{course.regularPrice}</div>
              <div className="text-2xl md:text-3xl font-bold">{course.price}</div>
            </div>
            <Button className="bg-[#7a2323] hover:bg-[#5a1a1a] text-lg px-8 py-4">
              Enroll Now
            </Button>
          </div>
        </div>
      </div>

      {/* What You Will Learn */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">What You Will Learn To Scan</h2>
            <div className="h-1 w-20 bg-[#7a2323] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master advanced scanning techniques to assess energy, personality, and compatibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {scanCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <ul className="space-y-3">
                    {category.content.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-[#7a2323] mr-2 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Applications You Will Master</h2>
            <div className="h-1 w-20 bg-[#7a2323] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn practical applications of pendulum dowsing for daily life and professional use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationModules.map((module, index) => (
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
                  <h3 className="font-bold text-gray-900 mb-4 line-clamp-2">{module.title}</h3>
                  <ul className="space-y-2">
                    {module.content.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <Check className="h-4 w-4 text-[#7a2323] mr-2 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                    {module.content.length > 2 && (
                      <li className="text-xs text-gray-500 italic">
                        + {module.content.length - 2} more topics
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-50 inline-block px-6 py-3 rounded-lg mb-4">
              <div className="text-gray-500 mb-2">Regular price</div>
              <div className="text-2xl font-bold line-through text-red-600">{course.regularPrice}</div>
            </div>
            <h3 className="text-2xl font-bold mb-6">Limited Time Special Offer: {course.price}</h3>
            <Button className="bg-[#7a2323] hover:bg-[#5a1a1a] text-lg px-8 py-6">
              Enroll Now
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
              Applications
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
                  <h2 className="text-3xl font-bold mb-4">Advanced Pendulum Dowsing Course</h2>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-start">
                    <AlertTriangle className="h-5 w-5 mr-2 shrink-0 text-yellow-500" />
                    <p className="text-sm text-yellow-700">
                      <span className="font-semibold">Prerequisite:</span> {course.eligibility}
                    </p>
                  </div>
                  <p className="text-gray-700 mb-6 text-lg">{course.overview}</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Benefits of This Advanced Course</h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Who Should Take This Course?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Level 1 Graduates</span> - Who have mastered the basics of pendulum dowsing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Vastu Practitioners</span> - Looking to enhance their assessment capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Healing Professionals</span> - Who want to add energy scanning to their practice</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Intuitive Seekers</span> - Ready to take their dowsing skills to the professional level</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <Button 
                    className="bg-[#7a2323] hover:bg-[#5a1a1a] text-lg px-10 py-6"
                    onClick={() => setActiveTab("curriculum")}
                  >
                    View Course Applications <ChevronRight className="ml-2" />
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
                    <h2 className="text-2xl font-bold mb-4">Application Areas</h2>
                    <div className="space-y-3">
                      {applicationModules.map((module, index) => (
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
                          src={applicationModules[selectedModule].image} 
                          alt={applicationModules[selectedModule].title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                          <div className="p-6">
                            <h2 className="text-2xl font-bold text-white">{applicationModules[selectedModule].title}</h2>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3">What You&apos;ll Learn</h3>
                        <ul className="space-y-3 text-gray-700 mb-6">
                          {applicationModules[selectedModule].content.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="text-[#7a2323] shrink-0 h-5 w-5 mr-2 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeTab === "testimonials" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">What Our Advanced Students Say</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-md"
                    >
                      <div className="mb-4">
                        <div className="flex mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 italic mb-4">&quot;{testimonial.text}&quot;</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
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
            <h2 className="text-3xl font-bold mb-2">Take Your Dowsing Skills to the Next Level</h2>
            <p className="text-lg mb-8 text-white/90">Master advanced scanning techniques and professional dowsing applications.</p>
            <div className="mb-6">
              <div className="text-sm text-white/60 line-through mb-1">Regular Price: {course.regularPrice}</div>
              <div className="text-3xl font-bold">Special Offer: {course.price}</div>
            </div>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-12 py-7">
              Enroll Now
            </Button>
            <p className="mt-4 text-sm text-white/70">Limited time offer. Lifetime access to all course materials.</p>
          </motion.div>
        </div>
      </div>

      {/* Related Course */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Haven&apos;t Completed Level 1?</h2>
            <div className="h-1 w-20 bg-[#7a2323] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start with our foundation course to learn the basics of pendulum dowsing
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gradient-to-br from-[#0f0f29] to-[#7a2323] p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">{relatedCourse.title}</h3>
                <p className="mb-4 text-white/80">{relatedCourse.description}</p>
                <div className="mb-4">
                  <div className="text-sm text-white/60 line-through mb-1">{relatedCourse.regularPrice}</div>
                  <div className="text-xl font-bold">{relatedCourse.price}</div>
                </div>
                <Link href="/courses/pendulum-dowsing-foundation-course">
                  <Button className="w-full bg-white text-[#7a2323] hover:bg-gray-100">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="md:w-2/3 p-6 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-4 text-[#7a2323]">Complete the Foundation Course First</h4>
                  <p className="text-gray-600 mb-6">
                    The Level 1 course will teach you the essential skills needed before advancing to this Level 2 course.
                  </p>
                  <Link href="/courses/pendulum-dowsing-foundation-course">
                    <Button className="bg-[#7a2323] hover:bg-[#5a1a1a]">
                      Enroll in Foundation Course
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}