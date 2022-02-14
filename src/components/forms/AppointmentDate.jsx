import axios from 'axios';
// import { Formik } from 'formik';
import moment from 'moment';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setReviews } from '../../redux/actionCreators/appointmentAction';
import { scrollToTop } from '../../utility/scroll';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//   date: Yup.string().required('Required!'),
//   time: Yup.string().required('Required!'),
// });

const AppointmentDate = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [date, setDate] = useState(moment(selectedDate).format('yyyy-MM-DD'));
  const [time, setTime] = useState();
  const [timeSlot, setTimeSlot] = useState(['']);

  const { serviceType } = useSelector((state) => state.appointment.reviews);
  const dispatch = useDispatch();

  console.log(serviceType);

  useEffect(() => {
    setDate(selectedDate);
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
        setTimeSlot(response.data);
      });
    }
  }, [date, serviceType]);

  console.log(timeSlot);

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
    props.onSubmit();
    scrollToTop();
    dispatch(setReviews(data));
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
                disabled={time.isFull}
                id={`timeSlot-${time.id}`}
                label={`${time.time} ${time.isFull ? 'Full Booked' : ''}`}
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
