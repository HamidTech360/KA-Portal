import React, { useState, useEffect } from "react";
import Fab from "../../../components/Fab/fab";
import AppTable from "../../../components/Table/appTable";
import styles from "./styles/dashboard.module.scss";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import "./styles/calendar.css";
import NotificationCard from "../../../components/NotificationCard";
import { addDays, differenceInCalendarDays } from "date-fns";
import { IoMdAddCircleOutline } from "react-icons/io";
import config from "./../../../config/index.json";
import { AiOutlineClose } from "react-icons/ai";

import NotificationModal from "./templates/notificationModal";

// import 'react-calendar/dist/Calendar.css'
import axios from "axios";
import { NavDropdown } from "react-bootstrap";
import moment from "moment/moment";
import Loader from "./../../../components/Loader/loader";
import { Modal } from "react-bootstrap";

const Dashboard = () => {
  const [data, setData] = useState({});
  const [staffs, setStaffs] = useState([]);
  const [notificationInView, setNotificationInView] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsFetching(true);
      try {
        const response = await axios.get(`${config.apiUrl}/analytics`, {
          header: `Bearer ${localStorage.getItem("accessToken")}`,
        });
        setData(response.data);
        const staffs__c = [...response.data.staffs];
        staffs__c.forEach((s) => {
          s["fullName"] = `Ustaaz ${s?.firstName} ${s?.lastName}`;
        });
        setStaffs(staffs__c);

        setIsFetching(false);
      } catch (error) {
        console.log(error.response);
      }
    }

    getData();
  }, []);

  const tableHeader = [
    { label: "Name", key: "fullName" },
    { label: "Role", key: "role" },
    { label: "Contact", key: "phoneNumber" },
    { label: "Email", key: "email" },
  ];

  const [date, setDate] = useState(new Date());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];

  const tomorrow = addDays(date, 1);
  const in3Days = addDays(date, 3);
  const in5Days = addDays(date, 5);
  const highlightedDates = [tomorrow, in3Days, in5Days];
  function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
  }
  function tileClassName({ date, view }) {
    if (
      view === "month" &&
      highlightedDates.find((dDate) => isSameDay(dDate, date))
    ) {
      return "highlight";
    }
  }

  const handleViewNotification = (index) => {
    if (index === notificationInView) return setNotificationInView(null);
    setNotificationInView(index);
  };
  return (
    <div className={styles.dashboard}>
      {isFetching && <Loader />}
      <div className={styles.header}>
        <div className={`${styles.boldHeader}`}>Dashboard</div>
        <div className={`${styles.subHeader}`}>Today</div>
      </div>
      <div className={styles.card}>
        <div className={styles.card1}>
          <Fab bgColor="#E1FFED" />

          <div className={styles.cardContent}>
            <div className={styles.details}>Total Students</div>
            <div className={styles.subDetails}>{data?.activeStudents}</div>
            <div className={styles.details}>
              <b style={{ color: "green" }}>+10%</b> than last month
            </div>
          </div>
        </div>

        <div className={`${styles.card2} hideOnMobile`}>
          <Fab bgColor="#F0FFD1" />
          <div className={styles.cardContent}>
            <div className={styles.details}>Total Staffs</div>
            <div className={styles.subDetails}>{data?.totalStaffs}</div>
            <div className={styles.details}>
              <b style={{ color: "lightgreen" }}>-0.5%</b> than last month
            </div>
          </div>
        </div>

        <div className={`${styles.card3} hideOnMobile`}>
          <Fab bgColor="#FFF2D4 " />
          <div className={styles.cardContent}>
            <div className={styles.details}>Total Events</div>
            <div className={styles.subDetails}>{data?.totalEvents}</div>
            <div className={styles.details}>
              <b style={{ color: "orange" }}>-0.5%</b> than last month
            </div>
          </div>
        </div>
      </div>

      <div className={styles.calTab}>
        <div className={styles.tab}>
          <div className={styles.notificationHeader}>
            <div className={`${styles.notify}`}>Notifications</div>
            <div className="float-right" onClick={() => setShowModal(true)}>
              <IoMdAddCircleOutline size={24} style={{ cursor: "pointer" }} />
            </div>
          </div>

          {data?.notifications?.map((item, i) => (
            <NotificationCard
              key={i}
              index={i}
              handleClick={handleViewNotification}
              isLatest={i === 0}
              isInView={i === notificationInView}
              date={item?.createdAt}
              header={item?.header}
              body={item?.body}
            />
          ))}
        </div>

        <div className={styles.calendar}>
          <div className={styles.calHeader}>
            <h4 style={{ fontSize: "19px", fontWeight: "600" }}>
              School Calendar
            </h4>
            <h5 style={{ color: "#1A8F4A", fontSize: "17px" }}>
              {month} {date.getFullYear()}
            </h5>
          </div>

          <Calendar
            onChange={setDate}
            value={date}
            tileClassName={tileClassName}
          />

        </div>
      </div>

      {/* modal */}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <div className={styles.modalContainer}>
          <AiOutlineClose
            size={20}
            style={{ marginBottom: "20px", cursor: "pointer" }}
            onClick={() => setShowModal(false)}
          />
        </div>
        < NotificationModal/>
      </Modal>

      {/* Modal */}

      <div className={styles.tableSection}>
        <div className={styles.tableHead}>
          Staff List{" "}
          <Link to="/user/newStaff">
            <IoMdAddCircleOutline />
          </Link>
        </div>
        <AppTable
          hasAction={false}
          tableHeader={tableHeader}
          tableData={staffs}
          showSerialNumber
        />
      </div>
    </div>
  );
};

export default Dashboard;
