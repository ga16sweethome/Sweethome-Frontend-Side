import React from 'react';
import { ProductHighlight, OurWorkSection, WhatWeDoSection } from '../components';
import LandingPage from '../layouts/LandingPage';

const HomePage = () => {
  return (
    <div className='homepage'>
      <WhatWeDoSection />
      <OurWorkSection />
      <ProductHighlight/>
    </div>
  );
};

export default HomePage;
