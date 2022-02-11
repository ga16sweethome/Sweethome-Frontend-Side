import { useState } from 'react';
import DatePicker from 'react-datepicker';

const AppointmentDate = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='AppointmentDate py-7 px-5'>
      <h1>AppointmentDate</h1>
      <DatePicker
        className='form-control w-25'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        popperClassName='custom-datepicker'
      />
    </div>
  );
};

export default AppointmentDate;
