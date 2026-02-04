import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.PNG';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', to: 'hero' },
    { name: 'Products', to: 'products' },
    { name: 'About', to: 'about' },
    { name: 'Why Us', to: 'whyus' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-primary-navy/95 backdrop-blur-lg shadow-lg shadow-primary-gold/20' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link 
              to="hero" 
              smooth={true} 
              duration={500}
              className="cursor-pointer flex items-center gap-3"
            >
              <img 
                src={logo} 
                alt="Elegance Hair System" 
                className="h-12 w-12 object-contain rounded-full ring-2 ring-primary-gold"
              />
              <span className="text-xl md:text-2xl font-display font-bold text-gradient">
                Elegance Hair System
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="relative group cursor-pointer"
                >
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white hover:text-primary-gold transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </motion.span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-gold to-secondary-bright-gold group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-primary-gold transition-colors duration-300 p-2"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-primary-navy/95 backdrop-blur-lg"
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-primary-gold/10 text-white hover:text-primary-gold transition-all duration-300 cursor-pointer font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
