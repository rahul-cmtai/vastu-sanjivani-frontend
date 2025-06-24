"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  // Refs for scroll animations
  const servicesRef = useRef(null);
  const achievementsRef = useRef(null);
  const teamRef = useRef(null);
  const founderRef = useRef(null);
  
  const isServicesInView = useInView(servicesRef, { once: false, amount: 0.3 });
  const isAchievementsInView = useInView(achievementsRef, { once: false, amount: 0.3 });
  const isTeamInView = useInView(teamRef, { once: false, amount: 0.3 });
  const isFounderInView = useInView(founderRef, { once: false, amount: 0.3 });

  return (
    <main className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#7a2323]/90 dark:to-[#5a1a1a] min-h-screen overflow-hidden">
      {/* Hero Section with Parallax */}
      <motion.section 
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <div 
            className="h-full w-full bg-cover bg-center bg-fixed opacity-20 dark:opacity-10"
            style={{backgroundImage: `url(https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1976)`}}
          ></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#7a2323] dark:text-white drop-shadow-lg">
              About Us
            </h1>
            <div className="mx-auto h-1 w-32 rounded-full bg-[#7a2323]/60 dark:bg-white/60 mb-8"></div>
            <motion.h2 
              className="text-2xl md:text-4xl font-medium mb-8 text-gray-700 dark:text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Vaastu Sanjivanii - <span className="text-[#7a2323] dark:text-yellow-300 font-semibold">Harmonizing Spaces</span>, Transforming Lives
            </motion.h2>
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Link href="/contact" className="inline-block bg-[#7a2323] text-white font-semibold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1 hover:bg-[#6a1d1d]">
                Begin Your Journey
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating elements animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#7a2323]/20 dark:bg-white/10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.section>

      {/* Founder Section with Animations */}
      <section ref={founderRef} className="py-24 bg-white dark:bg-[#6a1d1d]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12"
            initial="hidden"
            animate={isFounderInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div 
              className="md:w-1/2"
              variants={fadeInUp}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px] bg-gray-200 dark:bg-gray-700 w-full md:w-[90%] mx-auto relative transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(122,35,35,0.4)]">
                <Image 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976" 
                  alt="Neena S Arora - Founder of Vaastu Sanjivanii" 
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 ease-in-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">Neena S Arora</h3>
                    <p className="text-white/80">Gold Medalist Vastu Acharya</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold mb-3 text-[#7a2323] dark:text-white">
                <span className="relative">
                  Neena S Arora
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#7a2323]/30 dark:bg-white/30 transform -translate-y-2"></span>
                </span>
              </h2>
              <h3 className="text-2xl font-medium mb-8 text-gray-600 dark:text-white/80">The Founder of Vaastu Sanjivanii</h3>
              <div className="max-w-none space-y-6 text-lg">
                <motion.p 
                  className="text-gray-600 dark:text-white/80"
                  variants={fadeIn}
                >
                  Vastu Acharya Neena S Arora, based in Gurgaon, is a renowned certified Vaastu Acharya. 
                  She is a <span className="text-[#7a2323] dark:text-yellow-300 font-semibold">Gold Medalist</span>, awarded multiple times for outstanding performance and results. 
                  She is indeed pursuing a doctorate to add a feather to her cap.
                </motion.p>
                <motion.p 
                  className="text-gray-600 dark:text-white/80"
                  variants={fadeIn}
                >
                  She has been practicing Vastu since 2000 and getting wonderful results in it. 
                  With rich experience of <span className="text-[#7a2323] dark:text-yellow-300 font-semibold">over 20 years</span>, she can easily get through the root cause of 
                  anyone&apos;s problem and suggest effective remedies. This has helped her spread the light of happiness, health, wealth and success around.
                </motion.p>
                <motion.p 
                  className="text-gray-600 dark:text-white/80"
                  variants={fadeIn}
                >
                  She is the Founder of Vaastu Sanjivanii under which she has been catering to the clients from all spheres like residential, commercial, corporate, factories, industries etc. She specializes in offering best Vastu remedies <span className="text-[#7a2323] dark:text-yellow-300 font-semibold">without structural demolition</span>.
                </motion.p>
                <motion.p 
                  className="text-gray-600 dark:text-white/80"
                  variants={fadeIn}
                >
                  She is also the founder of Mystic Wizard, which is an educational firm that conducts solution and result oriented professional courses in occult sciences.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} className="py-20 bg-gray-100 dark:bg-[#5a1a1a]/80">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isAchievementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[#7a2323] dark:text-white">Achievements</h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-[#7a2323]/60 dark:bg-white/60 mb-8"></div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="hidden"
            animate={isAchievementsInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-white dark:bg-[#6a1d1d] p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-[#7a2323]/10 dark:bg-white/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-[#7a2323] dark:text-white">🏆</span>
              </div>
              <div className="h-32 w-full rounded-lg mb-6 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1565538420870-da08ff96a207?q=80&w=2070" 
                  alt="Gold Medal Achievement" 
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-[#7a2323] dark:text-white">Gold Medal Awardee</h3>
              <p className="text-gray-600 dark:text-white/80 text-center">
                Recognized with Gold Medal for excellence and contributions in Vastu Shastra.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-[#6a1d1d] p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-[#7a2323]/10 dark:bg-white/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-[#7a2323] dark:text-white">📚</span>
              </div>
              <div className="h-32 w-full rounded-lg mb-6 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974" 
                  alt="Educational Excellence" 
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-[#7a2323] dark:text-white">Educational Excellence</h3>
              <p className="text-gray-600 dark:text-white/80 text-center">
                Founder of Mystic Wizard offering professional courses in occult sciences.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-[#6a1d1d] p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-[#7a2323]/10 dark:bg-white/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-[#7a2323] dark:text-white">🌟</span>
              </div>
              <div className="h-32 w-full rounded-lg mb-6 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=1974" 
                  alt="Transformation Specialist" 
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-[#7a2323] dark:text-white">Transformation Specialist</h3>
              <p className="text-gray-600 dark:text-white/80 text-center">
                20+ years of transforming lives through scientific Vastu principles and remedies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section with Animation */}
      <section ref={servicesRef} className="py-20 bg-gray-50 dark:bg-[#5a1a1a]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[#7a2323] dark:text-white">What We Provide</h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-[#7a2323]/60 dark:bg-white/60 mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-white/70 max-w-3xl mx-auto">
              Our comprehensive range of services are designed to bring harmony, prosperity, and positive energy to your spaces
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            variants={staggerContainer}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="p-8 bg-white rounded-xl shadow-lg dark:bg-[#6a1d1d] group hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
              variants={fadeInUp}
            >
              <div className="mb-6 h-16 w-16 bg-[#7a2323]/10 dark:bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-[#7a2323] dark:text-white">🏠</span>
              </div>
              <div className="h-40 w-full rounded-lg mb-6 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070" 
                  alt="Vastu Consultancy Services" 
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#7a2323] dark:text-white group-hover:translate-x-1 transition-transform duration-300">Vastu Consultancy Services</h3>
              <p className="text-gray-600 dark:text-white/80">
                Vaastu Sanjivanii helps you to create a vastu friendly house aesthetically. 
                We provide very scientific, simple and effective solutions without demolition 
                to bring about beautiful changes in your life. These changes include the attraction of wealth, increase in physical and emotional health and the cultivation of overall sense of tranquility and well being.
              </p>
              <div className="mt-6">
                <Link href="/services" className="text-[#7a2323] dark:text-yellow-200 font-medium flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  Learn more <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="p-8 bg-white rounded-xl shadow-lg dark:bg-[#6a1d1d] group hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
              variants={fadeInUp}
            >
              <div className="mb-6 h-16 w-16 bg-[#7a2323]/10 dark:bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-[#7a2323] dark:text-white">✨</span>
              </div>
              <div className="h-40 w-full rounded-lg mb-6 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1507894233425-dcb186dd688c?q=80&w=2070" 
                  alt="Astro Vastu Remedies" 
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#7a2323] dark:text-white group-hover:translate-x-1 transition-transform duration-300">Astro Vastu Remedies</h3>
              <p className="text-gray-600 dark:text-white/80">
                We provide customized vastu remedies as per your horoscope and help you 
                design your premises accordingly to achieve best results. Our specialized approach combines astrological insights with Vastu principles for maximum effectiveness and harmony.
              </p>
              <div className="mt-6">
                <Link href="/services" className="text-[#7a2323] dark:text-yellow-200 font-medium flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  Learn more <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="p-8 bg-white rounded-xl shadow-lg dark:bg-[#6a1d1d] group hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
              variants={fadeInUp}
            >
              <div className="mb-6 h-16 w-16 bg-[#7a2323]/10 dark:bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-[#7a2323] dark:text-white">🔢</span>
              </div>
              <div className="h-40 w-full rounded-lg mb-6 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070" 
                  alt="Numerology Solutions" 
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#7a2323] dark:text-white group-hover:translate-x-1 transition-transform duration-300">Numerology Solutions</h3>
              <p className="text-gray-600 dark:text-white/80">
                We provide Numerology solutions on demand with vastu remedies to achieve fast results. 
                We advise name spelling alterations, lucky numbers, signature check as per requirement to deliver best results for personal and professional success.
              </p>
              <div className="mt-6">
                <Link href="/services" className="text-[#7a2323] dark:text-yellow-200 font-medium flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  Learn more <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="p-8 bg-white rounded-xl shadow-lg dark:bg-[#6a1d1d] group hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
              variants={fadeInUp}
            >
              <div className="mb-6 h-16 w-16 bg-[#7a2323]/10 dark:bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-[#7a2323] dark:text-white">🏢</span>
              </div>
              <div className="h-40 w-full rounded-lg mb-6 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070" 
                  alt="Dream Home Construction" 
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#7a2323] dark:text-white group-hover:translate-x-1 transition-transform duration-300">Dream Home Construction</h3>
              <p className="text-gray-600 dark:text-white/80">
                If you are planning to construct a new house, we provide you the whole team of experts that help you start your journey from a scratch to your dream house. You can hire our team to buy a plot, prepare a vastu friendly layout, and design it as per vastu principles.
              </p>
              <div className="mt-6">
                <Link href="/services" className="text-[#7a2323] dark:text-yellow-200 font-medium flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  Learn more <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="p-8 bg-white rounded-xl shadow-lg dark:bg-[#6a1d1d] group hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 md:col-span-2"
              variants={fadeInUp}
            >
              <div className="mb-6 h-16 w-16 bg-[#7a2323]/10 dark:bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-[#7a2323] dark:text-white">🎨</span>
              </div>
              <div className="h-40 w-full rounded-lg mb-6 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2127" 
                  alt="Interior Designing" 
                  width={800}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#7a2323] dark:text-white group-hover:translate-x-1 transition-transform duration-300">Interior Designing</h3>
              <p className="text-gray-600 dark:text-white/80">
                We help you to design your house/office aesthetically on demand in case you plan to renovate your premises. Our proficient designers add beauty to your living area along with the remedies provided to make a house vastu compliant, creating spaces that are both beautiful and energetically balanced.
              </p>
              <div className="mt-6">
                <Link href="/services" className="text-[#7a2323] dark:text-yellow-200 font-medium flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  Learn more <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-white dark:bg-[#6a1d1d]/90">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[#7a2323] dark:text-white">Our Expert Team</h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-[#7a2323]/60 dark:bg-white/60 mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-white/70 max-w-3xl mx-auto">
              Our team of experts combines ancient wisdom with modern techniques to create harmonious spaces
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
          >
            {[1, 2, 3].map((item, index) => {
              const imageUrls = [
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974',
                'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961'
              ];
              return (
                <motion.div
                  key={item}
                  className="relative group"
                  variants={fadeInUp}
                >
                  <div className="relative h-[400px] rounded-xl overflow-hidden bg-gray-200 dark:bg-[#5a1a1a]/50">
                    <div 
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                      style={{backgroundImage: `url(${imageUrls[index]})`}}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-xl text-white font-bold">Vastu Expert</h3>
                      <p className="text-white/80">Senior Consultant</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-[#7a2323]/80 dark:bg-black/80 p-6 rounded-xl backdrop-blur-sm w-[80%] text-white transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                      <h4 className="text-lg font-bold mb-2">Expertise Areas:</h4>
                      <ul className="list-disc list-inside">
                        <li>Residential Vastu</li>
                        <li>Commercial Spaces</li>
                        <li>Quick Remedies</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#7a2323] to-[#5a1a1a] text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: Math.random() * 200 + 100,
                height: Math.random() * 200 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() * 0.5 + 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Space?</h2>
            <p className="text-xl mx-auto mb-10 text-white/90">
              Contact us today for a consultation and discover how Vaastu Sanjivanii 
              can help harmonize your living or working space for enhanced prosperity and well-being.
            </p>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/contact" className="inline-block bg-white text-[#7a2323] font-bold py-4 px-12 rounded-full shadow-2xl hover:shadow-[0_10px_25px_rgba(255,255,255,0.3)] transform transition-all duration-300">
                Contact Us Now
              </Link>
            </motion.div>
            
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
              <div className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl flex items-center gap-4">
                <span className="text-2xl">📞</span>
                <div className="text-left">
                  <p className="text-white/80 text-sm">Call us anytime</p>
                  <p className="text-white font-medium">+91-98XXX-XXXXX</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl flex items-center gap-4">
                <span className="text-2xl">✉️</span>
                <div className="text-left">
                  <p className="text-white/80 text-sm">Email us</p>
                  <p className="text-white font-medium">info@vaastusanjivanii.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 