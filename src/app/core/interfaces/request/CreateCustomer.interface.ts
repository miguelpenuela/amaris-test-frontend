export interface ICreateCustomer {
    customer: {
        name: string;
        surname: string;
        city_id: number;
        email: string;
    },
    password: string;
}
