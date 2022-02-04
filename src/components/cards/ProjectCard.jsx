import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectCard = () => {
  return (
    <Card className='ProjectCard w-50'>
      <Card.Img
        variant='top'
        src='https://pertaniansehat.com/v01/wp-content/uploads/2015/08/default-placeholder.png'
      />
      <Card.Body className='d-flex'>
        <div className='left flex-grow-1'>
          <Card.Title className='fw-bold'>Natural Feel Living Room</Card.Title>
          <Card.Subtitle>CitraLand, Surabaya</Card.Subtitle>
        </div>
        <div className='right text-end'>
          <Card.Text className='estimated-time'>2 Weeks</Card.Text>
          <Card.Text>Rp.70,000,000</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
