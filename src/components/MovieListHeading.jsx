import React from 'react';
import './movielistHeading.css';
import MyTestApp from './images/MyTestApp.svg';

const MovieListHeading = () => {
  return (
    <div className='col header-container'>
      <span className='border border-white px-4 py-3'>
        <img src={MyTestApp} alt='' />
      </span>
    </div>
  );
};

export default MovieListHeading;
