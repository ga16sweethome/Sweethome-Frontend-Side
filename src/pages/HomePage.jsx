import HeroSection from '../components/banners/HeroSection';
import LandingPage from '../layouts/LandingPage';
import {
  ProductHighlight,
  OurWorkSection,
  WhatWeDoSection,
  DesignerBiografiSection,
  TestimonyCardsSlider,
} from '../components';

const HomePage = () => {
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
