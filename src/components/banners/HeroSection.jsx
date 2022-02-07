import React from 'react';
import Background from '../../assets/img/Rectangle 3.png';
const Hero = () => {
    return (
        <div class="container-fluid hero">
        <   div class="form-container">
                <div class="row">
                    <h1 className="fs-50 text-left">We help to find the best solution for your <br>better home living</br></h1>
                    <img src={Background} alt="background hero" />
                </div>
            </div>
        
        </div>
    )
};

export default Hero;