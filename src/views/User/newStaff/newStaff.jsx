import React, { useState } from "react";
import styles from "./styles/newStaff.module.scss";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { staffValidator } from "../../../utils/validators/auth";
import config from "./../../../config/index.json";
import axios from "axios";
import  Swal  from "sweetalert2";
function NewStaff(props) {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      role: "",
      phoneNumber: "",
      email: "",
      address: "",
    },
    validationSchema: staffValidator(),
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const { data } = await axios.post(`${config.apiUrl}/staff`, values, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        Swal.fire({
          icon: "success",
          title: "Event",
          text: "User created successfully",
        });
        formik.handleReset();
        // console.log(data);
      } catch (error) {
        console.log(error.response);
        Swal.fire({
          icon: "error",
          title: "Oppsy...",
          text: error.response.data || "Fail to Save Data",
          showCancelButton: true,
          showConfirmButton: false,
        });
      } finally {
        setIsLoading(false);
      }
    },
  });

  //   console.log(formik.handleChange);
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerText}>Add New Staff</div>
        <div className={styles.breadCrumb}>
          <Link style={{ textDecoration: "none" }} to="/user/newStaff">
            <span className={styles.b__student}>Student</span>
          </Link>
          <span className={styles.b__icon}>{">"}</span>
          <span className={styles.b__addNew}>Add New staff</span>
        </div>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>Staff Information</div>

        <form onSubmit={formik.handleSubmit}>
          <Row>
            <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
              <div className={styles.formLabel}>First Name</div>
              <div className={styles.input__wrappper}>
                <input
                  type="text"
                  className={styles.input}
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.firstName && formik.errors.firstName && (
                <p className={styles.errorMsg}>{formik.errors.firstName}</p>
              )}
            </Col>
            <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
              <div className={styles.formLabel}>Last Name</div>
              <div className={styles.input__wrappper}>
                <input
                  type="text"
                  className={styles.input}
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.lastName && formik.errors.lastName && (
                <p className={styles.errorMsg}>{formik.errors.lastName}</p>
              )}
            </Col>
            <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
              <div className={styles.formLabel}>Post</div>
              <div className={styles.input__wrappper}>
                <input
                  type="text"
                  className={styles.input}
                  name="role"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.role && formik.errors.role && (
                <p className={styles.errorMsg}>{formik.errors.role}</p>
              )}
            </Col>
            <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
              <div className={styles.formLabel}>Phone Number</div>
              <div className={styles.input__wrappper}>
                <input
                  type="number"
                  className={styles.input}
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <p className={styles.errorMsg}>{formik.errors.phoneNumber}</p>
              )}
            </Col>

            <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
              <div className={styles.formLabel}>email</div>
              <div className={styles.input__wrappper}>
                <input
                  type="email"
                  className={styles.input}
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className={styles.errorMsg}>{formik.errors.email}</p>
              )}
            </Col>
            <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
              <div className={styles.formLabel}>Address</div>
              <div className={styles.input__wrappper}>
                <textarea
                  rows="3"
                  className={styles.input}
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.address && formik.errors.address && (
                <p className={styles.errorMsg}>{formik.errors.address}</p>
              )}
            </Col>
          </Row>
          <div className={styles.buttons}>
            <button className={styles.btnReset} type="reset">
              Reset
            </button>

            <button
              className={styles.btnSave}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Sving Data" : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewStaff;
