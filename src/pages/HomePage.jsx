import React from 'react';
import {
  ProductHighlight,
  OurWorkSection,
  WhatWeDoSection,
} from '../components';
import HeroSection from '../components/banners/HeroSection';
import LandingPage from '../layouts/LandingPage';


const HomePage = () => {
  return (
    <LandingPage>
      <div className='Homepage'>
        <HeroSection />
        <WhatWeDoSection />
        <OurWorkSection />
        <ProductHighlight />
      </div>
    </LandingPage>
  );
};

export default HomePage;
