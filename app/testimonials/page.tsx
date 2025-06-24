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
import { useState } from "react";
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

const clientTestimonials = [
  {
    id: 1,
    title: "STUDY LESS, SCORE MORE",
    content: "My kid, who was not doing very well in studies, with changes in placement of books and study table as suggested by Vastu Sanjivanii, scored good marks in boards and is now more focused on studies.",
    client: "Akanksha Verma",
    location: "Delhi",
    icon: <BookOpen className="h-10 w-10 text-[#7a2323]" />
  },
  {
    id: 2,
    title: "CERVICAL PAIN GOT HEALED COMPLETELY",
    content: "I had severe cervical pain for many years. Doctors suggested surgery. After implementing Vastu changes recommended by Vastu Sanjivanii, my pain completely vanished in just 15 days!",
    client: "Rajesh Sharma",
    location: "Mumbai",
    icon: <User className="h-10 w-10 text-[#7a2323]" />
  },
  {
    id: 3,
    title: "Chronic Spine Problem almost healed within days!",
    content: "I suffered from a severe spine problem for years with limited movement. After applying Vastu remedies, I experienced remarkable improvement within days and now lead a normal, active life.",
    client: "Meena Kapoor",
    location: "Bangalore",
    icon: <User className="h-10 w-10 text-[#7a2323]" />
  },
  {
    id: 4,
    title: "Payment recovery through Vastu Sanjivanii!",
    content: "I had a payment of 5 lakhs stuck for 6 months. Within 2 weeks of implementing Vastu Sanjivanii's remedies, the complete payment was recovered, resolving my financial stress.",
    client: "Vikram Singh",
    location: "Gurugram",
    icon: <Building className="h-10 w-10 text-[#7a2323]" />
  },
  {
    id: 5,
    title: "The knee pain vanished instantly",
    content: "I had intense knee pain that restricted my movement. After following Vastu Sanjivanii's simple remedies, my pain vanished almost instantly. I'm now able to walk freely without discomfort.",
    client: "Sunita Patel",
    location: "Ahmedabad",
    icon: <User className="h-10 w-10 text-[#7a2323]" />
  },
  {
    id: 6,
    title: "Chair with broken leg",
    content: "My office had ongoing conflicts and negativity. Vastu Sanjivanii identified a broken chair leg creating negative energy. After replacing it, workplace harmony was restored within days.",
    client: "Anand Mehta",
    location: "Pune",
    icon: <Building className="h-10 w-10 text-[#7a2323]" />
  }
];

const studentTestimonials = [
  {
    id: 1,
    name: "Rahul Verma",
    location: "Delhi",
    course: "Vastu Foundation Course",
    content: "The Vastu Foundation Course has transformed my understanding of spaces. The knowledge I gained helped me create a more harmonious home for my family and I've even started consulting for friends.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Mumbai",
    course: "Pendulum Dowsing Foundation Course",
    content: "Learning pendulum dowsing has opened new dimensions in my spiritual journey. The techniques taught were easy to understand and practice. I can now confidently use dowsing in my daily life.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Ahmedabad",
    course: "Vastu Professional Course",
    content: "The professional course exceeded my expectations. The depth of knowledge and practical applications have enabled me to start my own Vastu consultancy. The faculty support was exceptional.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    location: "Bangalore",
    course: "Effective Parenting Through Vastu",
    content: "This specialized course has been a game-changer for our home. The techniques to create supportive environments for children are simple yet powerful. My children's behavior and focus have improved.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Gurugram",
    course: "Pendulum Dowsing Course Level 2",
    content: "The advanced dowsing course deepened my practice significantly. I'm now able to use pendulum dowsing for complex health and energy assessments with confidence and accuracy.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    name: "Anjali Reddy",
    location: "Hyderabad",
    course: "Vastu Foundation Course",
    content: "The foundation course provided a solid understanding of Vastu principles. The practical assignments helped me implement changes in my own home, resulting in better energy flow and harmony.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop&q=80"
  }
];

export default function Testimonials() {
  const [activeClientTestimonialIndex, setActiveClientTestimonialIndex] = useState(0);
  const [activeStudentPage, setActiveStudentPage] = useState(0);
  
  const studentsPerPage = 3;
  const totalStudentPages = Math.ceil(studentTestimonials.length / studentsPerPage);
  
  const handlePrevClient = () => {
    setActiveClientTestimonialIndex(prev => 
      prev === 0 ? clientTestimonials.length - 1 : prev - 1
    );
  };
  
  const handleNextClient = () => {
    setActiveClientTestimonialIndex(prev => 
      prev === clientTestimonials.length - 1 ? 0 : prev + 1
    );
  };
  
  const currentStudentTestimonials = studentTestimonials.slice(
    activeStudentPage * studentsPerPage, 
    (activeStudentPage + 1) * studentsPerPage
  );

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
                      {clientTestimonials[activeClientTestimonialIndex].title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 text-lg mb-8 italic">
                    "{clientTestimonials[activeClientTestimonialIndex].content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="bg-[#7a2323] h-12 w-12 rounded-full flex items-center justify-center mr-4">
                      <User className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {clientTestimonials[activeClientTestimonialIndex].client}
                      </h4>
                      <p className="text-gray-500">
                        {clientTestimonials[activeClientTestimonialIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/3 flex items-center justify-center bg-gradient-to-br from-[#0f0f29]/5 to-[#7a2323]/5 rounded-lg p-8">
                  <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                    {clientTestimonials[activeClientTestimonialIndex].icon}
                  </div>
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
                  {clientTestimonials.map((_, index) => (
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

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {currentStudentTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-48 relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        {testimonial.course}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-4">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm flex items-center">
                      <Award className="h-4 w-4 mr-1" /> Certified Student
                    </span>
                    <span className="text-gray-500 text-sm">{testimonial.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Pagination */}
          {totalStudentPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                {[...Array(totalStudentPages)].map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveStudentPage(index)}
                    className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors ${
                      index === activeStudentPage 
                        ? "bg-[#7a2323] text-white" 
                        : "bg-white text-[#7a2323] hover:bg-gray-100"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className="text-center mt-12">
            <Button className="bg-[#7a2323] hover:bg-[#5a1a1a]">
              Enroll in Our Courses
            </Button>
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
              <Button className="bg-white text-[#7a2323] hover:bg-gray-100">
                Book a Consultation
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Our Courses
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}