import { Category } from './category';

export class Product {
  id: number;
  name: string;
  image: string;
  description: string;
  category: Category;
  price: number;
  amount: number;
}
