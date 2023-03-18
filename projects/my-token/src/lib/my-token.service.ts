import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private token: string | null = null;

  getToken(): string | null {
    return this.token;
  }

  setToken(token: string): void {
    if (!this.token) {
      this.token = token;
    }
  }

  clearToken(): void {
    this.token = null;
  }
}