import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { lucideEye, lucideEyeOff } from '@ng-icons/lucide';
import { provideIcons, NgIconComponent } from '@ng-icons/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { CardComponent } from '../../../features/article/component/card/card.component';

@Component({
  imports: [CardComponent, HlmIconDirective, NgIconComponent],
  providers: [provideIcons({ lucideEye, lucideEyeOff })],
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
