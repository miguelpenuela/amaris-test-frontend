import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authApiKey = "app-api-key-value";
  const authRequest = req.clone({
    headers: req.headers.set('x-api-key', authApiKey),
  });
  return next(authRequest);
};
