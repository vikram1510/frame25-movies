import styled from 'styled-components';
import { Movie } from '../api';
import { getYear } from '../util';

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  .image-wrapper {
    background-color: #333333;
    display: flex;
    align-items: center;
    flex: 1;
    
    img {
      height: auto;
      width: 100%;
    }

  }

  .details {
    display: flex;
    padding: 4px;
    justify-content: space-between;

    p.year { color: white }
    p.rating { color: gold }
  }
`;

type MovieCardProps = { movie: Movie; };

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Wrapper>
      <div className='image-wrapper'>
        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`${movie.original_title} Poster`} />
      </div>
      <div className='details'>
        <p className='year'>Year: {getYear(movie.release_date)}</p>
        <p className='rating'>Rating: {movie.vote_average}</p>
      </div>
    </Wrapper>
  );
}
