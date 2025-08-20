"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const testimonials = [
  {
    name: "Sushil Sharma",
    username: "Business Owner",
    body: "I noticed the business growth and more positivity in work area after implementing the Vastu changes.",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-500",
  },
  {
    name: "Prasad Kulkarni",
    username: "Homeowner",
    body: "With just a few changes I experienced a remarkable difference. Thanks a lot, it's all because of your blessings.",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconColor: "text-purple-500",
  },
  {
    name: "Radha Gambhir",
    username: "Client",
    body: "The pain vanished within two days after removing certain nails as suggested by the Vastu consultation.",
    color: "text-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconColor: "text-green-500",
  },
  {
    name: "Anjali Kapur",
    username: "Resident",
    body: "I felt a marked positive difference in the energies. Issues slowly steadily started getting resolved.",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    iconColor: "text-amber-500",
  },
  {
    name: "Kiran Sangwan",
    username: "Parent",
    body: "My kid, who was not doing very well in studies, with changes in placement of books and study table, scored good marks in boards.",
    color: "text-pink-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    iconColor: "text-pink-500",
  },
  {
    name: "Rahul Verma",
    username: "Office Manager",
    body: "The workplace environment completely transformed after following the Vastu recommendations. Productivity has gone up.",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconColor: "text-orange-500",
  },
  {
    name: "Neha Gupta",
    username: "Entrepreneur",
    body: "My business flourished after implementing Vastu suggestions for my office. Revenue increased by 40% in just 3 months!",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    iconColor: "text-indigo-500",
  },
  {
    name: "Rajiv Malhotra",
    username: "Retail Store Owner",
    body: "Customer footfall improved dramatically after repositioning the entrance as per Vastu principles. Thank you for your guidance!",
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    iconColor: "text-cyan-500",
  },
  {
    name: "Sanjana Patel",
    username: "Homemaker",
    body: "My family's health improved significantly after making the suggested Vastu changes to our kitchen and bedroom layout.",
    color: "text-violet-500",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    iconColor: "text-violet-500",
  },
  {
    name: "Vikram Singh",
    username: "Real Estate Developer",
    body: "The properties designed with your Vastu principles sell much faster than others. I'm truly amazed by the results!",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    iconColor: "text-emerald-500",
  },
  {
    name: "Meera Reddy",
    username: "Restaurant Owner",
    body: "After rearranging our restaurant layout according to Vastu, we've seen a 30% increase in repeat customers. Incredible results!",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    iconColor: "text-rose-500",
  },
  {
    name: "Arjun Mehta",
    username: "IT Professional",
    body: "The work-from-home setup you suggested has boosted my productivity and reduced my stress levels significantly.",
    color: "text-sky-500",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    iconColor: "text-sky-500",
  },
  {
    name: "Priya Nair",
    username: "Healthcare Professional",
    body: "Ever since implementing the Vastu changes in my clinic, patients report feeling more comfortable and at ease during their visits.",
    color: "text-teal-500",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    iconColor: "text-teal-500",
  },
  {
    name: "Deepak Joshi",
    username: "Factory Owner",
    body: "Production efficiency increased and workplace accidents decreased after rearranging machinery according to Vastu principles.",
    color: "text-fuchsia-500",
    bgColor: "bg-fuchsia-50",
    borderColor: "border-fuchsia-200",
    iconColor: "text-fuchsia-500",
  },
];

const firstRow = testimonials.slice(0, 7);
const secondRow = testimonials.slice(7);

const TestimonialCard = ({
  name,
  username,
  body,
  color = "text-blue-500",
}: {
  name: string;
  username: string;
  body: string;
  color?: string;
}) => {
  // Get initials for avatar
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
    
  return (
    <figure
      className={cn(
        "relative h-full w-64 md:w-80 cursor-pointer overflow-hidden rounded-xl border p-3 md:p-4 mx-3 md:mx-6",
        // light styles
        "border-gray-200 bg-white hover:bg-gray-50 shadow-lg",
        // dark styles
        "dark:border-gray-300 dark:bg-white dark:hover:bg-gray-50"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${color} bg-opacity-20 flex items-center justify-center`}>
          <span className={`text-xs md:text-sm font-semibold ${color}`}>{initials}</span>
        </div>
        <div className="flex flex-col">
          <figcaption className="text-xs md:text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-xs md:text-sm dark:text-white/80 leading-relaxed">{body}</blockquote>
    </figure>
  );
};

export function TestimonialsMarquee() {
  return (
    <section className="relative py-16 overflow-hidden">
              {/* Background Image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-[#7a2323]/20 to-[#5a1a1a]/25"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 text-[#7a2323] dark:text-white">
            What Our Clients Say
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-[#7a2323]/60 dark:bg-white/60 mb-6"></div>
          <p className="text-center text-black/80 dark:text-white/80 max-w-2xl mx-auto mb-12">
            Read what our clients have to say about our Vastu consultations and how it has transformed their lives and workspaces.
          </p>
        </div>
      
              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <style jsx global>{`
            .gap-marquee > div {
              gap: 48px !important;
            }
            .marquee-wrapper:hover .marquee-content {
              animation-play-state: paused;
            }
          `}</style>
          <Marquee pauseOnHover className="mb-8 gap-marquee">
            {firstRow.map((testimonial, idx) => (
              <TestimonialCard key={`first-${idx}`} {...testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="gap-marquee">
            {secondRow.map((testimonial, idx) => (
              <TestimonialCard key={`second-${idx}`} {...testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#7a2323]/30 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#7a2323]/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
} 