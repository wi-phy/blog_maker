import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { CardComponent } from '../../../features/article/component/card/card.component';

@Component({
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
