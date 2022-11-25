import React from "react";
import styles from "./lectureList.module.scss";
import logo from "./../../../../assets/logo.png";
import { Link } from "react-router-dom";
import {programmes} from './programme.js'
import { Row, Col } from "react-bootstrap";
function LectureList(props) {
   
  return (
    <div className={styles.lecture_List}>
      <p className={styles.book}> Lectures(10+)</p>
      
      <div className={styles.line}></div>

      {programmes.map(programm=>(
            <Row className={`${styles.programme}`}>
              <Col lg="4" sm="12"  className={` ${styles.video}`}>
                <iframe src={programm.src} height="100%" width="100%"  className= {styles.vid}   />
              </Col>
              
              <Col lg="8" sm="12" className={` ${styles.text}`}>
                <p className={styles.para1}> {programm.para1} </p>
                <p className={styles.para2}> {programm.para2}</p>
               
                <p className={styles.para4}>
                {programm.para4}
                  <Link className={styles.para4_link} to="#">
                    ...more
                  </Link>
                </p>
              </Col>
              
              <div className={styles.line2}></div>
          </Row>
      ))}
    </div>
  );
}

export default LectureList;
