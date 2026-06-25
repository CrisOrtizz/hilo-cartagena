import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
    <div>
      <Navigation />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
    </CartProvider>
  );
}