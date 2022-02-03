import KitchenCard from '../../assets/img/kitchen-card.png';
import { HiArrowSmRight } from 'react-icons/hi';

const OurWorkSection = () => {
  return (
    <div className='OurWorkSection'>
      <div className='content-wrapper d-flex align-items-center px-3 h-100'>
        <div className='content-text text-light d-flex flex-column'>
          <h2 className='serif text-light flex-grow-1 h1'>Our Work</h2>
          <p className='sans-serif mb-1'>
            <b>Appartement Living Room Redesign</b>
          </p>
          <p>
            Rhoncus sed at nulla odio. Faucibus quam magna feugiat vitae in.
            Risus et fermentum in risus nibh praesent netus bibendum
          </p>
          <a className='text-light text-decoration-none' href='/'>
            <b>
              See Details <HiArrowSmRight />
            </b>
          </a>
        </div>
        <div className='img-slider'>
          <img src={KitchenCard} alt='card kitchen' />
        </div>
      </div>
    </div>
  );
};

export default OurWorkSection;
