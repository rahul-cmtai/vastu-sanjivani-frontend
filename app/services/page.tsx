"use client";

import React from "react";
import { motion, useInView, Variants, Easing } from "framer-motion";
import { Home, Pyramid, Calculator, ArrowRight } from 'lucide-react';
import Link from "next/link";

// Animation Variants for reusability
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" as Easing } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const scaleIn: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: 0.7, 
        ease: [0.25, 1, 0.5, 1] 
      } 
    }
};

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

// Section Component for clean code
const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.section
            ref={ref}
            id={id}
            className={`py-20 lg:py-28 px-4 ${className}`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
        >
            {children}
        </motion.section>
    );
};

// Service Card Component
const ServiceCard = ({ title, description, icon, link }: { 
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}) => {
  return (
    <Link href={link} className="block group">
      <motion.div 
        className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group-hover:bg-gray-50 dark:group-hover:bg-gray-700"
        variants={scaleIn}
      >
        <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/50 rounded-full flex items-center justify-center mb-5 shadow-md text-[#7a2323] dark:text-rose-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-[#7a2323] dark:text-white group-hover:text-[#5a1a1a] dark:group-hover:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-5">{description}</p>
        <div className="inline-flex items-center text-[#7a2323] dark:text-rose-300 font-semibold group-hover:text-[#5a1a1a] dark:group-hover:text-rose-400">
          Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </motion.div>
    </Link>
  );
};

// Main Component
export default function ServicesPage() {
  // Services data
  const services = [
    {
      icon: <Home size={28} />,
      title: "Vastu Consultancy",
      description: "Transform your living and working spaces through scientific Vastu principles for enhanced harmony, prosperity, and wellbeing.",
      link: "/services/vastu-consultancy"
    },
    {
      icon: <Pyramid size={28} />,
      title: "Astro Vastu Remedies",
      description: "Combining astrology with Vastu to provide personalized solutions that harmonize your spaces with your unique astrological chart.",
      link: "/services/astro-vastu-remedies"
    },
    {
      icon: <Calculator size={28} />,
      title: "Numerology Solutions",
      description: "Discover how numbers influence your life and spaces with personalized numerological solutions for harmony and prosperity.",
      link: "/services/numerology-solutions"
    }
  ];

  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-x-hidden">
      
      {/* --- Hero Section --- */}
      <div className="relative bg-gradient-to-b from-[#fdf2f2] to-gray-50 dark:from-[#310b0b] dark:to-gray-900">
        <div className="container mx-auto flex flex-col items-center min-h-[10vh] px-4 pt-24">
            <motion.div 
                className="text-center max-w-4xl"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#7a2323] dark:text-white leading-tight"
                    variants={fadeInUp}
                >
                    Our Specialized Services
                </motion.h1>
                <motion.p 
                    className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
                    variants={fadeInUp}
                >
                    Discover our range of expert services designed to bring harmony, prosperity, and positive energy into your spaces and life.
                </motion.p>
            </motion.div>
        </div>
      </div>

      {/* --- Services Section --- */}
      <Section className="bg-white dark:bg-gray-800/50">
          <div className="text-center max-w-3xl mx-auto">
              <motion.h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white" variants={fadeInUp}>
                  Services We Offer
              </motion.h2>
              <motion.p className="mt-4 text-lg text-gray-600 dark:text-gray-300" variants={fadeInUp}>
                  We provide holistic solutions that combine ancient wisdom with modern scientific approaches.
              </motion.p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, i) => (
                <ServiceCard 
                  key={i}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              ))}
          </div>
      </Section>
      
      {/* --- Why Choose Us Section --- */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <motion.div variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white">
                    Why Choose Our Services?
                </h2>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                    We blend ancient wisdom with modern scientific approaches to create solutions that are effective, practical, and life-changing.
                </p>
                <div className="mt-8 space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-rose-100 dark:bg-rose-900/50 text-[#7a2323] dark:text-rose-300 rounded-full flex items-center justify-center font-bold text-xl">1</div>
                        <div>
                            <h4 className="text-xl font-semibold">Expert Consultants</h4>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">Our team consists of experienced professionals with deep knowledge in their respective fields.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-rose-100 dark:bg-rose-900/50 text-[#7a2323] dark:text-rose-300 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                        <div>
                            <h4 className="text-xl font-semibold">Personalized Approach</h4>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">We create customized solutions tailored to your specific needs and circumstances.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-rose-100 dark:bg-rose-900/50 text-[#7a2323] dark:text-rose-300 rounded-full flex items-center justify-center font-bold text-xl">3</div>
                        <div>
                            <h4 className="text-xl font-semibold">Holistic Solutions</h4>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">We address the root causes of issues rather than just treating symptoms.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
             <motion.div className="relative w-full h-96 lg:h-[500px]" variants={scaleIn}>
                 <img
                    src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop"
                    alt="Harmonious Living Space"
                    className="rounded-2xl shadow-2xl w-full h-full object-cover"
                />
             </motion.div>
        </div>
      </Section>

      {/* --- CTA Section --- */}
      <section className="py-24 bg-gradient-to-r from-[#7a2323] to-[#5a1a1a] text-white">
        <div className="container mx-auto text-center px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            Ready to Transform Your Space and Life?
          </motion.h2>
          <motion.p 
            className="text-xl mx-auto mt-6 mb-10 max-w-3xl text-white/90" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            viewport={{ once: true }}
          >
            Contact us today to discover how our services can help you achieve harmony, prosperity, and wellbeing.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }} 
            viewport={{ once: true }}
          >
            <a href="/contact" className="inline-block bg-white text-[#7a2323] font-bold py-4 px-12 rounded-full shadow-2xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] transform transition-all duration-300 hover:scale-105">
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
