import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from '../../services/Pelicula/pelicula.service';
import { PreferenciaService } from '../../services/Preferencia/preferencia.service';
import { AuthService } from '../../services/Autentificador/auth.service';
import { Preferencia } from '../../models/preferencia.model';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{
  movie: any;
  isLoggedIn = false;

  constructor(private route:ActivatedRoute, private peliculaService:PeliculaService, private preferenciaService: PreferenciaService,
    private authService:AuthService){}

  ngOnInit(): void {
      const movieId= this.route.snapshot.params['id'];
      this.loadMoviesDetails(movieId);
      this.isLoggedIn = this.authService.isLoggedIn();
  }

  loadMoviesDetails(movieId:number): void{
    this.peliculaService.getMovieDetails(movieId).subscribe({
      next: (response)=>{
        this.movie = response
      },
      error: (err)=>{
        console.error('Error al cargar la pelicula', err);
      }
    })
  }

  addToFavorites(tipo: 'pelicula' | 'album', referenciaId: number): void {
      let token: string | null = this.authService.getToken();
      console.log(token);
      if(!token){
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
