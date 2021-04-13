import { Movie } from "./api";
import { SortBy } from "./App";

export function sortMovies(movies: Movie[], sortBy: SortBy) {
  if (sortBy === 'default') return movies.slice();
  if (sortBy === 'rating') {
    return movies.slice().sort((a, b) => b.vote_average - a.vote_average);
  }
  throw new Error('Invalid Sort by selection');
}
