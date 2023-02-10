import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import config from "../../../config";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { levels } from "../../../utils/helpers/data/levels";
import styles from "./styles/new.module.scss";
import OTPModal from "../../../components/OTPModal/otpmodal";
import { useFormik } from "formik";
import Loader from "../../../components/Loader/loader";
import { RegisterValidator } from "./../../../utils/validators/auth/index";

const RegisterStudent = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const action = searchParams.get("action");
  const studentId = searchParams.get("id");
  const [isLoading, setisLoading] = useState(false);
  const [openAuthMoal, setOpenAuthModal] = useState(false);
  const [OTPVerified, setOTPVerified] = useState(false);
  const [isFetching, setIsFetching] = useState(
    action === "edit" ? true : false
  );
  const [record, setRecord] = useState({});

  useEffect(() => {
    (async function () {
      if (action === "edit" && studentId) {
        setIsFetching(true);
        try {
          const response = await axios.get(
            `${config.apiUrl}/student/${studentId}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            }
          );
          // console.log(response.data.student)
          setRecord(response.data.student);
          setIsFetching(false);
        } catch (error) {
          console.log(error.response?.data);
          navigate("/user/students");
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (action === "edit") {
      formik.setValues({
        firstName: record?.firstName,
        lastName: record.lastName,
        gender: record.gender,
        dob: record.dob?.split("/").reverse().join("-"),
        admissionDate: record.admissionDate?.split("/").reverse().join("-"),
        address: record.address,
        state: record.state,
        level: record.level,
        parentName: record.parentName,
        phoneNumber: record.phoneNumber,
        parentAddress: record.parentAddress,
      });
    }
  }, [record]);
  // console.log(record)

  const authOTP = () => {
    setOTPVerified(true);
    setOpenAuthModal(false);
    formik.handleSubmit();
  };

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
    validationSchema: RegisterValidator(),
    onSubmit: async (values) => {
      // if (!OTPVerified && !openAuthMoal) {
      //   return setOpenAuthModal(true);
      // }

      setisLoading(true);
      try {
        //*******************************editing record**************************************//
        if (action === "edit") {
          const { data } = await axios.put(
            `${config.apiUrl}/student/${studentId}`,
            values,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            }
          );
          console.log(data);
          Swal.fire({
            icon: "success",
            title: "Student record updated",
            text: `Stuent Record updated with success`,
          });
          formik.handleReset();
          return;
        }
        ///////_______________________________________________________________________________________///////
        

        //***************************************saving record********************************??
        const { data } = await axios.post(
          `${config.apiUrl}/student/create`,
          values,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Student record created",
          text: `Student has been registered successfully with reg number ${data.student?.regNumber}`,
        });
        formik.handleReset();
        ///////_______________________________________________________________________________________///////
        setOTPVerified(false);
      } catch (error) {
        console.log(error.response);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response?.data || "Something Failed",
          showCancelButton: true,
          showConfirmButton: false,
        });
      } finally {
        setisLoading(false);
      }
    },
  });

  // console.log(record.firstName)

  return (
    <div className={styles.addNewPage}>
      {isFetching && <Loader />}
      {openAuthMoal && <OTPModal action={authOTP} />}
      <div className={styles.header}>
        <div className={styles.headerText}>
          {action === "edit" ? "Edit Student Record" : "Add New student"}
        </div>
        <div className={styles.breadCrumb}>
          <Link style={{ textDecoration: "none" }} to="/user/students">
            <span className={styles.b__student}>Student</span>
          </Link>
          <span className={styles.b__icon}>{">"}</span>
          <span className={styles.b__addNew}>
            {" "}
            {action === "edit" ? "Edit Student Record" : "Add New student"}{" "}
          </span>
        </div>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.formHeader}>Student Information</div>

        <form onSubmit={formik.handleSubmit}>
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
                {formik.touched.gender && formik.errors.gender && (
                  <p className={styles.errorMsg}>{formik.errors.gender}</p>
                )}
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
                {formik.touched.dob && formik.errors.dob && (
                  <p className={styles.errorMsg}>{formik.errors.dob}</p>
                )}
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
                {formik.touched.admissionDate &&
                  formik.errors.admissionDate && (
                    <p className={styles.errorMsg}>
                      {formik.errors.admissionDate}
                    </p>
                  )}
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
                {formik.touched.address && formik.errors.address && (
                  <p className={styles.errorMsg}>{formik.errors.address}</p>
                )}
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
                {formik.touched.state && formik.errors.state && (
                  <p className={styles.errorMsg}>{formik.errors.state}</p>
                )}
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
                    {levels.map((item, i) => (
                      <option value={item.value}> {item.label} </option>
                    ))}
                  </select>
                </div>
                {formik.touched.level && formik.errors.level && (
                  <p className={styles.errorMsg}>{formik.errors.level}</p>
                )}
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
                {formik.touched.parentName && formik.errors.parentName && (
                  <p className={styles.errorMsg}>{formik.errors.parentName}</p>
                )}
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
                {formik.touched.parentAddress &&
                  formik.errors.parentAddress && (
                    <p className={styles.errorMsg}>
                      {formik.errors.parentAddress}
                    </p>
                  )}
              </Col>
            </Row>

            <Row className={styles.row}>
              <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                <div className={styles.formLabel}>Phone Number</div>
                <div className={styles.input__wrappper}>
                  <input
                    type="text"
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
            </Row>
            <div className={styles.buttons}>
              {action === "edit" ? (
                <button
                  className={styles.btnSave}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "updating..." : "Update Record"}
                </button>
              ) : (
                <>
                  <button className={styles.btnReset} type="reset">
                    Reset
                  </button>
                  <button
                    className={styles.btnSave}
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "saving..." : "Register"}
                  </button>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterStudent;
