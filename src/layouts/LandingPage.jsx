import React from 'react';
import { useState } from 'react';
import { NavbarSection } from '../components';

const LandingPage = (props) => {
  const [backgroundNav, setBackgroundNav] = useState(false)
  
  const checkScroll = () => { 
    const scroll = window.scrollY;
    if (scroll > 50 ) {
      setBackgroundNav(true) 
    } else if (backgroundNav === true) {
      setBackgroundNav(false)
    } else {
      setBackgroundNav(false)
    }
  }
  window.addEventListener("scroll", checkScroll)
  

  return (
    <>
    <NavbarSection background = { backgroundNav } />
    <div className='LandingPage mx-auto'>{props.children}</div>
    </>
  );
};

export default LandingPage;
