
import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/Pelicula/pelicula.service';
import { Router } from '@angular/router';
import { SpotifyService } from '../../services/Spotify/spotify.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  movies: any[] = [];
  tracks: any[] = [];
  isLoggedIn = false;

  constructor(private peliculaService: PeliculaService, private spotifyService: SpotifyService, private router:Router) {}

  ngOnInit(): void {
    this.loadNowPlayingMovies();
    this.loadNewReleases();
  }

  loadNewReleases(): void{
    this.spotifyService.getNewReleases().subscribe({
      next: (response) => {
        this.tracks=response.results;
        console.log(this.tracks);
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
        console.log(this.movies);
      },
      error: (err) => {
        console.error('Error al cargar las películas:', err);
      },
    });
  }

  goToDetails(movieId: number): void {
    this.router.navigate(['/movie', movieId]); // Navega a la ruta con el ID de la película
  }
}
