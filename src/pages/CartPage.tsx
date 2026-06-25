import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  // Calcular total
  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + (price * item.quantity);
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="pt-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Cart</h1>
          <p className="text-xl text-gray-600 mb-8">Your cart is empty</p>
          <a 
            href="/shop" 
            className="inline-block bg-coral-500 hover:bg-coral-600 text-white font-bold py-3 px-8 rounded-lg"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cart.map((item) => (
              <div 
                key={item.id}
                className="bg-white p-6 rounded-lg shadow mb-6 flex gap-6"
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.price} x {item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-coral-500 hover:text-coral-600 font-bold"
                  >
                    Remove
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-coral-500">
                    ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
            <div className="mb-6 space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping:</span>
                <span>$10.00</span>
              </div>
              <div className="border-t pt-2 flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span>${(total + 10).toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-emerald-900 hover:bg-emerald-800 text-white font-bold py-3 rounded-lg mb-4">
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full border-2 border-gray-300 text-gray-600 hover:border-coral-500 hover:text-coral-500 font-bold py-3 rounded-lg"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}