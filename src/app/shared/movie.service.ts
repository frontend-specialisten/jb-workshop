import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  #moviesEndpoint = 'fake-api/movies';

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.#moviesEndpoint);
  }
}
