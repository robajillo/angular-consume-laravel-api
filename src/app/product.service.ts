import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  // Fetch products (public endpoint)
  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
  }
}
