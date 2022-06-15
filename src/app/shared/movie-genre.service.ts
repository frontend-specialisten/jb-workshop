import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieGenre } from './movie-genre';

@Injectable({
  providedIn: 'root'
})
export class MovieGenreService {
  #movieGenresEndpoint = '/fake-api/movie-genres';
  genres$ = this.http.get<MovieGenre[]>(this.#movieGenresEndpoint);

  constructor(private http: HttpClient) { }
}
