import Hero from '../components/Hero';
import WhyHilo from '../components/WhyHilo';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyHilo />
      <Products />
      <Testimonials />
      <About />
      <Newsletter />
      <Contact />
    </>
  );
}