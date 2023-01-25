import React from "react";
import styles from "./eventCard.module.scss";
import Badge from "react-bootstrap/Badge";

function EventsCard({date,month,text}) {
  return (
    <div className={styles.card_body}>
      <div className={styles.badge}>
        <div className={styles.badge_para1}>
          <p>{date}</p>
          <p>{month}</p>
        </div>
      </div>
        <p className={styles.para}>
          {text}
        </p>
    </div>
  );
}

export default EventsCard;
