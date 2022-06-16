import { rest } from 'msw';

import { generateFakeMovies, generateFakeMovieGenres } from './data';

const delayOfResponse = 0;
const fakeMovies = generateFakeMovies();
const fakeMovieGenres = generateFakeMovieGenres();
const shouldFail = false; //randBoolean();

export const handlers = [
  rest.get('/fake-api/movies', (req, res, ctx) => {
    if (shouldFail) {
      return res(ctx.status(500));
    } else {
      return res(ctx.delay(delayOfResponse), ctx.json(fakeMovies));
    }
  }),
  rest.get('/fake-api/movies/:movieId', (req, res, ctx) => {
    if (shouldFail) {
      return res(ctx.status(500));
    } else {
      const { movieId } = req.params;
      return res(ctx.delay(delayOfResponse), ctx.json(fakeMovies.find(movie => String(movie.id) === movieId)));
    }
  }),
  rest.get('/fake-api/movie-genres', (req, res, ctx) => {
    if (shouldFail) {
      return res(ctx.status(500));
    } else {
      return res(ctx.delay(delayOfResponse), ctx.json(fakeMovieGenres));
    }
  }),
];
