import React from "react";
import styles from "./eventCard.module.scss";
import Badge from "react-bootstrap/Badge";

function EventsCard(props) {
  return (
    <div className={styles.card_body}>
      <div className={styles.badge}>
        <div className={styles.badge_para1}>
          <p>25th-27th</p>
          <p>march</p>
        </div>
      </div>
        <p className={styles.para}>
          Careers Opportunity at Kharul Adab School
        </p>
    </div>
  );
}

export default EventsCard;
