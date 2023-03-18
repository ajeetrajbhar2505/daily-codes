import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  private storage: { [key: string]: string } = {};

  getItem(key: string): any {
    const item = this.storage[key];
    if (item) {
      try {
        return JSON.parse(item);
      } catch (error) {
        return item;
      }
    }
    return null;
  }

  setItem(key: string, value: any): void {
    this.storage[key] = JSON.stringify(value);
  }

  removeItem(key: string): void {
    delete this.storage[key];
  }

  clear(): void {
    this.storage = {};
  }
  
}
