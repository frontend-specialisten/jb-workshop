import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieGenre } from './movie-genre';

@Injectable({
  providedIn: 'root'
})
export class MovieGenreService {
  #movieGenresEndpoint = '/fake-api/movie-genres';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<MovieGenre[]>(this.#movieGenresEndpoint);
  }
}
