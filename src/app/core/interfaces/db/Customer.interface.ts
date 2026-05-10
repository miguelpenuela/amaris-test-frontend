export interface Customer {
    id: number;
    name: string;
    surname: string;

    city_id: number;

    created_at: Date;
    updated_at: Date;
    status: string;
    general_balance: number;

    email: string;
}