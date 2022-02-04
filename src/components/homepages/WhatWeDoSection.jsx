import { Card, Col, Row } from 'react-bootstrap';
import { CupOfCoffee, PaperPlane, PenIcons } from '../../assets';
import Dashboard from '../../layouts/Dashboard';

const WhatWeDoSection = () => {
  return (
    <div className='WhatWeDoSection bg-primary container-fluid'>
      <Dashboard>
        <Row className='g-0'>
          <Col xs='12' sm='6' md='2'>
            <Card bg='primary' text='light' className='p-3'>
              <Card.Title className='serif fs-4'>What We Do</Card.Title>
            </Card>
          </Col>
          <Col xs='12' sm='6' md>
            <Card bg='secondary' text='dark' className='p-3'>
              <PenIcons />
              <Card.Title>Plan</Card.Title>
              <Card.Text>
                <b>Lorem ipsum dolor sit amet.</b>
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                fugit perspiciatis tempora voluptatibus sequi, excepturi rerum
              </Card.Text>
            </Card>
          </Col>
          <Col xs='12' sm='6' md>
            <Card bg='vogue' text='dark' className='p-3'>
              <PaperPlane />
              <Card.Title>Collaborate</Card.Title>
              <Card.Text>
                <b>Lorem ipsum dolor sit amet.</b>
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                fugit perspiciatis tempora voluptatibus sequi, excepturi rerum
              </Card.Text>
            </Card>
          </Col>
          <Col xs='12' sm='6' md>
            <Card bg='cloud' text='dark' className='p-3'>
              <CupOfCoffee />
              <Card.Title>Execute</Card.Title>
              <Card.Text>
                <b>Lorem ipsum dolor sit amet.</b>
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                fugit perspiciatis tempora voluptatibus sequi, excepturi rerum
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Dashboard>
    </div>
  );
};

export default WhatWeDoSection;
