export interface Course {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  price: string;
  duration: string;
  lessons: string;
  localImage: string;
  remoteImage: string;
  category: string;
  rating?: number;
  students?: number;
  featured?: boolean;
  instructor?: string;
  saveAmount?: string;
}

export const courses: Course[] = [
  {
    id: "vastu-foundation-course",
    title: "Vastu Foundation Course",
    subtitle: "Vaastu Sanjivanii Training Course (Foundation Course)",
    description: "Learn the fundamental principles of Vastu Shastra and how to apply them in modern living spaces.",
    price: "₹9,999",
    duration: "1 year access",
    lessons: "8 modules",
    localImage: "/images/courses/vastu-foundation.jpg",
    remoteImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1470&auto=format&fit=crop",
    category: "vastu",
    rating: 4.9,
    students: 1250,
    featured: true,
    instructor: "Neena S Arora",
    saveAmount: "₹45,993"
  },
  {
    id: "vastu-professional-course",
    title: "Vastu Professional Course",
    subtitle: "Advanced Vastu Shastra for Professionals",
    description: "Advanced training for aspiring Vastu consultants with practical applications and case studies.",
    price: "₹24,999",
    duration: "1 year access",
    lessons: "12 modules",
    localImage: "/images/courses/vastu-professional.jpg",
    remoteImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1374&auto=format&fit=crop",
    category: "vastu",
    rating: 4.8,
    students: 780,
    instructor: "Neena S Arora"
  },
  {
    id: "effective-parenting-through-vastu",
    title: "Effective Parenting Through Vastu",
    subtitle: "Create Nurturing Spaces for Children",
    description: "Learn how to create nurturing environments for children using Vastu principles.",
    price: "₹7,999",
    duration: "6 months access",
    lessons: "6 modules",
    localImage: "/images/courses/parenting-vastu.jpg",
    remoteImage: "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?q=80&w=1374&auto=format&fit=crop",
    category: "vastu",
    rating: 4.7,
    students: 950,
    instructor: "Neena S Arora"
  },
  {
    id: "pendulum-dowsing-foundation-course",
    title: "Pendulum Dowsing Foundation Course",
    subtitle: "Master the Basics of Pendulum Dowsing",
    description: "Learn the basics of pendulum dowsing and how to use it for energy detection and decision making.",
    price: "₹6,999",
    duration: "6 months access",
    lessons: "4 modules",
    localImage: "/images/courses/dowsing-foundation.jpg",
    remoteImage: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?q=80&w=1374&auto=format&fit=crop",
    category: "dowsing",
    rating: 4.8,
    students: 820,
    instructor: "Neena S Arora"
  },
  {
    id: "pendulum-dowsing-course-level-2",
    title: "Pendulum Dowsing Course Level 2",
    subtitle: "Advanced Techniques for Energy Work",
    description: "Advanced pendulum dowsing techniques for space clearing, health assessments, and energy work.",
    price: "₹8,999",
    duration: "6 months access",
    lessons: "5 modules",
    localImage: "/images/courses/dowsing-advanced.jpg",
    remoteImage: "https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=1470&auto=format&fit=crop",
    category: "dowsing",
    rating: 4.9,
    students: 490,
    instructor: "Neena S Arora"
  },
  {
    id: "pendulum-dowsing-course-level-3",
    title: "Pendulum Dowsing Course Level 3",
    subtitle: "Expert Dowsing & Energy Mastery",
    description: "Take your dowsing skills to the next level with advanced energy mapping, healing, and professional applications.",
    price: "₹9,999",
    duration: "6 months access",
    lessons: "6 modules",
    localImage: "/images/courses/dowsing-level3.jpg",
    remoteImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop",
    category: "dowsing",
    rating: 4.9,
    students: 320,
    instructor: "Neena S Arora"
  },
  {
    id: "pendulum-dowsing-course-level-4",
    title: "Pendulum Dowsing Course Level 4",
    subtitle: "Master Dowsing & Professional Practice",
    description: "Master the art of pendulum dowsing for professional and healing purposes, with real-world case studies and expert guidance.",
    price: "₹11,999",
    duration: "6 months access",
    lessons: "7 modules",
    localImage: "/images/courses/dowsing-level4.jpg",
    remoteImage: "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=1470&auto=format&fit=crop",
    category: "dowsing",
    rating: 5.0,
    students: 150,
    instructor: "Neena S Arora"
  }
];

export const moduleImages = [
  {
    title: "Dream Home Model Orientation Program",
    localImage: "/images/courses/modules/dream-home.jpg",
    remoteImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Zonify Your Home",
    localImage: "/images/courses/modules/zonify-home.jpg",
    remoteImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1374&auto=format&fit=crop"
  },
  {
    title: "3 Steps To Zonify A Space Professionally",
    localImage: "/images/courses/modules/zonify-professional.jpg",
    remoteImage: "https://images.unsplash.com/photo-1540544914515-99c5eb642bdf?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Remedify Your Space",
    localImage: "/images/courses/modules/remedify.jpg",
    remoteImage: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Master Your Space",
    localImage: "/images/courses/modules/master-space.jpg",
    remoteImage: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Process Of Plot Selection",
    localImage: "/images/courses/modules/plot-selection.jpg",
    remoteImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1373&auto=format&fit=crop"
  },
  {
    title: "House Selection | Construction Process",
    localImage: "/images/courses/modules/house-selection.jpg",
    remoteImage: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Sample Case Studies & Power Sessions",
    localImage: "/images/courses/modules/case-studies.jpg",
    remoteImage: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=1470&auto=format&fit=crop"
  }
]; 