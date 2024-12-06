import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl:string = environment.backendUrl+'/usuarios';

  private usuarios: Usuario[] = [];

  addUser(usuarios: Usuario) {
    this.usuarios.push(usuarios);
  }

  getUsers(): Usuario[] {
    return this.usuarios;
  }

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/all`);
  }
}
