import React, { useState } from "react";
import { useFormik } from "formik";
import styles from "./notificationModal.module.scss";
import { notificationValidator } from "./../../../../utils/validators/auth/index";

function NotificationModal(props) {
  //   const [isLoading, setIsLoading] = false;
  const formik = useFormik({
    initialValues: {
      header: "",
      body: "",
    },
    validationSchema: notificationValidator(),
    onSubmit:(values)=>{

        
        console.log(values);

        formik.handleReset();
    }
    });
  
//   console.log(formik.values);
  return (
    <div className={styles.modalContainer}>
      <form onSubmit={formik.handleSubmit}>
        <div className="formBox">
          <div className={styles.modalHeader}>Upload Notification</div>
          <div className={styles.formGroup}>
            <div className={styles.formLabel}>Notification Title</div>
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
            <div className={styles.formLabel}>Notification Description</div>
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
  );
}

export default NotificationModal;
