import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { BehaviorSubject, shareReplay, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  #moviesEndpoint = 'fake-api/movies';
  #moviesSubject = new BehaviorSubject<void>(undefined);
  movies$ = this.#moviesSubject.asObservable().pipe(
    switchMap(() => this.http.get<Movie[]>(this.#moviesEndpoint)),
    shareReplay()
  );

  constructor(private http: HttpClient) { }

  refreshMovies() {
    this.#moviesSubject.next();
  }
}
