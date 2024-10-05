import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';  // Import Router
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';  // Change this to your Laravel API

  // Inject Router here
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password })
      .subscribe({
        next: (response) => {
          const token = response.token;
          localStorage.setItem('jwtToken', token);  // Store token
          this.router.navigate(['/customers']);  // Redirect to customers page
        },
        error: (error) => {
          console.error('Login failed', error);
        }
      });
  }

  getToken() {
    return localStorage.getItem('jwtToken');  // Retrieve token from storage
  }
}
