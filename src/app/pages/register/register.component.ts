
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../../services/Usuario/usuario.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{
  IP: string = "localhost:8080"
  id: number = 1;
  newUser: Usuario = new Usuario(1, '', '', '', '', '');
  usuarios: Usuario[] = [];

  constructor(private http: HttpClient) {}

  register() {
    this.http.post('http://'+this.IP+'/api/usuarios/register', this.newUser)
      .subscribe(
        response => {
          console.log(response);
          alert('Usuario registrado exitosamente.');
        },
        error => {
          console.error(error);
          alert('Error al registrar el usuario.');
        }
      );
  }
}
