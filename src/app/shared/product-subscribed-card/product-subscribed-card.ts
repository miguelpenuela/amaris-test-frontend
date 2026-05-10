import { Component, Input } from '@angular/core';
import { Registration } from '../../core/interfaces/db/Registration.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-subscribed-card',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product-subscribed-card.html',
  styleUrl: './product-subscribed-card.scss',
})
export class ProductSubscribedCard {

  @Input() registration: Registration | null = null;

}
