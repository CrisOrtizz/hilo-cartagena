import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, type Variants } from 'framer-motion';
import { products as allProducts, formatPrice, getDiscount, type Product } from '../data/catalog';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setProducts(allProducts.filter((p) => p.bestSeller).slice(0, 4));
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="bg-cream py-24 flex justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }} className="w-10 h-10 border-2 border-coral border-t-transparent rounded-full" />
      </section>
    );
  }

  return (
    <section id="products" className="bg-cream py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="flex items-end justify-between mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-5xl md:text-7xl font-bold text-dark">Featured<span className="text-coral">.</span></h2>
          <p className="text-dark/50 hidden md:block">Lo más vendido</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {products.map((product) => {
            const discount = getDiscount(product);
            return (
              <motion.div key={product.id} variants={cardVariants} className="group">
                <div className="relative overflow-hidden h-96 mb-5 bg-dark">
                  {/* La imagen ahora es un enlace al detalle del producto */}
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                  </Link>
                  {discount > 0 && (
                    <span className="absolute top-3 left-3 bg-coral text-dark text-xs font-bold px-3 py-1">-{discount}%</span>
                  )}
                  {/* El botón vive FUERA del Link para que no navegue al hacer click */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-dark/90 p-5">
                    <button
                      onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 })}
                      className="w-full py-3 bg-coral text-dark font-bold text-sm uppercase tracking-widest hover:bg-cream transition-colors duration-300"
                    >
                      Añadir
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-bold text-dark hover:text-coral transition-colors">{product.name}</h3>
                    </Link>
                    <p className="text-sm text-dark/50">{product.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-coral block">{formatPrice(product.price)}</span>
                    {discount > 0 && (
                      <span className="text-xs text-dark/40 line-through">{formatPrice(product.originalPrice!)}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}