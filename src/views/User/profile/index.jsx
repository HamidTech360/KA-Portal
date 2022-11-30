import React from "react";
import styles from "./styles/profile.module.scss";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import pics from "./../../../assets/pass.png";
const StudentProfile = () => {
  const studentsProfile=[
    {
      main:'Sudent',
      sub:'123455',
    },
    {
      main:'name',
      sub:'Adewale tobiloba',
    },
    {
      main:'Gender',
      sub:'Male',
    },
    {
      main:'Admission Date',
      sub:'12-05-2022',
    },
    {
      main:'Address',
      sub:'Lorem ipsum dolor sit amet',
    },
    {
      main:'Sudent',
      sub:'123455',
    },
    {
      main:'indegene',
      sub:'osun',
    },
    {
      main:'Nationality',
      sub:'Nigeria',
    },
    {
      main:'Program',
      sub:'Program Title',
    },
    {
      main:'Current Level',
      sub:'200',
    },
    {
      main:'Father Name',
      sub:'Mr. Abdullah',
    },
    {
      main:'Father Contact',
      sub:'090 12345678',
    },
    {
      main:'Mother Name',
      sub:'Mr. Abdullah',
    },
    {
      main:'Mother Contact',
      sub:'090 12345678',
    },
   
  ]
  return (
    <div className={styles.profile}>
      {/* <h1>Student profile</h1> */}
      <div className={styles.para1_container}>
        <p className={styles.para1}>Student Details</p>
        <span className={styles.menu_btn}>
          {" "}
          <HiOutlineDotsHorizontal />{" "}
        </span>
      </div>

      <div className="row">
        <div className={`col-12 col-md-4`}>
          <img src={pics} alt="Passport" className={styles.passport} />
        </div>
        <div className={`${styles.student_details} col-12 col-md-8`} >
          <p className={styles.para2}> Abdullah Fatah </p>
          <p className={styles.para4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et urna,
            laoreet ullamcorper ac at. Et amet, malesuada scelerisque nisi velit
            id.{" "}
          </p>
      {studentsProfile.map((student,i)=>(

          <div className={styles.para5} key={i} >
            <p  className={styles.para5_main}>{student.main}</p>
            <p className={styles.para5_sub}>{student.sub}</p>
          </div>
      ))}
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
