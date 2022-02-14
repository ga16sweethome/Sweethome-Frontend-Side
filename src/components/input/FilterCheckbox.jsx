import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSectionsFilter,
  setStylesFilter,
} from '../../redux/actionCreators/filterAction';

const FilterCheckbox = (props) => {
  const data = props.data;
  const title = props.title;
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleCheckbox = (e) => {
    const key = e.target.value;
    const checked = e.target.checked;
    switch (title) {
      case 'Sections':
        return dispatch(setSectionsFilter({ key, checked }));
      case 'Styles':
        return dispatch(setStylesFilter({ key, checked }));
      default:
        break;
    }
  };

  return (
    <div className='FilterCheckbox'>
      <Form className='bg-cloud p-3 mb-4'>
        <h5 className='fw-bold fs-6 mb-3'>{title}</h5>
        {data.map((element, idx) => (
          <Form.Check
            key={idx}
            type='checkbox'
            checked={element.value}
            value={element.name}
            id={element.id}
            label={element.name}
            onChange={(e) => handleCheckbox(e)}
          />
        ))}
      </Form>
    </div>
  );
};

export default FilterCheckbox;
