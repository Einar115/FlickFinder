
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  searchResults: Array<{ title: string; description: string }> = [];

  ngOnInit(): void {
    // Datos simulados
    this.searchResults = [
      {
        title: 'Película 1',
        description: 'Descripción breve de la película 1.'
      },
      {
        title: 'Película 2',
        description: 'Descripción breve de la película 2.'
      },
      {
        title: 'Película 3',
        description: 'Descripción breve de la película 3.'
      },
      {
        title: 'Película 4',
        description: 'Descripción breve de la película 4.'
      },
      {
        title: 'Película 5',
        description: 'Descripción breve de la película 5.'
      },
      {
        title: 'Película 6',
        description: 'Descripción breve de la película 6.'
      }
    ];
  }
}
