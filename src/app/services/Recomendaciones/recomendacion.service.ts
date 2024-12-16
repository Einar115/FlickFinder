import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecomendacionService {
  private apiUrl = `${environment.backendUrl}/recomendaciones`;

  constructor(private http: HttpClient) {}

  // Obtener recomendaciones de peliculas
  getRecomendacionesPeliculas(token: string): Observable<any[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<string[]>(`${this.apiUrl}/peliculas`, { headers }).pipe(
      map((response: string[]) => {
        const parsedResults = response.flatMap((jsonString) => {
          const parsedObject = JSON.parse(jsonString);
          return parsedObject.results || []; // Extrae el campo "results" de cada string JSON
        });
        return parsedResults;
      }),
      catchError((error) => {
        console.error('Error al procesar las recomendaciones:', error);
        return of([]); // Devuelve un array vacío en caso de error
      })
    );
  }
  

}