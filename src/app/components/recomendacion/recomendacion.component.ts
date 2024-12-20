import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/Autentificador/auth.service';
import { RecomendacionService } from '../../services/Recomendaciones/recomendacion.service';
import { Preferencia } from '../../models/preferencia.model';
import { Router } from '@angular/router';
import { PreferenciaService } from '../../services/Preferencia/preferencia.service';

@Component({
  selector: 'app-recomendacion',
  imports: [],
  templateUrl: './recomendacion.component.html',
  styleUrl: './recomendacion.component.css'
})
export class RecomendacionComponent implements OnInit {
  peliculasRecomendadas: any[] = [];
  albumesRecomendados: any[] = [];
  cargandoPeliculas = false;
  cargandoAlbumes = false;
  errorPeliculas = '';
  errorAlbumes = '';

  constructor(private recomendacionService: RecomendacionService, private authService: AuthService, private preferenciaService:PreferenciaService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerRecomendacionesPeliculas();
  }

  //obtiene recomendaciones de peliculas dependiendo del usuario y sus preferencias agregadas
  obtenerRecomendacionesPeliculas(): void {
    this.cargandoPeliculas = true;
    const token = this.authService.getToken();
  
    if (token) {
      this.recomendacionService.getRecomendacionesPeliculas(token).subscribe({
        next: (response) => {
          this.peliculasRecomendadas = response;
          this.cargandoPeliculas = false;
        },
        error: (err) => {
          console.error('Error al cargar las recomendaciones:', err);
          this.errorAlbumes = 'No se pudieron cargar las recomendaciones.';
          this.cargandoPeliculas = false;
        },
      });
    } else {
      this.errorAlbumes = 'No se encontró el token de autenticación.';
    }
  }
  
  //Navega a la ruta con el ID de la pelicula
  goToDetails(movieId: number): void {
      this.router.navigate(['/movie', movieId]); 
  }

  //Añade a favoritos la pelicula o el album usando el servicio PreferenciaService
  addToFavorites(tipo: 'pelicula' | 'album', referenciaId: number): void {
    let token: string | null = this.authService.getToken();
    console.log(token);

    if (!token) {
      alert('Error, no se ha iniciado sesion');
      return;
    }
    const nuevaPreferencia: Preferencia = {
      id: 0, // Sera asignado por el backend
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