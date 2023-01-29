import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./styles/resources.module.scss";
import { Modal } from "react-bootstrap";
import { FiUpload } from "react-icons/fi";
import moment from "moment/moment";
import Swal from "sweetalert2";
import EventCard from "../../../components/EventCard";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/loader";
import { eventValidator } from "../../../utils/validators/auth";
import config from "../../../config/index.json";
import axios from "axios";

function Resources(props) {
  const [eventsInfo, setEventsInfo] = useState([]);
  const [isFetching, setIsFetching] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getData() {
     try{
      const response = await axios.get(`${config.apiUrl}/event`, {
        header: `Bearer ${localStorage.getItem("accessToken")}`,
      });
      setEventsInfo(response.data.event);
      setIsFetching(false)
     }catch(error){
        console.log(error.response?.data)
     }
    }
    getData();
  }, []);

  const formik = useFormik({
    initialValues: {
      header: "",
      body: "",
      eventDate:''
    },

    validationSchema: eventValidator(),
    onSubmit: async (values) => {
      setIsLoading(true)
      
      try {
        
        const { data } =await axios.post(`${config.apiUrl}/event`, values, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        Swal.fire({
          icon: "success",
          title: "Event",
          text: "Event created successfully",
        });
        setShowModal(false)
        const events__c = [...eventsInfo]
        events__c.push(values)
        setEventsInfo(events__c)
      } catch (error) {
        console.log(error.response);
        Swal.fire({
          icon: "error",
          title: "Oops....",
          text: error.response.data || "Fail to upload",
          showCancelButton: true,
          showConfirmButton: false,
        });
      }finally{
        setIsLoading(false)
      }
      formik.handleReset();
    },
  });

 
 

  return (
    <div className={styles.resources}>
        {isFetching && <Loader/> }
      <div className={styles.para1}>
        <span className={styles.para1_main}> Resources</span>
        <span>
          {" "}
          <span className={styles.para1_sub} onClick={() => setShowModal(true)}>
            <FiUpload size={20} className={styles.upload} />{" "}
            <span className="hideOnMobile">Upload Resources</span>
          </span>
        </span>
      </div>

      <p className={styles.breadcrumb}>
        <span className={styles.breadcrumb_para1}>Home</span>
        <span className={styles.breadcrumb_para2}>&gt;</span>
        <span className={styles.breadcrumb_para3}>Resources</span>
      </p>

      <div className={styles.events_body}>
        <p className={styles.para2}>
          <span className={styles.para2_main}>Events</span>
        </p>

        <div className="row">
          {eventsInfo.map((info, i) => (
            <div  className="col-12 col-lg-4 col-md-4" key={i}>
              <EventCard
                  text={info?.body}
                  date={info?.eventDate}
              />
            </div>
          ))}
        </div>

        <Modal show={showModal}>
          <div className={styles.modalContainer}>
            <AiOutlineClose
              size={20}
              style={{ marginBottom: "20px", cursor: "pointer" }}
              onClick={() => setShowModal(false)}
            />
            <form onSubmit={formik.handleSubmit}>
              <div className="formBox">
                <div className={styles.modalHeader}>Upload Event</div>
                <div className={styles.formGroup}>
                  <div className={styles.formLabel}>Event Title</div>
                  <div className={styles.input__wrappper}>
                    <input
                      type="text"
                      className={styles.input}
                      name="header"
                      value={formik.values.header}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.header && formik.errors.header && (
                    <p className={styles.errorMsg}>{formik.errors.header}</p>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.formLabel}>Event Date</div>
                  <div className={styles.input__wrappper}>
                    <input
                      type="date"
                      className={styles.input}
                      name="eventDate"
                      value={formik.values.eventDate}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.eventDate && formik.errors.eventDate && (
                    <p className={styles.errorMsg}>{formik.errors.eventDate}</p>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.formLabel}>Event Description</div>
                  <div className={styles.input__wrappper}>
                    <textarea
                      rows="10"
                      type="text"
                      name="body"
                      value={formik.values.body}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></textarea>
                  </div>
                  {formik.touched.body && formik.errors.body && (
                    <p className={styles.errorMsg}>{formik.errors.body}</p>
                  )}
                </div>

                <button disabled={isLoading} type="submit" className={styles.btnSubmit}>
                     {isLoading?'Submitting...':'Submit'}
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Resources;
