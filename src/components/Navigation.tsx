import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { cart, openCart } = useCart();
  const cartCount = cart.reduce((total: number, item: any) => total + item.quantity, 0);

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-dark text-cream"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Hilo<span className="text-coral">.</span>
        </Link>

        <ul className="hidden md:flex gap-12 items-center text-sm font-light uppercase tracking-widest">
          <motion.li whileHover={{ color: '#D85A30' }} transition={{ duration: 0.2 }}>
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li whileHover={{ color: '#D85A30' }} transition={{ duration: 0.2 }}>
            <Link to="/shop">Shop</Link>
          </motion.li>
          <motion.li whileHover={{ color: '#D85A30' }} transition={{ duration: 0.2 }}>
            <Link to="/about">About</Link>
          </motion.li>
          <motion.li whileHover={{ color: '#D85A30' }} transition={{ duration: 0.2 }}>
            <a href="#contact">Contact</a>
          </motion.li>
        </ul>

        <motion.button whileHover={{ scale: 1.05 }} onClick={openCart} className="relative text-sm font-light">
          Cart {cartCount > 0 && `(${cartCount})`}
</motion.button>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-dark border-t border-cream border-opacity-10 px-6 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ul className="flex flex-col gap-4 text-sm font-light uppercase tracking-widest">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/cart" onClick={() => setIsMenuOpen(false)}>Cart ({cartCount})</Link></li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}