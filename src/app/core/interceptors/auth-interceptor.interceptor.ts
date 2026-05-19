import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Authentication } from '../services/authentication';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authenticationService = inject(Authentication);
  
  const token = authenticationService.getToken();

  if (!token) {
    return next(req);
  }

  const cloned = req.clone({
    headers: req.headers.set('access-token', token)
  });
  return next(cloned);
};
