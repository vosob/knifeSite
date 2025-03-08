import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

// import CatImg from "../../../public/img/swiper/cat.jpg";
// import Zsu from "../../../public/img/swiper/zsu.jpg";
// import Microtech from "../../../public/img/swiper/microtech.jpg";

import CatImg from "/img/swiper/cat.jpg";
import Zsu from "/img/swiper/zsu.jpg";
import Microtech from "/img/swiper/microtech.jpg";

import css from "./Hero.module.css";
export const Hero = () => {
  return (
    <div className={css.HeroContainer}>
      <div className={css.heroLeft}>
        <h1 className={css.HeroMainText}>
          Інтернет-магазин сертифікованих златоустовських ножів
        </h1>
        <h2 className={css.HeroIndeitText}>
          Ласкаво просимо на сайт "ЗЛАТМАКС". В нашому магазині доступний
          найбільш широкий вибір Златоустовських ножів від Златоустовських
          збройних фабрик і компаній, ми є офіційними постачальниками
        </h2>
        <div className={css.BtnMain}>
          <button className={css.BtnContainer}>
            <span className={css.BtnText}>Детальніше</span>
          </button>
        </div>
      </div>
      {/* права сторона */}
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        scrollbar={{
          hide: true,
          draggable: true,
        }}
        modules={[Scrollbar, Autoplay]}
        className={css.mySwiper}
      >
        <SwiperSlide>
          <img src={CatImg} alt="cat image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Zsu} alt="Zsu image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Microtech} alt="Microtech image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
