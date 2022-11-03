import React from "react";
import styles from "./styles/calendar.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineDownload } from "react-icons/ai";

const Calendar = () => {
  const events = [
    {
      day: "12",
      month: "Jul",
      title: "Registration for Winter Semester starts ",
    },
    {
      day: "12",
      month: "Jul",
      title: "Registration for Winter Semester starts ",
    },
    {
      day: "12",
      month: "Jul",
      title: "Registration for Winter Semester starts ",
    },
    {
      day: "12",
      month: "Jul",
      title: " Egesteas amet bibendum virae",
    },
    {
      day: "12",
      month: "Jul",
      title: "Egesteas amet bibendum virae ",
    },
    {
      day: "12",
      month: "Jul",
      title: "Winter Semester Finals Week ",
    },
  ];

  return (
    <div className={styles.calender}>
      <Container fluid className={styles.calender_body}>
        <Row>
          <Col className={styles.calender_sideOne} xs={12} sm={6}>
            <div className={styles.calender_line}></div>

            <p className={styles.calender_para1}>
              <span className={styles.calender_para1_main}>View the </span>
              <span className={styles.calender_para1_sub}>
                2022/23 Calender
              </span>
            </p>

            <p className={styles.calender_para2}>
              You can download the complete <br /> session calender below
            </p>

            <a href="#" className={styles.calender_button}>
              Download Calender
              <AiOutlineDownload size={29} style={{ paddingLeft: "10px" }} />
            </a>
          </Col>

          <Col className={styles.calender_sideTwo} xs={12} sm={6}>
            {events.map((event) => (
              <div className={styles.calender_sideTwo_main}>
                <div className={styles.calender_sideTwo_main_text}>
                  <div>{event.day}</div>
                  <div>{event.month}</div>
                </div>
                <div className={styles.calender_sideTwo_main_title}>
                  {event.title}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Calendar;
