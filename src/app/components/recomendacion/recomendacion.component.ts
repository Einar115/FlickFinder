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
    this.obtenerRecomendacionesAlbumes();
  }

  trackById(index: number, item: any): number {
    return item.id; // Usa "id" como clave única
  }

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
  
   
  obtenerRecomendacionesAlbumes(): void {
    this.cargandoAlbumes = true;
    const token = this.authService.getToken();
  
    if (token) {
      this.recomendacionService.getRecomendacionesAlbumes(token).subscribe({
        next: (response) => {
          this.albumesRecomendados = response;
          this.cargandoAlbumes = false;
        },
        error: (err) => {
          console.error('Error al cargar las recomendaciones de álbumes:', err);
          this.errorAlbumes = 'No se pudieron cargar las recomendaciones de álbumes.';
          this.cargandoAlbumes = false;
        },
      });
    } else {
      this.errorAlbumes = 'No se encontró el token de autenticación.';
    }
  }
  
  goToDetails(movieId: number): void {
      this.router.navigate(['/movie', movieId]); // Navega a la ruta con el ID de la película
    }
  
    addToFavorites(tipo: 'pelicula' | 'album' | 'pista', referenciaId: number): void {
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