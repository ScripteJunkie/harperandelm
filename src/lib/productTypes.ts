export type ProductDetails = {
  id: number;
  handle: string;
  name: string;
  displayName: string;
  available: boolean;
  description: string;
  audience: "MEN" | "WOMEN" | "NEUTRAL" | null;
  category: "SHIRT" | "PANTS" | "SHOES" | "HAT" | string;
  tags: string[];
  variants: Variant[];
  images: ProductImage[];
};

export type Variant = {
  id: number;
  name: string;
  title: string;
  price: number;
  sku: string;
  available: boolean;
};

export type ProductImage = {
  title: string;
  alt: string;
  url?: string;
  src: string;
};
