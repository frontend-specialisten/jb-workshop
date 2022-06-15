import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, retry } from 'rxjs';
import { MovieGenreService } from 'src/app/shared/movie-genre.service';
import { MovieGenre } from '../../shared/movie-genre';
import { MovieService } from '../../shared/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies$ = this.movieService.movies$.pipe(
    retry({
      count: 3,
      delay: 1000,
    }),
    catchError((err) => {
      this.moviesHasError = true;
      return EMPTY;
    })
  );
  moviesHasError = false;

  movieGenres$ = this.movieGenreService.genres$.pipe(catchError((err) => {
    this.moviesHasError = true;
    return EMPTY;
  }));
  movieGenresHasError = false;


  constructor(
    private movieService: MovieService,
    private movieGenreService: MovieGenreService
  ) {}

  ngOnInit(): void {}

  onSelectedMovieGenre(movieGenre: MovieGenre) {
    console.log('Genre selected:', movieGenre);
  }

  onRefreshMovies() {
    console.log('Refreshing movies...');
  }
}
