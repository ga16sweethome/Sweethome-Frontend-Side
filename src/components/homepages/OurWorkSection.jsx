import KitchenCard from '../../assets/img/kitchen-card.png';
import { HiArrowSmRight } from 'react-icons/hi';
import LandingPage from '../../layouts/LandingPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Mousewheel, Pagination } from 'swiper';
import { useState } from 'react';

const OurWorkSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const workArray = [
    {
      img: KitchenCard,
      title: 'Title-1',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum eos ab iusto nisi neque iure quasi quae officia et?',
      link: '/',
    },
    {
      img: KitchenCard,
      title: 'Title-2',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum eos ab iusto nisi neque iure quasi quae officia et?',
      link: '/',
    },
    {
      img: KitchenCard,
      title: 'Title-3',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum eos ab iusto nisi neque iure quasi quae officia et?',
      link: '/',
    },
    {
      img: KitchenCard,
      title: 'Title-4',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum eos ab iusto nisi neque iure quasi quae officia et?',
      link: '/',
    },
  ];

  return (
    <div className='OurWorkSection'>
      <LandingPage>
        <div className='content-wrapper d-flex align-items-center flex-column-reverse flex-lg-row py-5 px-3'>
          <div className='content-text text-light d-flex flex-column'>
            <h2 className='serif text-light flex-grow-0 flex-lg-grow-1 h1'>
              Our Work
            </h2>
            <p className=''>
              <span className='fw-bold'>{workArray[activeIndex].title}</span>
              <br />
              Rhoncus sed at nulla odio. Faucibus quam magna feugiat vitae in.
              Risus et fermentum in risus nibh praesent netus bibendum
            </p>
            <a className='text-light text-decoration-none' href='/'>
              <b>
                See Details <HiArrowSmRight />
              </b>
            </a>
          </div>
          <Swiper
            className='img-slider ms-0 ms-lg-5 w-100'
            modules={[EffectCoverflow, Mousewheel, Pagination]}
            slidesPerView={'auto'}
            mousewheel={true}
            direction={'horizontal'}
            centeredSlides={true}
            spaceBetween={10}
            onSlideChange={(swipe) => setActiveIndex(swipe.activeIndex)}
            pagination={{
              type: 'progressbar',
            }}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}>
            {workArray.map((work, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <img src={work.img} alt='card kitchen' />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </LandingPage>
    </div>
  );
};

export default OurWorkSection;
