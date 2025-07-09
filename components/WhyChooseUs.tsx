import { motion } from "framer-motion";

const points = [
  {
    icon: "🌟",
    title: "Expert Guidance",
    desc: "Years of experience in Vastu, Astrology & Numerology."
  },
  {
    icon: "🎯",
    title: "Personalized Solutions",
    desc: "Every consultation is tailored to your unique needs."
  },
  {
    icon: "💡",
    title: "Modern Approach",
    desc: "Blending tradition with modern science for best results."
  },
  {
    icon: "🤝",
    title: "Trusted Support",
    desc: "Hundreds of happy clients and ongoing support."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16" style={{ background: "#faf3ea" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#7a2323] drop-shadow-lg">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 border-t-4 border-orange-200"
            >
              <motion.div
                className="text-5xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", delay: i * 0.2 }}
              >
                {point.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-[#7a2323] mb-2">{point.title}</h3>
              <p className="text-gray-600 text-center">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 