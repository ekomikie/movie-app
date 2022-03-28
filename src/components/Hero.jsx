import React from 'react';
import heroPic from './images/hero-pic.svg';
import './hero.css';

const Hero = () => {
  return (
    <div
      className='hero-container row d-flex align-items-center'
      style={{ backgroundImage: `url(${heroPic})`, height: '400px' }}
    >
      <h1 className='' style={{ color: 'white' }}>
        Watch <br className='break' /> Something <br /> Incredible.
      </h1>
    </div>
  );
};

export default Hero;
