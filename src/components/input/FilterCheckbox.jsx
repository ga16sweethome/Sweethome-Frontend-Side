import { Form } from 'react-bootstrap';

const FilterCheckbox = (props) => {
  const data = props.data;
  const title = props.title;
  const checked = [];

  const handleCheckbox = (e) => {
    checked.indexOf(e.target.value) < 0
      ? checked.push(e.target.value)
      : checked.splice(checked.indexOf(e.target.value), 1);
  };

  return (
    <div className='FilterCheckbox'>
      <Form className='bg-cloud p-3 mb-4'>
        <h5 className='fw-bold fs-6 mb-3'>{title}</h5>
        {data.map((element, idx) => (
          <Form.Check
            key={idx}
            type='checkbox'
            value={element}
            id={element}
            label={element}
            onChange={(e) => handleCheckbox(e)}
          />
        ))}
      </Form>
    </div>
  );
};

export default FilterCheckbox;
