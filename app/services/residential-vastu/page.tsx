"use client";
import React from "react";
import { Home, BedDouble, HeartHandshake, UtensilsCrossed, BookOpen, Droplets } from 'lucide-react';
import { motion, easeInOut } from "framer-motion";
import { Marquee } from "@/components/magicui/marquee";

// Key Residential Areas
const keyAreas = [
  {
    icon: <Home size={32} />,
    title: "Main Entrance",
    description: "The gateway for cosmic energy, influencing the entire household&apos;s well-being."
  },
  {
    icon: <BedDouble size={32} />,
    title: "Master Bedroom",
    description: "Crucial for the homeowner&apos;s health, stability, and decision-making abilities."
  },
  {
    icon: <UtensilsCrossed size={32} />,
    title: "Kitchen (Agni)",
    description: "The source of health and nourishment, its placement affects family vitality."
  },
  {
    icon: <HeartHandshake size={32} />,
    title: "Living Room",
    description: "The social hub of the home, affecting relationships and social standing."
  },
  {
    icon: <BookOpen size={32} />,
    title: "Children&apos;s Room",
    description: "Designed to enhance concentration, growth, and overall development."
  },
  {
    icon: <Droplets size={32} />,
    title: "Toilets & Bathrooms",
    description: "Proper placement is essential to prevent the drain of positive energy."
  },
];

export default function ResidentialVastuPage() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.7, ease: easeInOut },
    }),
  };
  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  return (
    <main className="min-h-screen">
      <div className="relative bg-gradient-to-br from-amber-50 to-rose-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-rose-200 dark:bg-rose-900 rounded-full blur-3xl z-0"
        />
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#7a2323] dark:text-white leading-tight"
              variants={fadeInUp}
              custom={1}
            >
              Residential Vastu Services
            </motion.h1>
            <motion.p
              className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
              variants={fadeInUp}
              custom={2}
            >
              Transform your living space into a sanctuary of positive energy and prosperity through our scientific Vastu principles.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="bg-rose-100 dark:bg-rose-900/40 py-2">
        <Marquee pauseOnHover className="text-[#7a2323] dark:text-rose-200 font-semibold text-lg">
          ✨ Harmonize your home | Unlock prosperity | Book a Vastu consultation today! ✨
        </Marquee>
      </div>

      {/* Key Areas Section */}
      <section className="py-16 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white">
              Key Areas We Harmonize
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Every corner and direction of your home impacts your life. We focus on these key areas:
            </p>
          </motion.div>
          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {keyAreas.map((area, i) => (
              <motion.div
                key={i}
                className="p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-white dark:hover:bg-gray-700/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
                variants={fadeInUp}
                custom={i + 1}
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(122,35,35,0.12)" }}
              >
                <motion.div
                  className="text-[#7a2323] dark:text-white mb-4 group-hover:scale-110 transition-transform drop-shadow-lg"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                >
                  {area.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{area.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{area.description}</p>
                <motion.div
                  className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100 dark:bg-rose-900/30 opacity-30 blur-2xl"
                  style={{ width: 120, height: 120 }}
                  animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                />
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white">
                Benefits of Residential Vastu
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Implementing Vastu principles in your home can lead to significant improvements in various aspects of your life:
              </p>
              <ul className="mt-8 space-y-4">
                <motion.li className="flex items-start gap-3" variants={fadeInUp} custom={1}>
                  <div className="flex-shrink-0 w-6 h-6 bg-rose-100 dark:bg-rose-900/50 text-[#7a2323] dark:text-rose-300 rounded-full flex items-center justify-center">✓</div>
                  <div>
                    <h4 className="text-lg font-semibold">Enhanced Family Harmony</h4>
                    <p className="text-gray-600 dark:text-gray-400">Proper energy flow reduces conflicts and promotes peaceful coexistence.</p>
                  </div>
                </motion.li>
                <motion.li className="flex items-start gap-3" variants={fadeInUp} custom={2}>
                  <div className="flex-shrink-0 w-6 h-6 bg-rose-100 dark:bg-rose-900/50 text-[#7a2323] dark:text-rose-300 rounded-full flex items-center justify-center">✓</div>
                  <div>
                    <h4 className="text-lg font-semibold">Improved Health & Wellbeing</h4>
                    <p className="text-gray-600 dark:text-gray-400">Balanced energy supports better physical and mental health for all family members.</p>
                  </div>
                </motion.li>
                <motion.li className="flex items-start gap-3" variants={fadeInUp} custom={3}>
                  <div className="flex-shrink-0 w-6 h-6 bg-rose-100 dark:bg-rose-900/50 text-[#7a2323] dark:text-rose-300 rounded-full flex items-center justify-center">✓</div>
                  <div>
                    <h4 className="text-lg font-semibold">Financial Prosperity</h4>
                    <p className="text-gray-600 dark:text-gray-400">Correct placement of wealth areas attracts financial opportunities and abundance.</p>
                  </div>
                </motion.li>
                <motion.li className="flex items-start gap-3" variants={fadeInUp} custom={4}>
                  <div className="flex-shrink-0 w-6 h-6 bg-rose-100 dark:bg-rose-900/50 text-[#7a2323] dark:text-rose-300 rounded-full flex items-center justify-center">✓</div>
                  <div>
                    <h4 className="text-lg font-semibold">Better Sleep Quality</h4>
                    <p className="text-gray-600 dark:text-gray-400">Optimized bedroom layouts promote restful sleep and rejuvenation.</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
            <motion.div
              className="relative w-full h-[400px] lg:h-[500px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1080&auto=format&fit=crop"
                alt="Harmonious Living Room"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
              <motion.div
                className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100 dark:bg-rose-900/30 opacity-30 blur-2xl"
                style={{ width: 220, height: 220 }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-[#7a2323] to-[#5a1a1a] text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto text-center px-4">
          <motion.h2 className="text-4xl md:text-5xl font-bold" variants={fadeInUp} custom={1}>
            Ready to Transform Your Home?
          </motion.h2>
          <motion.p className="text-xl mx-auto mt-6 mb-10 max-w-3xl text-white/90" variants={fadeInUp} custom={2}>
            Take the first step towards creating a harmonious living space that supports your family&apos;s wellbeing and prosperity.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            custom={3}
            whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(255,255,255,0.18)" }}
            className="inline-block"
          >
            <a href="/contact" className="inline-block bg-white text-[#7a2323] font-bold py-4 px-12 rounded-full shadow-2xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] transform transition-all duration-300 hover:scale-105">
              Book a Consultation
            </a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
} 