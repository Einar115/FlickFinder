
import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/Pelicula/pelicula.service';
import { Router } from '@angular/router';
import { SpotifyService } from '../../services/Spotify/spotify.service';
import { PreferenciaService } from '../../services/Preferencia/preferencia.service';
import { Preferencia } from '../../models/preferencia.model';
import { AuthService } from '../../services/Autentificador/auth.service';
import { RecomendacionComponent } from '../../components/recomendacion/recomendacion.component';

@Component({
  selector: 'app-home',
  imports: [RecomendacionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  movies: any[] = [];
  albums: any[] = [];
  isLoggedIn = false;

  constructor(private peliculaService: PeliculaService, private spotifyService: SpotifyService,
    private preferenciaService:PreferenciaService, private authService: AuthService, private router:Router) {}


  ngOnInit(): void {
    this.loadNowPlayingMovies();
    this.loadNewReleases();
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  loadNewReleases(): void{
    this.spotifyService.getNewReleases().subscribe({
      next: (response) => {
        this.albums=response; //spotify
      },
      error:(err) =>{
        console.error('Error al cargar los temas:', err)
      }
    })
  }

  loadNowPlayingMovies(): void {
    this.peliculaService.getNowPlaying().subscribe({
      next: (response) => {
        this.movies = response.results; // TMDB devuelve un array en `results`
      },
      error: (err) => {
        console.error('Error al cargar las películas:', err);
      },
    });
  }

  goToDetails(movieId: number): void {
    this.router.navigate(['/movie', movieId]); // Navega a la ruta con el ID de la película
  }

  addToFavorites(tipo: 'pelicula' | 'album', referenciaId: number | string): void {
    let token: string | null = this.authService.getToken();
    console.log(token);
  
    if (!token) {
      alert('Error, no se ha iniciado sesion');
      return;
    }

    const nuevaPreferencia: Preferencia = {
      id: 0, // Será asignado por el backend
      tipo,
      referenciaId,
      fechaAgregada: new Date().toISOString()
    };

    this.preferenciaService.guardarPreferencia(token, nuevaPreferencia).subscribe({
      next: (response) => {
        console.log('Preferencia guardada con éxito:', response);
        alert('¡Favorito agregado con éxito!');
      },
      error: (err) => {
        console.error('Error al guardar la preferencia:', err);
        alert('Error al agregar a favoritos.');
      }
    });
  }

}
