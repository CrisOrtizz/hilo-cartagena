import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/catalog';

const SHIPPING = 15000; // envío fijo en COP

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  // price ya es número: el total es una multiplicación y suma directa.
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + (cart.length > 0 ? SHIPPING : 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-dark mb-6">
            Tu carrito<span className="text-coral">.</span>
          </h1>
          <p className="text-dark/50 mb-10 text-lg">Aún no has agregado nada.</p>
          <Link
            to="/shop"
            className="inline-block px-10 py-4 bg-coral text-dark font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
          >
            Seguir comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-dark mb-12">
          Tu carrito<span className="text-coral">.</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex gap-6 bg-white p-5 items-center"
              >
                <img src={item.image} alt={item.name} className="w-24 h-28 object-cover bg-dark" />

                <div className="flex-1">
                  <h3 className="font-bold text-dark text-lg">{item.name}</h3>
                  <p className="text-dark/50 text-sm mb-3">{formatPrice(item.price)} c/u</p>

                  {/* Control de cantidad: usa updateQuantity del contexto */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 border border-dark/20 text-dark hover:border-coral hover:text-coral transition-colors"
                      aria-label="Restar uno"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-bold text-dark">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 border border-dark/20 text-dark hover:border-coral hover:text-coral transition-colors"
                      aria-label="Sumar uno"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right flex flex-col justify-between h-full">
                  <p className="text-xl font-bold text-coral">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-dark/40 hover:text-coral text-sm transition-colors mt-4"
                  >
                    Eliminar
                  </button>
                </div>
              </motion.div>
            ))}

            <button
              onClick={clearCart}
              className="text-dark/40 hover:text-coral text-sm uppercase tracking-widest transition-colors"
            >
              Vaciar carrito
            </button>
          </div>

          {/* Resumen */}
          <div className="bg-dark text-cream p-8 h-fit">
            <h2 className="text-2xl font-bold mb-8">Resumen</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-cream/70">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-cream/70">
                <span>Envío</span>
                <span>{formatPrice(SHIPPING)}</span>
              </div>
              <div className="border-t border-cream/20 pt-4 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-coral">{formatPrice(total)}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block text-center w-full py-4 bg-coral text-dark font-bold uppercase tracking-widest text-sm hover:bg-cream transition-colors"
            >
              Ir a pagar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}