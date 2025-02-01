import { Routes } from '@angular/router';
import { HomePage } from './core/pages/home/home.page';
import { LoginPage } from './core/pages/login/login.page';
import { SignupPage } from './core/pages/signup/signup.page';
import { SignalsComponent } from './experiments/signals/signals.component';

export const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'signup', component: SignupPage },
  { path: 'home', component: HomePage },
  { path: 'signals', component: SignalsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
