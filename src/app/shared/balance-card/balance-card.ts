import { Component } from '@angular/core';
import { Customer } from '../../core/interfaces/db/Customer.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-balance-card',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './balance-card.html',
  styleUrl: './balance-card.scss',
})
export class BalanceCard {
  customerInfo: Customer = {
    id: 20,
    name: 'miguel felipe',
    surname: 'penuela garzon',
    city_id: 608,
    created_at: '2026-05-09 20:12:56.58522',
    updated_at: '2026-05-09 20:12:56.58522',
    status: 'ACTIVO',
    general_balance: 500000,
    email: 'felipegarxon@hotmail.com'
  }
}
