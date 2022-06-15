import { Component, OnInit } from '@angular/core';
import { MovieGenreService } from 'src/app/shared/movie-genre.service';
import { MovieGenre } from '../../shared/movie-genre';
import { MovieService } from '../../shared/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies$ = this.movieService.movies$;
  movieGenres$ = this.movieGenreService.genres$;

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
