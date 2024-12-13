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
  
  searchTracks(query:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/search`, { params: {query} });
  }

  getNewReleases(): Observable<any>{
    return this.http.get(`${this.apiUrl}/new-releases`);
  }

  getTrackDetails(trackId: number){
    return this.http.get(`${this.apiUrl}/track/${trackId}`);
  }
}
