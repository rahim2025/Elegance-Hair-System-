import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import logo from '../assets/logo.PNG';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Products', to: 'products' },
    { name: 'About', to: 'about' },
    { name: 'Why Us', to: 'whyus' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  const productLinks = [
    'Silk Base Hair Patch',
    'Lace Front System',
    'Mono Filament Piece',
    'Skin Base Toupee',
    'Custom Solutions',
  ];

  const socialLinks = [
    { icon: FaFacebook, link: '#', label: 'Facebook' },
    { icon: FaInstagram, link: '#', label: 'Instagram' },
    { icon: FaTwitter, link: '#', label: 'Twitter' },
    { icon: FaLinkedin, link: '#', label: 'LinkedIn' },
    { icon: FaWhatsapp, link: '#', label: 'WhatsApp' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-black via-primary-dark/20 to-black border-t border-primary-gold/20">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="Elegance Hair System" 
                className="h-12 w-12 object-contain rounded-full ring-2 ring-primary-gold"
              />
              <span className="text-xl font-display font-bold text-gradient">
                Elegance
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium hair replacement systems that restore confidence and transform lives. 
              Quality craftsmanship since 2009.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-gold/20 to-primary-dark/20 flex items-center justify-center text-primary-gold hover:bg-primary-gold hover:text-black transition-all duration-300 border border-primary-gold/30"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-display font-bold text-primary-gold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-400 hover:text-primary-gold transition-colors duration-300 cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary-gold group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-display font-bold text-primary-gold mb-6">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((product, index) => (
                <li key={index}>
                  <a
                    href="#products"
                    className="text-gray-400 hover:text-primary-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary-gold group-hover:w-4 transition-all duration-300"></span>
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-display font-bold text-primary-gold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <FaEnvelope className="text-primary-gold mt-1 flex-shrink-0" />
                <a href="mailto:info@elegancehair.com" className="hover:text-primary-gold transition-colors duration-300">
                  info@elegancehair.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FaPhone className="text-primary-gold mt-1 flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-primary-gold transition-colors duration-300">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-primary-gold mt-1 flex-shrink-0" />
                <span>123 Elegance Street<br />Hair City, HC 12345</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-b border-primary-gold/20 py-8 mb-8"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-display font-bold text-gradient mb-3">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Get exclusive offers, hair care tips, and product updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/5 border-2 border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-primary-gold transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary-dark to-secondary-burgundy text-white rounded-full font-semibold border-2 border-primary-gold hover:shadow-lg hover:shadow-primary-gold/30 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm"
        >
          <p className="flex items-center gap-2">
            © {currentYear} Elegance Hair System. All rights reserved. Made with 
            <FaHeart className="text-red-500 animate-pulse" /> 
            for you.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-gold transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-gold transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary-gold to-transparent"></div>
    </footer>
  );
};

export default Footer;
