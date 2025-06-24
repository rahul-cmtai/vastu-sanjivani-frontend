"use client";
import React from "react";
import { motion } from "framer-motion";
import { Home, Users, PieChart, Gem } from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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

// Numerology solutions
const numerologySolutions = [
  {
    icon: <Home size={32} className="text-rose-500" />,
    title: "Property Number Analysis",
    description: "Evaluating and optimizing your home or business address number for maximum prosperity."
  },
  {
    icon: <Users size={32} className="text-blue-500" />,
    title: "Name Alignment",
    description: "Analyzing and adjusting name vibrations to harmonize with your birth path number."
  },
  {
    icon: <PieChart size={32} className="text-amber-500" />,
    title: "Birth Path Guidance",
    description: "Understanding your life purpose and potential through birth path number analysis."
  },
  {
    icon: <Gem size={32} className="text-emerald-500" />,
    title: "Number-Color-Gem Correlation",
    description: "Personalized recommendations for colors and gems based on your numerological profile."
  }
];

// Birth Path Numbers
const birthPathNumbers = [
  {
    number: "1",
    meaning: "Leadership, independence, originality",
    strengths: "Ambitious, creative, strong-willed",
    challenges: "Stubbornness, domineering tendencies"
  },
  {
    number: "2",
    meaning: "Cooperation, diplomacy, sensitivity",
    strengths: "Peacemaking, intuitive, supportive",
    challenges: "Oversensitivity, indecisiveness"
  },
  {
    number: "3",
    meaning: "Self-expression, creativity, joy",
    strengths: "Artistic, optimistic, communicative",
    challenges: "Scattered energy, superficiality"
  },
  {
    number: "4",
    meaning: "Stability, practicality, organization",
    strengths: "Reliable, hardworking, methodical",
    challenges: "Rigidity, lack of spontaneity"
  },
  {
    number: "5",
    meaning: "Freedom, change, adventure",
    strengths: "Versatile, adaptable, progressive",
    challenges: "Restlessness, inconsistency"
  },
  {
    number: "6",
    meaning: "Harmony, responsibility, nurturing",
    strengths: "Compassionate, supportive, balanced",
    challenges: "Self-sacrifice, perfectionism"
  },
  {
    number: "7",
    meaning: "Analysis, wisdom, spirituality",
    strengths: "Intellectual, intuitive, introspective",
    challenges: "Isolation, overthinking"
  },
  {
    number: "8",
    meaning: "Power, abundance, achievement",
    strengths: "Executive ability, material success, authority",
    challenges: "Workaholic tendencies, materialism"
  },
  {
    number: "9",
    meaning: "Compassion, completion, humanitarianism",
    strengths: "Generous, compassionate, visionary",
    challenges: "Martyrdom, emotionally distant"
  }
];

export default function NumerologyPage() {
  return (
    <main className="min-h-screen">
      <div className="relative bg-gradient-to-br from-amber-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 pt-32 pb-16">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#7a2323] dark:text-white leading-tight"
              variants={fadeInUp}
            >
              Numerology Solutions
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
              variants={fadeInUp}
            >
              Discover how numbers influence your life and spaces. Our numerology services offer personalized solutions to enhance harmony in your personal and professional life.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Numerology Solutions Section */}
      <section className="py-16 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white">
              Our Numerology Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We offer specialized numerological solutions to harmonize your life and living spaces:
            </p>
          </div>
          <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {numerologySolutions.map((solution, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">{solution.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{solution.title}</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Birth Path Numbers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white">
              Understanding Birth Path Numbers
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Your Birth Path Number reveals your life&apos;s purpose, strengths, and challenges:
            </p>
          </div>
          <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {birthPathNumbers.map((path, i) => (
              <div key={i} className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#7a2323] text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4">
                  {path.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{path.meaning}</h3>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">Strengths:</span> {path.strengths}
                  </p>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-amber-600 dark:text-amber-400">Challenges:</span> {path.challenges}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Numerology Works Section */}
      <section className="py-16 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative w-full h-[400px] lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1080&auto=format&fit=crop"
                alt="Numerology Chart"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white">
                How Numerology Enhances Your Space
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Numerology works in harmony with Vastu principles to create balanced and prosperous environments:
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-rose-100 dark:bg-rose-900/50 text-[#7a2323] dark:text-rose-300 rounded-full flex items-center justify-center">✓</div>
                  <div>
                    <h4 className="text-lg font-semibold">Property Number Alignment</h4>
                    <p className="text-gray-600 dark:text-gray-400">Your home or business address number creates a specific energy that can be optimized for your personal numbers.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-rose-100 dark:bg-rose-900/50 text-[#7a2323] dark:text-rose-300 rounded-full flex items-center justify-center">✓</div>
                  <div>
                    <h4 className="text-lg font-semibold">Room Number Optimization</h4>
                    <p className="text-gray-600 dark:text-gray-400">Each room can be assigned a numerical value that supports its intended function and occupants.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-rose-100 dark:bg-rose-900/50 text-[#7a2323] dark:text-rose-300 rounded-full flex items-center justify-center">✓</div>
                  <div>
                    <h4 className="text-lg font-semibold">Color & Element Harmony</h4>
                    <p className="text-gray-600 dark:text-gray-400">Your personal numbers resonate with specific colors and elements that can be incorporated into your space.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-rose-100 dark:bg-rose-900/50 text-[#7a2323] dark:text-rose-300 rounded-full flex items-center justify-center">✓</div>
                  <div>
                    <h4 className="text-lg font-semibold">Timing for Activities</h4>
                    <p className="text-gray-600 dark:text-gray-400">Numerology helps determine auspicious times for important activities and major life changes.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#7a2323] to-[#5a1a1a] text-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Discover Your Numerological Blueprint
          </h2>
          <p className="text-xl mx-auto mt-6 mb-10 max-w-3xl text-white/90">
            Let us help you understand how numbers influence your life and how to harmonize your spaces with your unique numerological profile.
          </p>
          <div>
            <a href="/contact" className="inline-block bg-white text-[#7a2323] font-bold py-4 px-12 rounded-full shadow-2xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] transform transition-all duration-300 hover:scale-105">
              Book Your Numerology Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 