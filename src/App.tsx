import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import { CartProvider } from './context/CartContext';

import Home from './pages/Home';
import Shop from './pages/Shop';
import CartPage from './pages/CartPage';
import AdminDashboard from './pages/AdminDashboard';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <CartProvider>
      <Router>
        <AnimatePresence>
          {showSplash && (
            <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
          )}
        </AnimatePresence>

        <Navigation />
        <CartDrawer />
        <main className="pt-20"></main>
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}