import React, {useState} from "react";
import { useFormik } from "formik";
import {AiOutlineClose} from 'react-icons/ai'
import styles from "./styles/resources.module.scss";
import { Modal } from "react-bootstrap";
import { FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";
import {  eventsInfo } from "./resourcesData";
import {HiLocationMarker} from "react-icons/hi"
import {FaRegCalendarAlt} from "react-icons/fa"
import {IoPricetagSharp} from "react-icons/io5"
import event2 from '../../../assets/event2.png'


function Resources(props) {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className={styles.resources}>
      <div className={styles.para1}>
        <span className={styles.para1_main}> Resources</span>
        <span>
          {" "}
          <span className={styles.para1_sub} onClick={()=>setShowModal(true)} >
            <FiUpload size={20} className={styles.upload} />{" "}
            <span className="hideOnMobile">Upload Resources</span>
          </span>
        </span>
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

      <div className={styles.events_body}>
        <p className={styles.para2}>
          <span className={styles.para2_main}>Events</span>
        </p>

        <div className="row">
          { eventsInfo.map((info,i)=>(

          <div  className="col-12 col-lg-4 col-md-4">
            <div style={{backgroundImage:`url('../../../assets/events.jpg')`}} className={styles.events}>
              <div className={styles.badge}>
                <div className={styles.badge_para1}>
                  <p>{info.date}</p>
                  <p>{info.month}</p>
                </div>
              </div>
              <p className={styles.events_text}>
                {info.text}
              </p>
            </div>
          </div>
          )) }
        </div>

        <Modal show={showModal}>
            <div className={styles.modalContainer}>
                <AiOutlineClose
                   size={20} 
                   style={{marginBottom:'20px', cursor:'pointer'}}
                   onClick={()=>setShowModal(false)}
                />
                <form>
                <div className="formBox">
                      <div className={styles.modalHeader}>Upload Event</div>
                      <div className={styles.formGroup}>
                        <div className={styles.formLabel}>Event Title</div>
                        <div className={styles.input__wrappper}>
                          <input
                            type="text"
                            className={styles.input}
                            name="header"
                            // value={formik.values.address}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                          />
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <div className={styles.formLabel}>Event Description</div>
                        <div className={styles.input__wrappper}>
                          <textarea
                            rows="10"
                            type="text"
                            name="body"
                            // value={formik.values.address}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                          ></textarea>
                        </div>
                      </div>

                      <button className={styles.btnSubmit}>Submit</button>
                  </div>
                </form>
            </div>
        </Modal>
      </div>
    </div>
  );
}

export default Resources;
