import { Category } from './category';

export class Product {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  category: Category;
  priceLow: number;
  priceHigh: number;
  amount: number;
}
