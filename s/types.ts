export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  description: string;
  features: string[];
}

export interface RecommendedPhone {
  brand: string;
  model: string;
  key_features: string[];
  reasoning: string;
}