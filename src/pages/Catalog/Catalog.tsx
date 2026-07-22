import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Filters } from '../../components/Filters/Filters';
import { Sort } from '../../components/Sort/Sort';
import { products } from '../../data/products';
import type { FilterValues } from '../../components/Filters/types';
import './Catalog.css';

const ITEMS_PER_PAGE = 8;

export const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState<FilterValues>({
    brands: [],
    purposes: [],
    sizes: [],
    colors: [],
    priceRange: { min: 0, max: 1000000 }
  });


  const searchQuery = searchParams.get('search') || '';
  const purposeFromUrl = searchParams.get('purpose') || '';
  const brandFromUrl = searchParams.get('brand') || ''; 
  const [sortOrder, setSortOrder] = useState('default');

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastProductRef = useRef<HTMLDivElement | null>(null);


  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesBrand = filters.brands.length === 0 || filters.brands.includes(product.brand);


      const matchesPurpose =
        (purposeFromUrl ? product.purpose.includes(purposeFromUrl) : true) &&
        (filters.purposes.length === 0 || product.purpose.some(p => filters.purposes.includes(p)));

const matchesBrandFromUrl = brandFromUrl
  ? product.brand.toLowerCase() === brandFromUrl.toLowerCase()
  : true;

      const matchesSize = filters.sizes.length === 0 ||
        product.sizes.some(s => filters.sizes.includes(s));
      const matchesColor = filters.colors.length === 0 ||
        (product.colors && product.colors.some(c => {
          const colorId = typeof c === 'string' ? c : c.id;
          return filters.colors.includes(colorId);
        }));
      const matchesPrice = product.price >= filters.priceRange.min &&
        product.price <= (filters.priceRange.max || 1000000);

      return matchesSearch  && matchesBrand && matchesBrandFromUrl && matchesPurpose && matchesSize && matchesColor && matchesPrice;
    });
}, [searchQuery, filters, purposeFromUrl, brandFromUrl]);


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
    <div className="catalog-page">
      <div className="catalog-layout">
        <aside className="catalog-sidebar">
          <h1 className="catalog-title">Каталог кроссовок</h1>
          <Filters filters={filters} onFilterChange={setFilters} />
        </aside>

        <main className="catalog-content">
          <div className="catalog-toolbar">
            <Sort value={sortOrder} onChange={setSortOrder} />
          </div>

          <div className="catalog-grid">
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
            <div className="catalog-loader">Загрузка...</div>
          )}

          {sortedProducts.length === 0 && (
            <div className="catalog-empty">
              <p>Товары не найдены 😔</p>
              <button
                className="catalog-reset-btn"
                onClick={() => {
                  setSearchParams({}); // Очищает все URL параметры включая purpose
                  setFilters({
                    brands: [],
                    purposes: [],
                    sizes: [],
                    colors: [],
                    priceRange: { min: 0, max: 1000000 }
                  });
                }}
              >
                Сбросить фильтры
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};