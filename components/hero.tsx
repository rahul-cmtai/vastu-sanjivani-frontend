import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { useState, useEffect } from "react"

export function Hero() {
  // Images for the carousel - now using local images from public/images/home
  const images = [
    "/images/home/1.png",
    "/images/home/2.png",
    "/images/home/3.png",
    "/images/home/4.png"
  ];

  // State for the carousel
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-play functionality - increased speed to 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  // Navigate to a specific slide
  const goToSlide = (index: number) => {
    setCurrentImage(index);
  };

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
        repeatType: "loop"
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-tr from-[#f8f0e5] to-[#f9f5f0] py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            x: [0, 10, -5, 15, 0],
            y: [0, 15, 5, 20, 0],
            rotate: [0, 2, -2, 1, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="absolute top-[20%] left-[10%] w-32 h-32 bg-[#e8b18a]/20 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{
            x: [0, -15, 10, -5, 0],
            y: [0, 10, -5, 15, 0],
            rotate: [0, -1, 3, -2, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="absolute bottom-[20%] right-[15%] w-40 h-40 bg-[#8a4b2e]/10 rounded-full backdrop-blur-sm"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content - main message */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-8"
          >
            <span className="inline-block px-4 py-1 bg-[#e8b18a]/20 rounded-full text-[#8a4b2e] font-medium text-sm mb-3">
              Vastu Consultancy & Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#5c3d2e]">
              Harmonize Your <span className="text-[#8a4b2e]">Living Space</span> With Vastu
            </h1>
            <p className="text-lg text-[#695e54] max-w-lg">
              Transform your home and workspace with authentic Vaastu solutions. 
              Experience growth, prosperity, and harmony through expert guidance.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-[#8a4b2e] hover:bg-[#744027] text-white px-8 text-base">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-[#8a4b2e] text-[#8a4b2e] hover:bg-[#e8b18a]/10">
                Explore Services
              </Button>
            </div>
          </motion.div>
          
          {/* Right content - product/service showcase */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white shadow-xl overflow-hidden rounded-2xl border border-[#e8d8c4]"
            >
              {/* Image carousel/slider */}
              <div className="relative">
                <div className="flex items-center justify-center p-4">
                  <div className="relative w-full h-72 overflow-hidden rounded-lg">
                    {/* Carousel container */}
                    <div className="relative w-full h-full">
                      {images.map((image, index) => (
                        <motion.div
                          key={image}
                          className="absolute inset-0 w-full h-full"
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: currentImage === index ? 1 : 0,
                            zIndex: currentImage === index ? 10 : 0 
                          }}
                          transition={{ duration: 0.8 }}
                        >
                          <Image
                            src={image}
                            alt={`Vastu and Astrology ${index + 1}`}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-lg"
                            unoptimized={true}
                          />
                        </motion.div>
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                    </div>
                  </div>
                </div>
                
                {/* Carousel indicators */}
                <div className="flex justify-center gap-2 mt-3 mb-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        currentImage === index ? 'bg-[#8a4b2e] w-6' : 'bg-[#e8b18a]/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#5c3d2e]">Transform Your Space</h3>
                <p className="text-[#695e54] mb-6">
                  Our expert Vastu consultants help you create harmonious living and working environments without major demolition.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#e8b18a]/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8a4b2e]">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-[#5c3d2e]">No Demolition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#e8b18a]/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8a4b2e]">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-[#5c3d2e]">Quick Results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#e8b18a]/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8a4b2e]">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-[#5c3d2e]">Expert Advice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#e8b18a]/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8a4b2e]">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <span className="text-sm text-[#5c3d2e]">Proven Results</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-[#8a4b2e] to-[#b36a3e] hover:from-[#744027] hover:to-[#9d5d35] text-white">Check Your Space Now</Button>
              </div>
            </motion.div>
            
            {/* Floating badges */}
            <motion.div 
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              className="absolute -top-6 -right-6 bg-[#8a4b2e] text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg"
            >
              5000+ Clients
            </motion.div>
            <motion.div 
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              className="absolute -bottom-4 -left-4 bg-[#e8b18a] text-[#5c3d2e] px-4 py-2 rounded-full font-medium text-sm shadow-lg"
              style={{ animationDelay: "1s" }}
            >
              100% Satisfaction
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#8a4b2e] flex items-start justify-center">
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-1.5 h-1.5 bg-[#8a4b2e] rounded-full mt-2" 
          />
        </div>
        <p className="text-[#8a4b2e] mt-2 text-xs">Scroll Down</p>
      </motion.div>
    </div>
  )
} 