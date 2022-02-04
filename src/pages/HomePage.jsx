import React from 'react';
import { Navbar } from 'react-bootstrap';
import { WhatWeDoSection } from '../components';
import LandingPage from '../layouts/LandingPage';


const HomePage = () => {
  return (
    <LandingPage>
      <Navbar />
      <WhatWeDoSection />
    </LandingPage>
  );
};

export default HomePage;
