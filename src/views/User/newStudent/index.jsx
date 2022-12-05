import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles/new.module.scss";
import { useFormik } from "formik";

const RegisterStudent = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      admissionDate: "",
      address: "",
      state: "",
      level: "",
      parentName: "",
      parentAddress: "",
      phoneNumber: "",
    },
  });

  console.log(formik.values);
  console.log(formik.handleBlur);
  return (
    <div className={styles.addNewPage}>
      <div className={styles.header}>
        <div className={styles.headerText}>Add New Student</div>
        <div className={styles.breadCrumb}>
          <Link style={{ textDecoration: "none" }} to="/user/students">
            <span className={styles.b__student}>Student</span>
          </Link>
          <span className={styles.b__icon}>{">"}</span>
          <span className={styles.b__addNew}>Add New student</span>
        </div>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.formHeader}>Student Information</div>

        <form>
          <div className={styles.formContent}>
            <Row className={styles.row}>
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
              </Col>
            </Row>

            <Row className={styles.row}>
              <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                <div className={styles.formLabel}>Gender</div>
                <div className={styles.input__wrappper}>
                  <select
                    className={styles.input}
                    onChange={formik.handleChange}
                    name="gender"
                    value={formik.values.gender}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </Col>

              <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                <div className={styles.formLabel}>Date of Birth</div>
                <div className={styles.input__wrappper}>
                  <input
                    type="date"
                    className={styles.input}
                    name="dob"
                    value={formik.values.dob}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </Col>
            </Row>

            <Row className={styles.row}>
              <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                <div className={styles.formLabel}>Admission Date</div>
                <div className={styles.input__wrappper}>
                  <input
                    type="date"
                    className={styles.input}
                    name="admissionDate"
                    value={formik.values.admissionDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </Col>

              <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                <div className={styles.formLabel}>Residential Address</div>
                <div className={styles.input__wrappper}>
                  <input
                    type="text"
                    className={styles.input}
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </Col>
            </Row>

            <Row className={styles.row}>
              <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                <div className={styles.formLabel}>State of Origin</div>
                <div className={styles.input__wrappper}>
                  <input
                    type="text"
                    className={styles.input}
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </Col>

              <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                <div className={styles.formLabel}>Current Level</div>
                <div className={styles.input__wrappper}>
                  <select
                    className={styles.input}
                    name="level"
                    value={formik.values.level}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">select level</option>
                    <option value={10}>SSS 3</option>
                    <option value={9}>SSS 2</option>
                    <option value={8}>SSS 1</option>
                  </select>
                </div>
              </Col>
            </Row>
          </div>

          <div className={styles.formContent}>
            <div className={`${styles.formHeader} mb-5`}>
              Parent Information
            </div>
            <Row className={styles.row}>
              <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                <div className={styles.formLabel}>Parent/Guardian Name </div>
                <div className={styles.input__wrappper}>
                  <input
                    type="text"
                    className={styles.input}
                    name="parentName"
                    value={formik.values.parentName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </Col>

              <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                <div className={styles.formLabel}>Parent Address</div>
                <div className={styles.input__wrappper}>
                  <input
                    type="text"
                    className={styles.input}
                    name="parentAddress"
                    value={formik.values.parentAddress}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </Col>
            </Row>

            <Row className={styles.row}>
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
              </Col>
            </Row>
            <div className={styles.buttons}>
              <button className={styles.btnReset}>Reset</button>
              <button className={styles.btnSave}>Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterStudent;
