import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { lucideEye, lucideEyeOff } from '@ng-icons/lucide';
import { provideIcons, NgIconComponent } from '@ng-icons/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
@Component({
  selector: 'app-signup',
  imports: [HlmIconDirective, NgIconComponent],
  providers: [provideIcons({ lucideEye, lucideEyeOff })],
  templateUrl: './signup.page.html',
  styleUrl: './signup.page.scss',
})
export class SignupPage {
  router = inject(Router);

  isPasswordShown = signal(false);
  isConfirmPasswordShown = signal(false);

  goToHome() {
    this.router.navigate(['/home']);
  }
  showPassword() {
    this.isPasswordShown.set(true);
  }

  hidePassword() {
    this.isPasswordShown.set(false);
  }

  showConfirmPassword() {
    this.isConfirmPasswordShown.set(true);
  }

  hideConfirmPassword() {
    this.isConfirmPasswordShown.set(false);
  }
}
