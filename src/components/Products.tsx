import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

export default function Products() {
  // State: productos y loading state
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect: cargar productos cuando el componente monta
  useEffect(() => {
    // Simulamos una API call con un delay
    const fetchProducts = async () => {
      try {
        // Simulamos esperar a un servidor (2 segundos)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Simulamos datos que vienen de una API
        const mockProducts: Product[] = [
          {
            id: 1,
            name: "Linen Guayabera",
            price: "$65",
            image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
            description: "Traditional Caribbean shirt"
          },
          {
            id: 2,
            name: "Colorful Wrap Dress",
            price: "$85",
            image: "https://images.unsplash.com/photo-1595777707802-dba82a0e4518?w=400&h=400&fit=crop",
            description: "Vibrant island-inspired dress"
          },
          {
            id: 3,
            name: "Embroidered Blouse",
            price: "$72",
            image: "https://images.unsplash.com/photo-1592301004111-e6b99eadbf18?w=400&h=400&fit=crop",
            description: "Handstitched authentic design"
          },
          {
            id: 4,
            name: "Cotton Beach Shirt",
            price: "$58",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
            description: "Light and breezy summer wear"
          }
        ];

        // Actualizar state con los productos
        setProducts(mockProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error loading products:', error);
        setLoading(false);
      }
    };

    // Llamar la función
    fetchProducts();
  }, []); // Empty array = corre UNA VEZ al montar

  // Mientras carga, mostrar loading message
  if (loading) {
    return (
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Loading products...</h2>
          <div className="animate-spin inline-block w-8 h-8 border-4 border-coral-500 border-t-transparent rounded-full"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-gray-600">
            Handpicked pieces from our Caribbean collection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="overflow-hidden h-64">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-coral-500">
                    {product.price}
                  </span>
                  <button className="bg-emerald-900 hover:bg-emerald-800 text-white py-2 px-4 rounded-lg transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}