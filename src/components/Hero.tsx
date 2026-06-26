import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  const words = ['Authentic', 'Caribbean', 'Fashion'];

  return (
    <section className="bg-dark text-cream min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Animated Heading */}
        <motion.h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
          {words.map((word, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="inline-block"
            >
              {word}{' '}
            </motion.div>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-lg text-cream text-opacity-70 mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Handcrafted clothing from Cartagena, Colombia.<br />
          Each piece tells a story of tradition and culture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link 
            to="/shop"
            className="px-8 py-4 bg-coral text-dark font-bold text-lg hover:shadow-lg transition duration-300"
          >
            Shop Now
          </Link>
          <a 
            href="#products"
            className="px-8 py-4 border-2 border-cream hover:bg-cream hover:text-dark transition duration-300 font-bold text-lg"
          >
            Browse
          </a>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-cream text-opacity-50 text-sm">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
}