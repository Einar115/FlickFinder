import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreferenciaService {
  private apiUrl = `${environment.backendUrl}/preferencias`; 

  constructor(private http: HttpClient) {}
  
  // Obtener peliculas favoritas
  getPeliculasFavoritas(token: string): Observable<any[]>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any[]>(`${this.apiUrl}/favoritos/peliculas`, { headers });
  }

  // Obtener albumes favoritos
  getAlbumesFavoritos(token: string): Observable<any[]>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any[]>(`${this.apiUrl}/favoritos/albumes`, { headers });
  }

  // Agregar a favoritos
  guardarPreferencia(token: string, preferencia: any): Observable<any>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<any>(`${this.apiUrl}/guardar`, preferencia, { headers });
  }

  //Eliminar favorito
  deleteFavorito(token: string, id: number | string): Observable<string> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete<string>(`${this.apiUrl}/favoritos/delete/${id}`, { headers });
  }
}
