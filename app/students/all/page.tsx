"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Filter, X } from 'lucide-react';

// Student data (in a real app, this would come from a database or API)
const allStudents = [
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    title: 'Interior Designer & Vastu Consultant',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187',
    location: 'Mumbai, Maharashtra',
    specializations: ['Residential Vastu', 'Interior Design', 'Vastu Remedies', 'Space Optimization'],
    courses: ['Vastu Foundation Course', 'Professional Certification in Vastu Shastra'],
    badges: ['Gold Medalist']
  },
  {
    id: 'rahul-patel',
    name: 'Rahul Patel',
    title: 'Architect & Commercial Vastu Expert',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2149',
    location: 'Delhi, NCR',
    specializations: ['Commercial Vastu', 'Architecture', 'Office Space Design', 'Vastu for Business Growth'],
    courses: ['Professional Course in Vastu Shastra', 'Advanced Vastu for Commercial Spaces'],
    badges: ['Professional Course Graduate']
  },
  {
    id: 'ananya-gupta',
    name: 'Ananya Gupta',
    title: 'Pendulum Dowsing Expert, Energy Consultant',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2187',
    location: 'Bangalore, Karnataka',
    specializations: ['Pendulum Dowsing', 'Energy Harmonization', 'Space Cleansing'],
    courses: ['Pendulum Dowsing Foundation Course', 'Pendulum Dowsing Course Level 2'],
    badges: ['Certified Dowsing Expert']
  },
  {
    id: 'vikram-singh',
    name: 'Vikram Singh',
    title: 'Numerology Expert, Business Consultant',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=2187',
    location: 'Pune, Maharashtra',
    specializations: ['Numerology', 'Business Vastu', 'Corporate Consulting'],
    courses: ['Numerology Solutions', 'Business Vastu Advanced Course'],
    badges: ['Business Vastu Specialist']
  },
  {
    id: 'sanjana-krishnan',
    name: 'Sanjana Krishnan',
    title: 'Vastu Educator, Wellness Expert',
    image: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=2086',
    location: 'Chennai, Tamil Nadu',
    specializations: ['Wellness', 'Education', 'Holistic Health', 'Vastu Teaching'],
    courses: ['Effective Parenting Through Vastu', 'Vastu Foundation Course'],
    badges: ['Certified Educator']
  },
  {
    id: 'arjun-mehta',
    name: 'Arjun Mehta',
    title: 'Vastu Researcher, Author',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187',
    location: 'Kolkata, West Bengal',
    specializations: ['Research', 'Publishing', 'Vastu History', 'Modern Vastu Applications'],
    courses: ['Vastu Professional Course', 'Advanced Research Methodology'],
    badges: ['Published Author']
  },
  {
    id: 'amit-kumar',
    name: 'Amit Kumar',
    title: 'Fengshui & Vastu Integration Specialist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2187',
    location: 'Hyderabad, Telangana',
    specializations: ['Fengshui', 'Vastu Integration', 'Space Harmonization'],
    courses: ['Vastu Professional Course', 'Fengshui Foundations'],
    badges: ['East-West Integration Expert']
  },
  {
    id: 'neha-desai',
    name: 'Neha Desai',
    title: 'Color Psychology & Vastu Expert',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2188',
    location: 'Ahmedabad, Gujarat',
    specializations: ['Color Psychology', 'Interior Vastu', 'Visual Aesthetics'],
    courses: ['Vastu Foundation Course', 'Color Psychology Certification'],
    badges: ['Color Harmony Specialist']
  },
  {
    id: 'rohan-joshi',
    name: 'Rohan Joshi',
    title: 'Industrial Vastu Consultant',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2187',
    location: 'Indore, Madhya Pradesh',
    specializations: ['Industrial Vastu', 'Factory Design', 'Manufacturing Optimization'],
    courses: ['Vastu Professional Course', 'Industrial Space Planning'],
    badges: ['Industrial Vastu Expert']
  },
  {
    id: 'meera-iyer',
    name: 'Meera Iyer',
    title: 'Healthcare Vastu Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061',
    location: 'Kochi, Kerala',
    specializations: ['Healthcare Spaces', 'Healing Environments', 'Hospital Design'],
    courses: ['Vastu Professional Course', 'Healing Spaces Certification'],
    badges: ['Healthcare Design Expert']
  },
  {
    id: 'raj-malhotra',
    name: 'Raj Malhotra',
    title: 'Vastu Technology Integration Specialist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
    location: 'Gurgaon, Haryana',
    specializations: ['Smart Homes', 'Technology Integration', 'Modern Vastu Applications'],
    courses: ['Vastu Professional Course', 'Modern Applications Workshop'],
    badges: ['Technology Integration Expert']
  },
  {
    id: 'isha-verma',
    name: 'Isha Verma',
    title: 'Retail Vastu & Customer Experience Expert',
    image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=2070',
    location: 'Jaipur, Rajasthan',
    specializations: ['Retail Spaces', 'Customer Experience', 'Store Layout Optimization'],
    courses: ['Commercial Vastu', 'Retail Experience Design'],
    badges: ['Retail Vastu Specialist']
  }
];

// Available filter categories
const specializations = [...new Set(allStudents.flatMap(student => student.specializations))].sort();
const courses = [...new Set(allStudents.flatMap(student => student.courses))].sort();
const locations = [...new Set(allStudents.map(student => student.location))].sort();
const badges = [...new Set(allStudents.flatMap(student => student.badges))].sort();

export default function AllStudents() {
  const [students, setStudents] = useState(allStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    specializations: [],
    courses: [],
    locations: [],
    badges: []
  });

  // Filter students based on search term and filters
  useEffect(() => {
    let filteredStudents = allStudents;

    // Apply search filter
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase().trim();
      filteredStudents = filteredStudents.filter(student => 
        student.name.toLowerCase().includes(term) ||
        student.title.toLowerCase().includes(term) ||
        student.location.toLowerCase().includes(term) ||
        student.specializations.some(spec => spec.toLowerCase().includes(term))
      );
    }

    // Apply category filters
    if (filters.specializations.length > 0) {
      filteredStudents = filteredStudents.filter(student => 
        student.specializations.some(spec => filters.specializations.includes(spec))
      );
    }

    if (filters.courses.length > 0) {
      filteredStudents = filteredStudents.filter(student => 
        student.courses.some(course => filters.courses.includes(course))
      );
    }

    if (filters.locations.length > 0) {
      filteredStudents = filteredStudents.filter(student => 
        filters.locations.includes(student.location)
      );
    }

    if (filters.badges.length > 0) {
      filteredStudents = filteredStudents.filter(student => 
        student.badges.some(badge => filters.badges.includes(badge))
      );
    }

    setStudents(filteredStudents);
  }, [searchTerm, filters]);

  const toggleFilter = (category, value) => {
    setFilters(prevFilters => {
      const currentFilters = [...prevFilters[category]];
      
      if (currentFilters.includes(value)) {
        return {
          ...prevFilters,
          [category]: currentFilters.filter(item => item !== value)
        };
      } else {
        return {
          ...prevFilters,
          [category]: [...currentFilters, value]
        };
      }
    });
  };

  const clearFilters = () => {
    setFilters({
      specializations: [],
      courses: [],
      locations: [],
      badges: []
    });
    setSearchTerm('');
  };

  const totalFiltersApplied = 
    filters.specializations.length + 
    filters.courses.length + 
    filters.locations.length + 
    filters.badges.length;

  return (
    <main className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#7a2323]/90 dark:to-[#5a1a1a] min-h-screen pb-20">
      {/* Header */}
      <div className="relative bg-[#7a2323] dark:bg-[#6a1d1d] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <Link href="/students" className="flex items-center text-white/80 mb-4 hover:text-white transition-colors">
                <ArrowLeft size={18} className="mr-2" />
                <span>Back to Student Resources</span>
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">All Students</h1>
              <p className="text-white/80">
                Browse our talented community of Vastu students and practitioners
              </p>
            </div>
            
            <div className="mt-6 md:mt-0 flex items-center gap-4">
              <button 
                className={`flex items-center py-2 px-4 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors ${showFilters ? 'bg-white/20' : ''}`}
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={16} className="mr-2" />
                <span>Filters</span>
                {totalFiltersApplied > 0 && (
                  <span className="ml-2 bg-white text-[#7a2323] text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                    {totalFiltersApplied}
                  </span>
                )}
              </button>
              
              {totalFiltersApplied > 0 && (
                <button 
                  className="text-white/80 hover:text-white text-sm"
                  onClick={clearFilters}
                >
                  Clear all
                </button>
              )}
            </div>
          </div>

          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, specialty, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-96 py-3 pl-10 pr-4 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a2323]/50"
            />
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <motion.div 
          className="bg-white/80 dark:bg-[#5a1a1a]/80 backdrop-blur-sm border-b border-gray-200 dark:border-[#7a2323]/30"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Specializations Filter */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Specializations</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
                  {specializations.map(spec => (
                    <div key={spec} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`spec-${spec}`}
                        checked={filters.specializations.includes(spec)}
                        onChange={() => toggleFilter('specializations', spec)}
                        className="w-4 h-4 rounded border-gray-300 text-[#7a2323] focus:ring-[#7a2323]"
                      />
                      <label htmlFor={`spec-${spec}`} className="ml-2 text-sm text-gray-700 dark:text-white/90 cursor-pointer">
                        {spec}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Courses Filter */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Courses Taken</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
                  {courses.map(course => (
                    <div key={course} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`course-${course}`}
                        checked={filters.courses.includes(course)}
                        onChange={() => toggleFilter('courses', course)}
                        className="w-4 h-4 rounded border-gray-300 text-[#7a2323] focus:ring-[#7a2323]"
                      />
                      <label htmlFor={`course-${course}`} className="ml-2 text-sm text-gray-700 dark:text-white/90 cursor-pointer">
                        {course}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Location</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
                  {locations.map(location => (
                    <div key={location} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`location-${location}`}
                        checked={filters.locations.includes(location)}
                        onChange={() => toggleFilter('locations', location)}
                        className="w-4 h-4 rounded border-gray-300 text-[#7a2323] focus:ring-[#7a2323]"
                      />
                      <label htmlFor={`location-${location}`} className="ml-2 text-sm text-gray-700 dark:text-white/90 cursor-pointer">
                        {location}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Badges Filter */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-white mb-3">Badges & Achievements</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
                  {badges.map(badge => (
                    <div key={badge} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`badge-${badge}`}
                        checked={filters.badges.includes(badge)}
                        onChange={() => toggleFilter('badges', badge)}
                        className="w-4 h-4 rounded border-gray-300 text-[#7a2323] focus:ring-[#7a2323]"
                      />
                      <label htmlFor={`badge-${badge}`} className="ml-2 text-sm text-gray-700 dark:text-white/90 cursor-pointer">
                        {badge}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Results Section */}
      <div className="container mx-auto px-4 pt-10">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-700 dark:text-white/80">
            <strong>{students.length}</strong> students found
          </p>
        </div>

        {students.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {students.map(student => (
              <motion.div
                key={student.id}
                className="bg-white dark:bg-[#6a1d1d] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link href={`/students/${student.id}`} className="block">
                  <div className="relative h-64">
                    <Image
                      src={student.image}
                      alt={student.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-1 text-[#7a2323] dark:text-white">{student.name}</h2>
                    <p className="text-gray-600 dark:text-white/80 mb-3">{student.title}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 dark:text-white/60 mb-4">
                      <span>{student.location}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {student.specializations.slice(0, 3).map((spec, index) => (
                        <span
                          key={index}
                          className="bg-[#7a2323]/5 dark:bg-white/5 text-[#7a2323] dark:text-white/90 text-xs px-3 py-1 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                      {student.specializations.length > 3 && (
                        <span className="text-xs text-gray-500 dark:text-white/60">
                          +{student.specializations.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {student.badges.map((badge, index) => (
                          <span
                            key={index}
                            className="bg-[#7a2323]/10 dark:bg-white/10 text-[#7a2323] dark:text-yellow-300 text-xs font-medium px-3 py-1 rounded-full mr-2"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                      <span className="text-[#7a2323] dark:text-yellow-300 font-medium text-sm">View Profile</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-[#5a1a1a] rounded-full flex items-center justify-center">
              <X size={24} className="text-gray-400 dark:text-white/40" />
            </div>
            <h3 className="text-xl font-bold text-gray-700 dark:text-white mb-2">No students found</h3>
            <p className="text-gray-500 dark:text-white/60 mb-6">
              Try adjusting your filters or search term
            </p>
            <button 
              onClick={clearFilters}
              className="bg-[#7a2323] text-white py-2 px-6 rounded-full hover:bg-[#6a1d1d] transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d1d1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </main>
  );
} 