"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TestimonialsMarquee } from "@/components/testimonials";
import { Hero } from "@/components/hero";

// Animation variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const floatingAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

const services = [
  {
    title: "Vastu Consultancy",
    description: "Get authentic and genuine Vastu Consultancy Services for your home and workplace."
  },
  {
    title: "Astro Vastu Remedies",
    description: "Customized solutions using a blend of Vastu and astrology for various life problems."
  },
  {
    title: "Numerology Solutions",
    description: "Discover how numbers impact your life and get solutions for better growth and success."
  },
  {
    title: "Vastu Compliant Designs",
    description: "Get your Vastu compliant plan made for new or existing homes and offices."
  }
];

export default function Home() {
  // Mouse position for cursor-follow animation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Apply spring physics to the cursor follow for smooth animation
  const cursorX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const cursorY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  // Mouse position tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Cursor follower */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          translateX: cursorX,
          translateY: cursorY,
          zIndex: 999,
          pointerEvents: "none"
        }}
        className="hidden lg:block"
      >
        <motion.div 
          className="w-6 h-6 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full opacity-50 blur-sm"
          style={{ x: "-50%", y: "-50%" }}
        />
      </motion.div>
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#7a2323]">
              A Perfect Solution To Your Problems!
            </h2>
            <motion.p 
              variants={fadeIn}
              className="text-gray-700 leading-relaxed"
            >
              Vaastu Sanjivanii is a science of building construction and balancing of energies in it. It aligns the energies of a building with nature to ensure healthy, wealthy and prosperous life. Whether the objective is to improve love life & relationships, education, health, job and finance, or simply to experience greater level of tranquility, Vaastu Sanjivanii helps you to make it happen.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#7a2323]"
            variants={fadeIn}
          >
            What We Provide
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md overflow-hidden"
              >
                {/* 3D tilt effect card */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="h-full"
                >
                  {/* 3D tilt effect inner content */}
                  <motion.div
                    whileHover={{ 
                      rotateX: [-5, 5, 0], 
                      rotateY: [5, -5, 0],
                      transition: { duration: 0.3, ease: "easeOut" } 
                    }}
                    className="h-full"
                  >
                    <div className="w-12 h-12 bg-[#7a2323]/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl text-[#7a2323]">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* New Testimonials Section */}
      <TestimonialsMarquee />

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="py-16 bg-gray-100"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#7a2323]">
              Invite Good Luck Into Life
            </h2>
            <p className="text-gray-700 mb-8">
              The benefits of Vastu are enormous. It can help you improve any and every area of life painlessly and effectively. Contact us today!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button className="bg-[#7a2323] hover:bg-[#5a1a1a] text-white px-8 py-3 text-lg">
                Contact Us Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
} 