import React from "react";
import styles from "./styles/calendar.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineDownload } from "react-icons/ai";
const Calendar = () => {
  return (
    <div className={styles.calender}>
      <Container className={styles.calender_body}>
        <Row>
          <Col className={styles.calender_sideOne} xs={12} sm={6}>
            <div className={styles.calender_line}></div>

            <p className={styles.calender_para1}>
              <span>View the </span> <br />
              <span>2022/23 Calender</span>
            </p>

            <p className={styles.calender_para2}>
              You can download the complete <br/> session calender below
            </p>

            <a href="#" className={styles.calender_button}>
              Download Calender
              <AiOutlineDownload size={29} style={{ paddingLeft: "10px" }} />
            </a>
          </Col>
          <Col xs={12} sm={6}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            saepe rem nulla, laboriosam ipsa doloribus laborum maxime. Nihil,
            praesentium? Tempore iste in quaerat? Voluptate adipisci id
            doloremque? Necessitatibus, qui. Cum.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Calendar;
