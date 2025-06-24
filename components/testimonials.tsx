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
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-4 mx-6",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className={`w-8 h-8 rounded-full ${color} bg-opacity-20 flex items-center justify-center`}>
          <span className={`text-sm font-semibold ${color}`}>{initials}</span>
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm dark:text-white/80">{body}</blockquote>
    </figure>
  );
};

export function TestimonialsMarquee() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 dark:from-[#7a2323]/90 dark:to-[#5a1a1a]">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 text-[#7a2323] dark:text-white">
          What Our Clients Say
        </h2>
        <div className="mx-auto h-1 w-20 rounded-full bg-[#7a2323]/60 dark:bg-white/60 mb-6"></div>
        <p className="text-center text-gray-600 dark:text-white/80 max-w-2xl mx-auto mb-12">
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
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50 dark:from-[#7a2323]/90"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50 dark:from-[#7a2323]/90"></div>
      </div>
    </section>
  );
} 