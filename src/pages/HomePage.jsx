
import HeroSection from '../components/banners/HeroSection';
import LandingPage from '../layouts/LandingPage';
import { ProductHighlight, OurWorkSection, WhatWeDoSection, DesignerBiografiSection, Footer } from '../components';



const HomePage = () => {
  return (
    <LandingPage>
      <div className='Homepage'>
        <HeroSection />
        <WhatWeDoSection />
        <OurWorkSection />
        <ProductHighlight />
         <DesignerBiografiSection/>
         <Footer/>
      </div>
    </LandingPage>
  );
};

export default HomePage;
