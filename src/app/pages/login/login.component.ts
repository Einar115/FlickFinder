import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/Autentificador/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  /*compara el nombre y contraseña del usuario usando el authService 
  y despues genera un jwt token en el almacenamiento local para mostrar el inicio de sesion*/
  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        localStorage.setItem('jwt_token', response.token);
        this.router.navigate(['/home']).then(()=>{
          window.location.reload();
        });
      },
      (error) => {
        this.errorMessage = 'Credenciales inválidas';
      }
    );
  }
}
 