import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { GiCheckMark } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { rupiahFormatter } from '../../utility/number';

const AppointmentReviews = () => {
  const { reviews } = useSelector((state) => state.appointment);

  return (
    <div className='py-7 px-5'>
      <Row className='mb-5'>
        <Col xs={2}>
          <p className='fw-light text-ash m-0'>Building Type</p>
          <p className='fw-bold m-0'>{reviews.buildingType}</p>
        </Col>
        <Col xs={2}>
          <p className='fw-light text-ash m-0'>Area Size</p>
          <p className='fw-bold m-0'>160m2</p>
        </Col>
        <Col xs={3}>
          <p className='fw-light text-ash m-0'>Estimated Work Duration</p>
          <p className='fw-bold m-0'>{reviews.estimatedWorkDuration} Week(s)</p>
        </Col>
        <Col xs={3}>
          <p className='fw-light text-ash m-0'>Budget</p>
          <p className='fw-bold m-0'>{rupiahFormatter(reviews.budget)}</p>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col>
          <p className='fw-light text-ash m-0'>Address</p>
          <p className='fw-bold m-0'>{reviews.address}</p>
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
          <p>{reviews.note}</p>
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
