import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private apiUrl=environment.backendUrl+'/spotify';

  constructor(private http: HttpClient) {}
  
  //peticion para buscar album
  searchAlbums(query: string) {
    return this.http.get<any>(`${this.apiUrl}/search?query=${query}&type=album`);
  }

  //peticion para buscar pista musical individual
  searchTracks(query: string) {
    return this.http.get<any>(`${this.apiUrl}/search?query=${query}&type=track`);
  }

  //peticion para obtener nuevos albumes
  getNewReleases(): Observable<any>{
    return this.http.get(`${this.apiUrl}/new-albums`);
  }

  //peticion para obtener detalles de una pista musical con su id
  getTrackDetails(trackId: number){
    return this.http.get(`${this.apiUrl}/track/${trackId}`);
  }
  
}
