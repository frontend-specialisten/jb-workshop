import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { MovieGenre } from './movie-genre';

@Injectable({
  providedIn: 'root'
})
export class MovieGenreService {
  #movieGenresEndpoint = '/fake-api/movie-genres';
  genres$ = this.http.get<MovieGenre[]>(this.#movieGenresEndpoint).pipe(
    shareReplay(1)
  );

  constructor(private http: HttpClient) { }
}
