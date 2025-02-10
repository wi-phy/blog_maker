import { Component, inject } from '@angular/core';
import { CardComponent } from '../../../features/article/component/card/card.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  router = inject(Router);

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }
}
