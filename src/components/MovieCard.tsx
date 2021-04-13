import styled from 'styled-components';
import { Movie } from '../api';

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
    /* background-color: pink; */
    color: gold;
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
        <p>{movie.vote_average}</p>
      </div>
    </Wrapper>
  );
}
