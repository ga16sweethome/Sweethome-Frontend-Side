import HeroSection from '../components/banners/HeroSection';
import LandingPage from '../layouts/LandingPage';
import { useEffect } from 'react';
import {
  ProductHighlight,
  OurWorkSection,
  WhatWeDoSection,
  DesignerBiografiSection,
  TestimonyCardsSlider,
} from '../components';
import { scrollToTop } from '../utility/scroll';

const HomePage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <LandingPage>
      <div className='Homepage'>
        <HeroSection />
        <WhatWeDoSection />
        <OurWorkSection />
        <ProductHighlight />
        <TestimonyCardsSlider />
        <DesignerBiografiSection />
      </div>
    </LandingPage>
  );
};

export default HomePage;
