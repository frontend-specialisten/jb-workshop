import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieGenre } from 'src/app/shared/movie-genre';
import { MovieGenreService } from 'src/app/shared/movie-genre.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss']
})
export class GenreListComponent implements OnInit {
  genres$?: Observable<MovieGenre[]> = this.movieGenres.getAll();

  constructor(private movieGenres: MovieGenreService) { }

  ngOnInit(): void {}

}
