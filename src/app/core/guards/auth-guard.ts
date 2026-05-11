import { CanActivateFn, Route, Router } from '@angular/router';
import { Storage } from '../services/storage';
import { inject } from '@angular/core';
import { storageKeysEnum } from '../utils/storageKeys';
import { IError } from '../interfaces/ux/Error.interface';

export const authGuard: CanActivateFn = (route, state) => {

  const storageService: Storage = inject(Storage);
  const router: Router = inject(Router);

  const isLogged = storageService.getItem(storageKeysEnum.ACTIVE_SESSION);
  if (isLogged) {
    return true;
  }

  const error: IError = {
    title: 'Unauthorized',
    message: 'You are not allowed to access'
  }
  storageService.setItem(storageKeysEnum.ERROR, JSON.stringify(error));
  router.navigate(["error"]);

  return false;
};
