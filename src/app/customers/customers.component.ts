import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Customer } from '../models/customer';  // Import the Customer interface
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule], 
})

export class CustomersComponent implements OnInit {
  customers: any[] = [];
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    const token = this.authService.getToken();
  
    if (token) {
      console.log('JWT Token:', token);  // Log the token to make sure it's valid
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
  
      this.http.get<any[]>('http://127.0.0.1:8000/api/customers', { headers })
        .subscribe({
          next: (data) => {
            this.customers = data;  // Store the customer list
          },
          error: (err) => {
            console.error('Error fetching customers:', err);  // Handle error
            if (err.status === 401) {
              this.errorMessage = 'Unauthorized access. Please login again.';
            } else {
              this.errorMessage = 'Error fetching customers. Please try again later.';
            }
          },
          complete: () => {
            console.log('Customer data retrieval complete.');
          }
        });
    } else {
      this.errorMessage = 'No token found. Please login.';
    }
  }
}  