import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, EMPTY, map, retry } from 'rxjs';

import { MovieGenreService } from '../../shared/movie-genre.service';
import { MovieService } from '../../shared/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  selectedMovieGenre$ = new BehaviorSubject<string>('0');
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
  moviesByGenre$ = combineLatest([this.selectedMovieGenre$, this.movies$]).pipe(
    map(([selectedGenreId, movies]) => {
      if(!selectedGenreId || selectedGenreId === '0') return movies;

      return movies.filter((movie) => movie.genreId === selectedGenreId);
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

  ngOnInit(): void {
    this.moviesByGenre$.subscribe();
  }

  onSelectedMovieGenre(movieGenreId: string) {
    this.selectedMovieGenre$.next(movieGenreId);
  }

  onRefreshMovies() {
    this.movieService.refreshMovies();
  }
}
