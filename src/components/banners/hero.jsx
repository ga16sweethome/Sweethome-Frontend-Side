import React from 'react';
import Background from '../../assets/img/Rectangle 3.png';
const Hero = () => {
    return (
        <div className="Hero">
            <h1>We help to find the best solution for your<b>better home living</b></h1>
            <img src={Background}alt="background Hero" />
            
        </div>
    );
};

export default Hero;