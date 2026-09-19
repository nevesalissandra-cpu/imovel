export interface Typology {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  bedrooms: number;
  suites: number;
  bathrooms: number;
  areaM2: number;
  parkingSpots: number;
  priceFrom: string;
  monthlyEstimate: string;
  description: string;
  features: string[];
  imageUrl: string;
  floorPlanUrl: string;
}

export interface Amenity {
  id: string;
  title: string;
  category: 'Lazer' | 'Bem-Estar' | 'Praticidade' | 'Segurança';
  description: string;
  icon: string;
  imageUrl: string;
}

export interface LocationHighlight {
  id: string;
  place: string;
  category: 'Mobilidade' | 'Educação' | 'Gastronomia' | 'Lazer' | 'Saúde';
  time: string;
  mode: 'A pé' | 'De carro' | 'De bike';
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Perspectivas' | 'Interiores' | 'Áreas Comuns' | 'Plantas';
  imageUrl: string;
  caption: string;
}
