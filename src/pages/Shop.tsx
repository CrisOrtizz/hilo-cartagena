import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { products, formatPrice } from '../data/products';

const ALL_SIZES = ['XS', 'S', 'M', 'L', 'XL'];

type Category = 'todos' | 'hombre' | 'mujer';
type Sort = 'destacados' | 'precio-asc' | 'precio-desc' | 'vendidos';

export default function Shop() {
  const { addToCart } = useCart();
  const [category, setCategory] = useState<Category>('todos');
  const [sizes, setSizes] = useState<string[]>([]);
  const [sort, setSort] = useState<Sort>('destacados');

  const toggleSize = (size: string) =>
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );

  // Estado DERIVADO: no guardamos la lista filtrada en useState.
  // La calculamos desde products + filtros; useMemo solo recalcula
  // cuando cambia category, sizes o sort.
  const visible = useMemo(() => {
    let list = products.filter((p) => {
      const matchCat =
        category === 'todos' || p.category === category || p.category === 'unisex';
      const matchSize = sizes.length === 0 || p.sizes.some((s) => sizes.includes(s));
      return matchCat && matchSize;
    });

    // Ojo: copiamos con [...] antes de .sort() para no mutar el original.
    if (sort === 'precio-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'precio-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sort === 'vendidos')
      list = [...list].sort((a, b) => Number(b.bestSeller) - Number(a.bestSeller));

    return list;
  }, [category, sizes, sort]);

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-dark">
            Shop<span className="text-coral">.</span>
          </h1>
          <p className="text-dark/50">{visible.length} prendas</p>
        </div>

        {/* Filtros */}
        <div className="flex flex-col gap-6 mb-12 border-b border-dark/10 pb-8">
          <div className="flex gap-3">
            {(['todos', 'hombre', 'mujer'] as Category[]).map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-5 py-2 text-sm uppercase tracking-widest font-bold transition-colors ${
                  category === c ? 'bg-dark text-cream' : 'text-dark/60 hover:text-dark'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-dark/50">Tallas</span>
              {ALL_SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => toggleSize(s)}
                  className={`w-10 h-10 text-sm font-bold border transition-colors ${
                    sizes.includes(s)
                      ? 'bg-coral border-coral text-dark'
                      : 'border-dark/20 text-dark/60 hover:border-dark'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="bg-transparent border border-dark/20 px-4 py-2 text-sm text-dark uppercase tracking-widest outline-none focus:border-coral cursor-pointer"
            >
              <option value="destacados">Destacados</option>
              <option value="vendidos">Más vendidos</option>
              <option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {visible.length === 0 ? (
          <p className="text-dark/50 py-20 text-center">No hay prendas con esos filtros.</p>
        ) : (
          <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {visible.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div className="relative overflow-hidden h-72 md:h-96 mb-4 bg-dark">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {product.bestSeller && (
                      <span className="absolute top-3 left-3 bg-coral text-dark text-xs font-bold uppercase tracking-widest px-3 py-1">
                        Top
                      </span>
                    )}
                    <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-dark/90 p-4">
                      <button
                        onClick={() =>
                          addToCart({
                            id: product.id,
                            name: product.name,
                            price: formatPrice(product.price),
                            image: product.image,
                            quantity: 1,
                          })
                        }
                        className="w-full py-3 bg-coral text-dark font-bold text-sm uppercase tracking-widest hover:bg-cream transition-colors"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-dark text-sm md:text-base">{product.name}</h3>
                      <p className="text-xs text-dark/50 capitalize">{product.category}</p>
                    </div>
                    <span className="font-bold text-coral">{formatPrice(product.price)}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}