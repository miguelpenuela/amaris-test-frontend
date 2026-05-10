import { Component, OnInit } from '@angular/core';
import { Registration } from '../../core/interfaces/db/Registration.interface';
import { movementsMock } from '../../core/mocks/movements.mock';
import { MovementInfoCard } from "../../shared/movement-info-card/movement-info-card";
import { ProductInfo } from "../../shared/product-info/product-info";

@Component({
  selector: 'app-history',
  imports: [MovementInfoCard, ProductInfo],
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class History implements OnInit {
  
  registration: Registration | null = null;

  ngOnInit(): void {
    this.getRegistrationHistory();  
  }

  getRegistrationHistory() {
    this.registration = movementsMock;
  }
}
