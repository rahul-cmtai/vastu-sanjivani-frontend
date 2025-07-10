import { motion } from "framer-motion";
import { AcademicCapIcon, ChartBarIcon, LightBulbIcon, HeartIcon } from "@heroicons/react/24/solid";

const steps = [
  {
    title: "Consultation",
    desc: "We understand your needs and analyze your space or birth details.",
    icon: AcademicCapIcon
  },
  {
    title: "Analysis",
    desc: "Detailed study using Vastu, Astrology, and Numerology principles.",
    icon: ChartBarIcon
  },
  {
    title: "Solution",
    desc: "Personalized remedies and actionable guidance provided.",
    icon: LightBulbIcon
  },
  {
    title: "Support",
    desc: "Continuous support to ensure positive transformation.",
    icon: HeartIcon
  }
];

export function OurProcess() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: "#faf3ea" }}>
      {/* Decorative SVG blobs */}
      <svg className="absolute -top-32 -left-32 w-[500px] h-[500px] opacity-30 z-0" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="blob1" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#fbbf24" />
          </radialGradient>
        </defs>
        <ellipse cx="250" cy="250" rx="250" ry="200" fill="url(#blob1)" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-20 z-0" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="blob2" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#fcd34d" />
          </radialGradient>
        </defs>
        <ellipse cx="200" cy="200" rx="200" ry="160" fill="url(#blob2)" />
      </svg>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-[#7a2323] drop-shadow-xl tracking-tight leading-tight" style={{letterSpacing: '-0.02em'}}>Our Process</h2>
        <div className="relative flex flex-col md:flex-row gap-16 md:gap-10 justify-center items-center md:items-stretch">
          {/* Animated progress line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-20 h-[calc(100%-5rem)] w-1 -translate-x-1/2 z-0">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="w-full h-full bg-gradient-to-b from-pink-200 via-yellow-300 to-orange-100 animate-pulse rounded-full shadow-lg"
              style={{ minHeight: '220px', maxHeight: '320px' }}
            />
          </div>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95, rotate: 2 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.06, boxShadow: "0 12px 40px 0 rgba(122,35,35,0.18)", borderColor: "#fbbf24" }}
                transition={{ duration: 0.7, delay: i * 0.18, type: "spring", stiffness: 120 }}
                viewport={{ once: true }}
                className="relative bg-white/60 backdrop-blur-lg border-2 border-transparent group rounded-3xl shadow-2xl p-10 flex flex-col items-center w-full md:w-72 border-b-8 border-[#7a2323]/20 hover:shadow-pink-200/40 hover:border-yellow-400 transition-all duration-400 overflow-hidden"
                style={{ boxShadow: '0 8px 32px 0 rgba(122,35,35,0.10), 0 1.5px 8px 0 #fbbf24' }}
              >
                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none z-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background: 'linear-gradient(120deg, #fcd34d 0%, #f472b6 100%)',
                    filter: 'blur(16px)',
                    opacity: 0.18
                  }}
                />
                {/* Animated icon background */}
                <motion.div
                  className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full z-0"
                  animate={{
                    background: [
                      'radial-gradient(circle at 60% 40%, #fcd34d 0%, #fbbf24 100%)',
                      'radial-gradient(circle at 40% 60%, #f472b6 0%, #fcd34d 100%)',
                      'radial-gradient(circle at 60% 40%, #fcd34d 0%, #fbbf24 100%)'
                    ]
                  }}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                  style={{ filter: 'blur(8px)', opacity: 0.25 }}
                />
                <div className="relative w-16 h-16 bg-[#7a2323]/90 text-white rounded-full flex items-center justify-center text-4xl font-bold mb-6 border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-300 z-10">
                  <Icon className="w-9 h-9" />
                </div>
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center md:hidden z-10">
                  <span className="text-2xl font-bold text-[#7a2323] drop-shadow">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-[#7a2323] mb-3 mt-2 text-center tracking-tight leading-snug z-10" style={{letterSpacing: '-0.01em'}}>{step.title}</h3>
                <p className="text-gray-700 text-center text-base font-medium z-10" style={{lineHeight: '1.6'}}>{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 