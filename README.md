# Angular Frontend Setup for Laravel API Interaction

## Overview
This document provides a comprehensive guide to setting up a standalone Angular 18 application that interacts with a Laravel API for user authentication and data retrieval. This application will enable users to log in and access both product and customer data.

## Prerequisites
- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
- **Angular CLI**: Install Angular CLI globally if you haven't already:

```bash
  npm install -g @angular/cli
```
- Ensure you have access to the Laravel API created in the backend setup.

## Step-by-Step Guide

### Step 1: Create a New Angular Project
- Open your terminal.

- Create a new Angular project by running the following command:

```bash
ng new your-angular-app --standalone
```
- Change into the project directory:

```bash
cd your-angular-app
```
### Step 2: Install Required Packages
- Install the Angular HTTP client module and other necessary packages:

```bash
npm install @angular/common @angular/core @angular/forms
```

### Step 3: Create a Service for API Calls
- Generate a new service to handle API requests:

```bash
ng generate service api
```
- In the generated api.service.ts, implement the methods for logging in, fetching products, and fetching customers.

### Step 4: Create a Login Component
- Generate a login component:

```bash
ng generate component login
```
- In the login.component.ts, implement a login form to collect user credentials and call the login method from the API service.

### Step 5: Create a Product Component
- Generate a product component:

```bash
ng generate component products
```
- In products.component.ts, implement the logic to fetch products from the public endpoint of the Laravel API.

### Step 6: Create a Customer Component
-Generate a customer component:

```bash
ng generate component customers
```
- In customers.component.ts, implement the logic to fetch customer data from the protected endpoint, ensuring the JWT token is included in the request headers.

### Step 7: Set Up Routing 
- Create routes in app-routes.ts to manage routing.
- It should look something like this 

```bash
export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
```
- Don't forget to import the required components.
- Import and use these routes in your main application file.

### Step 8: Implement Templates and Styles
- Login Component Template: In login.component.html, create a simple form for user login.

- Products Component Template: In products.component.html, display the list of products.

- Customers Component Template: In customers.component.html, display the list of customers.

- Basic Styles: You can add basic styles in styles.css or component-specific stylesheets

### Step 9: Run the Angular Application
- Start the Angular development server:

```bash
ng serve
```
- Open your web browser and navigate to http://localhost:4200 to access the application.

### Conclusion
- This guide provides a clear path for setting up a standalone Angular 18 frontend that communicates with a Laravel API for user authentication and data management. By following these steps, you will create a functional application that adheres to best practices in frontend development.

