import { useState } from 'react';

export default function Navigation() {
  // State: track if mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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