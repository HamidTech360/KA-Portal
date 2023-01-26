import React, {useState} from "react";
import styles from './styles/event.module.scss'
import {HiLocationMarker} from "react-icons/hi"
import {FaRegCalendarAlt} from "react-icons/fa"
import {IoPricetagSharp} from "react-icons/io5"
import event2 from '../../assets/event2.png'

const EventDetails = () => {
    return (
        <div className={styles.resources}>
          <div className={styles.para1}>
            <span className={styles.para1_main}> Resources</span>
          </div>
    
          <p className={styles.breadcrumb}>
            <span className={styles.breadcrumb_para1}>Home</span>
            <span className={styles.breadcrumb_para2}>&gt;</span>
            <span className={styles.breadcrumb_para3}>Resources</span>
            <span className={styles.breadcrumb_para2}>&gt;</span>
            <span className={styles.breadcrumb_para3}>Events</span>
          </p>
    
          <div className={styles.top_barnner} style={{backgroundImage:`url('../../../assets/events.jpg')`}}>
            <div className={styles.badge}>
              <div className={styles.badge_para1}>
                <p>25 - 27</p>
                <p>March</p>
              </div>
            </div>
            <div className={styles.barnner_details}>
               <div className={styles.banner_ele1}>Careers Opportunity at Khayrul </div>
               <div className={styles.banner_ele2}>Adab School</div>
               <div className={styles.banner_ele3}><HiLocationMarker /> KM 30, Lagos Ibadan Expressway, Apata, Oyo State</div>
            </div>
            <button className={styles.btnRegister}>
              Register Today
            </button>
          </div>
    
          <div className={styles.about_event}>
            <div className={styles.about1}>
              <h4>About the Event</h4>
              <p className={styles.note}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum, architecto obcaecati 
                  recusandae molestias vero laboriosam, numquam saepe fugit id ipsum nisi sunt cum excepturi dicta
                  eaque hic voluptatum quaerat.
              </p>
              <p className={styles.note}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur architecto ullam, sit dignissimos 
                adipisci cupiditate beatae corporis facere exercitationem delectus.
              </p>
              <div>
                 <p className={styles.note}><FaRegCalendarAlt color="#1A8F4A" /> Saturday, 25th March - Monday, 27th March, 2023</p>
                 <p className={styles.note}><IoPricetagSharp fill="#1A8F4A" /> #5000.00 Only</p>
              </div>
            </div>
            <div className={styles.about2}>
                <img src={event2} className={styles.event2} />
            </div> 
          </div>
        </div>
      );
}
 
export default EventDetails;