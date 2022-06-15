import { Component, OnInit } from '@angular/core';
import { MovieGenreService } from 'src/app/shared/movie-genre.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss']
})
export class GenreListComponent implements OnInit {

  constructor(private movieGenres: MovieGenreService) { }

  ngOnInit(): void {
    this.movieGenres.getAll().subscribe();
  }

}
