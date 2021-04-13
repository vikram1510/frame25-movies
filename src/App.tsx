import React, { useEffect, useState } from 'react';
import './App.css';
import styled from  'styled-components';
import { getMovies, Movie } from './api';
import MovieCard from './components/MovieCard';


const Page = styled.div`
  .movies-wrapper {
    background-color: yellow;
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    gap: 1rem;
  }
`;

function App() {
  const [movies, setMovies] = useState<Movie[] | null> (null);

  useEffect(() => {
    getMovies((res) => { setMovies(res.results)} )
  }, [])
  
  if (!movies) return <h1>Loading...</h1>

  return (
    <Page>
      <div className='movies-wrapper'>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </Page>
  );
}

export default App;
