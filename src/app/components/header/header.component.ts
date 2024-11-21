
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn: boolean = false; // Simula el estado del usuario
  usuarioNombre: string = ''; // Nombre del usuario autenticado

  constructor(private router: Router) {
    // Simulación para verificar si el usuario está logueado (puedes cambiar esta lógica)
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      this.isLoggedIn = true;
      this.usuarioNombre = JSON.parse(usuario).nombre || 'Usuario';
    }
  }

  logout(): void {
    // Lógica para cerrar sesión
    localStorage.removeItem('usuario');
    this.isLoggedIn = false;
    this.usuarioNombre = '';
    this.router.navigate(['/home']);
  }
}
