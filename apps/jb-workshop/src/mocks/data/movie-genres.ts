import { randLine } from "@ngneat/falso";

import { MovieGenre } from "../../app/shared/movie-genre";

const movieGenres: MovieGenre[] = [
  {
    id: 1,
    name: 'Action',
    description: randLine({ lineCount: 10 }),
  },
  {
    id: 2,
    name: 'Comedy',
    description: randLine({ lineCount: 10 }),
  },
  {
    id: 3,
    name: 'Drama',
    description: randLine({ lineCount: 10 }),
  },
  {
    id: 4,
    name: 'Fantasy',
    description: randLine({ lineCount: 10 }),
  },
  {
    id: 5,
    name: 'Horror',
    description: randLine({ lineCount: 10 }),
  },
  {
    id: 6,
    name: 'Mystery',
    description: randLine({ lineCount: 10 }),
  },
  {
    id: 7,
    name: 'Romance',
    description: randLine({ lineCount: 10 }),
  },
  {
    id: 8,
    name: 'Thriller',
    description: randLine({ lineCount: 10 }),
  },
  {
    id: 9,
    name: 'Western',
    description: randLine({ lineCount: 10 }),
  },
];

export const generateFakeMovieGenres = () => movieGenres;
