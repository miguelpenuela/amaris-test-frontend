import { Registration } from "../interfaces/db/Registration.interface";

export const movementsMock: Registration = {
    "customer_id": 20,
    "product_id": 3,
    "updated_at": "2026-05-10T15:22:42.076609",
    "balance": 150000.0,
    "id": 6,
    "created_at": "2026-05-10T15:22:42.076596",
    "status": "ACTIVO",
    "movements": [
        {
            "amount": 150000.0,
            "id": 8,
            "registration_id": 6,
            "type": "SUBSCRIBE",
            "created_at": "2026-05-10T15:22:42.087928"
        },
        {
            "amount": 5000.0,
            "id": 9,
            "registration_id": 6,
            "type": "INCOME",
            "created_at": "2026-05-10T15:22:42.087928"
        },
        {
            "amount": 2600.0,
            "id": 10,
            "registration_id": 6,
            "type": "INCOME",
            "created_at": "2026-05-10T15:22:42.087928"
        },
        {
            "amount": 0.0,
            "id": 11,
            "registration_id": 6,
            "type": "UNSUBSCRIBE",
            "created_at": "2026-05-10T15:22:42.087928"
        }
    ],
    "product": {
        "product_type_id": 1,
        "name": "FPV_BTG_PACTUAL_ECOPETROL",
        "min_amount": 125000.0,
        "id": 3
    }
}
