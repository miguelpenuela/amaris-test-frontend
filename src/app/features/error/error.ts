import { Component, inject, OnInit } from '@angular/core';
import { Storage } from '../../core/services/storage';
import { storageKeysEnum } from '../../core/utils/storageKeys';
import { IError } from '../../core/interfaces/ux/Error.interface';
import { Router } from '@angular/router';
import { Authentication } from '../../core/services/authentication';

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
  private authenticationService: Authentication = inject(Authentication);

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
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
