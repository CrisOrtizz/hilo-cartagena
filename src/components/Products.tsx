import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

// El contenedor no anima nada visible: solo orquesta el "stagger"
// (retraso entre cada hijo) para que las tarjetas entren en cascada.
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setProducts([
        { id: 1, name: 'Linen Guayabera', price: '$65', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=750&fit=crop', description: 'Camisa caribeña tradicional' },
        { id: 2, name: 'Wrap Dress', price: '$85', image: 'https://images.unsplash.com/photo-1595777707802-dba82a0e4518?w=600&h=750&fit=crop', description: 'Inspirado en la isla' },
        { id: 3, name: 'Embroidered Blouse', price: '$72', image: 'https://images.unsplash.com/photo-1592301004111-e6b99eadbf18?w=600&h=750&fit=crop', description: 'Bordado a mano' },
        { id: 4, name: 'Beach Shirt', price: '$58', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop', description: 'Ligera para verano' },
      ]);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="bg-cream py-24 flex justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          className="w-10 h-10 border-2 border-coral border-t-transparent rounded-full"
        />
      </section>
    );
  }

  return (
    <section id="products" className="bg-cream py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex items-end justify-between mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-dark">
            Featured<span className="text-coral">.</span>
          </h2>
          <p className="text-dark/50 hidden md:block">Colección seleccionada</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={cardVariants} className="group">
              {/* La imagen vive dentro de un contenedor con overflow-hidden:
                  cuando hace zoom (scale) en hover, lo que sobra se recorta. */}
              <div className="relative overflow-hidden h-96 mb-5 bg-dark">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Capa que sube desde abajo solo al pasar el cursor */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-dark/90 p-5">
                  <button
                    onClick={() =>
                      addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 })
                    }
                    className="w-full py-3 bg-coral text-dark font-bold text-sm uppercase tracking-widest hover:bg-cream transition-colors duration-300"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-dark">{product.name}</h3>
                  <p className="text-sm text-dark/50">{product.description}</p>
                </div>
                <span className="font-bold text-coral">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}