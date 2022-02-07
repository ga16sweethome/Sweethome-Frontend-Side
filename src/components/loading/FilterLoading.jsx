import { Placeholder } from 'react-bootstrap';

const FilterLoading = () => {
  return (
    <div className='FilterLoading'>
      <div className='bg-cloud p-3 mb-4'>
        <Placeholder as='h5' animation='glow' className='mb-3'>
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder animation='glow'>
          <Placeholder className='my-2' xs={10} />
          <Placeholder className='my-2' xs={8} />
          <Placeholder className='my-2' xs={9} />
          <Placeholder className='my-2' xs={10} />
          <Placeholder className='my-2' xs={7} />
          <Placeholder className='my-2' xs={9} />
          <Placeholder className='my-2' xs={7} />
        </Placeholder>
      </div>
      <div className='bg-cloud p-3 mb-4'>
        <Placeholder as='h5' animation='glow' className='mb-3'>
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder animation='glow'>
          <Placeholder className='my-2' xs={10} />
          <Placeholder className='my-2' xs={8} />
          <Placeholder className='my-2' xs={9} />
          <Placeholder className='my-2' xs={10} />
          <Placeholder className='my-2' xs={7} />
          <Placeholder className='my-2' xs={9} />
          <Placeholder className='my-2' xs={7} />
        </Placeholder>
      </div>
    </div>
  );
};

export default FilterLoading;
