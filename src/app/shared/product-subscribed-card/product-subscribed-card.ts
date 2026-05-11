import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Registration } from '../../core/interfaces/db/Registration.interface';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { storageKeysEnum } from '../../core/utils/storageKeys';
import { Storage } from '../../core/services/storage';
import { Financial } from '../../core/services/financial';

@Component({
  selector: 'app-product-subscribed-card',
  imports: [
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './product-subscribed-card.html',
  styleUrl: './product-subscribed-card.scss',
})
export class ProductSubscribedCard {

  @Input() registration: Registration | null = null;
  private router = inject(Router);
  private storageService = inject(Storage);
  private financialService = inject(Financial);

  historySubscription() {
    // console.log('historySubscription.registration: ', this.registration);
    this.storageService.setItem(storageKeysEnum.SELECTED_REGISTRATION, JSON.stringify(this.registration));
    this.router.navigate(['app/history']);
  }

  async cancelSubscription() {
    // console.log('cancelSubscription.registration: ', this.registration);
    if (this.registration) {
      try {
        const result = await this.financialService.cancelSubscription(this.registration.id);
        this.storageService.setItem(storageKeysEnum.CUSTOMER_INFO, JSON.stringify(result));
        window.location.reload();
      } catch(error: any) {
        console.log('cancelSubscription.error: ', error);
      }
    }
  }
}
