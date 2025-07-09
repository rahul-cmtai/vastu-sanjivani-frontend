import { motion } from "framer-motion";

const courses = [
  {
    title: "Vastu Foundation Course",
    desc: "Learn the basics of Vastu Shastra and how to apply them in daily life.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" // home/architecture/zen
  },
  {
    title: "Pendulum Dowsing",
    desc: "Master the art of dowsing for energy balancing and space clearing.",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" // pendulum/energy
  },
  {
    title: "Numerology Essentials",
    desc: "Decode the secrets of numbers and their influence on your destiny.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" // numbers/abstract
  }
];

export function FeaturedCourses() {
  return (
    <section className="py-16" style={{ background: "#faf3ea" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#7a2323] drop-shadow-lg">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(122,35,35,0.15)" }}
              className="bg-white rounded-2xl shadow-lg p-0 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer border-t-4 border-yellow-300"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover rounded-t-2xl mb-4"
                style={{objectFit: 'cover'}}
              />
              <div className="p-6 flex flex-col items-center">
                <h3 className="text-xl font-semibold text-[#7a2323] mb-2">{course.title}</h3>
                <p className="text-gray-600 text-center">{course.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 