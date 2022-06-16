import { randCatchPhrase, randMovie, randNumber } from "@ngneat/falso";

import { Movie } from "../../app/shared/movie";

export function generateFakeMovies(count: number = 100): Movie[] {
  const movies: Movie[] = [];
  for (let i = 0; i < count; i++) {
    movies.push({
      id: i,
      title: randMovie(),
      cover: 'https://picsum.photos/200/300?random=' + i,
      description: randCatchPhrase(),
      genreId: String(randNumber({ min: 1, max: 9 }))
    });
  }
  return movies;
}
