import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Raheem Bhuiyan',
    role: 'IT Specialist',
    rating: 5,
    text: 'Elegance Hair System এ আমি অনেক খুশি। এটি অত্যন্ত প্রাকৃতিক দেখায় এবং আরামদায়ক। ঢাকায় এত ভালো মানের হেয়ার সিস্টেম পাওয়া দুর্লভ। সবাইকে সুপারিশ করছি!',
    location: 'Dhaka, Bangladesh',
  },
  {
    id: 2,
    name: 'Roudro',
    role: 'Business Owner',
    rating: 5,
    text: 'Amazing experience! The quality is top-notch and the service is excellent. I was worried about finding the right hair system in Bangladesh, but Elegance exceeded my expectations. Highly professional!',
    location: 'Chittagong, Bangladesh',
  },
  {
    id: 3,
    name: 'Pranto Rahman',
    role: 'Student',
    rating: 5,
    text: 'Best decision I made! The hair system looks incredibly natural and nobody can tell the difference. The team at Elegance is very supportive and understanding. Great service in Dhaka!',
    location: 'Dhaka, Bangladesh',
  },
  {
    id: 4,
    name: 'Michael Chen',
    role: 'Business Executive',
    rating: 5,
    text: 'Elegance Hair System completely transformed my confidence. The quality is exceptional, and it looks absolutely natural. I receive compliments all the time, and nobody can tell it\'s not my real hair!',
    location: 'Singapore',
  },
  {
    id: 5,
    name: 'David Williams',
    role: 'Entrepreneur',
    rating: 5,
    text: 'After trying multiple brands, I found Elegance. The custom fit is perfect, the hair quality is outstanding, and their customer service is top-notch. Best investment I\'ve made in years!',
    location: 'USA',
  },
  {
    id: 6,
    name: 'Raj Patel',
    role: 'Software Engineer',
    rating: 5,
    text: 'I was skeptical at first, but the results speak for themselves. The hair system is comfortable to wear all day, stays secure during workouts, and maintains its style beautifully. Highly recommended!',
    location: 'India',
  },
  {
    id: 7,
    name: 'James Anderson',
    role: 'Sales Manager',
    rating: 5,
    text: 'The attention to detail is incredible. From the color match to the hairline design, everything is perfect. I feel like myself again. Thank you, Elegance!',
    location: 'Australia',
  },
  {
    id: 8,
    name: 'Ahmed Al-Rashid',
    role: 'Marketing Director',
    rating: 5,
    text: 'Outstanding quality and service! The hair system exceeded all my expectations. It\'s comfortable, natural-looking, and has given me back my confidence. Worth every penny!',
    location: 'UAE',
  },
  {
    id: 9,
    name: 'Robert Taylor',
    role: 'Consultant',
    rating: 5,
    text: 'I\'ve been using Elegance hair systems for 3 years now. The durability is impressive, and they always deliver consistent quality. The best in the business!',
    location: 'UK',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 20 : -20,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 20 : -20,
    }),
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-navy/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-primary-navy">Client <span className="text-gradient">Testimonials</span></span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-gold to-secondary-bright-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-primary-dark-text max-w-3xl mx-auto">
            Hear from our satisfied customers around the world
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto" style={{ perspective: '1000px' }}>
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
                scale: { duration: 0.4 },
                rotateY: { duration: 0.5 },
              }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-primary-light-blue/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border-2 border-primary-gold/30 relative shadow-xl">
                {/* Quote Icon */}
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-8 left-8 text-primary-gold/20"
                >
                  <FaQuoteLeft className="text-6xl" />
                </motion.div>

                {/* Stars */}
                <div className="flex justify-center gap-2 mb-6 relative z-10">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <FaStar className="text-2xl text-primary-gold drop-shadow-lg" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg md:text-xl text-primary-dark-text text-center mb-8 leading-relaxed relative z-10 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author Info */}
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-gold to-secondary-bright-gold flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-primary-gold/50">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <h4 className="text-2xl font-display font-bold text-primary-navy mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary-gold font-medium mb-1">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-primary-dark-text text-sm">
                    📍 {testimonials[currentIndex].location}
                  </p>
                </div>

                {/* Decorative Corners */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary-gold/50 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary-gold/50 rounded-bl-lg"></div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-primary-navy/90 backdrop-blur-sm p-4 rounded-full hover:bg-primary-navy transition-all duration-300 z-20 border border-primary-gold"
          >
            <FaChevronLeft className="text-2xl text-primary-gold" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-primary-navy/90 backdrop-blur-sm p-4 rounded-full hover:bg-primary-navy transition-all duration-300 z-20 border border-primary-gold"
          >
            <FaChevronRight className="text-2xl text-primary-gold" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-12 h-3 bg-gradient-to-r from-primary-gold to-secondary-bright-gold'
                  : 'w-3 h-3 bg-primary-light-gray hover:bg-primary-gold/50'
              }`}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-8 items-center"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">10,000+</div>
            <div className="text-primary-dark-text">Happy Customers</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-primary-gold/30"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">4.9/5</div>
            <div className="text-primary-dark-text">Average Rating</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-primary-gold/30"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">500+</div>
            <div className="text-primary-dark-text">5-Star Reviews</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
