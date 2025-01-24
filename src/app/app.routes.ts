import { Routes } from '@angular/router';
import { HomePage } from './core/pages/home/home.page';

export const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
