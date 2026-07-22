export interface FilterValues {
  brands: string[];
  purposes: string[];
  sizes: number[];
  colors: string[];
  priceRange: { min: number; max: number };
}