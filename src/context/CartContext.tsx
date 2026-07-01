import { createContext, useState, useContext, type ReactNode } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number; // número: necesario para sumar totales
  quantity: number;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;        
  openCart: () => void;       
  closeCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);



export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);
    const addToCart = (product: CartItem) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find((item) => item.id === product.id);
    const qtyToAdd = product.quantity || 1;

    if (existingItem) {
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + qtyToAdd }
          : item
      );
    }
    return [...prevCart, { ...product, quantity: qtyToAdd }];
  });
  setIsCartOpen(true); // ← abre el panel al añadir
};

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Cambia la cantidad de un item. Si llega a 0 o menos, lo quitamos.
  const updateQuantity = (productId: number, quantity: number) => {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter((item) => item.id !== productId);
      }
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
  value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, isCartOpen, openCart, closeCart }}
>
  {children}
</CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  return context;

  
}