import { Component, inject, OnInit, signal } from '@angular/core';
import { BalanceCard } from "../../shared/balance-card/balance-card";
import { ProductSubscribedCard } from "../../shared/product-subscribed-card/product-subscribed-card";
import { Registration } from '../../core/interfaces/db/Registration.interface';
import { Financial } from '../../core/services/financial';
import { Customer } from '../../core/interfaces/db/Customer.interface';
import { storageKeysEnum } from '../../core/utils/storageKeys';
import { Storage } from '../../core/services/storage';
import { Loader } from "../../layout/loader/loader";

@Component({
  selector: 'app-home',
  imports: [BalanceCard, ProductSubscribedCard, Loader],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  
  registrations = signal<Registration[]>([]);
  customerInfo: Customer | null = null;

  showLoader: boolean = true;

  storageService: Storage = inject(Storage);
  financialService: Financial = inject(Financial);

  ngOnInit(): void {
    this.getCustomerInfo();
  }

  getCustomerInfo() {
    const value = this.storageService.getItem(storageKeysEnum.CUSTOMER_INFO);
    if (value) {
      this.customerInfo = {...JSON.parse(value)};
      this.getSubcribedProducts();
    }
  }

  async getSubcribedProducts() {
    console.log('getSubcribedProducts.in');
    const result: Registration[] = await this.financialService.getCustomerSubscriptions(this.customerInfo?.id||0);
    this.registrations.update((items) => [...items, ...result]);
    this.showLoader = false;
  }
}
