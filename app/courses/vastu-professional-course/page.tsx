"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Award, Calendar, ChevronRight, Star, BookOpen } from "lucide-react";

export default function VastuProfessionalCourse() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedModule, setSelectedModule] = useState(0);
  
  const course = {
    title: "Vastu Professional Course",
    subtitle: "Professional Vastu Course (Online Video Course)",
    description: "Advanced training for aspiring Vastu consultants with practical applications and case studies.",
    price: "₹19,999",
    duration: "1 year access",
    lessons: "13 modules",
    image: "https://images.unsplash.com/photo-1594393537686-c9e5949fc527?q=80&w=1470&auto=format&fit=crop",
    overview: "This professional-level course is designed for those who want to become Vastu consultants. Building on foundation knowledge, this advanced course covers complex Vastu calculations, professional consulting methods, and business establishment techniques.",
    instructor: "Prof. Amita Verma",
    instructorBio: "Prof. Amita Verma is a renowned Vastu expert with over two decades of experience. She has authored three books on Vastu Shastra and regularly conducts workshops internationally.",
    rating: 4.8,
    students: 780,
    saveAmount: "₹63,989"
  };
  
  const modules = [
    {
      title: "5 Elements Of Nature",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1604537466158-719b1972feb8?q=80&w=1469&auto=format&fit=crop",
      content: [
        "About 5 Elements",
        "Nature Of Water Elements- Meditation",
        "Effects Of Balanced & Imbalanced State Of Water In Life",
        "Water Element In Body & Building",
        "Air Eement, Its Balanced & Imbalanced State In Life",
        "Air Element In Body & Building",
        "Fire Element, Its Balanced & Imbalanced State In Life",
        "Fire Element in Body & Building",
        "Earth Element, Its Balanced & Imbalanced State In Life",
        "Earth Element In Body & Building",
        "Space Element, Its Balanced & Imbalanced State In Life",
        "Space Element In Body & Building"
      ]
    },
    {
      title: "Elemental Theory",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1497&auto=format&fit=crop",
      content: [
        "Relation Between 5 Elements",
        "Elemental Cycle",
        "Cycle Of Creation",
        "Cycle Of Destruction",
        "Cycle Of Exhaustion",
        "Cycle Of Balance",
        "Zones Of Transition",
        "Identifying Elements In Your Own House"
      ]
    },
    {
      title: "Bar Chart Analysis",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1470&auto=format&fit=crop",
      content: [
        "What Is Bar Chart",
        "Importance Of Bar Chart In Vastu",
        "Finding Zonal Strength",
        "Making Bar Chart In 5 Steps",
        "Demo Video Of Full Practical Working Of Making Bar chart"
      ]
    },
    {
      title: "The Colour Therapy",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=1364&auto=format&fit=crop",
      content: [
        "How To Treat Cut Zones",
        "How To Treat Extended Zones",
        "Different Concepts to Remedy Anti-Object & Anti Activity",
        "Concept Of Toilet Remedy",
        "Concept Of Kitchen Remedy",
        "How To Remedify Underground Tanks",
        "How To Remedify Overhead Tanks",
        "How To Remedify Septic Tanks",
        "How To Remedify Shafts, Staircase, Stores",
        "How to Remedy Washing Machine, Refrigerator, Dustbin, Mirror, Inverters Mistakes We Do In Colour Therapy"
      ]
    },
    {
      title: "Health Vastu",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop",
      content: [
        "How Vastu Purush Came Into Existence",
        "Vastu Purush And Directions",
        "Different Methods Of Addressing Health Issues",
        "Vastu Purush & Marma Points",
        "Vastu Shastra & Ayurveda",
        "Directions & Internal Organs",
        "How To Address Various Health Issues Through Vastu",
        "How To Deal With Anxiety & Stress"
      ]
    },
    {
      title: "Remedial Vastu Mastery Part 1",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?q=80&w=1470&auto=format&fit=crop",
      content: [
        "Remedy To Remove Negativity Of A Space",
        "About Pyramids, The Energy Boosters",
        "Pyramids In Vastu Shastra",
        "Precautions In Using Pyramids",
        "How To Do Space Surgery",
        "Creating Virtual Entry",
        "Precautions To Be Taken While Creating Virtual Entry",
        "Treating L Shaped Plots Through Space Surgery",
        "Treating Cut Zones With Space Surgery"
      ]
    },
    {
      title: "Remedial Vastu Mastery Part 2",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1470&auto=format&fit=crop",
      content: [
        "Treating Zones With Lights",
        "Different Applications Of Enlightenment Technique",
        "Mirrors As Vastu Remedies",
        "Precautions While Using Mirror Remedy",
        "Right Facing For Business/Jobs",
        "Right Facing For Students",
        "3-D Remedies for Space Programming",
        "Use Of Swastik/Plants /Paintings"
      ]
    },
    {
      title: "Remedies At Subtle Level",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1474533883693-59a44dbb964e?q=80&w=1470&auto=format&fit=crop",
      content: [
        "Right Mindset For Problem Solving",
        "3 Ingredient For Problem Solving",
        "Meditation For Problem Solving",
        "Cause Of Dropping Energy Of The House",
        "Powerful Technique To Raise The Positive Energies Of The House",
        "House Detoxification Technique",
        "Power Of Mantras",
        "Raising Vibrational Frequencies Of The House",
        "Raising Personal Frequency For Best Results"
      ]
    },
    {
      title: "Mantra Programming",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1473&auto=format&fit=crop",
      content: [
        "Negative Programming Of Inner Space",
        "Create Your Own Life Mantras",
        "Space Mantras Remedy",
        "Amplify Wish Fulfillment Process",
        "Crystal Therapy",
        "Crystals as Space Programmer",
        "Precautions While Using Crystals",
        "Empower Your Wish Through Crystals",
        "Heal Vastu Devta Of Your House"
      ]
    },
    {
      title: "Working On Different Premises",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1470&auto=format&fit=crop",
      content: [
        "How To Work On Flats/Floors",
        "Remedy For Lift Entrance",
        "Working On Bunglows",
        "Basement Vastu",
        "Vastu Of Home Boutique",
        "Vastu For Joint Family",
        "Vastu For PG/Office Cabins",
        "Dead End Plots/Houses And Its Remedies",
        "T- Junction Plots & It's Remedies",
        "Concept Of Clockwise And Anti- Clockwise StaircaseStaircase Remedy"
      ]
    },
    {
      title: "Complete Process Of Professional Working",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop",
      content: [
        "Visiting The Site",
        "How To Decode Client's Words",
        "Finding Center Of Irregular Plots And Floors In Minutes",
        "How To Find Out North From Google Earth",
        "Grid Rectification Process",
        "Bar Chart Process Simplified",
        "Flow Chart Of Complete Process",
        "Right Time For Space Programming"
      ]
    },
    {
      title: "Zone Identification As Per Problem",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1470&auto=format&fit=crop",
      content: [
        "Zones Responsible For Delay In Marriage",
        "Child Birth Issues",
        "Relationship Issues",
        "Zones to be Checked For Property Related Issues",
        "Financial Instability",
        "Education Related Issues",
        "Career Related Issues",
        "Health Issues"
      ]
    },
    {
      title: "Case Studies & Master Session Highlights",
      price: "₹6,999.00",
      image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1470&auto=format&fit=crop",
      content: [
        "Practical Case Studies",
        "Real-world Applications",
        "Problem-solving Techniques",
        "Master Session Recordings",
        "Expert Analysis and Solutions"
      ]
    }
  ];

  const benefits = [
    "6 Months Live Webinar Support (Once In 15 Days)",
    "Vaastu Sanjivanii Expert Certificate On Completing The Course",
    "Vaastu Sanjivanii Master Certificate Once You Submit 3 Successful Case Studies",
    "Access Of Pvt. Facebook Group",
    "1 Year Access Of Course Videos",
    "15 Creatives Of Publicity Material From Vaastu Sanjivanii For Facebook Page After Getting Master Certificate",
    "3 Facebook Banners For FB Profile",
    "Opportunity To Work Together As A Team In Future (If You Perform Well)"
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
                <div className="bg-[#7a2323] text-white px-4 py-1 rounded-full text-sm">Emerald Membership</div>
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
              Space Balancing Mastery Course Bundle designed for professional Vastu consultants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.slice(0, 6).map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all"
              >
                <a href="https://achieverslifestyle.com/" target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{module.title}</h3>
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
                </a>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {modules.slice(6, 13).map((module, index) => (
              <motion.div
                key={index + 6}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 6) * 0.05 }}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all"
              >
                <a href="https://achieverslifestyle.com/" target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{module.title}</h3>
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
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-50 inline-block px-6 py-3 rounded-lg mb-4">
              <div className="text-gray-500 mb-2">Individual modules total value</div>
              <div className="text-2xl font-bold line-through text-red-600">₹83,988</div>
            </div>
            <h3 className="text-2xl font-bold mb-6">Get All 13 Modules + Additional Benefits for just ₹19,999</h3>
            <Button className="bg-[#7a2323] hover:bg-[#5a1a1a] text-lg px-8 py-6" asChild>
              <a href="https://achieverslifestyle.com/" target="_blank" rel="noopener noreferrer">
                Enroll in Complete Course
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
              onClick={() => setActiveTab("benefits")}
              className={`px-6 py-3 font-medium ${activeTab === "benefits" ? "border-b-2 border-[#7a2323] text-[#7a2323]" : "text-gray-500"}`}
            >
              Membership Benefits
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
                  <h2 className="text-3xl font-bold mb-4">Complete Vastu Professional Course</h2>
                  <h3 className="text-xl text-[#7a2323] mb-6">Join Emerald Membership for Advanced Training</h3>
                  <p className="text-gray-700 mb-6 text-lg">{course.overview}</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Why Take This Advanced Course?</h3>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                    <div className="flex items-start">
                      <div className="bg-[#7a2323]/10 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-[#7a2323]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Professional Expertise</h4>
                        <p className="text-gray-600 text-sm">Gain advanced knowledge to practice professionally</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#7a2323]/10 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-[#7a2323]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Advanced Techniques</h4>
                        <p className="text-gray-600 text-sm">Learn subtle energy remedies not taught elsewhere</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#7a2323]/10 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-[#7a2323]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Business Growth</h4>
                        <p className="text-gray-600 text-sm">Establish yourself as a professional Vastu consultant</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#7a2323]/10 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-[#7a2323]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Complete System</h4>
                        <p className="text-gray-600 text-sm">Master the entire methodology of professional remedies</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Who Should Take This Course?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Vastu Foundation Course Graduates</span> - Ready to take your knowledge to professional level</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Interior Designers & Architects</span> - Add advanced Vastu consulting services to your practice</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Real Estate Professionals</span> - Gain expertise in advanced property assessment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-[#7a2323] h-5 w-5 mr-3 mt-0.5" />
                      <span><span className="font-medium">Spiritual Practitioners</span> - Deepen your understanding of subtle energies and space programming</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <Button 
                    className="bg-[#7a2323] hover:bg-[#5a1a1a] text-lg px-10 py-6"
                    asChild
                  >
                    <a href="https://achieverslifestyle.com/" target="_blank" rel="noopener noreferrer">
                      View Course Curriculum <ChevronRight className="ml-2" />
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
                          <p className="text-gray-600">Individual modules can be purchased separately, but for the best value and complete learning experience, consider our Emerald Membership.</p>
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
                <h2 className="text-2xl font-bold mb-6">Emerald Membership Benefits</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4 text-[#7a2323]">Space Balancing Mastery Course Bundle</h3>
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
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="text-green-600 shrink-0 h-5 w-5 mr-2 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#7a2323]/10 to-[#302b63]/10 p-8 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-4">Why Choose Emerald Membership?</h3>
                  <p className="mb-4">Individual modules cost ₹6,999.00 each. Buying all 13 modules separately would cost you ₹83,988.</p>
                  <p className="font-bold">With Emerald Membership, you get all 13 modules PLUS additional benefits at just ₹19,999 — saving over ₹63,000!</p>
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
            <h2 className="text-3xl font-bold mb-2">Become a Vastu Professional</h2>
            <p className="text-lg mb-8 text-white/90">Enroll in our Vastu Professional Course and learn how to create harmony in spaces and establish a thriving consulting practice.</p>
            <div className="mb-6">
              <div className="text-sm text-white/60 line-through mb-1">Individual Modules: ₹83,988</div>
              <div className="text-3xl font-bold">Emerald Membership: ₹19,999</div>
            </div>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-12 py-7" asChild>
              <a href="https://achieverslifestyle.com/" target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
            </Button>
            <p className="mt-4 text-sm text-white/70">Learn and earn! Become a Master Of Vastu Shastra.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 