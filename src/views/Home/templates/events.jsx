import React from "react";
import styles from "./styles/events.module.scss";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import EventsCard from "./events/eventsCard";


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
       breakpoints={{
         320:{
          width:320,
          slidesPerView:1.05,
          spaceBetween:10,
          

          
         },
          640: {
            width: 640,
            slidesPerView: 1.05,
            spaceBetween:10,
           

          },
         
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween:30,
         

          },
        }}
        modules={[Navigation, Scrollbar]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        speed={1000}
        initialSlide={2}
       
        
      >       
        <SwiperSlide><EventsCard date='24-25' month='march' text='Careers Opportunity at Kharul Adab School'  /></SwiperSlide>
        <SwiperSlide><EventsCard date='24-25' month='march' text='Careers Opportunity at Kharul Adab School'  /></SwiperSlide>
        <SwiperSlide><EventsCard date='24-25' month='march' text='Careers Opportunity at Kharul Adab School'  /></SwiperSlide>
        <SwiperSlide><EventsCard date='24-25' month='march' text='Careers Opportunity at Kharul Adab School'  /></SwiperSlide>
        <SwiperSlide><EventsCard date='24-25' month='march' text='Careers Opportunity at Kharul Adab School'  /></SwiperSlide>
        <SwiperSlide><EventsCard date='24-25' month='march' text='Careers Opportunity at Kharul Adab School'  /></SwiperSlide>
        <SwiperSlide><EventsCard date='24-25' month='march' text='Careers Opportunity at Kharul Adab School'  /></SwiperSlide>

      </Swiper>

      
    </div>
  );
};

export default Events;
