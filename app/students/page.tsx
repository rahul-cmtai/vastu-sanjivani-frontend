"use client";

import React, { useEffect, useState } from "react";
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

// Define the Student type based on your API schema
interface Student {
  _id: string;
  slug: string;
  name: string;
  title?: string;
  image?: string;
  specializations?: string[];
}

export default function Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then(res => res.json())
      .then(data => {
        setStudents(data.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load students");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-600">{error}</div>;

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
            style={{backgroundImage: `url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070)`}}
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
              Student Profiles
            </h1>
            <div className="mx-auto h-1 w-32 rounded-full bg-[#7a2323]/60 dark:bg-white/60 mb-8"></div>
            <motion.h2 
              className="text-2xl md:text-4xl font-medium mb-8 text-gray-700 dark:text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Meet Our <span className="text-[#7a2323] dark:text-yellow-300 font-semibold">Talented Students</span> & Practitioners
            </motion.h2>
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Link href="/students/all" className="inline-block bg-[#7a2323] text-white font-semibold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1 hover:bg-[#6a1d1d]">
                Browse All Students
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

      {/* Featured Students Section */}
      <section className="py-20 bg-gray-100 dark:bg-[#5a1a1a]/80">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[#7a2323] dark:text-white">Featured Students</h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-[#7a2323]/60 dark:bg-white/60 mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-white/80 max-w-3xl mx-auto">
              Meet our outstanding students who have excelled in their Vastu education and professional applications.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {students.map(student => (
              <motion.div 
                key={student._id}
                className="bg-white dark:bg-[#6a1d1d] p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                variants={fadeInUp}
              >
                <Link href={`/students/${student.slug}`} className="block">
                  <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                    {student.image && (
                      <Image 
                        src={student.image || "/logo.png"} 
                        alt={student.name} 
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#7a2323] dark:text-white">{student.name}</h3>
                  <p className="text-sm font-medium text-[#7a2323] dark:text-yellow-300 mb-3">
                    {student.title}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {student.specializations && student.specializations.map((spec, idx) => (
                      <span key={idx} className="bg-[#7a2323]/10 text-[#7a2323] text-xs font-medium px-3 py-1 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#7a2323] dark:text-yellow-300 font-medium text-sm">View Profile</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/students/all" className="inline-flex items-center justify-center bg-[#7a2323] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#6a1d1d]">
              View All Students
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#7a2323] to-[#5a1a1a]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Student Community</h2>
            <p className="text-xl text-white/80 mb-10">
              Become part of our growing network of Vastu practitioners and showcase your skills and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses" className="inline-flex items-center justify-center bg-white text-[#7a2323] font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Explore Courses
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 