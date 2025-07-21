"use client";

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, CalendarDays, MapPin, Award, Briefcase, Mail, Phone, User, Book, Globe } from 'lucide-react';

// Student data (in a real app, this would come from a database or API)
const studentData = {
  'priya-sharma': {
    name: 'Priya Sharma',
    title: 'Interior Designer & Vastu Consultant',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000',
    badges: ['Gold Medalist', 'Certified Vastu Consultant'],
    location: 'Mumbai, Maharashtra',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    experience: '5+ years',
    bio: 'Priya Sharma is a renowned interior designer specializing in Vastu-compliant spaces. With over 5 years of experience, she has transformed numerous residential and commercial spaces using Vastu principles to enhance harmony, prosperity, and wellbeing. Her unique approach combines modern design aesthetics with traditional Vastu knowledge, creating beautiful yet energetically balanced environments.',
    education: [
      { degree: 'Vastu Foundation Course', institution: 'Vaastu Sanjivanii', year: '2018', achievement: 'Gold Medalist' },
      { degree: 'Professional Certification in Vastu Shastra', institution: 'Vaastu Sanjivanii', year: '2019' },
      { degree: 'B.Des in Interior Design', institution: 'National Institute of Design', year: '2017' }
    ],
    specializations: ['Residential Vastu', 'Interior Design', 'Vastu Remedies', 'Space Optimization'],
    projects: [
      { name: 'Harmony Villa Project', description: 'Redesigned a 4-bedroom villa using Vastu principles to improve family harmony and prosperity.', year: '2022', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2069' },
      { name: 'Serenity Apartment Complex', description: 'Consulted on the Vastu aspects of a 32-apartment residential complex, ensuring optimal energy flow.', year: '2021', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070' },
      { name: 'Prosperity Office Space', description: 'Transformed a corporate office using Vastu principles to enhance business growth and employee wellbeing.', year: '2020', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069' },
    ],
    testimonials: [
      { name: 'Rajesh Mehta', role: 'Homeowner', text: 'Priya\'s Vastu consultation completely transformed our home environment. We\'ve experienced improved family harmony and prosperity since implementing her recommendations.' },
      { name: 'Sunita Reddy', role: 'Business Owner', text: 'After applying Priya\'s Vastu suggestions to my boutique, I\'ve seen a significant increase in customer flow and sales. Her knowledge is incredible!' }
    ]
  },
  'rahul-patel': {
    name: 'Rahul Patel',
    title: 'Architect & Commercial Vastu Expert',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2149',
    coverImage: 'https://images.unsplash.com/photo-1613507093650-511f901a8f03?q=80&w=2070',
    badges: ['Professional Course Graduate', 'Certified Architect'],
    location: 'Delhi, NCR',
    email: 'rahul.patel@example.com',
    phone: '+91 98765 12345',
    experience: '7+ years',
    bio: 'Rahul Patel is an accomplished architect who specializes in integrating Vastu principles into modern commercial building designs. With over 7 years of experience in architectural design and Vastu implementation, he has successfully created harmonious workspaces that promote productivity, prosperity, and employee wellbeing across India.',
    education: [
      { degree: 'Professional Course in Vastu Shastra', institution: 'Vaastu Sanjivanii', year: '2017' },
      { degree: 'Advanced Vastu for Commercial Spaces', institution: 'Vaastu Sanjivanii', year: '2018' },
      { degree: 'B.Arch', institution: 'School of Planning and Architecture', year: '2015' }
    ],
    specializations: ['Commercial Vastu', 'Architecture', 'Office Space Design', 'Vastu for Business Growth'],
    projects: [
      { name: 'TechHub Office Complex', description: 'Designed a 50,000 sq ft tech park using Vastu principles to enhance innovation and productivity.', year: '2022', image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070' },
      { name: 'Wellness Center', description: 'Created a holistic wellness center with perfect Vastu alignment to promote healing and positivity.', year: '2021', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053' },
      { name: 'Retail Success Mall', description: 'Consulted on Vastu corrections for a struggling shopping mall that led to 40% increase in footfall.', year: '2020', image: 'https://images.unsplash.com/photo-1567449303078-57ad995bd17a?q=80&w=2070' },
    ],
    testimonials: [
      { name: 'Vikram Malhotra', role: 'CEO, TechHub Solutions', text: 'Rahul\'s Vastu-integrated design has transformed our office environment. Our team productivity has increased noticeably, and the space feels energetically balanced.' },
      { name: 'Meera Kapoor', role: 'Business Owner', text: 'After implementing Rahul\'s Vastu recommendations, our retail store has seen a remarkable increase in customer retention and sales. His expertise is truly valuable.' }
    ]
  },
  // More student data would be added here...
};

// Default data for students without specific profiles
const defaultStudentData = {
  name: 'Student Profile',
  title: 'Vastu Student',
  image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=2031',
  coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
  badges: ['Vastu Student'],
  location: 'India',
  email: 'contact@vaastusanjivanii.com',
  phone: '+91 XXXXX XXXXX',
  experience: '-',
  bio: 'This student is currently enrolled in our courses. Detailed profile coming soon.',
  education: [
    { degree: 'Vastu Foundation Course', institution: 'Vaastu Sanjivanii', year: 'Current' }
  ],
  specializations: ['Learning Vastu Principles'],
  projects: [],
  testimonials: []
};

export default function StudentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    setLoading(true);
    setError(null);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log('API URL (student detail):', apiUrl);
    fetch(`${apiUrl}/api/students/slug/${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setStudent(data.data);
        } else {
          setError('Student not found');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load student');
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#7a2323]/90 dark:to-[#5a1a1a]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#7a2323] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#7a2323] dark:text-white font-medium">Loading student profile...</p>
        </div>
      </div>
    );
  }

  if (error || !student) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#7a2323]/90 dark:to-[#5a1a1a]">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 font-medium">{error || 'Student not found'}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#7a2323]/90 dark:to-[#5a1a1a] min-h-screen">
      {/* Cover Image */}
      <div className="relative h-80 w-full">
        <Image 
          src={student.coverImage} 
          alt={`${student.name} Cover`} 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
        
        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="container mx-auto">
            <Link href="/students" className="flex items-center text-white mb-4 hover:text-yellow-300 transition-colors">
              <ArrowLeft size={18} className="mr-2" />
              <span>Back to Students</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="relative -mt-24">
          {/* Profile Header */}
          <div className="bg-white dark:bg-[#6a1d1d] rounded-xl shadow-xl p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4">
                <div className="relative w-40 h-40 md:w-full md:h-64 rounded-xl overflow-hidden border-4 border-white dark:border-[#8f3232] shadow-lg mx-auto md:mx-0">
                  <Image 
                    src={student.image} 
                    alt={student.name} 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-3/4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#7a2323] dark:text-white">{student.name}</h1>
                    <p className="text-xl text-gray-600 dark:text-white/80 mt-1">{student.title}</p>
                  </div>
                  <div className="flex gap-2 mt-4 md:mt-0">
                    {student.badges.map((badge: string, index: number) => (
                      <span 
                        key={index}
                        className="bg-[#7a2323]/10 dark:bg-white/10 text-[#7a2323] dark:text-yellow-300 text-sm font-medium px-3 py-1 rounded-full flex items-center"
                      >
                        <Award size={14} className="mr-1" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600 dark:text-white/80">
                    <MapPin size={18} className="mr-2 text-[#7a2323] dark:text-yellow-300" />
                    <span>{student.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-white/80">
                    <Mail size={18} className="mr-2 text-[#7a2323] dark:text-yellow-300" />
                    <span>{student.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-white/80">
                    <Phone size={18} className="mr-2 text-[#7a2323] dark:text-yellow-300" />
                    <span>{student.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-white/80">
                    <Briefcase size={18} className="mr-2 text-[#7a2323] dark:text-yellow-300" />
                    <span>Experience: {student.experience}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {student.specializations.map((specialization: string, index: number) => (
                    <span 
                      key={index}
                      className="bg-[#7a2323]/5 dark:bg-white/5 text-[#7a2323] dark:text-white/90 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {specialization}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="bg-white dark:bg-[#6a1d1d] rounded-xl shadow-lg mb-8 overflow-hidden">
            <div className="flex overflow-x-auto">
              <button 
                className={`px-6 py-4 text-sm font-medium transition-colors border-b-2 ${
                  activeTab === 'profile' 
                    ? 'border-[#7a2323] dark:border-yellow-300 text-[#7a2323] dark:text-yellow-300' 
                    : 'border-transparent text-gray-600 dark:text-white/70 hover:text-[#7a2323] hover:dark:text-white'
                }`}
                onClick={() => setActiveTab('profile')}
              >
                <User size={16} className="inline-block mr-2" />
                Profile
              </button>
              <button 
                className={`px-6 py-4 text-sm font-medium transition-colors border-b-2 ${
                  activeTab === 'education' 
                    ? 'border-[#7a2323] dark:border-yellow-300 text-[#7a2323] dark:text-yellow-300' 
                    : 'border-transparent text-gray-600 dark:text-white/70 hover:text-[#7a2323] hover:dark:text-white'
                }`}
                onClick={() => setActiveTab('education')}
              >
                <Book size={16} className="inline-block mr-2" />
                Education
              </button>
              {/* <button 
                className={`px-6 py-4 text-sm font-medium transition-colors border-b-2 ${
                  activeTab === 'projects' 
                    ? 'border-[#7a2323] dark:border-yellow-300 text-[#7a2323] dark:text-yellow-300' 
                    : 'border-transparent text-gray-600 dark:text-white/70 hover:text-[#7a2323] hover:dark:text-white'
                }`}
                onClick={() => setActiveTab('projects')}
              >
                <Briefcase size={16} className="inline-block mr-2" />
                Projects
              </button> */}
              <button 
                className={`px-6 py-4 text-sm font-medium transition-colors border-b-2 ${
                  activeTab === 'testimonials' 
                    ? 'border-[#7a2323] dark:border-yellow-300 text-[#7a2323] dark:text-yellow-300' 
                    : 'border-transparent text-gray-600 dark:text-white/70 hover:text-[#7a2323] hover:dark:text-white'
                }`}
                onClick={() => setActiveTab('testimonials')}
              >
                <Globe size={16} className="inline-block mr-2" />
                Testimonials
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="bg-white dark:bg-[#6a1d1d] rounded-xl shadow-xl p-6 md:p-8">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-[#7a2323] dark:text-white mb-6">About {student.name}</h2>
                <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-8">
                  {student.bio}
                </p>
                
                <h3 className="text-xl font-semibold text-[#7a2323] dark:text-white mb-4">Areas of Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {student.specializations.map((specialization: string, index: number) => (
                    <div 
                      key={index} 
                      className="bg-[#7a2323]/5 dark:bg-white/5 p-4 rounded-lg flex items-center"
                    >
                      <CheckCircle size={18} className="mr-3 text-[#7a2323] dark:text-yellow-300" />
                      <span className="text-gray-700 dark:text-white/90">{specialization}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Education Tab */}
            {activeTab === 'education' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-[#7a2323] dark:text-white mb-6">Education & Certifications</h2>
                
                <div className="space-y-8">
                  {student.education.map((edu: any, index: number) => (
                    <div key={index} className="flex">
                      <div className="mr-4">
                        <div className="w-12 h-12 bg-[#7a2323]/10 dark:bg-white/10 rounded-full flex items-center justify-center">
                          <CalendarDays size={20} className="text-[#7a2323] dark:text-yellow-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#7a2323] dark:text-white">{edu.degree}</h3>
                        <p className="text-gray-600 dark:text-white/80">{edu.institution}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-sm text-gray-500 dark:text-white/60">Year: {edu.year}</span>
                          {edu.achievement && (
                            <>
                              <span className="mx-2 text-gray-400">•</span>
                              <span className="text-sm font-medium text-[#7a2323] dark:text-yellow-300">{edu.achievement}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Projects Tab */}
            {/* {activeTab === 'projects' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-[#7a2323] dark:text-white mb-6">Recent Projects</h2>
                
                {student.projects.length > 0 ? (
                  <div className="space-y-8">
                    {student.projects.map((project: any, index: number) => (
                      <div key={index} className="flex flex-col md:flex-row bg-gray-50 dark:bg-[#5a1a1a]/50 rounded-xl overflow-hidden">
                        <div className="md:w-1/3 h-64 relative">
                          <Image 
                            src={project.image} 
                            alt={project.name} 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-bold text-[#7a2323] dark:text-white">{project.name}</h3>
                            <span className="bg-[#7a2323]/10 dark:bg-white/10 text-[#7a2323] dark:text-yellow-300 text-xs font-medium px-3 py-1 rounded-full">
                              {project.year}
                            </span>
                          </div>
                          <p className="text-gray-700 dark:text-white/80">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500 dark:text-white/60">No projects available yet.</p>
                  </div>
                )}
              </motion.div>
            )} */}
            
            {/* Testimonials Tab */}
            {activeTab === 'testimonials' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-[#7a2323] dark:text-white mb-6">Client Testimonials</h2>
                
                {student.testimonials.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {student.testimonials.map((testimonial: any, index: number) => (
                      <div 
                        key={index} 
                        className="bg-gray-50 dark:bg-[#5a1a1a]/50 p-6 rounded-xl border border-gray-100 dark:border-[#7a2323]/30"
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-[#7a2323]/20 dark:bg-white/10 rounded-full flex items-center justify-center mr-3">
                            <span className="text-[#7a2323] dark:text-yellow-300 font-semibold">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#7a2323] dark:text-white">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500 dark:text-white/60">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-white/80 italic">
                          "{testimonial.text}"
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500 dark:text-white/60">No testimonials available yet.</p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 