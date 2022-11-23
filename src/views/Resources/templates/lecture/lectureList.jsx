import React from "react";
import styles from "./lectureList.module.scss";
import logo from "./../../../../assets/logo.png";
import { Link } from "react-router-dom";
function LectureList(props) {
  return (
    <div className={styles.lecture_List}>
      <p className={styles.book}> Book(200+)</p>
      <div className={styles.line}></div>

      <div className={`${styles.programme} row`}>
        <div className={` ${styles.video} col-12 col-lg-4 col-sm-12`}>
          <video src="" controls alt="vid" />
        </div>
        <div className={`col-12 col-lg-8 col-sm-12 mt-1`}>
          <p className={styles.para1}>Leters to a Young Muslim</p>
          <p className={styles.para2}>Author: Omar Sahir Gbohar</p>
          <p className={styles.para3}>Genres: Biography, Autobiography</p>
          <p className={styles.para4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra arcu ipsum elementum erat egestas. Nisl condimentum eget id
            ac eu dolor aliquet et molestie. Sed pulvinar erat mauris pretium
            egestas orci.{" "}
            <Link className={styles.para4_link} to="#">
              ...more
            </Link>
          </p>
        </div>
        <div className={styles.line2}></div>
      </div>
    </div>
  );
}

export default LectureList;
