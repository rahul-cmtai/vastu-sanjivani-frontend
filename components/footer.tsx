"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";

// Animation setup
const starVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: [0.2, 0.8, 0.2], scale: 1 }
};

const planetVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  float: { y: [-10, 10, -10] }
};

// Footer links setup
const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Courses", href: "/courses" },
      { name: "Contact", href: "/contact" },
    ]
  },
  {
    title: "Our Services",
    links: [
      { name: "Residential Vastu", href: "/services#residential" },
      { name: "Commercial Vastu", href: "/services#commercial" },
      { name: "Vastu Remedies", href: "/services#remedies" },
      { name: "Numerology", href: "/services#numerology" },
      { name: "Interior Design", href: "/services#interior" },
    ]
  },
  {
    title: "Courses",
    links: [
      { name: "Vastu Foundation", href: "/courses#foundation" },
      { name: "Professional Courses", href: "/courses#professional" },
      { name: "Effective Parenting", href: "/courses#parenting" },
      { name: "Pendulum Dowsing", href: "/courses#pendulum" },
    ]
  }
];

// Footer component
export default function Footer() {
  
  // State for random-dependent arrays and year
  const [stars, setStars] = useState<Array<{
    id: number;
    size: number;
    left: string;
    top: string;
    delay: number;
  }>>([]);
  
  const [zodiac, setZodiac] = useState<Array<{
    id: number;
    symbol: string;
    size: number;
    left: string;
    top: string;
    delay: number;
    duration: number;
  }>>([]);
  
  const [sparkles, setSparkles] = useState<Array<{
    id: number;
    size: number;
    left: string;
    top: string;
    delay: number;
    duration: number;
  }>>([]);
  
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setStars(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 5
      }))
    );
    const zodiacSymbols = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
    setZodiac(
      zodiacSymbols.map((symbol, i) => ({
        id: i,
        symbol,
        size: Math.random() * 20 + 30,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 3,
        duration: Math.random() * 15 + 10
      }))
    );
    setSparkles(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        size: Math.random() * 8 + 4,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 10,
        duration: 4 + Math.random() * 3
      }))
    );
    setYear(new Date().getFullYear());
  }, []);

  // Render nothing until client-side values are set
  if (!stars.length || !zodiac.length || !sparkles.length || year === null) return null;

  // Constellation lines
  const constellationPoints = [
    [
      { x: "10%", y: "20%" },
      { x: "15%", y: "30%" },
      { x: "25%", y: "25%" },
      { x: "30%", y: "40%" },
    ],
    [
      { x: "70%", y: "10%" },
      { x: "75%", y: "20%" },
      { x: "85%", y: "15%" },
      { x: "80%", y: "25%" },
      { x: "90%", y: "30%" },
    ],
    [
      { x: "40%", y: "70%" },
      { x: "45%", y: "60%" },
      { x: "55%", y: "65%" },
      { x: "50%", y: "80%" },
    ],
  ];

  // Magic circle SVG (astrology glyphs)
  const magicCircle = (
    <motion.svg
      width="400" height="400" viewBox="0 0 400 400" fill="none"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-30"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="200" cy="200" r="180" stroke="#fff7ae" strokeWidth="2" opacity="0.3" />
      <circle cx="200" cy="200" r="140" stroke="#fbbf24" strokeWidth="1.5" opacity="0.2" />
      <circle cx="200" cy="200" r="100" stroke="#a5b4fc" strokeWidth="1" opacity="0.15" />
      {/* Astrology glyphs around the circle */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * 2 * Math.PI;
        const x = 200 + 160 * Math.cos(angle);
        const y = 200 + 160 * Math.sin(angle);
        const glyphs = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="32"
            fill="#fff7ae"
            opacity="0.7"
            style={{ filter: "drop-shadow(0 0 6px #fff7ae)" }}
          >
            {glyphs[i]}
          </text>
        );
      })}
    </motion.svg>
  );

  return (
    <footer className="relative bg-gradient-to-b from-[#1f0505] to-[#4a1515] text-white overflow-hidden">
      {/* Magical animated background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Aurora/nebula swirl */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            background: "radial-gradient(ellipse at 60% 40%, #fbbf24 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, #a5b4fc 0%, transparent 70%), radial-gradient(ellipse at 80% 80%, #f472b6 0%, transparent 80%)",
            mixBlendMode: "screen",
            opacity: 0.18,
          }}
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 8, -8, 0],
            opacity: [0.18, 0.25, 0.18],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        {/* Magic circle */}
        {magicCircle}
        {/* Sparkles */}
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute rounded-full bg-white"
            style={{
              width: sparkle.size,
              height: sparkle.size,
              left: sparkle.left,
              top: sparkle.top,
              filter: "blur(1.5px)",
              opacity: 0.7,
            }}
            animate={{
              opacity: [0, 0.7, 0],
              scale: [0.7, 1.2, 0.7],
            }}
            transition={{
              duration: sparkle.duration,
              repeat: Infinity,
              delay: sparkle.delay,
              repeatType: "reverse" as const,
              ease: [0.42, 0, 0.58, 1],
            }}
          />
        ))}
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              width: star.size,
              height: star.size,
              left: star.left,
              top: star.top
            }}
            variants={starVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}

        {/* Zodiac Symbols */}
        {zodiac.map((z) => (
          <motion.div
            key={z.id}
            className="absolute text-white opacity-5 font-serif"
            style={{
              fontSize: z.size,
              left: z.left,
              top: z.top
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.05, 0.1, 0.05], 
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ 
              duration: z.duration, 
              repeat: Infinity,
              ease: "linear",
              delay: z.delay
            }}
          >
            {z.symbol}
          </motion.div>
        ))}

        {/* Constellation Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {constellationPoints.map((constellation, i) => (
            <div key={i} className="absolute inset-0">
              {constellation.map((point, j) => (
                <React.Fragment key={j}>
                  <motion.div 
                    className="absolute w-2 h-2 rounded-full bg-white/40"
                    style={{ 
                      left: point.x, 
                      top: point.y,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: [0, 1.5, 1], 
                      opacity: [0, 1, 0.7] 
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i + j * 0.5
                    }}
                  />
                  {j < constellation.length - 1 && (
                    <motion.div 
                      className="absolute bg-white/20 h-[1px] origin-left"
                      style={{ 
                        left: point.x, 
                        top: point.y,
                        width: "100px", // This will be animated
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1, opacity: [0, 0.5, 0] }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i + j * 0.5 + 0.5
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>

        {/* Animated cosmic energy swirl */}
        <motion.div
          className="absolute w-full h-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 50%, transparent 0%, #7a2323 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Floating planets */}
        <div className="absolute bottom-10 left-[10%] w-20 h-20 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 opacity-20 blur-md">
          <motion.div
            className="w-full h-full"
            variants={planetVariants}
            initial="initial"
            animate={["animate", "float"]}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="absolute top-20 right-[15%] w-16 h-16 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 opacity-20 blur-md">
          <motion.div
            className="w-full h-full"
            variants={planetVariants}
            initial="initial"
            animate={["animate", "float"]}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
        </div>
        <div className="absolute bottom-40 right-[30%] w-24 h-24 rounded-full bg-gradient-to-r from-purple-300 to-purple-500 opacity-20 blur-md">
          <motion.div
            className="w-full h-full"
            variants={planetVariants}
            initial="initial"
            animate={["animate", "float"]}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          />
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 pb-10 border-b border-white/20">
          {/* Logo and About Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-white">Vaastu Sanjivanii</span>
            </Link>
            <p className="mt-4 text-white/80">
              Harmonizing spaces and transforming lives through ancient Vastu Shastra principles applied scientifically without structural demolition.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://www.youtube.com/neenasarora" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </Link>
              <Link href="https://www.facebook.com/Neenaarora03/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
              <Link href="https://www.instagram.com/vastu_acharya_neenasarora" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
              <Link href="https://www.vaastusanjivanii.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Website">
                <span className="font-bold text-lg">W</span>
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, i) => (
            <div key={i} className="md:col-span-1">
              <h3 className="text-xl font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      href={link.href} 
                      className="text-white/70 hover:text-white hover:translate-x-1 transition-all flex items-center"
                    >
                      <span className="mr-1 text-xs">❯</span> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center text-white/70">
                <Phone size={16} className="mr-2" />
                <a href="tel:9910558589" className="hover:underline">+91 9910558589</a>
              </p>
              <p className="flex items-center text-white/70">
                <Mail size={16} className="mr-2" /> info@vaastusanjivanii.com
              </p>
            </div>
            <motion.div 
              className="mt-6 p-4 bg-white/5 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <p className="text-white font-medium text-sm">
                Get a Free Consultation
              </p>
              <Link 
                href="/contact" 
                className="mt-2 inline-block px-4 py-2 bg-[#7a2323] text-white text-sm rounded-md hover:bg-[#6a1d1d] transition-colors"
              >
                Book Now
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/70 text-sm">
            © {year} Vaastu Sanjivanii. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-white/70 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/70 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-white/70 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#7a2323] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/40 to-transparent"></div>
      
      {/* Animated cosmic rays */}
      <div className="absolute inset-0 overflow-hidden opacity-30 mix-blend-soft-light">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[200vh] w-4 bg-gradient-to-b from-transparent via-white to-transparent"
            style={{
              left: `${i * 20 + 10}%`,
              top: "-100vh",
              transformOrigin: "center",
              rotate: i % 2 === 0 ? -15 : 15
            }}
            animate={{
              top: ["150vh", "-150vh"],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Ethereal moving stars - subtle twinkling effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          const speed = Math.random() * 50 + 20;
          return (
            <motion.div
              key={`star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: speed,
                repeat: Infinity,
                delay: Math.random() * 50,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </footer>
  );
} 