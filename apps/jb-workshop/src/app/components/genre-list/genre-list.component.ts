import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, retry } from 'rxjs';

import { MovieGenreService } from '../../shared/movie-genre.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss']
})
export class GenreListComponent implements OnInit {
  genres$ = this.movieGenres.genres$.pipe(
    retry({
      count: 3,
      delay: 1000,
    }),
    catchError((err) => {
      this.genresHasError = true;
      return EMPTY;
    })
  );
  genresHasError = false;

  constructor(private movieGenres: MovieGenreService) { }

  ngOnInit(): void {}
}
