"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import { 
  ChevronDown, 
  Menu,
  X,
  Home,
  Building,
  Gem
} from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const [isMobileCoursesDropdownOpen, setIsMobileCoursesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const coursesDropdownRef = useRef<HTMLDivElement>(null);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
      if (coursesDropdownRef.current && !coursesDropdownRef.current.contains(event.target as Node)) {
        setIsCoursesDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Services links for dropdown
  const serviceLinks = [
    { href: "/services/vastu-consultancy", label: "Vastu Consultancy", icon: <Building size={18} className="mr-2" /> },
    { href: "/services/astro-vastu-remedies", label: "Astro Vastu Remedies", icon: <Gem size={18} className="mr-2" /> },
    { href: "/services/numerology-solutions", label: "Numerology Solutions", icon: <Gem size={18} className="mr-2" /> },
  ];

  // Course links for dropdown
  const courseLinks = [
    { href: "/courses/vastu-foundation-course", label: "Vastu Foundation Course" },
    { href: "/courses/vastu-professional-course", label: "Vastu Professional Course" },
    { href: "/courses/effective-parenting-through-vastu", label: "Effective Parenting Through Vastu" },
    { href: "/courses/pendulum-dowsing-foundation-course", label: "Pendulum Dowsing Foundation Course" },
    { href: "/courses/pendulum-dowsing-course-level-2", label: "Pendulum Dowsing Course Level 2" },
    { href: "https://achieverslifestyle.com/", label: "Pendulum Dowsing Course Level 3" },
    { href: "https://achieverslifestyle.com/", label: "Pendulum Dowsing Course Level 4" },
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? "bg-gradient-to-r from-[#7a2323]/95 to-[#8f3232]/95 backdrop-blur-md shadow-md" : "bg-gradient-to-r from-[#7a2323] to-[#8f3232]"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white flex items-center">
            <span className="relative">
              Vaastu Sanjivanii
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-300" 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-sm font-medium text-white hover:text-yellow-300 transition-colors relative group">
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300" />
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group" ref={servicesDropdownRef}>
              <button
                className="flex items-center text-sm font-medium text-white hover:text-yellow-300 focus:outline-none transition-colors relative group"
                onClick={() => {
                  setIsServicesDropdownOpen(!isServicesDropdownOpen);
                  setIsCoursesDropdownOpen(false);
                }}
                aria-expanded={isServicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300" />
              </button>
              
              {/* Services Dropdown Menu */}
              <motion.div 
                className="absolute left-0 top-full mt-1 w-64 bg-white rounded-lg shadow-xl overflow-hidden z-50"
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ 
                  opacity: isServicesDropdownOpen ? 1 : 0,
                  y: isServicesDropdownOpen ? 0 : 10,
                  height: isServicesDropdownOpen ? 'auto' : 0
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="py-2">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Our Services</h3>
                  </div>
                  {serviceLinks.map((service, index) => (
                    <Link 
                      key={index} 
                      href={service.href}
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#7a2323]"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      {service.icon}
                      {service.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link 
                      href="/services" 
                      className="flex items-center px-4 py-3 text-sm font-medium text-[#7a2323] hover:bg-gray-50"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Courses Dropdown */}
            <div className="relative group" ref={coursesDropdownRef}>
              <button
                className="flex items-center text-sm font-medium text-white hover:text-yellow-300 focus:outline-none transition-colors relative group"
                onClick={() => {
                  setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
                  setIsServicesDropdownOpen(false);
                }}
                aria-expanded={isCoursesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Courses</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isCoursesDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300" />
              </button>
              
              {/* Courses Dropdown Menu */}
              <motion.div 
                className="absolute left-0 top-full mt-1 w-64 bg-white rounded-lg shadow-xl overflow-hidden z-50"
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ 
                  opacity: isCoursesDropdownOpen ? 1 : 0,
                  y: isCoursesDropdownOpen ? 0 : 10,
                  height: isCoursesDropdownOpen ? 'auto' : 0
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="py-2">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Our Courses</h3>
                  </div>
                  {courseLinks.map((course, index) => (
                    <Link 
                      key={index} 
                      href={course.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#7a2323]"
                      onClick={() => setIsCoursesDropdownOpen(false)}
                    >
                      {course.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link 
                      href="/courses" 
                      className="block px-4 py-3 text-sm font-medium text-[#7a2323] hover:bg-gray-50"
                      onClick={() => setIsCoursesDropdownOpen(false)}
                    >
                      View All Courses
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <Link href="/products" className="text-sm font-medium text-white hover:text-yellow-300 transition-colors relative group">
              <span>Products</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/testimonials" className="text-sm font-medium text-white hover:text-yellow-300 transition-colors relative group">
              <span>Testimonials</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/students" className="text-sm font-medium text-white hover:text-yellow-300 transition-colors relative group">
              <span>Our Achievers</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/contact" className="text-sm font-medium text-white hover:text-yellow-300 transition-colors relative group">
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300" />
            </Link>
            <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Enquire Now
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        className="md:hidden"
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="bg-[#7a2323] shadow-inner border-t border-[#9c3a3a] px-4 py-2">
          <Link 
            href="/about" 
            className="block py-3 text-white font-medium hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          
          {/* Mobile Services Dropdown */}
          <div className="py-3">
            <button 
              className="flex items-center justify-between w-full text-white font-medium hover:text-yellow-300"
              onClick={() => {
                setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen);
                setIsMobileCoursesDropdownOpen(false);
              }}
              aria-expanded={isMobileServicesDropdownOpen}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isMobileServicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <motion.div 
              className="pl-4 space-y-2"
              initial={false}
              animate={isMobileServicesDropdownOpen ? { height: "auto", opacity: 1, marginTop: 8 } : { height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.2 }}
              style={{ overflow: "hidden" }}
            >
              {serviceLinks.map((service, index) => (
                <Link 
                  key={index} 
                  href={service.href}
                  className="flex items-center py-2 text-white/80 hover:text-yellow-300"
                  onClick={() => setIsOpen(false)}
                >
                  {service.icon}
                  {service.label}
                </Link>
              ))}
              <Link 
                href="/services" 
                className="block py-2 text-white font-medium hover:text-yellow-300"
                onClick={() => setIsOpen(false)}
              >
                View All Services
              </Link>
            </motion.div>
          </div>
          
          {/* Mobile Courses Dropdown */}
          <div className="py-3">
            <button 
              className="flex items-center justify-between w-full text-white font-medium hover:text-yellow-300"
              onClick={() => {
                setIsMobileCoursesDropdownOpen(!isMobileCoursesDropdownOpen);
                setIsMobileServicesDropdownOpen(false);
              }}
              aria-expanded={isMobileCoursesDropdownOpen}
            >
              Courses
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isMobileCoursesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <motion.div 
              className="pl-4 space-y-2"
              initial={false}
              animate={isMobileCoursesDropdownOpen ? { height: "auto", opacity: 1, marginTop: 8 } : { height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.2 }}
              style={{ overflow: "hidden" }}
            >
              {courseLinks.map((course, index) => (
                <Link 
                  key={index} 
                  href={course.href}
                  className="block py-2 text-white/80 hover:text-yellow-300"
                  onClick={() => setIsOpen(false)}
                >
                  {course.label}
                </Link>
              ))}
              <Link 
                href="/courses" 
                className="block py-2 text-white font-medium hover:text-yellow-300"
                onClick={() => setIsOpen(false)}
              >
                View All Courses
              </Link>
            </motion.div>
          </div>
          
          <Link 
            href="/products" 
            className="block py-3 text-white font-medium hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link 
            href="/testimonials" 
            className="block py-3 text-white font-medium hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </Link>
          <Link 
            href="/students" 
            className="block py-3 text-white font-medium hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Our Achievers
          </Link>
          <Link 
            href="/contact" 
            className="block py-3 text-white font-medium hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <div className="py-3">
            <Button className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-medium shadow-lg">
              Enquire Now
            </Button>
          </div>
        </div>
      </motion.div>
    </nav>
  )
} 