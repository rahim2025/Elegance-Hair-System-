import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import * as random from 'maath/random/dist/maath-random.esm';

function Stars(props) {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#C9A55A"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingShapes() {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <group ref={ref}>
      <mesh position={[2, 0, -2]}>
        <torusGeometry args={[0.5, 0.2, 16, 100]} />
        <meshStandardMaterial color="#1B3A5C" wireframe />
      </mesh>
      <mesh position={[-2, 0, -2]}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color="#C9A55A" wireframe />
      </mesh>
    </group>
  );
}

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-navy via-primary-deep-navy to-primary-navy">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars />
          <FloatingShapes />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/30 via-transparent to-primary-deep-navy/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
          >
            <span className="text-gradient">Elegance Hair System</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-primary-light-blue mb-4 font-light"
          >
            Redefine Your Confidence with
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl text-primary-gold mb-12 font-display font-semibold"
          >
            Premium Hair Solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link to="products" smooth={true} duration={500} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="btn-3d px-10 py-4 bg-gradient-to-r from-primary-gold to-secondary-bright-gold text-white rounded-full text-lg font-semibold shadow-2xl shadow-primary-gold/50 border border-primary-gold hover:from-secondary-bright-gold hover:to-primary-gold"
              >
                Explore Products
              </motion.button>
            </Link>

            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="btn-3d px-10 py-4 bg-transparent border-2 border-primary-gold text-white rounded-full text-lg font-semibold shadow-2xl hover:bg-primary-gold/10"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary-gold rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-primary-gold rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
