export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number; // si existe y es mayor que price, está en descuento
  image: string;
  description: string;
  category: 'hombre' | 'mujer' | 'unisex';
  sizes: string[];
  bestSeller: boolean;
}

// Intl.NumberFormat formatea en pesos colombianos: $189.000
const copFormatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0, // COP no usa centavos
});

export const formatPrice = (price: number) => copFormatter.format(price);

// Devuelve el % de descuento, o 0 si no está en oferta.
export const getDiscount = (p: Product) =>
  p.originalPrice && p.originalPrice > p.price
    ? Math.round((1 - p.price / p.originalPrice) * 100)
    : 0;

export const products: Product[] = [
  { id: 1, name: 'Guayabera de Lino', price: 189000, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=700&h=900&fit=crop', description: 'Tejida a mano en Cartagena', category: 'hombre', sizes: ['S', 'M', 'L', 'XL'], bestSeller: true },
  { id: 2, name: 'Camisa Hilo Caribe', price: 159000, originalPrice: 199000, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700&h=900&fit=crop', description: 'Lino ligero, costura artesanal', category: 'hombre', sizes: ['S', 'M', 'L', 'XL'], bestSeller: false },
  { id: 3, name: 'Pantalón Palma', price: 175000, originalPrice: 210000, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=700&h=900&fit=crop', description: 'Fibra natural, caída suelta', category: 'hombre', sizes: ['S', 'M', 'L', 'XL'], bestSeller: false },
  { id: 4, name: 'Chaqueta Brisa', price: 245000, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700&h=900&fit=crop', description: 'Tejido grueso hecho a mano', category: 'hombre', sizes: ['M', 'L', 'XL'], bestSeller: false },
  { id: 5, name: 'Vestido Marejada', price: 219000, image: 'https://images.unsplash.com/photo-1595777707802-dba82a0e4518?w=700&h=900&fit=crop', description: 'Cruzado, inspirado en el mar', category: 'mujer', sizes: ['XS', 'S', 'M', 'L'], bestSeller: true },
  { id: 6, name: 'Blusa Bordada', price: 165000, originalPrice: 199000, image: 'https://images.unsplash.com/photo-1592301004111-e6b99eadbf18?w=700&h=900&fit=crop', description: 'Bordado a mano, hilo de algodón', category: 'mujer', sizes: ['XS', 'S', 'M', 'L'], bestSeller: true },
  { id: 7, name: 'Falda Coral', price: 149000, originalPrice: 189000, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=700&h=900&fit=crop', description: 'Tejido teñido a mano', category: 'mujer', sizes: ['XS', 'S', 'M'], bestSeller: false },
  { id: 8, name: 'Top Hilo de Sol', price: 119000, originalPrice: 149000, image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=700&h=900&fit=crop', description: 'Ligero, fibra reciclada', category: 'mujer', sizes: ['XS', 'S', 'M', 'L'], bestSeller: false },
  { id: 9, name: 'Pañuelo de Cartagena', price: 69000, image: 'https://images.unsplash.com/photo-1601244005535-a48d21d951ac?w=700&h=900&fit=crop', description: 'Hilo teñido a mano', category: 'unisex', sizes: ['Única'], bestSeller: false },
  { id: 10, name: 'Sombrero Tejido', price: 95000, originalPrice: 120000, image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=700&h=900&fit=crop', description: 'Trenzado artesanal', category: 'unisex', sizes: ['Única'], bestSeller: true },
];