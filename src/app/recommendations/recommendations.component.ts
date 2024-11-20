import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule para usar *ngFor y *ngIf
  template: `
    <section>
      <h2>Recomendaciones</h2>
      <div *ngFor="let movie of movies">
        <h3>{{ movie.title }}</h3>
        <p>Puntuación: {{ movie.rating }}</p>
      </div>
    </section>
  `,
})
export class RecommendationsComponent {
  movies = [
    { title: 'Película 1', rating: 8.5 },
    { title: 'Película 2', rating: 7.8 },
  ];
}
