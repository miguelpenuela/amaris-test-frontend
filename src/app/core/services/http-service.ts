import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) { }

  public postRequest(url: string, body: any, headers?: HttpHeaders): Observable<Object> {
    return this.http.post(url, body, { headers });
  }

  public putRequest(url: string, body: any, headers?: HttpHeaders): Observable<Object> {
    return this.http.put(url, body, { headers });
  }

  public getRequest(url: string, headers?: HttpHeaders): Observable<Object> {
    return this.http.get(url, { headers });
  }
}
