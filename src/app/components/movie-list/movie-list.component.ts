import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  movies$?: Observable<Movie[]> = this.movieService.getMovies();
  movieGenres$?: Observable<MovieGenre[]> = this.movieGenreService.getAll();

  constructor(
    private movieService: MovieService,
    private movieGenreService: MovieGenreService
  ) {}

  ngOnInit(): void {  }

  onSelectedMovieGenre(movieGenre: MovieGenre) {
    console.log('Genre selected:', movieGenre);
  }

  onRefreshMovies() {
    console.log('Refreshing movies...');
  }
}
