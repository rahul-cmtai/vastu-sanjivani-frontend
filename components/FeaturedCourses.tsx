import { motion } from "framer-motion";
import { courses } from "../lib/courseData";

// Dummy images for all courses
const dummyImages = [
  "/images/home/vastu-foundation.jpg", 
  "/images/home/vastu-professional.jpg", 
  "/images/home/3.jpg",
  "/images/home/Pendulum Dowsing Foundation course thumbnail.png",
  "/images/home/pendulum-dowsing-2.jpg",
  "/images/home/pendulum-dowsing-3.jpg",
  "/images/home/Pendulum Dowsing 4.png"
 
];

// Select the first 7 courses
const featuredCourses = courses.slice(0, 7).map((course, index) => {
  return {
    ...course,
    dummyImage: dummyImages[index]
  };
});

export function FeaturedCourses() {
  return (
    <section className="py-16" style={{ background: "#faf3ea" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#7a2323] drop-shadow-lg">Featured Courses</h2>
        
        {/* First row with 3 courses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {featuredCourses.slice(0, 3).map((course, i) => (
            <CourseCard key={i} course={course} index={i} />
          ))}
        </div>
        
        {/* Second row with 3 courses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {featuredCourses.slice(3, 6).map((course, i) => (
            <CourseCard key={i+3} course={course} index={i+3} />
          ))}
        </div>
        
        {/* Third row with 1 course centered */}
        <div className="flex justify-center">
          <div className="w-full md:w-1/3">
            <CourseCard key={6} course={featuredCourses[6]} index={6} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course, index }: { course: typeof courses[0] & { dummyImage?: string }, index: number }) {
  return (
    <a href="https://achieverslifestyle.com/" target="_blank" rel="noopener noreferrer">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(122,35,35,0.15)" }}
        className="bg-white rounded-2xl shadow-lg p-0 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer border-t-4 border-yellow-300"
      >
        <img
          src={course.dummyImage}
          alt={course.title}
          className="w-full h-48 object-cover rounded-t-2xl mb-4"
          style={{objectFit: 'cover'}}
        />
        <div className="p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-[#7a2323] mb-2">{course.title}</h3>
          <p className="text-gray-600 text-center line-clamp-2">{course.description}</p>
        </div>
      </motion.div>
    </a>
  );
} 