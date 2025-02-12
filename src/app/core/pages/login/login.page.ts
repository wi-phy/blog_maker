import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { lucideEye, lucideEyeOff } from '@ng-icons/lucide';
import { provideIcons, NgIconComponent } from '@ng-icons/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
@Component({
  selector: 'app-login',
  imports: [HlmIconDirective, NgIconComponent],
  providers: [provideIcons({ lucideEye, lucideEyeOff })],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPage {
  router = inject(Router);

  isPasswordShown = signal(false);

  goToHome() {
    this.router.navigate(['/home']);
  }

  hidePassword() {
    this.isPasswordShown.set(false);
  }

  showPassword() {
    this.isPasswordShown.set(true);
  }
}
