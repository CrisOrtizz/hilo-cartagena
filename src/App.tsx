import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

import Home from './pages/Home';
import Shop from './pages/Shop';
import CartPage from './pages/CartPage';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}