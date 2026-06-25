import { useCart } from '../context/CartContext';

export default function AdminDashboard() {
  const { cart } = useCart();

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Admin Dashboard</h1>

        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 mb-2">Total Orders</h3>
            <p className="text-4xl font-bold text-coral-500">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 mb-2">Total Revenue</h3>
            <p className="text-4xl font-bold text-emerald-900">$0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 mb-2">Items in Cart</h3>
            <p className="text-4xl font-bold text-blue-900">{cart.length}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">Products in System</h2>
          <p className="text-gray-600">Dashboard functionality coming soon...</p>
        </div>
      </div>
    </div>
  );
}