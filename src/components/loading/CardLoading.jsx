import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

const CardLoading = () => {
  return (
    <div className='col-12 col-md-6'>
      <div className='CardLoading card text-decoration-none text-dark shadow-sm'>
        <Placeholder as={Card.Header} animation='glow' className='p-0'>
          <Placeholder className='placeholder-img w-100 h-100 p-0' />
        </Placeholder>
        <Placeholder
          as={Card.Body}
          animation='glow'
          className='d-flex justify-content-between pb-1'>
          <Placeholder xs={8} />
          <Placeholder xs={2} />
        </Placeholder>
        <Placeholder
          as={Card.Body}
          animation='glow'
          className='d-flex justify-content-between pt-1'>
          <Placeholder xs={5} />
          <Placeholder xs={3} />
        </Placeholder>
      </div>
    </div>
  );
};

export default CardLoading;
