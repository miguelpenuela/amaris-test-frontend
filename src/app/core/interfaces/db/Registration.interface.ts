import { Movement } from "./Movement.interface";
import { Product } from "./Product.interface";

export interface Registration {
  id: number;
  product_id: number;
  customer_id: number;
  created_at: string;
  updated_at: string;
  status: string;
  balance: number;
  movements?: Movement[];
  product?: Product;
}