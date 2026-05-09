import { Customer } from "./Customer.interface";

export interface User {
  id: number;
  customer_id: number;

  username: string;
  password_hash: string;

  created_at: Date;
  updated_at: Date;

  status: string;

  customer?: Customer;
}