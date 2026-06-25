import Products from '../components/Products';

export default function Shop() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Shop</h1>
        <p className="text-xl text-gray-600 mb-12">Browse our complete collection</p>
      </div>
      <Products />
    </div>
  );
}