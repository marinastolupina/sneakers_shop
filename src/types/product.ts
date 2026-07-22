export interface ProductColor {
  id: string;
  name: string;
  images: string[];
  sizes: number[];
}


export interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;

  images: string[];
  galleryImages: string[];

  sizes: number[];
  colors?: ProductColor[];
  purpose: string[];

  description: string;
  brandDescription: string;
}


