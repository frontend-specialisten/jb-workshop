import { randBoolean } from '@ngneat/falso';
import { rest } from 'msw';

import { generateFakeMovies, generateFakeMovieGenres } from './data';

const delayOfResponse = 2000;
const fakeMovies = generateFakeMovies();
const fakeMovieGenres = generateFakeMovieGenres();
const shouldFail = randBoolean();

export const handlers = [
  rest.get('/fake-api/movies', (req, res, ctx) => {
    if (shouldFail) {
      return res(ctx.status(500));
    } else {
      return res(ctx.delay(delayOfResponse), ctx.json(fakeMovies));
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
