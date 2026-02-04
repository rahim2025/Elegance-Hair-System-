import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import logo from '../assets/logo.PNG';

function LoadingShape() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial 
        color="#C9A55A" 
        metalness={0.8} 
        roughness={0.2}
        wireframe
      />
    </mesh>
  );
}

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              if (onLoadingComplete) onLoadingComplete();
            }, 500);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-gradient-to-b from-primary-navy via-primary-deep-navy to-primary-navy flex items-center justify-center"
        >
          {/* 3D Background */}
          <div className="absolute inset-0 opacity-30">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <LoadingShape />
            </Canvas>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="mb-8"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  className="absolute inset-0 blur-2xl bg-primary-gold/30 rounded-full"
                />
                <img 
                  src={logo} 
                  alt="Elegance Hair System" 
                  className="h-32 w-32 object-contain mx-auto relative z-10 rounded-full ring-4 ring-primary-gold shadow-2xl shadow-primary-gold/50"
                />
              </div>
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              <span className="text-gradient">Elegance Hair System</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-primary-light-blue mb-12"
            >
              Premium Hair Solutions
            </motion.p>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {/* Progress Track */}
                <div className="relative h-2 bg-white/10 rounded-full overflow-hidden mb-4">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-gold to-secondary-bright-gold rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                  
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm"
                    animate={{ x: [-80, 400] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                {/* Progress Percentage */}
                <motion.div
                  className="text-2xl font-bold text-gradient"
                  key={progress}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {progress}%
                </motion.div>
              </motion.div>
            </div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8"
            >
              <div className="flex items-center justify-center gap-2 text-primary-light-blue">
                <span>Loading</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1] }}
                >
                  .
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.2 }}
                >
                  .
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.4 }}
                >
                  .
                </motion.span>
              </div>
            </motion.div>
          </div>

          {/* Decorative Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary-gold rounded-full"
                initial={{ 
                  x: Math.random() * window.innerWidth, 
                  y: -20,
                  opacity: 0 
                }}
                animate={{ 
                  y: window.innerHeight + 20,
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
