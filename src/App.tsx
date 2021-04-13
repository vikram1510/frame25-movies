import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { getMovies, Movie } from './api';
import MovieCard from './components/MovieCard';


const Page = styled.div`
  background-color: grey;

  .header {
    background-color: black;
    color: wheat;
  }

  .movies-wrapper {
    /* background-color: yellow; */
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    gap: 1rem;
    justify-content: center;
  }
`;

function App() {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    getMovies((res) => { setMovies(res.results); });
  }, []);

  if (!movies) return <h1>Loading...</h1>;

  return (
    <Page>
      <div className='header'>
        {/* <h3>Sort By</h3> */}
        <select value={sortBy}>
          <option value="rating">Rating</option>
          <option value="default">Sort By...</option>
        </select>
      </div>
      <div className='movies-wrapper'>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </Page>
  );
}

export default App;
