import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {SliderItem, SliderItemLegend} from '../components/link-games/link-games.styles';

export const SwiperNavigation = () => {
  return (

    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
  <SwiperSlide>
    <SliderItem>
      <a href="">
        <img src="/game1.svg" alt="" />
      </a>

      <SliderItemLegend>
        <h4>League of Legends</h4>
        <p>4 Anúncios</p>
      </SliderItemLegend>
    </SliderItem>
  </SwiperSlide>
  <SwiperSlide>
    <SliderItem>
      <a href="">
        <img src="/game1.svg" alt="" />
      </a>

      <SliderItemLegend>
        <h4>League of Legends</h4>
        <p>4 Anúncios</p>
      </SliderItemLegend>
    </SliderItem>
  </SwiperSlide>
  <SwiperSlide>
    <SliderItem>
      <a href="">
        <img src="/game1.svg" alt="" />
      </a>

      <SliderItemLegend>
        <h4>League of Legends</h4>
        <p>4 Anúncios</p>
      </SliderItemLegend>
    </SliderItem>
  </SwiperSlide>
  <SwiperSlide>
    <SliderItem>
      <a href="">
        <img src="/game1.svg" alt="" />
      </a>

      <SliderItemLegend>
        <h4>League of Legends</h4>
        <p>4 Anúncios</p>
      </SliderItemLegend>
    </SliderItem>
  </SwiperSlide>
  </Swiper>
  )
};