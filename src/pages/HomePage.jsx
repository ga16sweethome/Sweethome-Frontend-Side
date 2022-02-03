import React from 'react';
import { OurWorkSection, WhatWeDoSection } from '../components';
import LandingPage from '../layouts/LandingPage';

const HomePage = () => {
  return (
    <LandingPage>
      <WhatWeDoSection />
      <OurWorkSection />
    </LandingPage>
  );
};

export default HomePage;
