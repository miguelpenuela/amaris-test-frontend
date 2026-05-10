import { Customer } from "../interfaces/db/Customer.interface";
import { User } from "../interfaces/db/User.interface";

export const customerInfoMock: {user: User, customer_info: Customer} = {
    "user": {
        "customer_id": 20,
        "username": "felipegarxon@hotmail.com",
        "created_at": "2026-05-09T20:12:57.286607",
        "status": "ACTIVO",
        "password_hash": "$2b$12$AXCWPRRV/LHBZWib92tR..L3r0CYHYOUUzHGZPhCijTXrVgY/M/8q",
        "id": 3,
        "updated_at": "2026-05-09T20:12:57.286613"
    },
    "customer_info": {
        "city_id": 608,
        "id": 20,
        "updated_at": "2026-05-09T20:12:56.585227",
        "general_balance": 500000.0,
        "surname": "penuela garzon",
        "name": "miguel felipe",
        "created_at": "2026-05-09T20:12:56.585220",
        "status": "ACTIVO",
        "email": "felipegarxon@hotmail.com"
    }
}
