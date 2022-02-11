import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { GiCheckMark } from 'react-icons/gi';

const AppointmentReviews = () => {
  return (
    <div className='py-7 px-5'>
      <Row className='mb-5'>
        <Col xs={2}>
          <p className='fw-light text-ash m-0'>Building Type</p>
          <p className='fw-bold m-0'>House</p>
        </Col>
        <Col xs={2}>
          <p className='fw-light text-ash m-0'>Area Size</p>
          <p className='fw-bold m-0'>160m2</p>
        </Col>
        <Col xs={3}>
          <p className='fw-light text-ash m-0'>Estimated Work Duration</p>
          <p className='fw-bold m-0'>1 Month</p>
        </Col>
        <Col xs={3}>
          <p className='fw-light text-ash m-0'>Budget</p>
          <p className='fw-bold m-0'>Rp. 1.000.000.000</p>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col>
          <p className='fw-light text-ash m-0'>Address</p>
          <p className='fw-bold m-0'>Palm Beach, Pakuwon City, Surabaya</p>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col>
          <p className='fw-light text-ash m-0'>Date and Time</p>
          <p className='fw-bold m-0'>1 March 2021 | 09.00 am - 10.00 am </p>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col className='bg-wheat p-4'>
          <p className='fw-bold'>Note</p>
          <p>
            Get free professional consultation. Volutpat, risus sit augue at
            amet orci mauris viverra.
            <br />
            Get free professional consultation. Volutpat, risus sit augue at
            amet orci mauris viverra.
          </p>
        </Col>
      </Row>
      <div className='d-flex'>
        <Button className='ms-auto px-4 mb-5' variant='primary' type='submit'>
          <i className='me-3'>
            <GiCheckMark />
          </i>
          Create Appointment
        </Button>
      </div>
    </div>
  );
};

export default AppointmentReviews;
