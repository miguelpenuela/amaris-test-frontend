import { Registration } from "./Registration.interface";

export interface Movement {
  id: number;

  registration_id: number;

  type: string;
  amount: number;

  created_at: Date;

  registration?: Registration;
}