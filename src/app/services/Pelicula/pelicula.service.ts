import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private apiUrl:string = environment.backendUrl+'/movies';
  
  constructor(private http: HttpClient) {}

  //peticion para busqueda de peliculas con nombre
  searchMovies(query: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/search`, {params: {query}});
  }

  //peticion para obtener peliculas actualmente en emision
  getNowPlaying(): Observable<any>{
    return this.http.get(`${this.apiUrl}/now-playing`);
  }

  //peticion para obtener detalles de 
  getMovieDetails(movieId: number){
    return this.http.get(`${this.apiUrl}/details/${movieId}`);
  }

}