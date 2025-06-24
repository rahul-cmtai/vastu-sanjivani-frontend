"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MdLocationOn, MdEmail, MdPhone, MdPerson } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Define the particle type
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Contact() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Particles for the animated background
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);
  
  return (
    <div className="overflow-x-hidden">
      {/* Premium Animated Banner */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        {/* Background image with parallax */}
        <motion.div 
          className="absolute inset-0 z-0 w-full h-[120%]"
          style={{ y, opacity }}
        >
          <img
            src="https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?q=80&w=2000&auto=format&fit=crop"
            alt="Cosmic Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f29]/70 via-[#302b63]/60 to-[#7a2323]/80" />
        </motion.div>
        
        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/80 z-10"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.size / 2}px rgba(255, 255, 255, 0.8)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Moving zodiac symbols */}
        <div className="absolute inset-0 overflow-hidden opacity-30 mix-blend-lighten z-10">
          {["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-white/40 font-serif"
              style={{
                fontSize: Math.random() * 20 + 30,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 40 - 20],
                y: [0, Math.random() * 40 - 20],
                opacity: [0.2, 0.4, 0.2],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div 
            className="text-center text-white px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              Connect With Us
            </motion.h1>
            <motion.div 
              className="mx-auto h-1 w-24 bg-gradient-to-r from-blue-300 to-purple-500 rounded-full mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <motion.p 
              className="max-w-xl mx-auto text-xl text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Reach out for personalized Vastu consultations to transform your space
              into a sanctuary of harmony, prosperity, and positive energy.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10"
            >
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-[#7a2323] to-[#5a1a1a] rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px 2px rgba(122, 35, 35, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-12 px-4">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md">
              <span className="text-3xl text-[#7a2323]">
                <MdLocationOn />
              </span>
              <div>
                <div className="font-bold text-md">OUR OFFICE ADDRESS</div>
                <div className="text-gray-700">Gurugram, Haryana</div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md">
              <span className="text-3xl text-[#7a2323]">
                <MdEmail />
              </span>
              <div>
                <div className="font-bold text-md">GENERAL ENQUIRIES</div>
                <a href="mailto:mail@vaastusanjivanii.com" className="text-[#7a2323] hover:underline">
                  mail@vaastusanjivanii.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md">
              <span className="text-3xl text-[#7a2323]">
                <MdPhone />
              </span>
              <div>
                <div className="font-bold text-md">CALL US</div>
                <div className="text-gray-700">+91 9910558589</div>
              </div>
            </div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-[300px] w-full bg-gray-200 rounded-lg overflow-hidden shadow-md"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224096.84621430714!2d76.8243323631324!3d28.522404021236107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1698318023367!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
                  <MdPerson className="text-[#7a2323]" />
                  Your Name
                </label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                  <MdEmail className="text-[#7a2323]" />
                  Your Email
                </label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
                <MdPhone className="text-[#7a2323]" />
                Your Phone
              </label>
              <Input id="phone" placeholder="Enter your phone number" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium">
                <MdEmail className="text-[#7a2323]" />
                Your Message
              </label>
              <Textarea id="message" placeholder="What can we help you with?" rows={5} />
            </div>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex justify-center"
            >
              <Button className="bg-[#7a2323] hover:bg-[#5a1a1a] px-8 py-2">
                Submit Message
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
} 