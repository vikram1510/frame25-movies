import axios from "axios";

const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY;

export type Movie = {
  id: number,
  original_title: string,
  vote_average: number,
  release_date: string,
  poster_path: string;
};

type MoviesResponse = {
  page: number,
  results: Movie[];
};

export async function getMovies(callback?: (res: MoviesResponse) => void): Promise<MoviesResponse> {
  const res = await axios.get<MoviesResponse>(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
  if (callback) callback(res.data);
  return res.data;
}

