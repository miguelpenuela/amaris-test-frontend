import { Component, inject, OnInit } from '@angular/core';
import { Storage } from '../../core/services/storage';
import { storageKeysEnum } from '../../core/utils/storageKeys';
import { IError } from '../../core/interfaces/ux/Error.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.html',
  styleUrl: './error.scss',
})
export class Error implements OnInit {
  
  error: IError | null = null;

  private storageService: Storage = inject(Storage);
  private router: Router = inject(Router);

  ngOnInit(): void {
    this.getErrorDetails();
  }

  getErrorDetails() {
    const value = this.storageService.getItem(storageKeysEnum.ERROR);
    if (value) {
      this.error = JSON.parse(value);
    }
  }

  confirm() {
    this.storageService.clearStorage();
    this.router.navigate(['/login']);
  }

}
