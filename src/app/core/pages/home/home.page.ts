import { Component, inject } from '@angular/core';
import { CardComponent } from '../../../features/article/component/card/card.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CardComponent, RouterLink],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePageComponent {
  private readonly router = inject(Router);
}
