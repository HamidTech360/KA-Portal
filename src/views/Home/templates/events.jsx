import React, {useState} from "react";
import styles from "./styles/events.module.scss";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Modal } from "react-bootstrap";
import moment from "moment";
import EventsCard from "./events/eventsCard";
import EventDetails from "../../EventDetails";
import { AiOutlineClose } from "react-icons/ai";



import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import "swiper/css";
import { FaLastfmSquare } from "react-icons/fa";


const Events = ({isFetching, events}) => {

  const [selectedSlide, setSelectedSlide] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const trimString = (string)=>{
    return string.split(" ").slice(0, 9).join(" ")  
  }

  const handleSelect = (item)=>{
    setSelectedSlide(item)
    setShowModal(true)
    //console.log(item)
  }

  return (
    <div className={styles.events}>
      <div className={styles.events_main}>
        <div className={styles.line}></div>
        <div className={styles.para1}>Upcoming Events</div>
      </div>
      {isFetching && <h5 className="text-center">Fetching events...</h5>}
      
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
        {events.map((item, i)=>
        <SwiperSlide key={i}>
            <div onClick={()=>handleSelect(item)} style={{cursor:'pointer'}} >
              <EventsCard 
                date={moment(item?.eventDate).format('Do')} 
                month={moment(item?.eventDate).format('MMM')} 
                text={trimString(item?.header)} 
              />
            </div>
        </SwiperSlide>
        )}      
       
      </Swiper>

      <Modal size="lg" show={showModal} >
          
          <div className={styles.modalContent}>
            <AiOutlineClose 
                size={23} 
                style={{marginBottom:'20px', cursor:'pointer'}}
                onClick={()=>setShowModal(false)}
             />
              <EventDetails
                  data={selectedSlide}
              />
          </div>
      </Modal>
    </div>
  );
};

export default Events;
