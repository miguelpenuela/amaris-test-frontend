import { Component, OnInit } from '@angular/core';
import { BalanceCard } from "../../shared/balance-card/balance-card";
import { ProductSubscribedCard } from "../../shared/product-subscribed-card/product-subscribed-card";
import { Registration } from '../../core/interfaces/db/Registration.interface';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  imports: [BalanceCard, ProductSubscribedCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  
  registrations: Registration[] = [
    {
        "product_id": 3,
        "customer_id": 20,
        "updated_at": "2026-05-09T21:28:16.629254",
        "balance": 150000.0,
        "id": 5,
        "created_at": "2026-05-09T21:28:16.629246",
        "status": "ACTIVO",
        "product": {
            "product_type_id": 1,
            "name": "FPV_BTG_PACTUAL_ECOPETROL",
            "min_amount": 125000.0,
            "id": 3
        }
    }
  ]

  ngOnInit(): void {
    console.log('HOME: ');
  }
}
