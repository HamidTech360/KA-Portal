import React from "react";
import styles from "./lectureList.module.scss";
import logo from "./../../../../assets/logo.png";
import { Link } from "react-router-dom";
import {programmes} from './programme.js'
function LectureList(props) {
   
  return (
    <div className={styles.lecture_List}>
      <p className={styles.book}> Book(200+)</p>
      <div className={styles.line}></div>

    {programmes.map(programm=>(
            <div className={`${styles.programme} row`}>
            <div className={` ${styles.video} col-12 col-lg-4 col-sm-12`}>
              <video src={programm.src} controls />
            </div>
            <div className={`col-12 col-lg-8 col-sm-12 `}>
              <p className={styles.para1}> {programm.para1} </p>
              <p className={styles.para2}> {programm.para2}</p>
              <p className={styles.para3}> {programm.para3}</p>
              <p className={styles.para4}>
              {programm.para4}
                <Link className={styles.para4_link} to="#">
                  ...more
                </Link>
              </p>
            </div>
            <div className={styles.line2}></div>
          </div>
    ))}
    </div>
  );
}

export default LectureList;
