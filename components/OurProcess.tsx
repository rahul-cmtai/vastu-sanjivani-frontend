import { motion } from "framer-motion";

const steps = [
  {
    title: "Consultation",
    desc: "We understand your needs and analyze your space or birth details."
  },
  {
    title: "Analysis",
    desc: "Detailed study using Vastu, Astrology, and Numerology principles."
  },
  {
    title: "Solution",
    desc: "Personalized remedies and actionable guidance provided."
  },
  {
    title: "Support",
    desc: "Continuous support to ensure positive transformation."
  }
];

export function OurProcess() {
  return (
    <section className="py-16" style={{ background: "#faf3ea" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#7a2323] drop-shadow-lg">Our Process</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-100 to-yellow-50 rounded-2xl shadow-lg p-8 flex flex-col items-center w-full md:w-64 border-b-4 border-[#7a2323]/30"
            >
              <div className="w-12 h-12 bg-[#7a2323]/80 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4 border-yellow-300">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-[#7a2323] mb-2">{step.title}</h3>
              <p className="text-gray-700 text-center">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 