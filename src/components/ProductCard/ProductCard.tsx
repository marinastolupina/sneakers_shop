import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import type { Product } from '../../types/product';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const purposeColors: Record<string, string> = {
  'гоночные': '#e74c3c',
  'для кроссов': '#27ae60',
  'для темпов': '#f1c40f',
  'универсальные': '#9b59b6',
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="product-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/product/${product.id}`)}
    >

      <div className="product-card__image-wrapper">
        <img 
          src={product.images[currentImageIndex]} 
          alt={`Кроссовки ${product.brand} ${product.name}`}
          className="product-card__image"
        />
        

        <div className="product-card__slider-indicator">
          {product.images.map((_, index) => (
            <div 
              key={index}
              className={`product-card__slider-line ${
                index === currentImageIndex ? 'active' : ''
              }`}
            />
          ))}
        </div>


        <button 
          className={`product-card__favorite ${isFavorite(product.id) ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(product.id);
          }}
          aria-label="Добавить в избранное"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill={isFavorite(product.id) ? '#e74c3c' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>


      <div className="product-card__info">

        <div className="product-card__brand">{product.brand}</div>
        

        <div className="product-card__name">
          Кроссовки {product.brand} {product.name}
        </div>
        

        <div className="product-card__purpose">
          {product.purpose.map((p) => (
            <span 
              key={p} 
              className="product-card__purpose-item"
              style={{ color: purposeColors[p] || '#666' }}
            >
              <span 
                className="product-card__purpose-marker"
                style={{ backgroundColor: purposeColors[p] || '#666' }}
              />
              {p}
            </span>
          ))}
        </div>
        

        <div className="product-card__price">
          {product.price.toLocaleString()} р
        </div>
      </div>
    </div>
  );
};

