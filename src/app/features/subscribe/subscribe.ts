import { Component, inject, OnInit } from '@angular/core';
import { ProductInfo } from "../../shared/product-info/product-info";
import { Product } from '../../core/interfaces/db/Product.interface';
import { Storage } from '../../core/services/storage';
import { storageKeysEnum } from '../../core/utils/storageKeys';
import { Customer } from '../../core/interfaces/db/Customer.interface';
import { CurrencyPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Financial } from '../../core/services/financial';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  imports: [
    ProductInfo,
    CurrencyPipe,
    ReactiveFormsModule
  ],
  templateUrl: './subscribe.html',
  styleUrl: './subscribe.scss',
})
export class Subscribe implements OnInit {

  selectedProduct: Product | null = null;
  customer: Customer | null = null;
  
  form: FormGroup;
  formBuilder = inject(FormBuilder);

  balanceControl: any;
  balanceErrors: any;
  
  private storageService: Storage = inject(Storage);
  private financialService: Financial = inject(Financial);
  private router: Router = inject(Router);

  constructor() {
    this.form = this.formBuilder.group({
      product_id: ['', [Validators.required]],
      customer_id: [this.customer?.id, [Validators.required]],
      balance: ['', []],
      notification_type: ['', [Validators.required]]
    });

    this.balanceControl = this.form.get('balance');

    this.form.valueChanges.subscribe((values) => {
      this.balanceErrors = this.balanceControl?.errors;
    })
  }

  ngOnInit(): void {
    this.getCustomerInfo();
    this.getSelectedProduct();
  }

  getSelectedProduct() {
    const value = this.storageService.getItem(storageKeysEnum.SELECTED_PRODUCT)
    if (value) {
      this.selectedProduct = JSON.parse(value);
      const minValue = this.selectedProduct ? this.selectedProduct.min_amount : 0;
      const maxValue = this.customer ? this.customer.general_balance : 0;
      console.log('maxValue: ', maxValue);
      this.form.controls['balance'].addValidators([
        Validators.required,
        Validators.min(minValue),
        Validators.max(maxValue)
      ])
      this.form.controls['product_id'].setValue(this.selectedProduct?.id);
    }
  }

  getCustomerInfo() {
    const value = this.storageService.getItem(storageKeysEnum.CUSTOMER_INFO);
    if (value) {
      this.customer = JSON.parse(value);
      this.form.controls['customer_id'].setValue(this.customer?.id);
    }
  }

  setNotificationType(type: string) {
    this.form.controls['notification_type'].setValue(type);
  }

  async subscribe() {
    try {
      console.log('subscribe with data: ', this.form.value);
      const result = await this.financialService.subscribe(this.form.value);
      this.storageService.setItem(storageKeysEnum.CUSTOMER_INFO, JSON.stringify(result));
      this.router.navigate(['app/home']);
    } catch (error) {
      console.log('subscribe.error: ', error);
    }
  }

}
