import React, { useState } from "react";
import { useFormik } from "formik";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./styles/resources.module.scss";
import { Modal } from "react-bootstrap";
import { FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";
import { eventsInfo } from "./resourcesData";
import { eventValidator } from "../../../utils/validators/auth";
// import { useFormik } from "formik";

function Resources(props) {
  const formik = useFormik({
    initialValues: {
      eventTitle: "",
      eventDescription: "",
    },

    validationSchema: eventValidator(),
    onSubmit:(values)=>{
      console.log(values);


      formik.handleReset()
    },


  });
// console.log(formik.values);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.resources}>
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
        <span className={styles.breadcrumb_para3}>Resouces</span>
      </p>

      <div className={styles.events_body}>
        <p className={styles.para2}>
          <span className={styles.para2_main}>Events</span>
        </p>

        <div className="row">
          {eventsInfo.map((info, i) => (
            <div className="col-12 col-lg-4 col-md-4">
              <div
                style={{ backgroundImage: `url('../../../assets/events.jpg')` }}
                className={styles.events}
              >
                <div className={styles.badge}>
                  <div className={styles.badge_para1}>
                    <p>{info.date}</p>
                    <p>{info.month}</p>
                  </div>
                </div>
                <p className={styles.events_text}>{info.text}</p>
              </div>
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
                      name="eventTitle"
                      value={formik.values.eventTitle}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  {formik.touched.eventTitle && formik.errors.eventTitle && (
                  <p className={styles.errorMsg}>{formik.errors.eventTitle}</p>
                )}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.formLabel}>Event Description</div>
                  <div className={styles.input__wrappper}>
                    <textarea
                      rows="10"
                      type="text"
                      name="eventDescription"
                      value={formik.values.eventDescription}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></textarea>
                  </div>
                  {formik.touched.eventDescription && formik.errors.eventDescription && (
                  <p className={styles.errorMsg}>{formik.errors.eventDescription}</p>
                )}
                </div>

                <button type="submit" className={styles.btnSubmit}>Submit</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Resources;
