import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/api/usuarios';

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
