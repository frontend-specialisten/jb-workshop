import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/movie';
import { MovieGenreService } from 'src/app/shared/movie-genre.service';
import { MovieGenre } from '../../shared/movie-genre';
import { MovieService } from '../../shared/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies?: Movie[];
  movieGenres?: MovieGenre[];

  constructor(
    private movieService: MovieService,
    private movieGenreService: MovieGenreService
  ) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
    this.movieGenreService.getAll().subscribe((movieGenres) => {
      this.movieGenres = movieGenres;
    });
  }

  onSelectedMovieGenre(movieGenre: MovieGenre) {
    console.log('Genre selected:', movieGenre);
  }

  onRefreshMovies() {
    console.log('Refreshing movies...');
  }
}
