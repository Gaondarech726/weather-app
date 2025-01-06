// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import './section-5.scss';

import BerestenImg from './images/DimaBeresten.jpg';
import HoncharenkoImg from './images/AntonHoncharenko.jpg';
import StepenkoImg from './images/KhrystynaStepenko.jpg';
import KalinichenkoImg from './images/MariaKalinichenko.jpg';
import IvahImg from './images/IvahSvyatoslav.jpg';
import TerletskyyImg from './images/DmytroTerletskyy.jpg';
import KoruzhynetsImg from './images/KoruzhynetsAnna.jpg';
import MelnykImg from './images/MaksimMelnyk.jpg';

const Section5 = () => {

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <div className="slider">
        <SwiperSlide>
          <div className="slide">
            <img className="BerestenImg" src={BerestenImg} alt="" />
            <p>Project Manager</p>
            <p>Dima Beresten</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={HoncharenkoImg} alt="" />
            <p>Tech Lead, Frontend Developer</p>
            <p>Anton Honcharenko</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={StepenkoImg} alt="" />
            <p>Scrum Master, Frontend Developer</p>
            <p>Khrystyna Stepenko</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={KalinichenkoImg} alt="" />
            <p>Christmas DJ, Frontend Developer</p>
            <p>Maria Kalinichenko</p>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="slide">
            <img src={TerletskyyImg} alt="" />
            <p>Frontend Developer</p>
            <p>Dmytro Terletskyy</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={KoruzhynetsImg} alt="" />
            <p>Frontend Developer</p>
            <p>Anna Koruzhynets</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img className="IvahImg" src={IvahImg} alt="" />
            <p>Frontend Developer</p>
            <p>Svyatoslav Ivah</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={MelnykImg} alt="" />
            <p>Frontend Developer</p>
            <p>Maksim Melnyk</p>
          </div>
        </SwiperSlide>
      </div>
      ...
    </Swiper>
  )
};
export default Section5;
