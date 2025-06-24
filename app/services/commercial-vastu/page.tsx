"use client";
import React, { useEffect, useState } from "react";
import { Building, ShoppingBag, Briefcase, Factory, BarChart, TrendingUp } from 'lucide-react';
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const }
  },
  hover: {
    y: -15,
    scale: 1.05,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: { duration: 0.3, ease: "easeOut" as const }
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -45 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: { 
      type: "spring" as const, 
      stiffness: 260, 
      damping: 20,
      delay: 0.2
    } 
  },
  hover: { 
    rotate: [0, -10, 10, -10, 0],
    scale: 1.2,
    transition: { duration: 0.5 }
  }
};

const processVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({ 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      delay: i * 0.2,
      ease: "easeOut" as const
    }
  })
};

// Commercial Areas
const commercialAreas = [
  {
    icon: <ShoppingBag size={32} />,
    title: "Retail Spaces",
    description: "Optimize layout and energy flow to increase customer footfall and boost sales."
  },
  {
    icon: <Briefcase size={32} />,
    title: "Office Spaces",
    description: "Create environments that enhance employee productivity and workplace harmony."
  },
  {
    icon: <Factory size={32} />,
    title: "Manufacturing Units",
    description: "Balance energy to improve operational efficiency and reduce workplace challenges."
  },
  {
    icon: <BarChart size={32} />,
    title: "Financial Institutions",
    description: "Apply specialized Vastu principles for wealth management and financial growth."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Hospitality Venues",
    description: "Enhance guest experience and business prosperity through energy optimization."
  },
  {
    icon: <Building size={32} />,
    title: "Educational Institutes",
    description: "Create spaces that foster learning, creativity, and knowledge growth."
  },
];

export default function CommercialVastuPage() {
  // State for random particles
  const [particles, setParticles] = useState<Array<{
    width: number;
    height: number;
    left: string;
    top: string;
    duration: number;
    delay: number;
  }>>([]);

  // Generate random particles on client-side only
  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }, () => ({
      width: Math.random() * 15 + 5,
      height: Math.random() * 15 + 5,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }));
    
    setParticles(generatedParticles);
  }, []);

  return (
    <main className="min-h-screen">
      <div className="relative bg-gradient-to-br from-amber-50 to-rose-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-amber-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-64 h-64 bg-rose-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#7a2323] dark:text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Commercial Vastu Solutions
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Optimize your business spaces for maximum productivity, growth, and prosperity through our specialized commercial Vastu expertise.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="mt-10"
            >
              <a href="#services" className="inline-block bg-[#7a2323] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-[#6a1d1d] transition-colors">
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Commercial Areas Section */}
      <section id="services" className="py-16 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white">
              Business Spaces We Transform
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Different businesses have unique energy requirements. We specialize in optimizing these commercial environments:
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {commercialAreas.map((area, i) => (
              <motion.div 
                key={i}
                className="p-8 bg-amber-50 dark:bg-gray-800 border border-amber-100 dark:border-gray-700 rounded-xl transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="text-[#7a2323] dark:text-white mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {area.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{area.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1 relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-rose-500/20 z-10"
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1080&auto=format&fit=crop"
                alt="Modern Office Space"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white">
                Business Benefits of Commercial Vastu
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Implementing Vastu principles in your commercial space can lead to significant business improvements:
              </p>
              <motion.ul 
                className="mt-8 space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "Increased Revenue",
                    desc: "Proper energy flow attracts more customers and business opportunities."
                  },
                  {
                    title: "Enhanced Employee Productivity",
                    desc: "Optimized workspaces lead to better focus, creativity, and teamwork."
                  },
                  {
                    title: "Reduced Conflicts",
                    desc: "Balanced energy minimizes workplace disputes and improves communication."
                  },
                  {
                    title: "Business Longevity",
                    desc: "Proper Vastu alignment supports sustainable growth and business stability."
                  }
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-3"
                    variants={fadeIn}
                    custom={i}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-6 h-6 bg-rose-100 dark:bg-rose-900/50 text-[#7a2323] dark:text-rose-300 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 * i, duration: 0.4, type: "spring" }}
                    >
                      ✓
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white">
              Our Commercial Vastu Process
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We follow a systematic approach to transform your business space:
            </p>
          </motion.div>
          
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  title: "Business Analysis",
                  desc: "We conduct a thorough assessment of your business type, goals, and challenges to understand your specific needs."
                },
                {
                  title: "Space Evaluation",
                  desc: "Our experts analyze your commercial space layout, energy flow, and existing challenges."
                },
                {
                  title: "Customized Solutions",
                  desc: "We develop tailored recommendations that align with your business objectives and minimize disruption."
                },
                {
                  title: "Implementation & Support",
                  desc: "We guide you through the implementation process and provide ongoing support to ensure lasting results."
                }
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  className="flex flex-col md:flex-row gap-6"
                  custom={i}
                  variants={processVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-16 h-16 bg-amber-100 dark:bg-amber-900/50 text-[#7a2323] dark:text-amber-300 rounded-full flex items-center justify-center font-bold text-2xl"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    {i + 1}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#7a2323] to-[#5a1a1a] text-white relative overflow-hidden">
        {/* Animated particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: particle.width,
              height: particle.height,
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
        
        <div className="container mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Boost Your Business?
            </h2>
            <p className="text-xl mx-auto mt-6 mb-10 max-w-3xl text-white/90">
              Take the first step towards creating a harmonious business environment that supports growth and prosperity.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/contact" className="inline-block bg-white text-[#7a2323] font-bold py-4 px-12 rounded-full shadow-2xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] transform transition-all duration-300">
                Schedule a Business Consultation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 