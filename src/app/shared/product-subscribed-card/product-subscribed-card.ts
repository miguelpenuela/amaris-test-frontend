import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Registration } from '../../core/interfaces/db/Registration.interface';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { storageKeysEnum } from '../../core/utils/storageKeys';
import { Storage } from '../../core/services/storage';

@Component({
  selector: 'app-product-subscribed-card',
  imports: [
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './product-subscribed-card.html',
  styleUrl: './product-subscribed-card.scss',
})
export class ProductSubscribedCard implements OnChanges {

  @Input() registration: Registration | null = null;
  private router = inject(Router);
  private storageService = inject(Storage);

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ProductSubscribedCard.changes: ', changes)
  }

  historySubscription() {
    console.log('historySubscription.registration: ', this.registration);
    this.storageService.setItem(storageKeysEnum.SELECTED_REGISTRATION, JSON.stringify(this.registration));
    this.router.navigate(['app/history']);
  }

  cancelSubscription() {
    console.log('cancelSubscription.registration: ', this.registration);
  }
}
