import { Component, inject, OnInit } from '@angular/core';
import { ProductInfo } from "../../shared/product-info/product-info";
import { Product } from '../../core/interfaces/db/Product.interface';
import { Storage } from '../../core/services/storage';
import { storageKeysEnum } from '../../core/utils/storageKeys';
import { Customer } from '../../core/interfaces/db/Customer.interface';
import { CurrencyPipe } from '@angular/common';
import { customerInfoMock } from '../../core/mocks/customer-info.mock';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  imports: [
    ProductInfo,
    CurrencyPipe
  ],
  templateUrl: './subscribe.html',
  styleUrl: './subscribe.scss',
})
export class Subscribe implements OnInit {

  storageService = inject(Storage);

  selectedProduct: Product | null = null;
  customer: Customer | null = null;

  form: FormGroup;
  formBuilder = inject(FormBuilder);

  constructor() {
    this.form = this.formBuilder.group({
      product_id: ['', [Validators.required]],
      customer_id: [this.customer?.id, [Validators.required]],
      balance: ['', [Validators.required, Validators.min(this.selectedProduct ? this.selectedProduct.min_amount : 0)]]
    });
  }

  ngOnInit(): void {
    this.getSelectedProduct();
    this.getCustomerInfo();
  }

  getSelectedProduct() {
    const value = this.storageService.getItem(storageKeysEnum.SELECTED_PRODUCT)
    if (value) {
      this.selectedProduct = JSON.parse(value);
    }
  }

  getCustomerInfo() {
    const value = this.storageService.getItem(storageKeysEnum.CUSTOMER_INFO);
    if (value) {
      this.customer = JSON.parse(value);
    }
    this.customer = customerInfoMock.customer_info;
  }

}
