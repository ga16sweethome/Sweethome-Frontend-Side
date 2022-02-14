import { useEffect, useState } from 'react';
import { Container, Nav, Tab } from 'react-bootstrap';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import {
  AppointmentDate,
  AppointmentReviews,
  FormEnquiryDetails,
} from '../components';
import Default from '../layouts/Default';

const Appointment = () => {
  const [activeTab, setActiveTab] = useState('enquirydetails');
  const [dateTab, setDateTab] = useState(false);
  const [reviewTab, setReviewTab] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   switch (activeTab) {
  //     case 'enquiryDetails':
  //       navigate('enquirydetails');
  //       break;
  //     case 'appointmentDate':
  //       navigate('date');
  //       break;
  //     case 'reviews':
  //       navigate('reviews');
  //       break;
  //     default:
  //       navigate('enquirydetails');
  //       break;
  //   }
  // }, [activeTab, navigate]);

  // hanya sementara selama fitur login / register belum jalan
  useEffect(() => {
    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImVtYWlsIjoia2VuQHByb2c4LmNvbSIsIm5hbWUiOiJLZW4gVGhlIE5pbmphIiwicGljdHVyZSI6Imh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RqZWV3bWNkcC9pbWFnZS91cGxvYWQvdjE2NDQwODA1Njgvc3dlZXRob21lL2FwYWthaF92aTV4YjkucG5nIiwicGhvbmUiOiIrNjIgODExMSAyMjIyIDIyMjIiLCJpYXQiOjE2NDQ3Mzc4MjksImV4cCI6MTY0NDc1NTgyOX0.K7HEjMfkRJ1zW7_WONVQNgLTb3jamO_5SRf4LfSPWJ0'
    );
  }, []);

  return (
    <Default>
      <div className='Appointment'></div>
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
            <Nav
              justify
              variant='tabs'
              defaultActiveKey='enquirydetails'
              className='bg-secondary container'>
              <Nav.Item>
                <Nav.Link className='fw-bold' eventKey='enquirydetails'>
                  Enquiry Details
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className='fw-bold'
                  eventKey='appointmentdate'
                  disabled={!dateTab}>
                  Appointment Date
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className='fw-bold'
                  eventKey='reviews'
                  disabled={!reviewTab}>
                  Reviews
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tab.Content>
            <Tab.Pane eventKey='enquirydetails' className='container'>
              <FormEnquiryDetails
                onSubmit={() => {
                  setActiveTab('appointmentdate');
                  setDateTab(true);
                }}
              />
            </Tab.Pane>
            <Tab.Pane eventKey='appointmentdate' className='container'>
              <AppointmentDate
                onSubmit={() => {
                  setActiveTab('reviews');
                  setReviewTab(true);
                }}
              />
            </Tab.Pane>
            <Tab.Pane eventKey='reviews' className='container'>
              <AppointmentReviews />
            </Tab.Pane>
          </Tab.Content>
          <Outlet />
        </Tab.Container>
      </div>
    </Default>
  );
};

export default Appointment;
