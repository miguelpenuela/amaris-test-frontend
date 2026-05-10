import { CanActivateFn } from '@angular/router';
import { Storage } from '../services/storage';
import { inject } from '@angular/core';
import { storageKeysEnum } from '../utils/storageKeys';

export const authGuard: CanActivateFn = (route, state) => {

  const storageService: Storage = inject(Storage);

  const isLogged = storageService.getItem(storageKeysEnum.ACTIVE_SESSION);
  if (isLogged) {
    return true;
  }

  return false;
};
