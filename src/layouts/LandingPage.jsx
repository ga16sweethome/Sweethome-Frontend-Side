import React from 'react';
import { Container } from 'react-bootstrap';

const LandingPage = (props) => {
  return <Container>{props.children}</Container>;
};

export default LandingPage;
