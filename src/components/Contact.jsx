import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email Us',
      detail: 'elegancehairbd@gmail.com',
      link: 'mailto:elegancehairbd@gmail.com',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      detail: '+880 1847475102',
      link: 'tel:+8801847475102',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      detail: 'H-15/A, Road-4/B, Block-D, Dolipara, Uttara, Dhaka, Bangladesh, 1230',
      link: '#',
      color: 'from-red-400 to-red-600',
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, link: 'https://www.facebook.com/elegancehairbd', color: 'hover:text-blue-500' },
    { icon: FaInstagram, link: '#', color: 'hover:text-pink-500' },
    { icon: FaTwitter, link: '#', color: 'hover:text-blue-400' },
    { icon: FaLinkedin, link: '#', color: 'hover:text-blue-600' },
    { icon: FaWhatsapp, link: 'https://wa.me/8801847475102', color: 'hover:text-green-500' },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-b from-primary-light-blue to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C9A55A 1px, transparent 0)`,
          backgroundSize: '40px 40px',
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
            <span className="text-primary-navy">Get In <span className="text-gradient">Touch</span></span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-gold to-secondary-bright-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-primary-dark-text max-w-3xl mx-auto">
            Ready to transform your look? Contact us today for a personalized consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="relative">
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-6 py-4 bg-white border-2 border-primary-navy/20 rounded-xl text-primary-dark-text placeholder-transparent focus:outline-none focus:border-primary-gold transition-all duration-300 peer"
                    placeholder="Your Name"
                    style={{ transformStyle: 'preserve-3d' }}
                  />
                  <motion.label
                    animate={{
                      y: focusedField === 'name' || formData.name ? -40 : 0,
                      scale: focusedField === 'name' || formData.name ? 0.85 : 1,
                      color: focusedField === 'name' ? '#C9A55A' : '#1F2937',
                    }}
                    className="absolute left-6 top-4 transition-all duration-300 pointer-events-none"
                  >
                    Your Name
                  </motion.label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-6 py-4 bg-white border-2 border-primary-navy/20 rounded-xl text-primary-dark-text placeholder-transparent focus:outline-none focus:border-primary-gold transition-all duration-300 peer"
                    placeholder="Your Email"
                  />
                  <motion.label
                    animate={{
                      y: focusedField === 'email' || formData.email ? -40 : 0,
                      scale: focusedField === 'email' || formData.email ? 0.85 : 1,
                      color: focusedField === 'email' ? '#C9A55A' : '#1F2937',
                    }}
                    className="absolute left-6 top-4 transition-all duration-300 pointer-events-none"
                  >
                    Your Email
                  </motion.label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone Input */}
                <div className="relative">
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-6 py-4 bg-white border-2 border-primary-navy/20 rounded-xl text-primary-dark-text placeholder-transparent focus:outline-none focus:border-primary-gold transition-all duration-300 peer"
                    placeholder="Phone Number"
                  />
                  <motion.label
                    animate={{
                      y: focusedField === 'phone' || formData.phone ? -40 : 0,
                      scale: focusedField === 'phone' || formData.phone ? 0.85 : 1,
                      color: focusedField === 'phone' ? '#C9A55A' : '#1F2937',
                    }}
                    className="absolute left-6 top-4 transition-all duration-300 pointer-events-none"
                  >
                    Phone Number
                  </motion.label>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <motion.input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-6 py-4 bg-white border-2 border-primary-navy/20 rounded-xl text-primary-dark-text placeholder-transparent focus:outline-none focus:border-primary-gold transition-all duration-300 peer"
                    placeholder="Subject"
                  />
                  <motion.label
                    animate={{
                      y: focusedField === 'subject' || formData.subject ? -40 : 0,
                      scale: focusedField === 'subject' || formData.subject ? 0.85 : 1,
                      color: focusedField === 'subject' ? '#C9A55A' : '#1F2937',
                    }}
                    className="absolute left-6 top-4 transition-all duration-300 pointer-events-none"
                  >
                    Subject
                  </motion.label>
                </div>
              </div>

              {/* Message Input */}
              <div className="relative">
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows="6"
                  className="w-full px-6 py-4 bg-white border-2 border-primary-navy/20 rounded-xl text-primary-dark-text placeholder-transparent focus:outline-none focus:border-primary-gold transition-all duration-300 peer resize-none"
                  placeholder="Your Message"
                />
                <motion.label
                  animate={{
                    y: focusedField === 'message' || formData.message ? -40 : 0,
                    scale: focusedField === 'message' || formData.message ? 0.85 : 1,
                    color: focusedField === 'message' ? '#C9A55A' : '#1F2937',
                  }}
                  className="absolute left-6 top-4 transition-all duration-300 pointer-events-none"
                >
                  Your Message
                </motion.label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-3d px-8 py-4 bg-gradient-to-r from-primary-gold to-secondary-bright-gold text-white rounded-xl text-lg font-semibold shadow-2xl shadow-primary-gold/30 hover:from-secondary-bright-gold hover:to-primary-gold"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, x: 10 }}
                className="flex items-center gap-6 bg-white p-6 rounded-2xl hover:border-primary-gold/50 border-2 border-primary-light-gray transition-all duration-300 group shadow-md"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-gold to-secondary-bright-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="text-2xl text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary-gold mb-1">{info.title}</h4>
                  <p className="text-primary-dark-text">{info.detail}</p>
                </div>
              </motion.a>
            ))}

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-2xl border-2 border-primary-gold/30 shadow-md"
            >
              <h4 className="text-xl font-bold text-primary-gold mb-4">Business Hours</h4>
              <div className="space-y-2 text-primary-dark-text">
                <div className="flex justify-between">
                  <span>Saturday - Thursday:</span>
                  <span className="font-semibold">9:00 AM - 7:00 PM</span>
                </div>
              
                <div className="flex justify-between">
                  <span>Friday:</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-2xl border-2 border-primary-gold/30 shadow-md"
            >
              <h4 className="text-xl font-bold text-primary-gold mb-4 text-center">Follow Us</h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-primary-gold flex items-center justify-center text-white hover:bg-secondary-bright-gold transition-colors duration-300"
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
