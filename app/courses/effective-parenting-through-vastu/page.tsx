"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Award, Calendar, ChevronRight, Star } from "lucide-react";

export default function EffectiveParentingThroughVastu() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedModule, setSelectedModule] = useState(0);
  
  const course = {
    title: "Effective Parenting Through Vastu",
    subtitle: "Create Nurturing Spaces for Your Children",
    description: "Learn how to create nurturing environments for children using Vastu principles.",
    regularPrice: "₹1,499.00",
    price: "₹149.00",
    savePercentage: "90%",
    duration: "Lifetime access",
    type: "Masterclass",
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=1000&auto=format&fit=crop",
    overview: "This specialized masterclass focuses on applying Vastu principles to create supportive environments for children's development. Learn how room layouts, colors, and element placement can positively influence children's behavior, learning abilities, and overall well-being.",
    tags: ["#parenting", "#vastushastra", "#vastuforparenting"],
    rating: 4.7,
    students: 950
  };
  
  const modules = [
    {
      title: "Creating a Nurturing Environment",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1000&auto=format&fit=crop",
      content: [
        "Understanding the impact of space on child development",
        "The basics of Vastu for children's spaces",
        "Key elements that influence children's behavior",
        "Assessment of your current home setup"
      ]
    },
    {
      title: "Children's Bedroom Optimization",
      image: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=1000&auto=format&fit=crop",
      content: [
        "Ideal directions for children's bedrooms",
        "Bed positioning for better sleep quality",
        "Color schemes for different age groups",
        "Furniture arrangement for harmonious energy"
      ]
    },
    {
      title: "Study Areas & Learning Spaces",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
      content: [
        "Creating a focus-enhancing study area",
        "Vastu for better concentration and memory",
        "Best directions for academic success",
        "Simple remedies for academic challenges"
      ]
    },
    {
      title: "Play Areas & Creativity Zones",
      image: "https://images.unsplash.com/photo-1577286746638-331a2f372a94?q=80&w=1000&auto=format&fit=crop",
      content: [
        "Designing play spaces that encourage creativity",
        "Colors and elements for creative enhancement",
        "Balance between fun and harmony",
        "Managing energetic zones in the home"
      ]
    }
  ];

  const benefits = [
    "Create more harmonious and supportive spaces for your children",
    "Understand how Vastu principles influence child behavior and development",
    "Learn practical, implementable solutions for common issues",
    "Simple modifications that don't require major renovations",
    "Specific solutions for different age groups from toddlers to teens"
  ];

  const testimonials = [
    {
      name: "Rashmi Khanna",
      location: "Delhi",
      text: "After implementing the Vastu changes to my child's study area, I've seen a remarkable improvement in her concentration and academic performance."
    },
    {
      name: "Ajay Kumar",
      location: "Mumbai",
      text: "My son used to have trouble sleeping through the night. The simple bed position change suggested in the masterclass worked like magic."
    },
    {
      name: "Sunita Patel",
      location: "Ahmedabad",
      text: "Worth every rupee and more! The practical tips are easy to implement and have made a noticeable difference in the energy of our home."
    }
  ];

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
                <div className="bg-[#7a2323] text-white px-4 py-1 rounded-full text-sm">Masterclass</div>
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
            <Button className="bg-[#7a2323] hover:bg-[#5a1a1a] text-lg px-8 py-4" asChild>
              <a href="https://achieverslifestyle.com/" target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
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
              Discover how Vastu principles can help create nurturing spaces for your children's growth and development
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
                <a href="https://achieverslifestyle.com/" target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">{module.title}</h3>
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
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-50 inline-block px-6 py-3 rounded-lg mb-4">
              <div className="text-gray-500 mb-2">Regular price</div>
              <div className="text-2xl font-bold line-through text-red-600">{course.regularPrice}</div>
            </div>
            <h3 className="text-2xl font-bold mb-6">Limited Time Special Offer: {course.price}</h3>
            <Button className="bg-[#7a2323] hover:bg-[#5a1a1a] text-lg px-8 py-6" asChild>
              <a href="https://achieverslifestyle.com/" target="_blank" rel="noopener noreferrer">
                Enroll in Masterclass Now
              </a>
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
                  <h2 className="text-3xl font-bold mb-4">Effective Parenting Through Vastu Masterclass</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-[#7a2323] px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg">{course.overview}</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Why Take This Masterclass?</h3>
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
                  <h3 className="text-2xl font-semibold mb-4">Who Should Take This Masterclass?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Parents</span> - Looking to create more supportive environments for their children</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Educators</span> - Interested in optimizing learning environments</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Interior Designers</span> - Who work with family homes and children's spaces</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Vastu Enthusiasts</span> - Looking to expand their knowledge in specialized applications</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <Button 
                    className="bg-[#7a2323] hover:bg-[#5a1a1a] text-lg px-10 py-6"
                    asChild
                  >
                    <a href="https://achieverslifestyle.com/" target="_blank" rel="noopener noreferrer">
                      View Masterclass Curriculum <ChevronRight className="ml-2" />
                    </a>
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
                    <h2 className="text-2xl font-bold mb-4">Masterclass Modules</h2>
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
                <h2 className="text-2xl font-bold mb-6">What Parents Are Saying</h2>
                
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
            <h2 className="text-3xl font-bold mb-2">Transform Your Child's Space</h2>
            <p className="text-lg mb-8 text-white/90">Enroll in our Effective Parenting Through Vastu masterclass and learn how to create nurturing environments for your children.</p>
            <div className="mb-6">
              <div className="text-sm text-white/60 line-through mb-1">Regular Price: {course.regularPrice}</div>
              <div className="text-3xl font-bold">Special Offer: {course.price}</div>
            </div>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-12 py-7" asChild>
              <a href="https://achieverslifestyle.com/" target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
            </Button>
            <p className="mt-4 text-sm text-white/70">Limited time offer. Lifetime access to the masterclass.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 