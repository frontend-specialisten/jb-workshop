import { Component, OnInit } from '@angular/core';
import { MovieGenre } from '../../shared/movie-genre';
import { MovieService } from '../../shared/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe();
  }

  onSelectedMovieGenre(movieGenre: MovieGenre) {
    console.log('Genre selected:', movieGenre);
  }

  onRefreshMovies() {
    console.log('Refreshing movies...');
  }
}
