import React from "react";
import styles from "./styles/lecture.module.scss";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import { MdPlaylistPlay } from "react-icons/md";
import { AiOutlineHome, AiFillBook } from "react-icons/ai";
function Lectures(props) {
  return (
    <div className={styles.lecture}>
      <div className={styles.breadCrumb}>
        {/* <ul >
          <li className={styles.breadCrumb_items}>
            <AiOutlineHome />{" "}
            <Link to="#" className={styles.deco}>
              {" "}
              Home
            </Link>{" "}
            <span className={styles.gt}>&gt; </span>
          </li>
          <li className={styles.breadCrumb_items}>
            {" "}
            <AiFillBook />{" "}
            <Link to="#" className={styles.deco}>
              {" "}
              Resources
            </Link>{" "}
            <span className={styles.gt}>&gt; </span>
          </li>
          <li className={styles.breadCrumb_items}>
            {" "}
            <MdPlaylistPlay />
            <Link to="#" className={styles.deco}>
              {" "}
              Lecture
            </Link>{" "}
          </li>
        </ul> */}
        <Breadcrumb>
          <Breadcrumb.Item className={styles.breadCrumb_items} href="#">
            {" "}
            <AiOutlineHome /> Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#" className={styles.breadCrumb_items}>
            <AiFillBook /> Library
          </Breadcrumb.Item>
          <Breadcrumb.Item className={styles.breadCrumb_items} active>
            {" "}
            <MdPlaylistPlay /> Data
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
}

export default Lectures;
