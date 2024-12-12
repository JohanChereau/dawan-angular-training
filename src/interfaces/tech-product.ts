export interface TechProduct {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  category: string;
  imageUrl?: string;
  tags?: string[];
}
