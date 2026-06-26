import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-dark flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 4 }}
      onAnimationComplete={onComplete}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Animated SVG Threads */}
        <svg
          className="absolute w-96 h-96"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Thread 1 - Vertical */}
          <motion.line
            x1="200"
            y1="50"
            x2="200"
            y2="350"
            stroke="#D85A30"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />

          {/* Thread 2 - Diagonal Left */}
          <motion.line
            x1="100"
            y1="100"
            x2="300"
            y2="300"
            stroke="#D85A30"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
          />

          {/* Thread 3 - Diagonal Right */}
          <motion.line
            x1="300"
            y1="100"
            x2="100"
            y2="300"
            stroke="#D85A30"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.6, ease: 'easeInOut' }}
          />

          {/* Center Circle */}
          <motion.circle
            cx="200"
            cy="200"
            r="40"
            fill="none"
            stroke="#D85A30"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2, ease: 'easeInOut' }}
          />
        </svg>

        {/* Text Content */}
        <motion.div
          className="text-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.h1
            className="text-8xl md:text-9xl font-bold text-cream mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 1, ease: 'easeOut' }}
          >
            Hilo
          </motion.h1>

          <motion.div
            className="text-coral text-4xl md:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <span className="text-6xl md:text-7xl">.</span>
          </motion.div>

          <motion.p
            className="text-cream text-opacity-60 mt-8 text-lg tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.8 }}
          >
            Authentic Caribbean Fashion
          </motion.p>

          {/* Progress Line */}
          <motion.div
            className="mt-12 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-coral to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
          />
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{
            background: 'radial-gradient(circle, #D85A30 0%, transparent 70%)',
          }}
        />
      </div>
    </motion.div>
  );
}