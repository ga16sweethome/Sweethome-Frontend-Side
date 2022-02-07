
import HeroSection from '../components/banners/HeroSection';
import LandingPage from '../layouts/LandingPage';
import { ProductHighlight, OurWorkSection, WhatWeDoSection, DesignerBiografiSection } from '../components';



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
