import { Component, inject, Input, OnInit } from '@angular/core';
import { Customer } from '../../core/interfaces/db/Customer.interface';
import { CurrencyPipe } from '@angular/common';
import { Storage } from '../../core/services/storage';
import { storageKeysEnum } from '../../core/utils/storageKeys';

@Component({
  selector: 'app-balance-card',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './balance-card.html',
  styleUrl: './balance-card.scss',
})
export class BalanceCard implements OnInit {
  @Input() customerInfo: Customer | null = null;

  private storageService: Storage = inject(Storage);

  ngOnInit(): void {
    // this.getCustomerInfo();
  }

  getCustomerInfo() {
    console.log('getCustomerInfo.in')
    const value = this.storageService.getItem(storageKeysEnum.CUSTOMER_INFO);
    console.log('getCustomerInfo.value:', value);
    if (value) {
      this.customerInfo = JSON.parse(value);
    }
  }
}
