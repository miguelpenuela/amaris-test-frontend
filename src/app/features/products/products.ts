import { Component } from '@angular/core';
import { Product } from '../../core/interfaces/db/Product.interface';
import { productsMock } from '../../core/mocks/products.mock';
import { ProductCard } from "../../shared/product-card/product-card";

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  productsList: Product[] = productsMock;
}
