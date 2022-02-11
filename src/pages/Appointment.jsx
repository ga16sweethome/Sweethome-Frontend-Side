import { useState } from 'react';
import { Container, Nav, Tab } from 'react-bootstrap';
import { FormEnquiryDetails } from '../components';
import Default from '../layouts/Default';

const Appointment = () => {
  const [activeTab, setActiveTab] = useState('enquiryDetails');
  return (
    <Default>
      <div className='Appointment pt-3'>
        <header className='bg-secondary'>
          <Container className='py-5'>
            <h3 className='fw-bold'>New Appointment</h3>
            <p>Get free professional consultation, Rhoncus sed at nulla odio</p>
          </Container>
        </header>
        <Tab.Container
          id='appointment-form'
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}>
          <div className='bg-secondary'>
            <Nav justify variant='tabs' className='bg-secondary container'>
              <Nav.Item>
                <Nav.Link className='fw-bold' eventKey='enquiryDetails'>
                  Enquiry Details
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='fw-bold' eventKey='appointmentDate'>
                  Appointment Date
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='fw-bold' eventKey='reviews'>
                  Reviews
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tab.Content>
            <Tab.Pane eventKey='enquiryDetails' className='container'>
              <FormEnquiryDetails />
            </Tab.Pane>
            <Tab.Pane eventKey='appointmentDate' className='container'>
              <h1>Ini Tabs Appoint Date</h1>
            </Tab.Pane>
            <Tab.Pane eventKey='reviews' className='container'>
              <h1>Ini Tabs Reviews</h1>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </Default>
  );
};

export default Appointment;
