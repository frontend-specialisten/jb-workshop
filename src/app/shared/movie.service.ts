import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  #moviesEndpoint = 'fake-api/movies';
  movies$ = this.http.get<Movie[]>(this.#moviesEndpoint);

  constructor(private http: HttpClient) { }
}
