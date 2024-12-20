import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.backendUrl}/auth/login`;

  constructor(private http: HttpClient, private router: Router) {}

  //se reliza la peticion Post de inicio de sesion recibiendo el nombre de usuario y contraseña
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }

  //Se guarda el token generado por el JWT
  saveToken(token: string): void {
    localStorage.setItem('jwt_token', token);
  }

  //se obtiene el token que se encuentra en el localStorage
  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  //verifica si hay una sesion activa verificando si hay un token en el local storage
  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }

  //cierra la sesion eliminando el token de inicio de sesion del local storage
  logout(): void {
    localStorage.removeItem('jwt_token');
    this.router.navigate(['/home']);
  }

  //Decodifica el token para obtener datos como el nombre de usuario o correo y ser mostrados en la pagina
  decodeToken(): any {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode(token);
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }
}
