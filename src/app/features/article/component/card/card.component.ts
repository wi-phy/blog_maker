import { Component } from '@angular/core';
import { ArticleCard } from '../../models/article-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  card: ArticleCard = {
    title: 'Un titre',
    image: 'Une image',
    description: 'Une description',
  };
}
