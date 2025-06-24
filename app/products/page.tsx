"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Sparkles, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Animation variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  hover: {
    y: -10,
    scale: 1.03,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const floatingAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};



const products = [
  {
    id: 1,
    name: "Alladin Lamp for Wish Fulfilment",
    category: "Vastu Remedy",
    originalPrice: 3000,
    salePrice: 2200,
    description: "Fulfill your deepest desires with this powerful Vastu remedy lamp",
    isSale: true,
    isPopular: false,
    image: "https://picsum.photos/400/400?random=lamp-brass"
  },
  {
    id: 2,
    name: "Ashoka Pillar",
    category: "Vastu Remedy",
    originalPrice: 3000,
    salePrice: 1499,
    description: "Ancient wisdom for modern prosperity and stability",
    isSale: true,
    isPopular: false,
    image: "https://picsum.photos/400/400?random=pillar-ashoka"
  },
  {
    id: 3,
    name: "Brass Camel",
    category: "Basic Course/Master Course",
    originalPrice: 3000,
    salePrice: 2200,
    description: "Enhance Business Relationships with the Powerful Brass Camel Idol!",
    isSale: true,
    isPopular: true,
    image: "https://picsum.photos/400/400?random=camel-brass"
  },
  {
    id: 4,
    name: "Brass Deer",
    category: "Basic Course/Master Course",
    originalPrice: 2500,
    salePrice: 2000,
    description: "Ignite Workforce Potential with the Captivating Brass Deer Idol!",
    isSale: true,
    isPopular: false,
    image: "https://picsum.photos/400/400?random=deer-brass"
  },
  {
    id: 5,
    name: "Brass Eagle",
    category: "Vastu Remedy",
    originalPrice: 2500,
    salePrice: 1599,
    description: "Soar to new heights with the majestic brass eagle",
    isSale: true,
    isPopular: false,
    image: "https://picsum.photos/400/400?random=eagle-brass"
  },
  {
    id: 6,
    name: "Brass Kamdhenu",
    category: "Vastu Remedy",
    originalPrice: 2500,
    salePrice: 1399,
    description: "Embrace the Power of Ancient Legends and the Abundance of the Sacred Kamdhenu Cow Brass Idol!",
    isSale: true,
    isPopular: true,
    image: "https://picsum.photos/400/400?random=cow-brass"
  },
  {
    id: 7,
    name: "Brass Lion",
    category: "Basic Course/Master Course",
    originalPrice: 3000,
    salePrice: 2199,
    description: "Unleash Your Inner Majesty and Command Influence with the Magnificent Brass Lion Idol!",
    isSale: true,
    isPopular: true,
    image: "https://picsum.photos/400/400?random=lion-brass"
  },
  {
    id: 8,
    name: "Brass Lord Dhanwantari",
    category: "Basic Course/Master Course",
    originalPrice: 3000,
    salePrice: 2500,
    description: "Embody Health and Protection by welcoming the Sacred Brass Dhanwantri Idol in your journey!",
    isSale: true,
    isPopular: false,
    image: "https://picsum.photos/400/400?random=idol-brass"
  },
  {
    id: 9,
    name: "Brass Lord Kuber",
    category: "Basic Course/Master Course",
    originalPrice: 4000,
    salePrice: 3000,
    description: "Unlock the Path to Prosperity with the Divine Brass Idol of Lord Kuber!",
    isSale: true,
    isPopular: true,
    image: "https://picsum.photos/400/400?random=kuber-brass"
  },
  {
    id: 10,
    name: "Brass Sun",
    category: "Basic Course/Master Course",
    originalPrice: 3000,
    salePrice: 1299,
    description: "Illuminate Your Path to Success with the Majestic Brass Sun Idol!",
    isSale: true,
    isPopular: false,
    image: "https://picsum.photos/400/400?random=sun-brass"
  },
  {
    id: 11,
    name: "Coloured Strips (Entrance)",
    category: "Vastu Remedy",
    originalPrice: 999,
    salePrice: 300,
    description: "Transform your entrance with vibrant energy",
    isSale: true,
    isPopular: false,
    image: "https://picsum.photos/400/400?random=colorful-strips"
  },
  {
    id: 12,
    name: "Disha Chakra",
    category: "Vastu Remedy",
    originalPrice: 1500,
    salePrice: 900,
    description: "Navigate life's directions with precision and harmony",
    isSale: true,
    isPopular: false,
    image: "https://picsum.photos/400/400?random=compass-direction"
  },
  {
    id: 13,
    name: "Golden Swastik 2 inches",
    category: "Vastu Remedy",
    originalPrice: 200,
    salePrice: 200,
    description: "Sacred symbol for prosperity and good fortune",
    isSale: false,
    isPopular: false,
    image: "https://picsum.photos/400/400?random=gold-symbol"
  },
  {
    id: 14,
    name: "Indra Dev",
    category: "Vastu Remedy",
    originalPrice: 5000,
    salePrice: 4000,
    description: "Divine protection and celestial blessings",
    isSale: true,
    isPopular: true,
    image: "https://picsum.photos/400/400?random=deity-spiritual"
  },
  {
    id: 15,
    name: "Magnetic Compass (Oil based)",
    category: "Vastu Remedy",
    originalPrice: 700,
    salePrice: 700,
    description: "Precise directional guidance for Vastu applications",
    isSale: false,
    isPopular: false,
    image: "https://picsum.photos/400/400?random=compass-magnetic"
  },
  {
    id: 16,
    name: "Nandi Sitting Carved",
    category: "Basic Course/Master Course",
    originalPrice: 4000,
    salePrice: 2300,
    description: "Empower Success Through Loyalty and Collaboration with the Sacred Brass Nandi Bull Idol!",
    isSale: true,
    isPopular: false,
    image: "https://picsum.photos/400/400?random=bull-brass"
  },
  {
    id: 17,
    name: "Springs ACW (set of 3)",
    category: "Vastu Remedy",
    originalPrice: 500,
    salePrice: 400,
    description: "Counter-clockwise energy flow enhancement",
    isSale: true,
    isPopular: false,
    image: "https://picsum.photos/400/400?random=spring-spiral"
  },
  {
    id: 18,
    name: "Springs CW (Set of 3)",
    category: "Vastu Remedy",
    originalPrice: 500,
    salePrice: 400,
    description: "Clockwise energy flow enhancement",
    isSale: true,
    isPopular: false,
    image: "https://picsum.photos/400/400?random=spring-clockwise"
  },
  {
    id: 19,
    name: "White Pyramid",
    category: "Vastu Remedy",
    originalPrice: 500,
    salePrice: 300,
    description: "Pure energy amplification and protection",
    isSale: true,
    isPopular: false,
    image: "https://picsum.photos/400/400?random=pyramid-white"
  },
  {
    id: 20,
    name: "Wish Pyramid",
    category: "Vastu Remedy",
    originalPrice: 750,
    salePrice: 400,
    description: "Manifest your deepest desires with this powerful pyramid",
    isSale: true,
    isPopular: false,
    image: "https://picsum.photos/400/400?random=pyramid-wish"
  },
];

// Filter states
const categories = ["All", "Vastu Remedy", "Basic Course/Master Course"];

export default function Products() {
  // State for filtering and animations
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoaded, setIsLoaded] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  
  // Refs for scroll animations
  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const courseRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.3 });
  const isProductsInView = useInView(productsRef, { once: false, amount: 0.1 });
  const isCourseInView = useInView(courseRef, { once: false, amount: 0.3 });

  // Filter products when category changes
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  // Set loaded state after initial render for animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8f0e5] via-[#f9f5f0] to-[#f5f0e8]">
      {/* Hero Section with Animation */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={isHeroInView || isLoaded ? "visible" : "hidden"}
        variants={fadeIn}
        className="relative py-20 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#7a2323]/10 to-[#8a4b2e]/10">
          {/* Animated background particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#e8b18a]/20"
              style={{
                width: Math.random() * 60 + 10,
                height: Math.random() * 60 + 10,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 30 - 15],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div 
            className="flex items-center justify-center mb-4"
            variants={fadeIn}
          >
            <motion.div
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
            >
              <Sparkles className="w-8 h-8 text-[#8a4b2e] mr-2" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#7a2323] to-[#8a4b2e] bg-clip-text text-transparent">
              Vastu Remedies & Products
            </h1>
            <motion.div
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              style={{ animationDelay: "1s" }}
            >
              <Sparkles className="w-8 h-8 text-[#8a4b2e] ml-2" />
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-xl text-[#695e54] max-w-3xl mx-auto mb-8"
            variants={fadeIn}
            custom={1}
          >
            Transform your space and life with our authentic Vastu remedies, brass idols, and sacred products. 
            Each item is carefully selected to bring harmony, prosperity, and positive energy to your environment.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate={isHeroInView || isLoaded ? "visible" : "hidden"}
          >
            <motion.div variants={fadeIn}>
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-[#e8b18a]/20 text-[#8a4b2e] border-[#e8b18a]/30">
                🏷️ Special Offers Available
              </Badge>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-[#7a2323]/10 text-[#7a2323] border-[#7a2323]/20">
                ✨ Authentic Products
              </Badge>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-[#8a4b2e]/10 text-[#8a4b2e] border-[#8a4b2e]/20">
                🚚 Fast Delivery
              </Badge>
            </motion.div>
          </motion.div>
          
          {/* Floating elements */}
          <motion.div 
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="absolute -top-6 -right-6 bg-[#7a2323] text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg hidden md:block"
          >
            Authentic Vastu Products
          </motion.div>
          <motion.div 
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="absolute -bottom-4 -left-4 bg-[#e8b18a] text-[#5c3d2e] px-4 py-2 rounded-full font-medium text-sm shadow-lg hidden md:block"
            style={{ animationDelay: "1s" }}
          >
            Energetically Charged
          </motion.div>
        </div>
      </motion.section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 mb-8">
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#7a2323] to-[#8a4b2e] text-white shadow-md"
                  : "bg-white/80 text-[#695e54] hover:bg-white hover:text-[#7a2323] border border-[#e8b18a]/30"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Products Grid with Animations */}
      <motion.section 
        ref={productsRef}
        className="max-w-7xl mx-auto px-4 pb-20"
        variants={staggerContainer}
        initial="hidden"
        animate={isProductsInView || isLoaded ? "visible" : "hidden"}
      >
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover="hover"
                onMouseEnter={() => setActiveProduct(product.id)}
                onMouseLeave={() => setActiveProduct(null)}
              >
                <Card className="group overflow-hidden border-0 bg-white/90 backdrop-blur-sm hover:bg-white h-full flex flex-col shadow-lg hover:shadow-xl border border-[#e8d8c4]/50">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Sale badge */}
                    {product.isSale && (
                      <div className="absolute top-2 left-2 bg-[#7a2323] text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-[-5deg] shadow-lg">
                        SALE
                      </div>
                    )}
                    
                    {/* Popular badge */}
                    {product.isPopular && (
                      <div className="absolute top-2 right-2 bg-[#e8b18a] text-[#5c3d2e] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                        <Star className="w-3 h-3" />
                        POPULAR
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <Badge variant="outline" className="text-xs bg-[#e8b18a]/20 text-[#8a4b2e] border-[#e8b18a]/40">
                        {product.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-semibold text-[#5c3d2e] group-hover:text-[#7a2323] transition-colors mt-2">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pb-4 flex-grow">
                    <CardDescription className="text-sm text-[#695e54] leading-relaxed">
                      {product.description}
                    </CardDescription>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-[#7a2323]">
                          ₹{product.salePrice.toLocaleString()}
                        </span>
                        {product.isSale && (
                          <span className="text-sm text-[#695e54] line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      
                      {product.isSale && (
                        <div className="flex items-center">
                          <Badge className="text-xs bg-[#7a2323]/10 text-[#7a2323] border-[#7a2323]/20">
                            {Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100)}% OFF
                          </Badge>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    <motion.button 
                      className="w-full bg-gradient-to-r from-[#7a2323] to-[#8a4b2e] hover:from-[#6a1d1d] hover:to-[#744027] text-white font-medium px-4 py-2 rounded-md transition-all duration-200 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Buy Now
                    </motion.button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </motion.section>

      {/* Special Course Section with Animation */}
      <motion.section 
        ref={courseRef}
        className="bg-gradient-to-r from-[#7a2323] to-[#8a4b2e] py-16 px-4"
        initial="hidden"
        animate={isCourseInView || isLoaded ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto text-center text-white relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 50 - 25],
                  y: [0, Math.random() * 50 - 25],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
          
          <motion.div className="relative z-10">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={fadeIn}
              custom={1}
            >
              🎓 Pendulum Dowsing Foundation Course
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 opacity-90"
              variants={fadeIn}
              custom={2}
            >
              Master the ancient art of pendulum dowsing and unlock the secrets of energy detection
            </motion.p>
            
            <motion.div 
              className="flex items-center justify-center gap-4 mb-8"
              variants={fadeIn}
              custom={3}
            >
              <motion.span 
                className="text-3xl font-bold"
                whileHover={{ scale: 1.1 }}
              >
                ₹501
              </motion.span>
              <Badge className="bg-white/20 text-white border-white/30">
                Special Price
              </Badge>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              custom={4}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white text-[#7a2323] hover:bg-gray-100 font-semibold px-8 py-6 text-lg">
                Enroll Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action with Animation */}
      <motion.section 
        className="py-16 px-4 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold text-[#7a2323] mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Need Personalized Vastu Consultation?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[#695e54] mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Our expert Vastu consultants can help you choose the perfect remedies for your specific needs
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-[#7a2323] hover:bg-[#6a1d1d] text-white">
                Book Consultation
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="border-[#7a2323] text-[#7a2323] hover:bg-[#7a2323]/10">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Floating Shopping Bag Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button className="w-16 h-16 rounded-full bg-[#7a2323] hover:bg-[#6a1d1d] text-white shadow-lg flex items-center justify-center">
          <ShoppingBag className="w-6 h-6" />
        </Button>
      </motion.div>
    </main>
  );
} 