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

  searchMovies(query: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/search`, {params: {query}});
  }
}
