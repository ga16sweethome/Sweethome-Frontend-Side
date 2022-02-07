import React from 'react';
import Background from '../../assets/img/Rectangle 3.png';
import Dashboard from '../../layouts/Dashboard';
const HeroSection = () => {
  return (
    <div className='hero'>
      <Dashboard>
        <div className='box1'></div>

        <div className='hero-container'>
          <div className='picture'>
            <div className='box2'></div>
            <img
              clasName='picture-hero'
              src={Background}
              alt='background hero'
            />
          </div>
          <div className='row bg-white d-inline p-5'>
            <h1 className='serif fs-1 text-left'>
              We help to find the best solution for your <br />
              <b>better home living</b>
            </h1>
            <p>
              Rhoncus sed at nulla odio. Faucibus quam magna feugiat vitae in.
            </p>
            <p> Risus et fermentum in risus nibh praesent netus bibendum</p>
          </div>
        </div>
      </Dashboard>
    </div>
  );
};

export default HeroSection;
