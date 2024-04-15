import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
