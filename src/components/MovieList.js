import React from 'react';
import './movielist.css';

const MovieList = ({ movies, handleFavouritesClick, favouriteComponent }) => {
  const FavouriteComponent = favouriteComponent;

  return (
    <>
      {movies.map((movie, index) => (
        <div
          key={index}
          className='image-container col col-md-6 col-lg-3  d-flex justify-content-start ms-1 my-1'
          style={{ position: 'relative' }}
        >
          <div className='card card-box'>
            <img src={movie.Poster} alt='movie' />
            <h4 className='card-title px-2 pt-3'>{movie.Title}</h4>
            <h5 className='card-text px-2'>{movie.Year}</h5>
            <div
              onClick={() => handleFavouritesClick(movie)}
              className='overlay d-flex align-items-center justify-content-center'
            >
              <FavouriteComponent />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
