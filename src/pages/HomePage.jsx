import React from 'react';
import { ProductHighlight, OurWorkSection, WhatWeDoSection, DesignerBiografiSection } from '../components';


const HomePage = () => {
  return (
    <div className='homepage'>
      <WhatWeDoSection />
      <OurWorkSection />
      <ProductHighlight/>
      <DesignerBiografiSection/>
    </div>
  );
};

export default HomePage;
