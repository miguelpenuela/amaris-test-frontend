import { Product } from "../interfaces/db/Product.interface";

export const productsMock: Product[] = [
    {
        "product_type_id": 2,
        "name": "FDO-ACCIONES",
        "min_amount": 25000.0,
        "id": 1,
        "product_type": {
            "name": "FIC",
            "id": 2
        }
    },
    {
        "product_type_id": 2,
        "name": "DEUDAPRIVADA",
        "min_amount": 50000.0,
        "id": 2,
        "product_type": {
            "name": "FIC",
            "id": 2
        }
    },
    {
        "product_type_id": 1,
        "name": "FPV_BTG_PACTUAL_ECOPETROL",
        "min_amount": 125000.0,
        "id": 3,
        "product_type": {
            "name": "FPV",
            "id": 1
        }
    },
    {
        "product_type_id": 1,
        "name": "FPV_BTG_PACTUAL_RECAUDADORA",
        "min_amount": 75000.0,
        "id": 4,
        "product_type": {
            "name": "FPV",
            "id": 1
        }
    },
    {
        "product_type_id": 1,
        "name": "FPV_BTG_PACTUAL_DINAMICA",
        "min_amount": 100000.0,
        "id": 5,
        "product_type": {
            "name": "FPV",
            "id": 1
        }
    }
]