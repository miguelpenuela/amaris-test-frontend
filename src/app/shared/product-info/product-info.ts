import { Component, Input } from '@angular/core';
import { Product } from '../../core/interfaces/db/Product.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-info',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product-info.html',
  styleUrl: './product-info.scss',
})
export class ProductInfo {
  @Input() product: Product | null = null;
  @Input() lbl1: string = '';
  @Input() currentBalance: number = 0;
}
