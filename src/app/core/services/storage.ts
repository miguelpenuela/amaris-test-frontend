import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Storage {
  setItem(key: string, body: any) {
    localStorage.setItem(key, body);
  }

  getItem(key: string) {
    localStorage.getItem(key);
  }

  delete() {
    localStorage.clear();
  }
}
