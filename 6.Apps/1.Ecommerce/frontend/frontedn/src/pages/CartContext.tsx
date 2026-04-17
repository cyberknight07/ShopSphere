import { createContext, useContext, useState, type ReactNode } from "react";
import type { Product } from "../components/ui-components/ProductForm";

export type CartItem = Product & {
  quantity: number;
};

type CartContextValue = {
  cartItems: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: Product) => void;
  decrementCartItem: (productId: Product["id"]) => void;
  removeFromCart: (productId: Product["id"]) => void;
  toggleCart: () => void;
};

type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });

    setIsCartOpen(false);
  };

  const decrementCartItem = (productId: Product["id"]) => {
    setCartItems((prevItems) =>
      prevItems.flatMap((item) => {
        if (item.id !== productId) {
          return [item];
        }

        if (item.quantity <= 1) {
          return [];
        }

        return [{ ...item, quantity: item.quantity - 1 }];
      }),
    );
  };

  const removeFromCart = (productId: Product["id"]) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  };

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        addToCart,
        decrementCartItem,
        removeFromCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
