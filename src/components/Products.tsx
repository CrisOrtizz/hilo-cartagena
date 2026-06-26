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

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockProducts: Product[] = [
        {
          id: 1,
          name: "Linen Guayabera",
          price: "$65",
          image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop",
          description: "Traditional Caribbean shirt"
        },
        {
          id: 2,
          name: "Wrap Dress",
          price: "$85",
          image: "https://images.unsplash.com/photo-1595777707802-dba82a0e4518?w=500&h=500&fit=crop",
          description: "Vibrant island-inspired"
        },
        {
          id: 3,
          name: "Embroidered Blouse",
          price: "$72",
          image: "https://images.unsplash.com/photo-1592301004111-e6b99eadbf18?w=500&h=500&fit=crop",
          description: "Handstitched authentic"
        },
        {
          id: 4,
          name: "Beach Shirt",
          price: "$58",
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
          description: "Light summer wear"
        }
      ];
      setProducts(mockProducts);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-12 h-12 border-2 border-coral border-t-transparent rounded-full mx-auto"
          />
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-dark mb-4">
            Featured<span className="text-coral">.</span>
          </h2>
          <p className="text-dark text-opacity-60">Handpicked collection</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden h-80 mb-6 bg-dark">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">{product.name}</h3>
              <p className="text-dark text-opacity-60 text-sm mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-coral">{product.price}</span>
                <motion.button
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                  })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm font-bold text-cream bg-dark px-4 py-2 hover:bg-coral transition duration-300"
                >
                  Add
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}