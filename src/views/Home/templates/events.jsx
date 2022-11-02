import React from "react";
import styles from "./styles/events.module.scss";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import EventsCard from "./events/eventsCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import "swiper/css";
const Events = () => {
  return (
    <div className={styles.events}>
      <div className={styles.events_main}>
        <div className={styles.line}></div>
        <div className={styles.para1}>Upcoming Events</div>
      </div>
      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        speed={400}
      >
        <SwiperSlide>
            <EventsCard/>
        </SwiperSlide>
       
        <SwiperSlide><EventsCard/></SwiperSlide>
        <SwiperSlide><EventsCard/></SwiperSlide>
        <SwiperSlide><EventsCard/></SwiperSlide>
        <SwiperSlide><EventsCard/></SwiperSlide>
        <SwiperSlide><EventsCard/></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Events;
