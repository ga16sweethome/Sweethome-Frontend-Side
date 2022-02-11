import { useState } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

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
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        popperClassName='custom-datepicker'
      />

      <div className='bg-cloud rounded p-4 my-7'>
        <h6 className='fw-bold mb-4'>Select appointment time</h6>
        {timeSlot.map((time) => (
          <Form.Check
            className='mb-2'
            type='radio'
            name='time-slot'
            id={time.replace(' ', '-')}
            label={time}
          />
        ))}
      </div>
    </div>
  );
};

export default AppointmentDate;
