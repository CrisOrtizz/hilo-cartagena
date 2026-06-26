import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen bg-dark overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=900&fit=crop"
          alt="Caribbean"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          className="text-7xl md:text-8xl font-bold text-cream mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hilo<span className="text-coral">.</span>
        </motion.h1>

        <motion.p
          className="text-xl text-cream text-opacity-80 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Authentic clothing from Cartagena, Colombia.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Link to="/shop" className="px-10 py-4 bg-coral text-dark font-bold text-lg hover:shadow-2xl transition">
            Shop Now
          </Link>
          <a href="#why" className="px-10 py-4 border-2 border-cream text-cream hover:bg-cream hover:text-dark transition font-bold">
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}