import React from "react";
import styles from "./styles/calendar.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineDownload } from "react-icons/ai";



const Calendar = () => {
    const events =[
        {
            day:'12',
            month:'Jul',
            title:'Registration for Winter Semester starts '
        },
        {
            day:'12',
            month:'Jul',
            title:'Registration for Winter Semester starts '
        },
        {
            day:'12',
            month:'Jul',
            title:'Registration for Winter Semester starts '
        },
        {
            day:'12',
            month:'Jul',
            title:' Egesteas amet bibendum virae'
        },
        {
            day:'12',
            month:'Jul',
            title:'Egesteas amet bibendum virae '
        },
        {
            day:'12',
            month:'Jul',
            title:'Winter Semester Finals Week '
        },
    ]


  return (
    <div className={styles.calender}>
      <Container fluid className={styles.calender_body}>
        <Row>
          <Col className={styles.calender_sideOne} xs={12} sm={6}>
            <div className={styles.calender_line}></div>

            <p className={styles.calender_para1}>
              <span>View the </span> <br />
              <span>2022/23 Calender</span>
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
            {events.map(event=>(
                <Row classsName={styles.calender_sideTwo_main}>
                <Col sx={2} sm={2}>
                  <p className={styles.calender_sideTwo_main_text}>
                    {" "}
                    <span className={styles.calender_sideTwo_main_date} >{event.day}</span>
                    <span className={styles.calender_sideTwo_main_month} >{event.month}</span>{" "}
                </p>
                </Col>
                <Col className={styles.calender_sideTwo_main_title} sx={8} sm={10}>
                  {event.title}
                </Col>
                <span className="line2">  </span>
              </Row>
            ))}
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Calendar;
