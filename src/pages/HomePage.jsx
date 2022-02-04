import React from 'react';
import {
  ProductHighlight,
  OurWorkSection,
  WhatWeDoSection,
} from '../components';

const HomePage = () => {
  return (
    <div className='homepage'>
      <WhatWeDoSection />
      <OurWorkSection />
      <ProductHighlight />
    </div>
  );
};

export default HomePage;
