import React from 'react';
import { ProductHighlight, OurWorkSection, WhatWeDoSection, DesignerBiografiSection, Footer } from '../components';


const HomePage = () => {
  return (
    <div className='homepage'>
      <WhatWeDoSection />
      <OurWorkSection />
      <ProductHighlight/>
      <DesignerBiografiSection/>
      <Footer/>
    </div>
  );
};

export default HomePage;
