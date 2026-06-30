import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/catalog';

const SHIPPING = 15000;

// Un solo objeto describe TODO el formulario. Agregar un campo
// es agregar una propiedad aquí, no crear otro useState.
const initialForm = {
  nombre: '',
  email: '',
  direccion: '',
  ciudad: '',
  telefono: '',
  notas: '',
  tarjeta: '',
  vencimiento: '',
  cvv: '',
};

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [done, setDone] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + (cart.length > 0 ? SHIPPING : 0);

  // UN solo manejador para todos los inputs.
  // Usa el atributo "name" de cada input como clave del objeto.
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la llamada real a un backend de pago.
    // Como es portafolio, simulamos éxito.
    setDone(true);
    clearCart();
  };

  // Pantalla de confirmación
  if (done) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-coral flex items-center justify-center">
            <svg className="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-4">
            ¡Gracias{form.nombre ? `, ${form.nombre.split(' ')[0]}` : ''}<span className="text-coral">.</span>
          </h1>
          <p className="text-dark/60 mb-10 text-lg">
            Tu pedido fue recibido. Te enviamos la confirmación a tu correo.
          </p>
          <Link
            to="/shop"
            className="inline-block px-10 py-4 bg-dark text-cream font-bold uppercase tracking-widest text-sm hover:bg-coral hover:text-dark transition-colors"
          >
            Seguir comprando
          </Link>
        </motion.div>
      </div>
    );
  }

  // Carrito vacío: no tiene sentido pagar
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-4xl font-bold text-dark mb-6">No hay nada que pagar</h1>
          <Link to="/shop" className="text-coral font-bold uppercase tracking-widest text-sm">
            Ir a la tienda
          </Link>
        </div>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 bg-white border border-dark/15 text-dark outline-none focus:border-coral transition-colors';

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <button
          onClick={() => navigate('/cart')}
          className="text-dark/50 hover:text-coral text-sm uppercase tracking-widest mb-8 transition-colors"
        >
          ← Volver al carrito
        </button>

        <h1 className="text-5xl md:text-7xl font-bold text-dark mb-12">
          Checkout<span className="text-coral">.</span>
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Columna izquierda: datos */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-coral font-bold mb-5">
                Datos de contacto
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className={inputClass} name="nombre" placeholder="Nombre completo" value={form.nombre} onChange={handleChange} required />
                <input className={inputClass} name="email" type="email" placeholder="Correo electrónico" value={form.email} onChange={handleChange} required />
                <input className={inputClass} name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} required />
                <input className={inputClass} name="ciudad" placeholder="Ciudad" value={form.ciudad} onChange={handleChange} required />
                <div className="md:col-span-2">
                  <input className={inputClass} name="direccion" placeholder="Dirección de envío" value={form.direccion} onChange={handleChange} required />
                </div>
                <div className="md:col-span-2">
                  <textarea className={inputClass} name="notas" rows={3} placeholder="Notas del pedido (opcional)" value={form.notas} onChange={handleChange} />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-widest text-coral font-bold mb-5">
                Pago
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <input className={inputClass} name="tarjeta" placeholder="Número de tarjeta" value={form.tarjeta} onChange={handleChange} required />
                </div>
                <input className={inputClass} name="vencimiento" placeholder="MM/AA" value={form.vencimiento} onChange={handleChange} required />
                <input className={inputClass} name="cvv" placeholder="CVV" value={form.cvv} onChange={handleChange} required />
              </div>
              <p className="text-dark/40 text-xs mt-3">
                Demostración — no ingreses datos reales de tarjeta.
              </p>
            </div>
          </div>

          {/* Columna derecha: resumen */}
          <div className="bg-dark text-cream p-8 h-fit">
            <h2 className="text-2xl font-bold mb-6">Tu pedido</h2>
            <div className="space-y-3 mb-6 max-h-64 overflow-auto">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm text-cream/80">
                  <span>{item.name} × {item.quantity}</span>
                  <span>{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-cream/20 pt-4 space-y-3 mb-8">
              <div className="flex justify-between text-cream/70 text-sm">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-cream/70 text-sm">
                <span>Envío</span>
                <span>{formatPrice(SHIPPING)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-2">
                <span>Total</span>
                <span className="text-coral">{formatPrice(total)}</span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-coral text-dark font-bold uppercase tracking-widest text-sm hover:bg-cream transition-colors"
            >
              Confirmar pedido
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}