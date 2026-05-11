import { inject, Injectable } from '@angular/core';
import { HttpService } from './http-service';
import { environment } from '../../../environments/environment';
import { lastValueFrom } from 'rxjs';
import { ICreateRegistration } from '../interfaces/request/CreateRegistration.interface';

@Injectable({
  providedIn: 'root',
})
export class Financial {
  
  private httpService: HttpService = inject(HttpService);

  getProductList(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const url = `${environment.basePath}/financial/investment-founds`;
        const result = await lastValueFrom(this.httpService.getRequest(url));
        // console.log('getProductList.result: ', result);
        resolve(result);
      } catch (error) {
        console.log('getProductList.error: ', error);
        reject(error);
      }
    });
  }

  getCustomerSubscriptions(customer_id: number): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const url = `${environment.basePath}/financial/products/${customer_id}`;
        const result = await lastValueFrom(this.httpService.getRequest(url));
        // console.log('getCustomerSubscriptions.result: ', result);
        resolve(result);
      } catch (error) {
        console.log('getCustomerSubscriptions.error: ', error);
        reject(error);
      }
    });
  }

  getRegistrationMovements(registration_id: number): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const url = `${environment.basePath}/financial/movements/${registration_id}`;
        const result = await lastValueFrom(this.httpService.getRequest(url));
        // console.log('getRegistrationMovements.result: ', result);
        resolve(result);
      } catch (error) {
        console.log('getRegistrationMovements.error: ', error);
        reject(error);
      }
    });
  }

  subscribe(body: ICreateRegistration): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const url = `${environment.basePath}/financial/subscribe`;
        const result = await lastValueFrom(this.httpService.postRequest(url, body));
        // console.log('subscribe.result: ', result);
        resolve(result);
      } catch (error) {
        console.log('subscribe.error: ', error);
        reject(error);
      }
    });
  }

  cancelSubscription(id: number): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const url = `${environment.basePath}/financial/cancel-subscription`;
        const result = await lastValueFrom(this.httpService.postRequest(url, {id}));
        // console.log('cancelSubscription.result: ', result);
        resolve(result);
      } catch (error) {
        console.log('cancelSubscription.error: ', error);
        reject(error);
      }
    });
  }

}
