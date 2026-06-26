import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-dark text-cream">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4">
              Hilo<span className="text-coral">.</span>
            </h3>
            <p className="text-cream text-opacity-60">
              Authentic Caribbean fashion from Cartagena, Colombia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Shop</h4>
            <ul className="space-y-3 text-cream text-opacity-70 text-sm">
              <li><Link to="/shop" className="hover:text-coral transition">New Arrivals</Link></li>
              <li><a href="#" className="hover:text-coral transition">Best Sellers</a></li>
              <li><a href="#" className="hover:text-coral transition">Collections</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Support</h4>
            <ul className="space-y-3 text-cream text-opacity-70 text-sm">
              <li><a href="#" className="hover:text-coral transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-coral transition">Returns</a></li>
              <li><a href="#" className="hover:text-coral transition">FAQ</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
            <ul className="space-y-3 text-cream text-opacity-70 text-sm">
              <li><a href="#" className="hover:text-coral transition">Instagram</a></li>
              <li><a href="#" className="hover:text-coral transition">TikTok</a></li>
              <li><a href="#" className="hover:text-coral transition">Email</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-cream border-opacity-20 pt-10 text-center text-cream text-opacity-50 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>© 2026 Hilo Cartagena. Handcrafted with 🖤 in Colombia.</p>
        </motion.div>
      </div>
    </footer>
  );
}