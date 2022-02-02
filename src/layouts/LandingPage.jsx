import React from 'react';
import { Container } from 'react-bootstrap';

const LandingPage = (props) => {
  return <div className='LandingPage overflow-visible'>{props.children}</div>;
};

export default LandingPage;
