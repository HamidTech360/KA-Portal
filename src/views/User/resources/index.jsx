import React from "react";
import styles from "./styles/resources.module.scss";
import { FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";
function Resources(props) {
  return (
    <div className={styles.resources}>
      <div className={styles.para1}>
        <span className={styles.para1_main}> Resources</span>
        <span>
          {" "}
          <Link to="#" className={styles.para1_sub}>
            <FiUpload size={20} className={styles.upload} />{" "}
            <span className="hideOnMobile">Upload Resources</span>
          </Link>
        </span>
      </div>

        <p className={styles.breadcrumb}>
            <span  className={styles.breadcrumb_para1}>Home</span>
            <span className={styles.breadcrumb_para2}>&gt;</span>
            <span className={styles.breadcrumb_para3}>Resouces</span>   
        </p>

      <div className={styles.lectures}>

      <p className={styles.para2}>
        <span className={styles.para2_main}>Lectures</span>
        <span className={styles.para2_sub}></span>
      </p>
      </div>

    </div>
  );
}

export default Resources;
