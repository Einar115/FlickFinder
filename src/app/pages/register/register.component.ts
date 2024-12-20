
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/Usuario/usuario.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{
  registerForm: FormGroup;
  mensajeError: string | null = null;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.registerForm = this.fb.group({
      nombreUsuario: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      fechaNacimiento: ['', Validators.required]
    });
  }

  // Registra el usuario usando usuarioService para la peticion
  onSubmit(): void {
    if (this.registerForm.valid) {
      const usuario: Usuario = this.registerForm.value;
      this.usuarioService.register(usuario).subscribe({
        next: () => {
          alert('Registro exitoso');
          this.registerForm.reset();
        },
        error: (err) => {
          console.error(err);
          this.mensajeError = err.error.message || 'Ocurrió un error en el registro';
        }
      });
    } else {
      this.mensajeError = 'Por favor, complete correctamente todos los campos.';
    }
  }
  
}