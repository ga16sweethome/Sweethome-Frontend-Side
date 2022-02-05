import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

const InputSearch = () => {
  return (
    <InputGroup className='InputSearch'>
      <FormControl placeholder='Search' />
      <InputGroup.Text>
        <BsSearch />
      </InputGroup.Text>
    </InputGroup>
  );
};

export default InputSearch;
