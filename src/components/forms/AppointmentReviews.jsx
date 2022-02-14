import axios from 'axios';
import moment from 'moment';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { GiCheckMark } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { rupiahFormatter } from '../../utility/number';

const AppointmentReviews = () => {
  const { reviews } = useSelector((state) => state.appointment);

  const createAppointment = () => {
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_API}`,
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      data: {
        buildingType: reviews.buildingType,
        serviceType: reviews.serviceType,
        estimateTime: reviews.estimatedWorkDuration,
        budget: reviews.budget,
        address: reviews.address,
        note: reviews.note,
        date: moment(reviews.date).format('YYYY-MM-DD'),
        time: reviews.time,
        sections: reviews.sections,
        styles: reviews.styles,
      },
    })
      .then((response) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, send it!',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Sent!', 'Your file has been sent.', 'success');
          }
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      });
  };

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
          <p className='fw-bold m-0'>
            {moment(reviews.date).format('DD MMMM YYYY')} | {reviews.time}{' '}
          </p>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col className='bg-wheat p-4'>
          <p className='fw-bold'>Note</p>
          <p>{reviews.note}</p>
        </Col>
      </Row>
      <div className='d-flex'>
        <Button
          className='ms-auto px-4 mb-5'
          variant='primary'
          type='submit'
          onClick={createAppointment}>
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
