import { Movie } from "./api";
import { SortBy } from "./App";


export function getYear(date: string) {
  return new Date(date).getFullYear();
}

export function sortMovies(movies: Movie[], sortBy: SortBy): Movie[] {
  if (sortBy === 'default') return movies;
  if (sortBy === 'rating') {
    return movies.slice().sort((a, b) => b.vote_average - a.vote_average);
  }
  throw new Error('Invalid Sort by selection');
}
