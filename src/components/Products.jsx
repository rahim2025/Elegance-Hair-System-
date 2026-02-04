import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

// Import product images
import product1 from '../assets/product1.jpeg';
import product2 from '../assets/product2.jpeg';
import product3 from '../assets/product3.jpeg';
import product4 from '../assets/product4.jpeg';
import product5 from '../assets/product5.jpeg';
import product6 from '../assets/product6.jpeg';
import product7 from '../assets/product7.jpeg';
import product8 from '../assets/product8.jpeg';
import product9 from '../assets/product9.jpeg';
import product10 from '../assets/product10.jpeg';

const products = [
  {
    id: 1,
    name: 'Premium Silk Base Hair Patch',
    category: 'Silk Base',
    image: product1,
    description: 'Our flagship product featuring ultra-fine silk base for maximum breathability and natural appearance.',
    features: [
      'Premium silk base material',
      'Undetectable hairline',
      '100% natural human hair',
      'Customizable color & texture',
      'Long-lasting durability'
    ]
  },
  {
    id: 2,
    name: 'Lace Front Hair System',
    category: 'Lace Front',
    image: product2,
    description: 'Invisible lace front technology for the most natural-looking hairline available.',
    features: [
      'Swiss lace front',
      'Natural hairline illusion',
      'Lightweight & comfortable',
      'Versatile styling options',
      'Moisture-wicking design'
    ]
  },
  {
    id: 3,
    name: 'Mono Filament Hair Piece',
    category: 'Mono Filament',
    image: product3,
    description: 'Hand-tied mono filament construction mimics natural hair growth perfectly.',
    features: [
      'Hand-tied craftsmanship',
      'Multi-directional styling',
      'Scalp-like appearance',
      'Superior ventilation',
      'Premium Remy hair'
    ]
  },
  {
    id: 4,
    name: 'Skin Base Toupee',
    category: 'Skin Base',
    image: product4,
    description: 'Ultra-thin skin base for the most realistic scalp appearance and secure fit.',
    features: [
      'Ultra-thin polyurethane',
      'Strong adhesion',
      'Water-resistant',
      'Natural scalp color',
      'Easy maintenance'
    ]
  },
  {
    id: 5,
    name: 'Custom Hair Replacement System',
    category: 'Custom',
    image: product5,
    description: 'Fully customized solution tailored to your exact specifications and preferences.',
    features: [
      'Personalized design',
      'Precise measurements',
      'Choice of base material',
      'Custom hair density',
      'Perfect color match'
    ]
  },
  {
    id: 6,
    name: 'Natural Wave Hair Patch',
    category: 'Textured',
    image: product6,
    description: 'Beautifully crafted natural wave pattern for effortless, stylish appearance.',
    features: [
      'Natural wave texture',
      'Low maintenance',
      'Versatile styling',
      'Premium quality hair',
      'Long-lasting waves'
    ]
  },
  {
    id: 7,
    name: 'Ultra Thin Skin Hair System',
    category: 'Advanced',
    image: product7,
    description: 'Revolutionary ultra-thin technology for unmatched comfort and realism.',
    features: [
      'Next-gen thin skin',
      'Barely-there feel',
      'Superior adhesion',
      'Natural movement',
      'Extended wear'
    ]
  },
  {
    id: 8,
    name: 'Hybrid Lace & Skin System',
    category: 'Hybrid',
    image: product8,
    description: 'Combines the best of both worlds - lace front with skin perimeter.',
    features: [
      'Dual-material design',
      'Maximum versatility',
      'Strong & comfortable',
      'Natural appearance',
      'Professional grade'
    ]
  },
  {
    id: 9,
    name: 'Crown Topper Hair Piece',
    category: 'Partial',
    image: product9,
    description: 'Perfect solution for crown area coverage with seamless integration.',
    features: [
      'Targeted coverage',
      'Clip-in security',
      'Instant volume',
      'Easy application',
      'Blends naturally'
    ]
  },
  {
    id: 10,
    name: 'Full Cap Hair System',
    category: 'Full Coverage',
    image: product10,
    description: 'Complete coverage solution with maximum density and styling freedom.',
    features: [
      'Full scalp coverage',
      'Maximum hair density',
      'All-day comfort',
      'Secure fit',
      'Unlimited styling'
    ]
  }
];

function Product3DCard({ image, isActive }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current && isActive) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2.5, 0.1]} />
      <meshStandardMaterial color="#D4AF37" metalness={0.5} roughness={0.2} />
    </mesh>
  );
}

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (isAutoPlay && inView) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isAutoPlay, inView]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  return (
    <section 
      id="products" 
      ref={ref}
      className="relative py-20 md:py-32 bg-gradient-to-b from-black via-secondary-burgundy/10 to-black overflow-hidden"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-dark rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-gradient">Premium Products</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-gold to-secondary-lightGold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our exclusive collection of premium hair systems, each crafted with precision and care
          </p>
        </motion.div>

        {/* Product Carousel */}
        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                rotateY: { duration: 0.5 },
              }}
              className="grid md:grid-cols-2 gap-12 items-center"
              style={{ perspective: '1000px' }}
            >
              {/* Product Image with 3D Effect */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="relative group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/20 to-primary-dark/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative glass-morphism p-2 rounded-3xl overflow-hidden">
                  <img
                    src={products[currentIndex].image}
                    alt={products[currentIndex].name}
                    className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
                  />
                  <div className="absolute top-6 right-6 glass-morphism px-4 py-2 rounded-full">
                    <span className="text-primary-gold font-semibold text-sm">
                      {products[currentIndex].category}
                    </span>
                  </div>
                </div>

                {/* 3D Background Canvas */}
                <div className="absolute inset-0 -z-10 opacity-30">
                  <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <Product3DCard image={products[currentIndex].image} isActive={true} />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                  </Canvas>
                </div>
              </motion.div>

              {/* Product Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-3xl md:text-5xl font-display font-bold mb-4 text-gradient">
                    {products[currentIndex].name}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {products[currentIndex].description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-primary-gold flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-primary-gold"></span>
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {products[currentIndex].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-gold to-secondary-lightGold flex items-center justify-center">
                            <FaCheck className="text-black text-xs" />
                          </div>
                        </div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-3d px-8 py-4 bg-gradient-to-r from-primary-dark to-secondary-burgundy text-white rounded-full text-lg font-semibold shadow-2xl shadow-primary-gold/30 border-2 border-primary-gold"
                >
                  Inquire Now
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 glass-morphism p-4 rounded-full hover:bg-white/20 transition-all duration-300 z-20"
          >
            <FaChevronLeft className="text-2xl text-primary-gold" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 glass-morphism p-4 rounded-full hover:bg-white/20 transition-all duration-300 z-20"
          >
            <FaChevronRight className="text-2xl text-primary-gold" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {products.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-12 h-3 bg-gradient-to-r from-primary-gold to-secondary-lightGold'
                  : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
