import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenreListComponent } from './components/genre-list/genre-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MovieListComponent,
    title: 'Movies',
  },
  {
    path: 'movies/:movieId',
    component: MovieDetailsComponent,
    title: 'Movie Details',
  },
  {
    path: 'genres',
    component: GenreListComponent,
    title: 'Movie Genres',
  },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
