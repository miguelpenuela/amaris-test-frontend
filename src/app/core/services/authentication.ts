import { inject, Injectable } from '@angular/core';
import { ICreateCustomer } from '../interfaces/request/CreateCustomer.interface';
import { HttpService } from './http-service';
import { ILogin } from '../interfaces/request/Login.interface';
import { environment } from '../../../environments/environment';
import { lastValueFrom } from 'rxjs';
import { Storage } from './storage';
import { storageKeysEnum } from '../utils/storageKeys';

@Injectable({
  providedIn: 'root',
})
export class Authentication {
  
  httpService: HttpService = inject(HttpService);
  storageService: Storage = inject(Storage);

  register(body: ICreateCustomer): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const url = `${environment.basePath}/authentication/register`;
        const result: any = await lastValueFrom(this.httpService.postRequest(url, body));
        console.log('register.result: ', result);
        resolve(result);
      } catch (error) {
        console.log('register.error: ', error);
        reject(error);
      }
    });
  }

  login(body: ILogin): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const url = `${environment.basePath}/authentication/login`;
        const result: any = await lastValueFrom(this.httpService.postRequest(url, body));
        console.log('login.result: ', result);
        this.storageService.setItem(storageKeysEnum.CUSTOMER_INFO, JSON.stringify(result.customer_info));
        this.storageService.setItem(storageKeysEnum.USER_INFO, JSON.stringify(result.user));
        resolve(result);
      } catch (error) {
        console.log('login.error: ', error);
        reject(error);
      }
    });
  }

}
