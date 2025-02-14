import { Routes } from '@angular/router';
import { HomePageComponent } from './core/pages/home/home.page';
import { LoginPageComponent } from './core/pages/login/login.page';
import { SignupPageComponent } from './core/pages/signup/signup.page';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
