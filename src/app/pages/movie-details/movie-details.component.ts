import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from '../../services/Pelicula/pelicula.service';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{
  movie: any;

  constructor(private route:ActivatedRoute, private peliculaService:PeliculaService){}

  ngOnInit(): void {
      const movieId= this.route.snapshot.params['id'];
      this.loadMoviesDetails(movieId);
  }

  loadMoviesDetails(movieId:number): void{
    this.peliculaService.getMovieDetails(movieId).subscribe({
      next: (response)=>{
        this.movie = response
      },
      error: (err)=>{
        console.error('Error al cargar la pelicula', err);
      }
    })
  }

}
