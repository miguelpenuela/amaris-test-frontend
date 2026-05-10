import { Component } from '@angular/core';
import { BalanceCard } from "../../shared/balance-card/balance-card";
import { ProductSubscribedCard } from "../../shared/product-subscribed-card/product-subscribed-card";

@Component({
  selector: 'app-home',
  imports: [BalanceCard, ProductSubscribedCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  registrations: any[] = [
    {
      item: 1
    },
    {
      item: 2
    },
    {
      item: 3
    }
  ]
}
