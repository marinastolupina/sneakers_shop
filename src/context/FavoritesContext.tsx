/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface FavoritesContextType {
  favorites: number[];
  addToFavorites: (productId: number) => void;
  removeFromFavorites: (productId: number) => void;
  toggleFavorite: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);


const getInitialFavorites = (): number[] => {
  try {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<number[]>(getInitialFavorites);


  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (productId: number) => {
    setFavorites((prev) => {
      if (prev.includes(productId)) return prev;
      return [...prev, productId];
    });
  };

  const removeFromFavorites = (productId: number) => {
    setFavorites((prev) => prev.filter((id) => id !== productId));
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      return [...prev, productId];
    });
  };

  const isFavorite = (productId: number) => favorites.includes(productId);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};