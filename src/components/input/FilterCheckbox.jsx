import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSectionsFilter,
  setStylesFilter,
} from '../../redux/actionCreators/filterAction';

const FilterCheckbox = (props) => {
  const data = props.data;
  const title = props.title;
  const { sections, styles } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleCheckbox = (e) => {
    const category = e.target.value;
    switch (title) {
      case 'Sections':
        return dispatch(setSectionsFilter({ sections, category }));
      case 'Styles':
        return dispatch(setStylesFilter({ styles, category }));
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
