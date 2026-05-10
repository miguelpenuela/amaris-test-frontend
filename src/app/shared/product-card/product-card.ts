import { Component, inject, Input } from '@angular/core';
import { Product } from '../../core/interfaces/db/Product.interface';
import { CurrencyPipe } from '@angular/common';
import { Storage } from '../../core/services/storage';
import { Router } from '@angular/router';
import { storageKeysEnum } from '../../core/utils/storageKeys';

@Component({
  selector: 'app-product-card',
  imports: [
    CurrencyPipe
],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input() product: Product | null = null;
  private router = inject(Router);
  private storageService = inject(Storage);

  investProduct() {
    console.log('investProduct.product: ', this.product);
    this.storageService.setItem(storageKeysEnum.SELECTED_PRODUCT, JSON.stringify(this.product));
    this.router.navigate(['app/subscribe']);
  }

}
