import { Component, inject, OnInit, signal } from '@angular/core';
import { Registration } from '../../core/interfaces/db/Registration.interface';
import { MovementInfoCard } from "../../shared/movement-info-card/movement-info-card";
import { ProductInfo } from "../../shared/product-info/product-info";
import { Storage } from '../../core/services/storage';
import { Financial } from '../../core/services/financial';
import { storageKeysEnum } from '../../core/utils/storageKeys';

@Component({
  selector: 'app-history',
  imports: [MovementInfoCard, ProductInfo],
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class History implements OnInit {
  
  registration = signal<any>(undefined);

  storageService: Storage = inject(Storage);
  financialService: Financial = inject(Financial);

  ngOnInit(): void {
    this.getRegistrationHistory();  
  }

  async getRegistrationHistory() {
    const value = this.storageService.getItem(storageKeysEnum.SELECTED_REGISTRATION);
    if (value) {
      const registration:Registration = JSON.parse(value);
      const result = await this.financialService.getRegistrationMovements(registration.id);
      console.log('getRegistrationHistory.result: ', result);
      this.registration.update(() => result);
    }
  }
}
