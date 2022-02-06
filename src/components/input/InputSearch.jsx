import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../redux/actionCreators/filterAction';

const InputSearch = () => {
  const search = useSelector((state) => state.filter.search);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <InputGroup className='InputSearch'>
      <FormControl
        placeholder='Search'
        value={search}
        onChange={(e) => handleSearch(e)}
      />
      <InputGroup.Text>
        <BsSearch />
      </InputGroup.Text>
    </InputGroup>
  );
};

export default InputSearch;
