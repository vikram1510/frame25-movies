import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { getMovies, Movie } from './api';
import MovieCard from './components/MovieCard';
import { sortMovies } from './util';


const Page = styled.div`
  background-color: grey;

  .header-wrapper {
    background-color: black;
    color: wheat;
    padding: 8px 0;
    display: flex;
    justify-content: center;

    .filter-wrapper {
      display: flex;
      justify-content: space-around;
      width: 180px;
    }
  }

  .movies-wrapper {
    padding-top: 12px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    gap: 1rem;
    justify-content: center;
  }
`;

export type SortBy = 'default' | 'rating';

function App() {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [sortBy, setSortBy] = useState<SortBy>('default');

  useEffect(() => {
    getMovies((res) => { setMovies(res.results); });
  }, []);

  if (!movies) return <h1>Loading...</h1>;

  return (
    <Page>
      <div className='header-wrapper'>
        <div className='filter-wrapper'>
          <h3>Sort By</h3>
          <select value={sortBy} onChange={e => setSortBy(e.target.value as SortBy)}>
            <option value="rating">Rating</option>
            <option value="default">Default</option>
          </select>
        </div>
      </div>
      <div className='movies-wrapper'>
        {sortMovies(movies, sortBy).map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </Page>
  );
}

export default App;
