
import { Component, input } from '@angular/core';
import { PeliculaService } from '../../services/Pelicula/pelicula.service';

import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent{
  query: string='';
  movies:any[]=[];

  constructor(private peliculaService: PeliculaService){}

  searchMovies():void{
    this.peliculaService.searchMovies(this.query).subscribe({
      next: (data)=>{
        this.movies=data.results;
      },
      error: (err)=>console.error(err),
    });
  }
}
