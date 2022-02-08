import React from 'react';
import { Button } from 'react-bootstrap';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonyCard } from '..';

const TestimonyCardsSlider = () => {
  return (
    <div className='TestimonyCardsSlider d-flex mt-5'>
      <Button className='btn-prev rounded-circle' variant='secondary'>
        <BiLeftArrow />
      </Button>
      <Swiper
        className='testimony-slider w-100'
        modules={[Scrollbar, Navigation]}
        slidesPerView={'auto'}
        direction={'horizontal'}
        spaceBetween={16}
        grabCursor={true}
        navigation={{
          nextEl: '.btn-next',
          prevEl: '.btn-prev',
        }}
        scrollbar={{
          hide: false,
          draggable: true,
        }}>
        <SwiperSlide>
          <TestimonyCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonyCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonyCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonyCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonyCard />
        </SwiperSlide>
      </Swiper>
      <Button className='btn-next rounded-circle' variant='secondary'>
        <BiRightArrow />
      </Button>
    </div>
  );
};

export default TestimonyCardsSlider;
