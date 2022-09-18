import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {SliderItem, SliderItemLegend} from '../components/link-games/link-games.styles';

export const SwiperGameSlide = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
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
  );
};