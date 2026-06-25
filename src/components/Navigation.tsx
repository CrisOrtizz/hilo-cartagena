import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Navigation() {
  // State: track if mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { cart } = useCart();
  const cartCount = cart.reduce((total: number, item: any) => total + item.quantity, 0);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-coral-400">
          Hilo Cartagena
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li><a href="#home" className="hover:text-coral-400">Home</a></li>
          <li><a href="#products" className="hover:text-coral-400">Products</a></li>
          <li><a href="#about" className="hover:text-coral-400">About</a></li>
          <li><a href="#contact" className="hover:text-coral-400">Contact</a></li>
          <li className="relative">
            <a href="#cart" className="hover:text-coral-400 flex items-center gap-2">
                🛒 Cart
                {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-coral-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                </span>
            )}
        </a>
    </li>
</ul>

        {/* Hamburger Button (mobile) */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-2xl bg-none border-none text-white cursor-pointer"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-emerald-800 px-6 py-4 flex flex-col gap-4">
          <li><a href="#home" className="hover:text-coral-400">Home</a></li>
          <li><a href="#products" className="hover:text-coral-400">Products</a></li>
          <li><a href="#about" className="hover:text-coral-400">About</a></li>
          <li><a href="#contact" className="hover:text-coral-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}