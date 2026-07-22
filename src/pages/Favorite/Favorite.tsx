import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Filters } from '../../components/Filters/Filters';
import { Sort } from '../../components/Sort/Sort';
import { useFavorites } from '../../context/FavoritesContext';
import { products } from '../../data/products';
import type { FilterValues } from '../../components/Filters/types';
import './Favorite.css';

const ITEMS_PER_PAGE = 8;

export const Favorite = () => {
  const { favorites } = useFavorites();
  const [searchParams] = useSearchParams();
  
  const [filters, setFilters] = useState<FilterValues>({
    brands: [],
    purposes: [],
    sizes: [],
    colors: [],
    priceRange: { min: 0, max: 1000000 }
  });

  const searchQuery = searchParams.get('search') || '';
  const [sortOrder, setSortOrder] = useState('default');
  
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastProductRef = useRef<HTMLDivElement | null>(null);

  const favoriteProducts = useMemo(() => {
    return products.filter(product => favorites.includes(product.id));
  }, [favorites]);

  const filteredProducts = useMemo(() => {
    return favoriteProducts.filter(product => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesBrand = filters.brands.length === 0 || filters.brands.includes(product.brand);
      const matchesPurpose = filters.purposes.length === 0 || 
        product.purpose.some(p => filters.purposes.includes(p));
      const matchesPrice = product.price >= filters.priceRange.min && 
        product.price <= (filters.priceRange.max || 1000000);

      return matchesSearch && matchesBrand && matchesPurpose && matchesPrice;
    });
  }, [favoriteProducts, searchQuery, filters]);

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    if (sortOrder === 'asc') {
      return sorted.sort((a, b) => a.price - b.price);
    }
    if (sortOrder === 'desc') {
      return sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  }, [filteredProducts, sortOrder]);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && visibleCount < sortedProducts.length) {
        setVisibleCount(prev => prev + ITEMS_PER_PAGE);
      }
    });

    if (lastProductRef.current) {
      observer.current.observe(lastProductRef.current);
    }
  }, [sortedProducts.length, visibleCount]);

  const prevFiltersRef = useRef({ filters, searchQuery, sortOrder });

  useEffect(() => {
    const prev = prevFiltersRef.current;
    const hasChanged = 
      JSON.stringify(prev.filters) !== JSON.stringify(filters) ||
      prev.searchQuery !== searchQuery ||
      prev.sortOrder !== sortOrder;
    
    if (hasChanged) {
      setVisibleCount(ITEMS_PER_PAGE);
      prevFiltersRef.current = { filters, searchQuery, sortOrder };
    }
  }, [filters, searchQuery, sortOrder]);

  return (
    <div className="favorite-page">
      <div className="favorite-layout">
        <aside className="favorite-sidebar">
          <h1 className="favorite-title">Избранное</h1>
          <Filters 
            filters={filters} 
            onFilterChange={setFilters}
            hideFilters={['sizes', 'colors']}
          />
        </aside>

        <main className="favorite-content">
          <div className="favorite-toolbar">
            <Sort value={sortOrder} onChange={setSortOrder} />
          </div>

          {sortedProducts.length === 0 ? (
            <div className="favorite-empty-wrapper">
              <div className="favorite-empty">
                <h2>У вас пока нет избранных товаров</h2>
                <p>Добавляйте товары в избранное, нажав на сердечко ♡</p>
              </div>
            </div>
          ) : (
            <>
              <div className="favorite-grid">
                {sortedProducts.slice(0, visibleCount).map((product, index) => {
                  const isLast = index === visibleCount - 1;
                  return (
                    <div 
                      key={product.id} 
                      ref={isLast ? lastProductRef : null}
                    >
                      <ProductCard product={product} />
                    </div>
                  );
                })}
              </div>

              {visibleCount < sortedProducts.length && (
                <div className="favorite-loader">Загрузка...</div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};