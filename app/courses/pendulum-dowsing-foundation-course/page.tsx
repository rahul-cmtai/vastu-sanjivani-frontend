"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Award, Calendar, ChevronRight, Star } from "lucide-react";
import Link from "next/link";

export default function PendulumDowsingFoundationCourse() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedModule, setSelectedModule] = useState(0);
  
  const course = {
    title: "Pendulum Dowsing Foundation Course",
    subtitle: "Learn the Art of Intuitive Decision Making",
    description: "Learn the basics of pendulum dowsing and how to use it for energy detection and decision making.",
    regularPrice: "₹2,100.00",
    price: "₹1,100.00",
    savePercentage: "47%",
    duration: "Lifetime access",
    type: "Foundation Course",
    image: "https://images.unsplash.com/photo-1515942661900-94b3d1972591?q=80&w=1000&auto=format&fit=crop",
    overview: "This introductory course teaches the ancient art of pendulum dowsing. You'll learn how to select and program your pendulum, ask effective questions, interpret responses, and use dowsing for various applications including space clearing and decision-making.",
    rating: 4.8,
    students: 850
  };
  
  const modules = [
    {
      title: "Introduction to Pendulum Dowsing",
      image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=1000&auto=format&fit=crop",
      content: [
        "History and origins of pendulum dowsing",
        "Scientific perspective on dowsing",
        "Types of pendulums and their uses",
        "How to choose your first pendulum"
      ]
    },
    {
      title: "Preparing Your Pendulum",
      image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=1000&auto=format&fit=crop",
      content: [
        "Cleansing and charging your pendulum",
        "Programming your pendulum for personal use",
        "Establishing your yes/no responses",
        "Creating a connection with your tool"
      ]
    },
    {
      title: "Basic Dowsing Techniques",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      content: [
        "Proper holding techniques",
        "Formulating clear and effective questions",
        "Understanding different swing patterns",
        "Interpreting subtle responses"
      ]
    },
    {
      title: "Practical Applications",
      image: "https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1000&auto=format&fit=crop",
      content: [
        "Decision making with pendulum dowsing",
        "Finding lost objects",
        "Food and supplement testing",
        "Space energy assessment"
      ]
    }
  ];

  const benefits = [
    "Develop your intuitive abilities through practical exercises",
    "Learn to make more confident decisions in your daily life",
    "Discover how to detect energy imbalances in spaces and objects",
    "Master the art of asking effective questions for accurate responses",
    "Gain a skill that complements other spiritual and healing practices"
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Bangalore",
      text: "I was skeptical at first, but this course has completely changed how I approach decisions. The techniques are simple yet powerful."
    },
    {
      name: "Meena Sharma",
      location: "Delhi",
      text: "The instructor's approach made learning dowsing so accessible. I use my pendulum daily now for everything from choosing supplements to checking energy in my home."
    },
    {
      name: "Arjun Patel",
      location: "Mumbai",
      text: "As someone who works with energy healing, adding pendulum dowsing to my practice has been invaluable. This course provided the perfect foundation."
    }
  ];

  const relatedCourse = {
    title: "Pendulum Dowsing Course Level 2",
    description: "Advance your dowsing skills to scan energy of people, places, and things.",
    regularPrice: "₹6,999.00",
    price: "₹4,999.00",
    eligibility: "You must have completed Pendulum Dowsing Foundation Course.",
    features: [
      "ENERGY OF A PERSON/ PLACE/ THING",
      "ENERGY OF A HOUSE",
      "VASTU OF A BUILDING",
      "PERSONALITY INDEX OF A STRANGER",
      "BENEFIT OF ANYTHING",
      "IQ INDEX OF A PERSON",
      "HEALTH INDEX",
      "POSSIBILITY INDEX OF ANY EVENT",
      "COMPATIBILITY WITH ANY PERSON/BRAND/OBJECT/MEDICINE"
    ]
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
              <p className="text-lg text-white/90 mb-8">{course.description}</p>
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

      {/* Module Showcase */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">What You Will Learn</h2>
            <div className="h-1 w-20 bg-[#7a2323] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master the ancient art of pendulum dowsing for intuitive decision making and energy detection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
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
              Curriculum
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
                  <h2 className="text-3xl font-bold mb-4">Pendulum Dowsing Foundation Course</h2>
                  <p className="text-gray-700 mb-6 text-lg">{course.overview}</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Benefits of This Course</h3>
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
                      <span><span className="font-medium">Beginners</span> - No prior experience with dowsing required</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Spiritual Practitioners</span> - Looking to add dowsing to their toolkit</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Vastu Enthusiasts</span> - Interested in energy detection techniques</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Anyone</span> - Seeking to develop their intuitive abilities</span>
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
                        <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
                        <ul className="space-y-3 text-gray-700 mb-6">
                          {modules[selectedModule].content.map((item, index) => (
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
                <h2 className="text-2xl font-bold mb-6">What Our Students Say</h2>
                
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
                      <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
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
            <h2 className="text-3xl font-bold mb-2">Start Your Dowsing Journey Today</h2>
            <p className="text-lg mb-8 text-white/90">Learn the ancient art of pendulum dowsing and develop your intuitive abilities.</p>
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
            <h2 className="text-3xl font-bold mb-2">Advanced Learning Path</h2>
            <div className="h-1 w-20 bg-[#7a2323] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              After completing this foundation course, continue your learning journey with our advanced level
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
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3 mb-4">
                  <p className="text-sm font-medium">
                    <span className="text-yellow-300">Note:</span> {relatedCourse.eligibility}
                  </p>
                </div>
                <Link href="/courses/pendulum-dowsing-course-level-2">
                  <Button className="w-full bg-white text-[#7a2323] hover:bg-gray-100">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="md:w-2/3 p-6">
                <h4 className="text-xl font-bold mb-4 text-[#7a2323]">LEARN TO SCAN</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {relatedCourse.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-2 mt-0.5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 