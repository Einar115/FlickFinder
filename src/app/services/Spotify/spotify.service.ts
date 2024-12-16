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
  
  searchAlbums(query: string) {
    return this.http.get<any>(`${this.apiUrl}/search?query=${query}&type=album`);
  }

  searchTracks(query: string) {
    return this.http.get<any>(`${this.apiUrl}/search?query=${query}&type=track`);
  }

  getNewReleases(): Observable<any>{
    return this.http.get(`${this.apiUrl}/new-albums`);
  }

  getTrackDetails(trackId: number){
    return this.http.get(`${this.apiUrl}/track/${trackId}`);
  }
  
}
