import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('errorInterceptorInterceptor...');
  const router: Router = inject(Router);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.log('errorInterceptorInterceptor.error: ', error);
      switch(error.status) {
        case 0:
          console.error('Error de red o CORS');
          router.navigate(['/login']);
          break;
        case 400:
          console.error('Bad Request');
          break;
        case 401:
          console.error('Unauthorized');
          router.navigate(['/login']);
          break;
        case 403:
          console.error('Forbidden');
          break;
        case 404:
          console.error('Not Found');
          break;
        case 500:
          console.error('Internal Server Error');
          break;
        default:
          console.error('Unexpected Error: ', error);
      }

      const message = error.error?.message || error.message || "unknow error";
      return throwError(() => new Error(message));
    })
  );
};
