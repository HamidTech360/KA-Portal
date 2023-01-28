import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./styles/resources.module.scss";
import { Modal } from "react-bootstrap";
import { FiUpload } from "react-icons/fi";
import moment from "moment/moment";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

// import { eventsInfo } from "./resourcesData";
import { eventValidator } from "../../../utils/validators/auth";
// import { useFormik } from "formik";
import config from "../../../config/index.json";
import axios from "axios";

function Resources(props) {
  const [eventsInfo, setEventsInfo] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`${config.apiUrl}/event`, {
        header: `Bearer ${localStorage.getItem("accessToken")}`,
      });
      console.log(response.data.event);
      setEventsInfo(response.data.event);
    }
    getData();
  }, []);

  const formik = useFormik({
    initialValues: {
      header: "",
      body: "",
    },

    validationSchema: eventValidator(),
    onSubmit: (values) => {
      try {
        const { data } = axios.post(`${config.apiUrl}/event`, values, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        Swal.fire({
          icon: "success",
          title: "Event",
          text: "Event created successfully",
        });
      } catch (error) {
        console.log(error.response);
        Swal.fire({
          icon: "error",
          title: "Oops....",
          text: error.response.data || "Fail to upload",
          showCancelButton: true,
          showConfirmButton: false,
        });
      }

      console.log(values);
      formik.handleReset();
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
        <span className={styles.breadcrumb_para3}>Resources</span>
      </p>

      <div className={styles.events_body}>
        <p className={styles.para2}>
          <span className={styles.para2_main}>Events</span>
        </p>

        <div className="row">
          {eventsInfo.map((info, i) => (
            <div className="col-12 col-lg-4 col-md-4" key={i}>
              <div
                style={{ backgroundImage: `url('../../../assets/events.jpg')` }}
                className={styles.events}
              >
                <div className={styles.badge}>
                  <div className={styles.badge_para1}>
                    <p>{moment(info.createAt).format('Do')} </p>
                    <p>{moment(info.createAt).format('MMM')} </p>
                    
                  </div>
                </div>
                <p className={styles.events_text}>{info.body}</p>
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

                <button type="submit" className={styles.btnSubmit}>
                  Submit
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
