import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/Usuario/usuario.service';


@Component({
  selector: 'app-mostrar-usuarios',
  imports: [],
  templateUrl: './mostrar-usuarios.component.html',
  styleUrl: './mostrar-usuarios.component.css'
})
export class MostrarUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  errorMessage: string = '';

  constructor(private userService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.userService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar los usuarios';
        console.error(err);
      }
    });
  }
}