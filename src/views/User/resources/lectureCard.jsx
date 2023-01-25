import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./styles/lectureCard.module.scss";

function LectureCard({ image, name, title, body }) {
  return (
    <div>
      <Card className={styles.card} style={{ width: "100%" }}>
        <Card.Img variant="top" src={image} style={{ height: "200px" }} />
        <Card.Body >
          <p className={styles.lecturer_name}>{name}</p>
          <p className={styles.card_title}>{title}</p>
          <p className={styles.card_body}>
           {body}
          </p>
          <p className={styles.card_foot}>
            <span className={styles.card_foot_main}>#Patient</span>
            <span>#Faith</span>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LectureCard;
