import React from 'react';
import {
  ProductHighlight,
  OurWorkSection,
  WhatWeDoSection,
} from '../components';
import LandingPage from '../layouts/LandingPage';


const HomePage = () => {
  return (
    <LandingPage>
      <div className='Homepage'>
        <WhatWeDoSection />
        <OurWorkSection />
        <ProductHighlight />
      </div>
    </LandingPage>
  );
};

export default HomePage;
