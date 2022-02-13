import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { BiRightArrowAlt } from 'react-icons/bi';

const AppointmentDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const timeSlot = [
    '09.00am - 10.00am',
    '10.00am - 11.00am',
    '11.00am - 12.00am - Full Booked',
  ];

  return (
    <div className='AppointmentDate py-7 px-5'>
      <label htmlFor='input-datepicker' className='fw-bold fs-6'>
        Date<span className='text-danger'>*</span>
      </label>
      <DatePicker
        id='input-datepicker'
        className='form-control py-2 w-50'
        dateFormat='yyyy-MM-dd'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        popperClassName='custom-datepicker'
      />

      <div className='bg-cloud rounded p-4 my-7'>
        <h6 className='fw-bold mb-4'>Select appointment time</h6>
        {timeSlot.map((time, idx) => (
          <Form.Check
            className='mb-2'
            key={idx}
            type='radio'
            name='time-slot'
            disabled={false}
            id={time.replace(' ', '-')}
            label={time}
          />
        ))}
      </div>
      <div className='d-flex'>
        <Button className='ms-auto px-5 mb-5' variant='primary' type='submit'>
          Next <BiRightArrowAlt />
        </Button>
      </div>
    </div>
  );
};

export default AppointmentDate;
