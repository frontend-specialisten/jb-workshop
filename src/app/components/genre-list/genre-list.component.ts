import { Component, OnInit } from '@angular/core';
import { MovieGenreService } from 'src/app/shared/movie-genre.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss']
})
export class GenreListComponent implements OnInit {
  genres$ = this.movieGenres.genres$;

  constructor(private movieGenres: MovieGenreService) { }

  ngOnInit(): void {}
}
