// // import Swiper core and required modules
// import { A11y, Autoplay, Scrollbar } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import './section-4.scss';

// import One from './images/1.svg';
// import Two from './images/2.svg';
// import Three from './images/3.svg';
// import Four from './images/4.svg';
// import Five from './images/5.svg';

// const Section5 = () => {
//   return (
//     <Swiper
//       // install Swiper modules
//       modules={[Scrollbar, A11y, Autoplay]}
//       spaceBetween={10}
//       slidesPerView={1}
//       scrollbar={{ draggable: true }}
//       onSwiper={swiper => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//       autoplay={{
//         delay: 1500,
//         disableOnInteraction: false,
//       }}
//     >
//       <div className="slider">
//         <SwiperSlide>
//           <div className="slide">
//             <img className="" src={One} alt="nature1" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="slide">
//             <img src={Two} alt="nature2" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="slide">
//             <img src={Three} alt="nature3" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="slide">
//             <img src={Four} alt="nature4" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="slide">
//             <img className="" src={Five} alt="nature5" />
//           </div>
//         </SwiperSlide>
//       </div>
//       ...
//     </Swiper>
//   );
// };
// export default Section5;
// import Swiper core and required modules
import { A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import './section-4.scss';

import One from './images/1.svg';
import Two from './images/2.svg';
import Three from './images/3.svg';
import Four from './images/4.svg';
import Five from './images/5.svg';

const Section5 = () => {
  return (
    <section className="section-4">
      <h2>Beautiful nature</h2>
      <Swiper
        modules={[A11y, Autoplay]}
        slidesPerView={3}
        spaceBetween={50}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="custom-swiper-section-4"
      >
        <SwiperSlide>
          <div className="slide">
            <img src={One} alt="nature1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={Two} alt="nature2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={Three} alt="nature3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={Four} alt="nature4" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={Five} alt="nature5" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Section5;
