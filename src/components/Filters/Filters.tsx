import { useState } from "react";
import { products } from "../../data/products";
import type { FilterValues } from "./types";
import "./Filters.css";

interface FiltersProps {
  filters: FilterValues;
  onFilterChange: (filters: FilterValues) => void;
    hideFilters?: string[];
}

export const Filters = ({ filters, onFilterChange, hideFilters = [] }: FiltersProps) => {

  const [expandedFilters, setExpandedFilters] = useState<
    Record<string, boolean>
  >({
    brands: false,
    purposes: false,
    sizes: false,
    colors: false,
  });


  const uniqueBrands = [...new Set(products.map((p) => p.brand))].sort();
  const uniquePurposes = [
    ...new Set(products.flatMap((p) => p.purpose)),
  ].sort();
  const uniqueSizes = [...new Set(products.flatMap((p) => p.sizes))].sort(
    (a, b) => a - b,
  );


const allColors = products.flatMap((p) => p.colors || []);
const uniqueColorsMap = new Map<string, string>();

allColors.forEach(color => {
  const colorId = typeof color === 'string' ? color : color.id;
  const colorName = typeof color === 'string' ? color : color.name;
  uniqueColorsMap.set(colorId, colorName);
});


const uniqueColors = Array.from(uniqueColorsMap.entries()).map(([id, name]) => ({
  id,
  name
}));


  const maxPrice = Math.max(...products.map((p) => p.price));

  const toggleFilter = (
    category: "brands" | "purposes" | "sizes" | "colors",
    value: string | number,
  ) => {
    if (category === "brands") {
      const newList = filters.brands.includes(value as string)
        ? filters.brands.filter((b) => b !== value)
        : [...filters.brands, value as string];
      onFilterChange({ ...filters, brands: newList });
    } else if (category === "purposes") {
      const newList = filters.purposes.includes(value as string)
        ? filters.purposes.filter((p) => p !== value)
        : [...filters.purposes, value as string];
      onFilterChange({ ...filters, purposes: newList });
    } else if (category === "sizes") {
      const newList = filters.sizes.includes(value as number)
        ? filters.sizes.filter((s) => s !== value)
        : [...filters.sizes, value as number];
      onFilterChange({ ...filters, sizes: newList });
    } else if (category === "colors") {
      const newList = filters.colors.includes(value as string)
        ? filters.colors.filter((c) => c !== value)
        : [...filters.colors, value as string];
      onFilterChange({ ...filters, colors: newList });
    }
  };

  const handlePriceChange = (type: "min" | "max", value: string) => {
    const numValue = value === "" ? 0 : Number(value);
    onFilterChange({
      ...filters,
      priceRange: { ...filters.priceRange, [type]: numValue },
    });
  };

  const toggleExpand = (category: string) => {
    setExpandedFilters((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const renderCheckboxList = (
    title: string,
    items: (string | number)[],
    category: "brands" | "purposes" | "sizes" | "colors",
  ) => {
    const isExpanded = expandedFilters[category];
    const displayItems = isExpanded ? items : items.slice(0, 3);
    const showMore = items.length > 3;

    return (
      <div className="filter-group">
        <h3 className="filter-title">{title}</h3>
        <div className={`filter-list ${isExpanded ? "expanded" : ""}`}>
          {displayItems.map((item: string | number) => {
            const isChecked = (() => {
              if (category === "brands")
                return filters.brands.includes(item as string);
              if (category === "purposes")
                return filters.purposes.includes(item as string);
              if (category === "sizes")
                return filters.sizes.includes(item as number);
              if (category === "colors")
                return filters.colors.includes(item as string);
              return false;
            })();

            return (
              <label key={item} className="filter-item">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleFilter(category, item)}
                />
                <span>{item}</span>
              </label>
            );
          })}
        </div>
        {showMore && (
          <button
            className="filter-show-more"
            onClick={() => toggleExpand(category)}
          >
            {isExpanded ? "Скрыть" : "Показать больше"}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="filters">

      {!hideFilters.includes('price') && (
        <div className="filter-group">
          <h3 className="filter-title">Цена</h3>
          <div className="price-inputs">
            <div className="price-input">
              <input 
                type="number" 
                value={filters.priceRange.min || ''} 
                onChange={(e) => handlePriceChange('min', e.target.value)}
                placeholder="от"
              />
            </div>
            <div className="price-input">
              <input 
                type="number" 
                value={filters.priceRange.max || ''} 
                onChange={(e) => handlePriceChange('max', e.target.value)}
                placeholder={`до ${maxPrice}`}
              />
            </div>
          </div>
        </div>
      )}

{!hideFilters.includes('brands') && renderCheckboxList('Бренд', uniqueBrands, 'brands')}
{!hideFilters.includes('purposes') && renderCheckboxList('Назначение', uniquePurposes, 'purposes')}
{!hideFilters.includes('sizes') && renderCheckboxList('Размер', uniqueSizes, 'sizes')}

{!hideFilters.includes('colors') && (
  <div className="filter-group">
    <h3 className="filter-title">Цвет</h3>
    <div className={`filter-list ${expandedFilters.colors ? 'expanded' : ''}`}>
      {uniqueColors.slice(0, expandedFilters.colors ? uniqueColors.length : 3).map((color: { id: string; name: string }) => {
        const isChecked = filters.colors.includes(color.id);
        
        return (
          <label key={color.id} className="filter-item">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => {
                const newList = isChecked
                  ? filters.colors.filter(c => c !== color.id)
                  : [...filters.colors, color.id];
                onFilterChange({ ...filters, colors: newList });
              }}
            />
            <span>{color.name}</span>
          </label>
        );
      })}
    </div>
    {uniqueColors.length > 3 && (
      <button
        className="filter-show-more"
        onClick={() => toggleExpand('colors')}
      >
        {expandedFilters.colors ? 'Скрыть' : 'Показать больше'}
      </button>
    )}
  </div>
)}
    </div>
  );
};
