
import { Component, input, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/Pelicula/pelicula.service';

import { FormsModule, NgForm } from '@angular/forms';
import { SpotifyService } from '../../services/Spotify/spotify.service';
import { PreferenciaService } from '../../services/Preferencia/preferencia.service';
import { AuthService } from '../../services/Autentificador/auth.service';
import { Preferencia } from '../../models/preferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  query: string = '';
  searchType: string = 'movies'; // Valor inicial
  movies: any[] = [];
  albums: any[] = [];
  tracks: any[] = [];
  isLoggedIn = false;

  constructor(private peliculaService: PeliculaService, private spotifyService: SpotifyService, 
    private preferenciaService: PreferenciaService, private authService: AuthService, private router:Router) {}


  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  //comprueba la opcion de busqueda entre peliculas, albumes y pistas musicales
  search(): void {
    switch (this.searchType) {
      case 'movies':
        this.searchMovies();
        break;
      case 'albums':
        this.searchAlbums();
        break;
      case 'tracks':
        this.searchTracks();
        break;
    }
  }

  //realiza la busqueda de peliculas
  private searchMovies(): void {
    this.peliculaService.searchMovies(this.query).subscribe({
      next: (data) => {
        this.movies = data.results;
      },
      error: (err) => console.error(err),
    });
  }

  //realiza la busqueda de albumes
  private searchAlbums(): void {
    this.spotifyService.searchAlbums(this.query).subscribe({
      next: (data) => {
        this.albums = data.albums.items.map((album: any) => ({
          name: album.name,
          artist: album.artists[0]?.name || 'Desconocido',
          image: album.images[0]?.url || null,
          id: album.id
        }));
        console.log("albumes"+this.albums)
      },
      error: (err) => console.error(err),
    });
  }

  //reliza la busqueda de musica
  private searchTracks(): void {
    this.spotifyService.searchTracks(this.query).subscribe({
      next: (data) => {
        this.tracks = data.tracks.items.map((track: any) => ({
          name: track.name,
          artist: track.artists[0]?.name || 'Desconocido',
          image: track.album?.images[0]?.url || null,
        }));
      },
      error: (err) => console.error(err),
    });
  }

  //se redirige a la pagina de los detalles de la pelicula
  goToDetails(movieId: number): void {
    this.router.navigate(['/movie', movieId]); //se va a la ruta con el ID de la película
  }
  
  //Añade a favoritos segun el usuario
  addToFavorites(tipo: 'pelicula' | 'album', referenciaId: number | string): void {
    let token: string | null = this.authService.getToken();
    console.log(token);
    if(!token){
      alert('Error, no se ha iniciado sesion');
      return;
    }
  
    //se crea un nuevo objeto de tipo preferencia
    const nuevaPreferencia: Preferencia = {
      id: 0,
      tipo,
      referenciaId,
      fechaAgregada: new Date().toISOString()
    };


    //se usa el metodo del servicio para guardar la preferencia
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
