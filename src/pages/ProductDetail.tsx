import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { products, formatPrice, getDiscount } from '../data/catalog';

export default function ProductDetail() {
  // useParams lee el :id de la URL. /product/5 → id = "5" (siempre texto).
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Derivamos el producto desde la URL. No lo guardamos en useState:
  // si el id cambia, este find se recalcula solo en el siguiente render.
  const product = products.find((p) => p.id === Number(id));

  const [size, setSize] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  // El routing del lado del cliente NO resetea el scroll como una recarga real.
  // Lo hacemos a mano cada vez que cambia el id (al entrar o al ir a un relacionado).
  useEffect(() => {
    window.scrollTo(0, 0);
    setSize(product && product.sizes.length === 1 ? product.sizes[0] : null);
    setQty(1);
    setAdded(false);
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  // Producto inexistente (ej. /product/999)
  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-4xl font-bold text-dark mb-6">Prenda no encontrada</h1>
          <Link to="/shop" className="text-coral font-bold uppercase tracking-widest text-sm">
            Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

  const discount = getDiscount(product);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAdd = () => {
    if (!size) return; // obliga a elegir talla
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <button
          onClick={() => navigate(-1)}
          className="text-dark/50 hover:text-coral text-sm uppercase tracking-widest mb-10 transition-colors"
        >
          ← Volver
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative bg-dark overflow-hidden"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover aspect-[4/5]" />
            {discount > 0 && (
              <span className="absolute top-4 left-4 bg-coral text-dark text-sm font-bold px-3 py-1">
                -{discount}%
              </span>
            )}
          </motion.div>

          {/* Detalles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-coral text-xs uppercase tracking-[0.3em] font-bold mb-3 capitalize">
              {product.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-5">{product.name}</h1>

            {/* Precio con o sin descuento */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold text-coral">{formatPrice(product.price)}</span>
              {discount > 0 && (
                <span className="text-xl text-dark/40 line-through">
                  {formatPrice(product.originalPrice!)}
                </span>
              )}
            </div>

            <p className="text-dark/70 leading-relaxed mb-2">{product.description}</p>
            <p className="text-dark/50 text-sm mb-10">Hecho a mano en Cartagena con fibras naturales.</p>

            {/* Tallas */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-dark/50 mb-3">Talla</p>
              <div className="flex gap-3">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`min-w-12 px-4 h-12 text-sm font-bold border transition-colors ${
                      size === s
                        ? 'bg-dark border-dark text-cream'
                        : 'border-dark/20 text-dark/60 hover:border-dark'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Cantidad */}
            <div className="mb-10">
              <p className="text-xs uppercase tracking-widest text-dark/50 mb-3">Cantidad</p>
              <div className="flex items-center gap-4">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-10 h-10 border border-dark/20 text-dark hover:border-coral hover:text-coral transition-colors">−</button>
                <span className="w-8 text-center font-bold text-dark">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="w-10 h-10 border border-dark/20 text-dark hover:border-coral hover:text-coral transition-colors">+</button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              disabled={!size}
              className="w-full py-4 bg-coral text-dark font-bold uppercase tracking-widest text-sm hover:bg-dark hover:text-cream transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {added ? '✓ Añadido al carrito' : size ? 'Añadir al carrito' : 'Elige una talla'}
            </button>
          </motion.div>
        </div>

        {/* Relacionados */}
        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-dark mb-8">También te puede gustar</h2>
            <div className="grid grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="overflow-hidden bg-dark mb-3 aspect-[4/5]">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <h3 className="text-sm font-bold text-dark">{p.name}</h3>
                  <span className="text-sm text-coral font-bold">{formatPrice(p.price)}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}