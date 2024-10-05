import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { LoginComponent } from './app/login/login.component';

 

import { AppComponent } from './app/app.component'; // Import the new AppComponent

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
  ],
}).catch(err => console.error(err));

// bootstrapApplication(LoginComponent, {
//   providers: [
//     provideRouter(routes),
//     provideHttpClient(),
//   ],
// }).catch(err => console.error(err));
