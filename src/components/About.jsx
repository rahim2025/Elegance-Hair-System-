import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAward, FaUsers, FaStar, FaGlobeAsia } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { icon: FaAward, end: 15, suffix: '+', label: 'Years Experience', delay: 0 },
    { icon: FaUsers, end: 10000, suffix: '+', label: 'Happy Customers', delay: 0.2 },
    { icon: FaStar, end: 500, suffix: '+', label: '5-Star Reviews', delay: 0.4 },
    { icon: FaGlobeAsia, end: 25, suffix: '+', label: 'Countries Served', delay: 0.6 },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-gradient-to-b from-black via-primary-dark/10 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
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
            <span className="text-gradient">About Elegance</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-gold to-secondary-lightGold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, <span className="text-primary-gold font-semibold">Elegance Hair System</span> has been at the forefront 
            of premium hair replacement solutions. We combine expert craftsmanship with cutting-edge technology 
            to create natural-looking, custom hair systems that restore confidence and transform lives.
          </p>
        </motion.div>

        {/* Stats Counter */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} inView={inView} />
          ))}
        </div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="glass-morphism p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-primary-gold text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-display font-bold mb-3 text-primary-gold">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To provide premium, natural-looking hair solutions that empower individuals 
              to live confidently and authentically.
            </p>
          </div>

          <div className="glass-morphism p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-primary-gold text-5xl mb-4">💎</div>
            <h3 className="text-2xl font-display font-bold mb-3 text-primary-gold">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be the global leader in innovative hair replacement systems, 
              setting new standards for quality and customer satisfaction.
            </p>
          </div>

          <div className="glass-morphism p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-primary-gold text-5xl mb-4">🌟</div>
            <h3 className="text-2xl font-display font-bold mb-3 text-primary-gold">Our Promise</h3>
            <p className="text-gray-300 leading-relaxed">
              Uncompromising quality, personalized service, and solutions 
              that look and feel completely natural.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, inView }) => {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = stat.end;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, stat.end]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: stat.delay }}
      className="glass-morphism p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: stat.delay }}
        className="inline-block"
      >
        <Icon className="text-5xl text-primary-gold mb-4 group-hover:text-secondary-lightGold transition-colors duration-300" />
      </motion.div>
      <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-gray-300 font-medium">{stat.label}</div>
    </motion.div>
  );
};

export default About;
