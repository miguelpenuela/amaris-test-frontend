import { Customer } from "./Customer.interface";

export interface User {
  id: number;
  customer_id: number;
  username: string;
  password_hash: string;
  created_at: string;
  updated_at: string;
  status: string;
  customer?: Customer;
}