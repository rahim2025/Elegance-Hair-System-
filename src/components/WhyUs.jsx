import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGem, FaCut, FaUserMd, FaEye } from 'react-icons/fa';

const WhyUs = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: FaGem,
      title: 'Premium Materials',
      description: 'Only the finest human hair and medical-grade materials for unmatched quality and comfort.',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: FaCut,
      title: 'Custom Solutions',
      description: 'Tailored to your unique needs with personalized design, color matching, and styling.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: FaUserMd,
      title: 'Expert Craftsmanship',
      description: '15+ years of experience with skilled artisans ensuring every detail is perfect.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: FaEye,
      title: 'Natural Look',
      description: 'Undetectable hairline and natural movement that looks and feels like your own hair.',
      color: 'from-green-400 to-green-600',
    },
  ];

  return (
    <section id="whyus" className="relative py-20 md:py-32 bg-gradient-to-b from-primary-navy via-primary-deep-navy to-primary-navy overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(201, 165, 90, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 165, 90, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
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
            <span className="text-white">Why Choose <span className="text-gradient">Elegance</span></span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-gold to-secondary-bright-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-primary-light-blue max-w-3xl mx-auto">
            We combine cutting-edge technology with traditional craftsmanship to deliver excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              index={index} 
              inView={inView}
            />
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-white/95 backdrop-blur-sm rounded-xl hover:scale-105 transition-transform duration-300 border border-primary-light-gray hover:border-primary-gold shadow-lg">
            <div className="text-4xl mb-3">🔒</div>
            <h4 className="text-xl font-bold text-primary-gold mb-2">Secure Attachment</h4>
            <p className="text-primary-dark-text">Advanced adhesion technology for all-day confidence</p>
          </div>
          <div className="text-center p-6 bg-white/95 backdrop-blur-sm rounded-xl hover:scale-105 transition-transform duration-300 border border-primary-light-gray hover:border-primary-gold shadow-lg">
            <div className="text-4xl mb-3">💧</div>
            <h4 className="text-xl font-bold text-primary-gold mb-2">Water Resistant</h4>
            <p className="text-primary-dark-text">Swim, shower, and exercise without worry</p>
          </div>
          <div className="text-center p-6 bg-white/95 backdrop-blur-sm rounded-xl hover:scale-105 transition-transform duration-300 border border-primary-light-gray hover:border-primary-gold shadow-lg">
            <div className="text-4xl mb-3">♻️</div>
            <h4 className="text-xl font-bold text-primary-gold mb-2">Long Lasting</h4>
            <p className="text-primary-dark-text">Durable construction for extended wear</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index, inView }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ 
        y: -10, 
        rotateY: 5,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      className="card-3d group relative"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}></div>
      
      {/* Card Content */}
      <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-2xl h-full border-2 border-primary-light-gray group-hover:border-primary-gold/80 transition-all duration-300 shadow-lg">
        {/* Icon Container with 3D effect */}
        <motion.div
          animate={{ 
            rotateY: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-gold to-secondary-bright-gold mb-6 shadow-lg"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Icon className="text-4xl text-white" style={{ transform: 'translateZ(20px)' }} />
        </motion.div>

        <h3 className="text-2xl font-display font-bold mb-4 text-primary-navy group-hover:scale-105 transition-transform duration-300">
          {feature.title}
        </h3>
        
        <p className="text-primary-dark-text leading-relaxed">
          {feature.description}
        </p>

        {/* Decorative Corner */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary-gold/30 group-hover:border-primary-gold transition-colors duration-300"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary-gold/30 group-hover:border-primary-gold transition-colors duration-300"></div>
      </div>
    </motion.div>
  );
};

export default WhyUs;
