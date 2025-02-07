import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPage {
  router = inject(Router);

  goToHome() {
    this.router.navigate(['/home']);
  }
}
