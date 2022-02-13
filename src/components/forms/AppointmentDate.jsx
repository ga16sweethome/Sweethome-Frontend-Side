import axios from 'axios';
// import { Formik } from 'formik';
import moment from 'moment';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//   date: Yup.string().required('Required!'),
//   time: Yup.string().required('Required!'),
// });

const AppointmentDate = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [date, setDate] = useState(moment(selectedDate).format('yyyy-MM-DD'));
  const [time, setTime] = useState();
  const [timeSlot, setTimeSlot] = useState(['']);

  const { serviceType } = useSelector((state) => state.appointment.reviews);

  console.log(serviceType);

  useEffect(() => {
    setDate(moment(selectedDate).format('yyyy-MM-DD'));
  }, [selectedDate]);

  useEffect(() => {
    if (serviceType) {
      axios({
        method: 'get',
        url: `${process.env.REACT_APP_BASE_API}timeslot`,
        params: {
          date: date,
          servicetype: serviceType,
        },
      }).then((response) => {
        setTimeSlot(response);
      });
    }
  }, [date, serviceType]);

  // const times = [
  //   '09.00am - 10.00am',
  //   '10.00am - 11.00am',
  //   '11.00am - 12.00am - Full Booked',
  // ];

  const submitData = (e) => {
    e.preventDefault();
    const data = {
      date,
      time,
    };
    console.log(data);
  };

  return (
    // <Formik
    //   validationSchema={validationSchema}
    //   onSubmit={(values) => console.log(values)}
    //   initialValues={{
    //     date: new Date(),
    //     time: '',
    //   }}>
    //   {({
    //     handleSubmit,
    //     handleChange,
    //     handleBlur,
    //     values,
    //     dirty,
    //     isValid,
    //     errors,
    //     touched,
    //   }) => (
    <Form>
      <Row className='AppointmentDate py-7 px-5'>
        <Col xs={6}>
          <label htmlFor='input-datepicker' className='fw-bold fs-6'>
            Date<span className='text-danger'>*</span>
          </label>
          <DatePicker
            id='input-datepicker'
            className='form-control py-2'
            dateFormat='yyyy-MM-dd'
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            popperClassName='custom-datepicker'
          />
        </Col>

        <Col xs={12} className='bg-cloud rounded p-4 my-7'>
          <h6 className='fw-bold mb-4'>Select appointment time</h6>
          {timeSlot &&
            timeSlot.map((time, idx) => (
              <Form.Check
                className='mb-2'
                key={idx}
                type='radio'
                name='time-slot'
                disabled={false}
                id={`timeSlot-${time.id}`}
                label={time.time}
                value={time.time}
                onChange={(e) => e.target.checked && setTime(e.target.value)}
              />
            ))}
        </Col>
        <Col xs={12} className='d-flex'>
          <Button
            className='ms-auto px-5 mb-5'
            variant='primary'
            type='submit'
            onClick={(e) => submitData(e)}>
            Next <BiRightArrowAlt />
          </Button>
        </Col>
      </Row>
    </Form>
    //   )}
    // </Formik>
  );
};

export default AppointmentDate;
