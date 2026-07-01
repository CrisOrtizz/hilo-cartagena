import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/catalog';

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, updateQuantity, removeFromCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Fondo oscuro: cierra al hacer click fuera del panel */}
          <motion.div
            className="fixed inset-0 bg-dark/50 z-[70]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* Panel deslizante */}
          <motion.aside
            className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[80] flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-dark/10">
              <h2 className="text-xl font-bold text-dark">
                Tu carrito <span className="text-dark/40 text-base">({cart.length})</span>
              </h2>
              <button onClick={closeCart} className="text-dark/50 hover:text-coral text-2xl leading-none transition-colors" aria-label="Cerrar">
                ×
              </button>
            </div>

            {/* Contenido */}
            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                <p className="text-dark/50 mb-6">Tu carrito está vacío.</p>
                <button onClick={closeCart} className="text-coral font-bold uppercase tracking-widest text-sm">
                  Seguir comprando
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
                  <AnimatePresence>
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex gap-4"
                      >
                        <img src={item.image} alt={item.name} className="w-20 h-24 object-cover bg-dark" />
                        <div className="flex-1">
                          <h3 className="font-bold text-dark text-sm">{item.name}</h3>
                          <p className="text-coral font-bold text-sm mb-2">{formatPrice(item.price)}</p>
                          <div className="flex items-center gap-2">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 border border-dark/20 text-dark hover:border-coral transition-colors">−</button>
                            <span className="w-6 text-center text-sm font-bold text-dark">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 border border-dark/20 text-dark hover:border-coral transition-colors">+</button>
                          </div>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-dark/30 hover:text-coral text-sm transition-colors self-start">
                          ×
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Footer con total y acciones */}
                <div className="border-t border-dark/10 px-6 py-5 space-y-4">
                  <div className="flex justify-between font-bold text-dark">
                    <span>Subtotal</span>
                    <span className="text-coral">{formatPrice(subtotal)}</span>
                  </div>
                  <p className="text-xs text-dark/40">Envío e impuestos calculados al pagar.</p>
                  <Link
                    to="/checkout"
                    onClick={closeCart}
                    className="block text-center w-full py-4 bg-coral text-dark font-bold uppercase tracking-widest text-sm hover:bg-dark hover:text-cream transition-colors"
                  >
                    Ir a pagar
                  </Link>
                  <Link
                    to="/cart"
                    onClick={closeCart}
                    className="block text-center w-full py-3 text-dark/60 hover:text-dark text-sm uppercase tracking-widest transition-colors"
                  >
                    Ver carrito completo
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}