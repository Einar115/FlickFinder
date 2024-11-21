import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  IP: string = "localhost:8080"
  newUser: Usuario = new Usuario(0, '', '', '', '', '');

  constructor(private http: HttpClient) {}

  register() {
    this.http.post('http://'+this.IP+'/api/usuarios/register', this.newUser, { responseType: 'text' })
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
