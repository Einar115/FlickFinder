import { Component, OnInit } from '@angular/core';
import { Preferencia } from '../../models/preferencia.model';
import { PreferenciaService } from '../../services/Preferencia/preferencia.service';
import { AuthService } from '../../services/Autentificador/auth.service';

@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit{
  movies: any[] = [];
  albums: any[] = [];

  constructor(private preferenciaService: PreferenciaService, private authService: AuthService) {}

  ngOnInit(): void {
    this.obtenerAlbumesFavoritos();
    this.obtenerPeliculasFavoritas();
  }

  obtenerAlbumesFavoritos(): void {
    const token = this.authService.getToken();
    if (token) {
      this.preferenciaService.getAlbumesFavoritos(token).subscribe(
        (response) => {
          this.albums = response;
        },
        (error) => {
          console.error('Error al obtener álbumes favoritos:', error);
        }
      );
    }
  }

  obtenerPeliculasFavoritas(): void {
    const token = this.authService.getToken();
    if (token) {
      this.preferenciaService.getPeliculasFavoritas(token).subscribe(
        (response) => {
          this.movies = response;
        },
        (error) => {
          console.error('Error al obtener películas favoritas:', error);
        }
      );
    }
  }

  deleteFavorite(id: number): void {
    const token = this.authService.getToken();
    if (!token) {
      alert('No se ha iniciado sesión.');
      return;
    }
  
    this.preferenciaService.deleteFavorito(token, id).subscribe({
      next: (response) => {
        console.log(response);
        alert('¡Favorito eliminado exitosamente!');
        // Actualizar la lista después de la eliminación
        this.movies = this.movies.filter((movie) => movie.id !== id);
        this.albums = this.albums.filter((album) => album.id !== id);
      },
      error: (err) => {
        alert('¡Favorito eliminado exitosamente!');
        this.movies = this.movies.filter((movie) => movie.id !== id);
        this.albums = this.albums.filter((album) => album.id !== id);
      },
    });
  }
  
}
