"use client";

import React from "react";
import { motion, useInView, Variants, Easing } from "framer-motion";
import { Home, ShieldCheck, HeartHandshake, Zap, UtensilsCrossed, BedDouble, Droplets, BookOpen, Building, Gem, Pyramid, Palette, TrendingUp } from 'lucide-react';

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

// Main Component
export default function ResidentialVastuPage() {
    // Data for Key Areas section
    const keyAreas = [
        { icon: <Home size={32} />, title: "Main Entrance", description: "The gateway for cosmic energy, influencing the entire household's well-being." },
        { icon: <BedDouble size={32} />, title: "Master Bedroom", description: "Crucial for the homeowner's health, stability, and decision-making abilities." },
        { icon: <UtensilsCrossed size={32} />, title: "Kitchen (Agni)", description: "The source of health and nourishment, its placement affects family vitality." },
        { icon: <HeartHandshake size={32} />, title: "Living Room", description: "The social hub of the home, affecting relationships and social standing." },
        { icon: <BookOpen size={32} />, title: "Children's Room", description: "Designed to enhance concentration, growth, and overall development." },
        { icon: <Droplets size={32} />, title: "Toilets & Bathrooms", description: "Proper placement is essential to prevent the drain of positive energy." },
    ];
    
    // Data for Remedies section
    const remedies = [
        { icon: <Gem className="text-[#c084fc]" />, title: "Crystals & Gems", description: "Energized crystals to amplify positive vibrations and absorb negativity." },
        { icon: <Pyramid className="text-[#fbbf24]" />, title: "Pyramids & Yantras", description: "Sacred geometric tools to correct energetic imbalances and doshas." },
        { icon: <Palette className="text-[#60a5fa]" />, title: "Color Therapy", description: "Using specific colors to balance the five elements within your space." },
        { icon: <TrendingUp className="text-[#34d399]" />, title: "Energy Balancing", description: "Advanced techniques to align your home's frequency with prosperity." },
    ];

  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-x-hidden">
      
      {/* --- Hero Section --- */}
      <div className="relative bg-gradient-to-b from-[#fdf2f2] to-gray-50 dark:from-[#310b0b] dark:to-gray-900">
        <div className="container mx-auto grid lg:grid-cols-2 items-center min-h-screen lg:h-[90vh] px-4 pt-24 pb-12 lg:pt-12">
            <motion.div 
                className="text-center lg:text-left"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#7a2323] dark:text-white leading-tight"
                    variants={fadeInUp}
                >
                    Transform Your Home Into<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8f2c2c] to-[#b95d5d]">A Sanctuary of Peace and Prosperity</span>
                </motion.h1>
                <motion.p 
                    className="mt-6 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 text-gray-600 dark:text-gray-300"
                    variants={fadeInUp}
                >
                    Embrace scientific Vastu principles and non-invasive solutions to introduce positive energy and harmony into your living space. We prepare your dream home for a better tomorrow.
                </motion.p>
                <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" variants={fadeInUp}>
                    <a href="/contact" className="inline-block w-full sm:w-auto bg-[#7a2323] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:bg-[#6a1d1d]">
                        Book a Consultation
                    </a>
                    <a href="#services" className="inline-block w-full sm:w-auto text-[#7a2323] dark:text-white font-semibold py-4 px-8 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                        Explore Services
                    </a>
                </motion.div>
            </motion.div>
            <motion.div 
                className="relative hidden lg:block h-full w-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <img
                    src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop"
                    alt="Harmonious Living Room"
                    className="drop-shadow-2xl w-full h-full object-contain"
                />
            </motion.div>
        </div>
      </div>

      {/* --- Why Vastu Section --- */}
      <Section className="bg-white dark:bg-gray-800/50">
          <div className="text-center max-w-3xl mx-auto">
              <motion.h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white" variants={fadeInUp}>
                  Why Is Residential Vastu Essential?
              </motion.h2>
              <motion.p className="mt-4 text-lg text-gray-600 dark:text-gray-300" variants={fadeInUp}>
                  Your home is not merely a structure but a living energy field. Understanding Vastu Shastra as a cosmic science attracts these elements into your life:
              </motion.p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                  { icon: <HeartHandshake className="text-rose-500"/>, title: "Health & Happiness", desc: "Improvement in physical and mental well-being." },
                  { icon: <Zap className="text-amber-500"/>, title: "Wealth & Prosperity", desc: "Financial stability and increased opportunities." },
                  { icon: <ShieldCheck className="text-emerald-500"/>, title: "Peace & Harmony", desc: "Enhanced family relationships and tranquility." },
                  { icon: <Building className="text-sky-500"/>, title: "Career Growth", desc: "Success and advancement in professional life." }
              ].map((item, i) => (
                  <motion.div key={i} className="p-8 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300" variants={scaleIn}>
                      <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mb-5 shadow-md">{item.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-[#7a2323] dark:text-white">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </motion.div>
              ))}
          </div>
      </Section>
      
      {/* --- Our Approach Section --- */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white">
                    Our Approach: Scientific, Simple, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8f2c2c] to-[#b95d5d]">Without Demolition</span>
                </h2>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                    We consider Vastu not as superstition, but as an ancient science. Our process makes Vastu easy and effective for you.
                </p>
                <div className="mt-8 space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-rose-100 dark:bg-rose-900/50 text-[#7a2323] dark:text-rose-300 rounded-full flex items-center justify-center font-bold text-xl">1</div>
                        <div>
                            <h4 className="text-xl font-semibold">Deep Analysis</h4>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">Comprehensive study of your home&apos;s layout, your horoscope, and your specific concerns.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-rose-100 dark:bg-rose-900/50 text-[#7a2323] dark:text-rose-300 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                        <div>
                            <h4 className="text-xl font-semibold">Customized Remedies</h4>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">Effective and simple solutions without demolition, using colors, crystals, and yantras.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-rose-100 dark:bg-rose-900/50 text-[#7a2323] dark:text-rose-300 rounded-full flex items-center justify-center font-bold text-xl">3</div>
                        <div>
                            <h4 className="text-xl font-semibold">Lifetime Support</h4>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">We remain available even after implementing remedies, ready to answer all your questions.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
             <motion.div className="relative w-full h-96 lg:h-[500px]" variants={scaleIn}>
                 <img
                    src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop"
                    alt="Vastu Analysis and Planning"
                    className="rounded-2xl shadow-2xl w-full h-full object-cover"
                />
             </motion.div>
        </div>
      </Section>
      
      {/* --- Key Areas Section --- */}
      <Section id="services" className="bg-white dark:bg-gray-800/50">
        <div className="text-center max-w-3xl mx-auto">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white" variants={fadeInUp}>
                Key Areas of Your Home We Harmonize
            </motion.h2>
            <motion.p className="mt-4 text-lg text-gray-600 dark:text-gray-300" variants={fadeInUp}>
                Every corner and direction impacts your life. We focus on these key areas:
            </motion.p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyAreas.map((area, i) => (
                <motion.div 
                    key={i}
                    className="p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-white dark:hover:bg-gray-700/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                    variants={fadeInUp}
                >
                    <div className="text-[#7a2323] dark:text-white mb-4 group-hover:scale-110 transition-transform">{area.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{area.title}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{area.description}</p>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* --- Our Remedies Section --- */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white" variants={fadeInUp}>
                Our Effective Vastu Remedies
            </motion.h2>
            <motion.p className="mt-4 text-lg text-gray-600 dark:text-gray-300" variants={fadeInUp}>
                We balance the energy in your home using natural elements and ancient Vastu instruments.
            </motion.p>
        </div>
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {remedies.map((remedy, i) => (
                <motion.div key={i} className="flex items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow" variants={scaleIn}>
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">{remedy.icon}</div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{remedy.title}</h3>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">{remedy.description}</p>
                    </div>
                </motion.div>
            ))}
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
            Ready to Welcome Positive Change?
          </motion.h2>
          <motion.p 
            className="text-xl mx-auto mt-6 mb-10 max-w-3xl text-white/90" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            viewport={{ once: true }}
          >
            A small step can bring significant changes to you and your family&apos;s life. Contact us today for a Vastu consultation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }} 
            viewport={{ once: true }}
          >
            <a href="/contact" className="inline-block bg-white text-[#7a2323] font-bold py-4 px-12 rounded-full shadow-2xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] transform transition-all duration-300 hover:scale-105">
              Schedule Your Consultation
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
