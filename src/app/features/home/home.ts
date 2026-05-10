import { Component, inject, OnInit } from '@angular/core';
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
  
  registrations: Registration[] | null = null;
  customerInfo: Customer | null = null;

  showLoader: boolean = true;

  storageService: Storage = inject(Storage);
  financialService: Financial = inject(Financial);

  ngOnInit(): void {
    this.getCustomerInfo();
    this.getSubcribedProducts();
  }

  getCustomerInfo() {
    console.log('getCustomerInfo.in');
    const value = this.storageService.getItem(storageKeysEnum.CUSTOMER_INFO);
    if (value) {
      this.customerInfo = JSON.parse(value);
    }
  }

  async getSubcribedProducts() {
    console.log('getSubcribedProducts.in');
    if (this.customerInfo) {
      const result = await this.financialService.getCustomerSubscriptions(this.customerInfo.id);
      console.log('getSubcribedProducts.result: ', result);
      this.registrations = result;
      this.showLoader = false;
    }
  }
}
