import { Form } from 'react-bootstrap';

const FilterCheckbox = (props) => {
  const data = props.data;
  const title = props.title;
  return (
    <div className='FilterCheckbox'>
      <Form className='bg-cloud p-3 mb-4'>
        <h5 className='fw-bold fs-6 mb-3'>{title}</h5>
        {data.map((element, idx) => (
          <Form.Check key={idx} type='checkbox' id={element} label={element} />
        ))}
      </Form>
    </div>
  );
};

export default FilterCheckbox;
