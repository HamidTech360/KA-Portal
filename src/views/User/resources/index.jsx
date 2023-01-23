import React from "react";
import styles from "./styles/resources.module.scss";
import { FiUpload } from "react-icons/fi";
import { Link } from 'react-router-dom';
function Resources(props) {
  return (
    <div className={styles.resources}>
      <p className={styles.para1}>
        <span className={styles.para1_main}> Resources</span>
        <span >
          {" "}
          <Link to='#' className={styles.para1_sub}>
          
          <FiUpload size={20} className={styles.upload} /> <span className="hideOnMobile">Upload Resources</span> 
          </Link>
        </span>
      </p>
    </div>
  );
}

export default Resources;
