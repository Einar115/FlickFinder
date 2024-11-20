import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngFor y otras directivas

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoggedIn = false;

  // Datos ficticios para las secciones
  movies = [
    { title: 'Película 1', thumbnail: 'url1.jpg', rating: 8.5 },
    { title: 'Película 2', thumbnail: 'url2.jpg', rating: 7.8 },
    { title: 'Película 3', thumbnail: 'url3.jpg', rating: 9.0 },
  ];

  trendingSongs = [
    { name: 'Canción 1', artist: 'Artista 1' },
    { name: 'Canción 2', artist: 'Artista 2' },
    { name: 'Canción 3', artist: 'Artista 3' },
  ];
}
