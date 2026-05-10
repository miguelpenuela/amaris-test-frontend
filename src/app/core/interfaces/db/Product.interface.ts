import { ProductType } from "./ProductType.interface";
import { Registration } from "./Registration.interface";

export interface Product {
  id: number;
  product_type_id: number;
  name: string;
  min_amount: number;
  product_type?: ProductType;
}