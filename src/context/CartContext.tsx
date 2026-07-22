/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface CartItem {
  productId: number;
  size: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  selectedItems: string[]; 
  addToCart: (productId: number, size: number) => void;
  removeFromCart: (productId: number, size: number) => void;
  updateQuantity: (productId: number, size: number, quantity: number) => void;
  clearCart: () => void;
  getCartCount: () => number;
  isInCart: (productId: number, size: number) => boolean;
  toggleItemSelected: (productId: number, size: number) => void;
  isItemSelected: (productId: number, size: number) => boolean;
  selectAllItems: () => void;
  deselectAllItems: () => void;
  areAllItemsSelected: (totalItems: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const getInitialCart = (): CartItem[] => {
  try {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const getInitialSelectedItems = (): string[] => {
  try {
    const saved = localStorage.getItem('selectedItems');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(getInitialCart);
  const [selectedItems, setSelectedItems] = useState<string[]>(getInitialSelectedItems);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
  }, [selectedItems]);

  const addToCart = (productId: number, size: number) => {
    setCartItems((prev) => {
      const existing = prev.find(item => item.productId === productId && item.size === size);
      if (existing) {
        return prev.map(item =>
          item.productId === productId && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { productId, size, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number, size: number) => {
    setCartItems((prev) => prev.filter(item => !(item.productId === productId && item.size === size)));
  
    const key = `${productId}-${size}`;
    setSelectedItems(prev => prev.filter(k => k !== key));
  };

  const updateQuantity = (productId: number, size: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }
    setCartItems((prev) =>
      prev.map(item =>
        item.productId === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setSelectedItems([]);
  };

  const getCartCount = () => cartItems.reduce((total, item) => total + item.quantity, 0);

  const isInCart = (productId: number, size: number) => {
    return cartItems.some(item => item.productId === productId && item.size === size);
  };

  const getItemKey = (productId: number, size: number) => `${productId}-${size}`;

  const toggleItemSelected = (productId: number, size: number) => {
    const key = getItemKey(productId, size);
    setSelectedItems(prev => {
      if (prev.includes(key)) {
        return prev.filter(k => k !== key);
      }
      return [...prev, key];
    });
  };

  const isItemSelected = (productId: number, size: number) => {
    const key = getItemKey(productId, size);
    return selectedItems.includes(key);
  };

  const selectAllItems = () => {
    const allKeys = cartItems.map(item => getItemKey(item.productId, item.size));
    setSelectedItems(allKeys);
  };

  const deselectAllItems = () => {
    setSelectedItems([]);
  };

  const areAllItemsSelected = (totalItems: number) => {
    return selectedItems.length === totalItems && totalItems > 0;
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      selectedItems,
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      getCartCount,
      isInCart,
      toggleItemSelected,
      isItemSelected,
      selectAllItems,
      deselectAllItems,
      areAllItemsSelected
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};