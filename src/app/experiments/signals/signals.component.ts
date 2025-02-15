import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { GlowDirective } from '../../core/directives/glow.directive';

@Component({
  selector: 'app-signals',
  imports: [HlmButtonDirective, GlowDirective],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {}
