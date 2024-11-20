import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true, // Marca el componente como autónomo
  template: `
    <div class="jumbotron text-center">
      <h1>Bienvenido a FlickFinder</h1>
      <p>Encuentra películas y bandas sonoras que te encantarán</p>
      <a class="btn btn-primary btn-lg" routerLink="/recommendations">Comenzar</a>
    </div>
  `,
  styles: [`
    .jumbotron { padding: 2rem; background-color: #f8f9fa; }
  `],
})
export class WelcomeComponent {}
