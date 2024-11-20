import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-trends',
  standalone: true, // Define el componente como autónomo
  imports: [CommonModule], // Importa CommonModule para usar *ngFor y otras directivas
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css'],
})
export class TrendsComponent {
  // Datos ficticios para popular movies y trending songs
  popularMovies = [
    { title: 'Película 1', thumbnail: 'url1.jpg', rating: 8.9 },
    { title: 'Película 2', thumbnail: 'url2.jpg', rating: 7.5 },
    { title: 'Película 3', thumbnail: 'url3.jpg', rating: 9.2 },
  ];

  trendingSongs = [
    { name: 'Canción 1', artist: 'Artista 1' },
    { name: 'Canción 2', artist: 'Artista 2' },
    { name: 'Canción 3', artist: 'Artista 3' },
  ];
}
