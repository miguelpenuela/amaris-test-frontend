import { Component, Input } from '@angular/core';
import { Movement } from '../../core/interfaces/db/Movement.interface';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-movement-info-card',
  imports: [
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './movement-info-card.html',
  styleUrl: './movement-info-card.scss',
})
export class MovementInfoCard {
  @Input() movement: Movement | null = null;


  getIconByType(type: string) {
    return {
      "SUBSCRIBE": {
        icon: 'fa-solid fa-user-plus',
        color: '#0284C7'
      },
      "UNSUBSCRIBE": {
        icon: 'fa-solid fa-user-plus',
        color: '#F59E0B'
      },
      "INCOME": {
        icon: 'fa-solid fa-plus',
        color: '#16A34A'
      },
    }[type] || {icon: 'fa fa-'}
  }
}
