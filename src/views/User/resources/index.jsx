import React from "react";
import styles from "./styles/resources.module.scss";
import { FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";
import LectureCard from "./lectureCard";
import img from "./../../../assets/news2.jpg";

import { BsArrowRight } from "react-icons/bs";

function Resources(props) {
  const cardInfo = [
    {
      img: img,
      name: "Dr Zakir NAikh",
      title: "The Benefits of Patience",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra arcu ipsum elementum erat egestas...",
    },
    {
      img: img,
      name: "Dr Zakir NAikh",
      title: "The Benefits of Patience",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra arcu ipsum elementum erat egestas...",
    },
    {
      img: img,
      name: "Dr Zakir NAikh",
      title: "The Benefits of Patience",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra arcu ipsum elementum erat egestas...",
    },
  ];
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
        <span className={styles.breadcrumb_para1}>Home</span>
        <span className={styles.breadcrumb_para2}>&gt;</span>
        <span className={styles.breadcrumb_para3}>Resouces</span>
      </p>

      <div className={styles.lectures}>
        <p className={styles.para2}>
          <span className={styles.para2_main}>Lectures</span>
          <span className={styles.para2_sub}>
            {" "}
            <Link>
              {" "}
              See all <BsArrowRight className={styles.arrow} size={20}/>{" "}
            </Link>{" "}
          </span>
        </p>

        <div className="row" style={{ paddingTop: "30px" }}>
          {cardInfo.map((info, i) => (
            <div className="col-12 col-lg-4 col-md-6">
              <LectureCard
                image={info.img}
                name={info.name}
                title={info.title}
                body={info.body}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;
