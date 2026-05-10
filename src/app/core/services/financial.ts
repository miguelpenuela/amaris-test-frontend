import { inject, Injectable } from '@angular/core';
import { HttpService } from './http-service';
import { environment } from '../../../environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Financial {
  
  httpService: HttpService = inject(HttpService);

  getProductList(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const url = `${environment.basePath}/financial/investment-founds`;
        const result = await lastValueFrom(this.httpService.getRequest(url));
        console.log('getProductList.result: ', result);
        resolve(result);
      } catch (error) {
        console.log('getProductList.error: ', error);
        reject(error);
      }
    });
  }

  getRegistrations(customer_id: number): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const url = `${environment.basePath}/financial/products/${customer_id}`;
        const result = await lastValueFrom(this.httpService.getRequest(url));
        console.log('getRegistrations.result: ', result);
        resolve(result);
      } catch (error) {
        console.log('getRegistrations.error: ', error);
        reject(error);
      }
    });
  }

  getRegistrationMovements(registration_id: number): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const url = `${environment.basePath}/financial/movements/${registration_id}`;
        const result = await lastValueFrom(this.httpService.getRequest(url));
        console.log('getRegistrationMovements.result: ', result);
        resolve(result);
      } catch (error) {
        console.log('getRegistrationMovements.error: ', error);
        reject(error);
      }
    });
  }

}
