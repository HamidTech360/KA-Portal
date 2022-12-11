import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import styles from './styles/dashboard.module.scss'
import Calendar from 'react-calendar';
import './styles/calendar.css'
import { addDays, differenceInCalendarDays } from 'date-fns';
// import 'react-calendar/dist/Calendar.css'

import { NavDropdown } from 'react-bootstrap';




const Dashboard = () => {
    const data = [
        {
            id: 1,
            name: 'Adekolu Fatima',
            photo: 'image1.jpg',
            gender: 'Female',
            program: 'Program title',
            Level: 100
        },

        {
            id: 2,
            name: 'Abdullah Fatih',
            photo: 'image2.jpg',
            gender: 'Male',
            program: 'Program title',
            Level: 300
        },

        {
            id: 3,
            name: 'Adekolu Fatima',
            photo: 'image3.jpg',
            gender: 'Female',
            program: 'Program title',
            Level: 100
        },
        {
            id: 4,
            name: 'Abdullah Fatih',
            photo: 'image4.jpg',
            gender: 'Male',
            program: 'Program title',
            Level: 300
        },
        {
            id: 5,
            name: 'Adekolu Fatima',
            photo: 'image5.jpg',
            gender: 'Female',
            program: 'Program title',
            Level: 100
        },
    ]
    
    const [date, setDate] = useState(new Date())
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
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
        view === 'month' &&
        highlightedDates.find((dDate) => isSameDay(dDate, date))
    ) {
        return 'highlight';
    }
    }  

    return ( 

        <div className={styles.dashboard}>
            <div className={styles.header}>
                <div className={`${styles.boldHeader}`}>Dashboard</div>
                <div className={`${styles.subHeader}`}>Today</div>
            </div>
            <div className={styles.card}>
                 <div className={styles.card1}>
                    <div className={styles.icon}>
                        <AiOutlineUser size={25} />
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.details}>Total Students</div>
                        <div className={styles.subDetails}>932</div>
                        <div className={styles.details}><b style={{ color: "green" }}>+10%</b> than last month</div>
                    </div>
                 </div>
                 <div className={styles.card2}>
                    <div className={styles.icon}>
                        <AiOutlineUser size={25} />
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.details}>Total Students</div>
                        <div className={styles.subDetails}>754</div>
                        <div className={styles.details}><b style={{ color: "lightgreen" }}>-0.5%</b> than last month</div>
                    </div>
                 </div>
                 <div className={styles.card3}>
                    <div className={styles.icon}>
                        <AiOutlineUser size={25} />
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.details}>Total Students</div>
                        <div className={styles.subDetails}>4</div>
                        <div className={styles.details}><b style={{ color: "orange" }}>-0.5%</b> than last month</div>
                    </div>
                 </div>
            </div>
            <div className={styles.calTab}>
                <div className={styles.tab}>
                    <h5 className={styles.notify}>Notifications</h5>
                    <div className={styles.subTab} id={styles.overlay}>
                        <div className={styles.tabMain}>
                            <h6 style={{ color: "#000", fontSize: "16px", fontWeight: "700" }}>Registration for winter semester starts</h6>
                            <h6 style={{ fontSize: "13px", color: "grey" }}>Lorem ipsum dolor sit amet consectetur adipisicing.....</h6>
                        </div>
                        <div className={styles.subRight}>
                            <h6 style={{ color: "orange", fontSize: "14px" }}>Unread</h6>
                            <h6 style={{ fontSize: "13px", color: "grey" }}>4.4.2019; 13:44</h6>
                        </div>
                    </div>
                    <div className={styles.subTab}>
                        <div className={styles.tabMain}>
                            <h6 style={{ color: "#000", fontSize: "16px", fontWeight: "700" }}>Registration for winter semester starts</h6>
                            <h6 style={{ fontSize: "13px", color: "grey" }}>Lorem ipsum dolor sit amet consectetur adipisicing.....</h6>
                        </div>
                        <div className={styles.subRight}>
                            <h6 style={{ fontSize: "13px", color: "grey" }}>4.4.2019; 13:44</h6>
                        </div>
                    </div>
                    <div className={styles.subTab}>
                        <div className={styles.tabMain}>
                            <h6 style={{ color: "#000", fontSize: "16px", fontWeight: "700" }}>Registration for winter semester starts</h6>
                            <h6 style={{ fontSize: "13px", color: "grey" }}>Lorem ipsum dolor sit amet consectetur adipisicing.....</h6>
                        </div>
                        <div className={styles.subRight}>
                            <h6 style={{ fontSize: "13px", color: "grey" }}>4.4.2019; 13:44</h6>
                        </div>
                    </div>
                    <div className={styles.subTab}>
                        <div className={styles.tabMain}>
                            <h6 style={{ color: "#000", fontSize: "16px", fontWeight: "700" }}>Registration for winter semester starts</h6>
                            <h6 style={{ fontSize: "13px", color: "grey" }}>Lorem ipsum dolor sit amet consectetur adipisicing.....</h6>
                        </div>
                        <div className={styles.subRight}>
                            <h6 style={{ fontSize: "13px", color: "grey" }}>4.4.2019; 13:44</h6>
                        </div>
                    </div>
                </div>
                <div className={styles.calendar}>
                    <div className={styles.calHeader}>
                        <h4 style={{ fontSize: "19px", fontWeight: "600" }}>School Calendar</h4>
                        <h5 style={{ color: "#1A8F4A", fontSize: "17px" }}>{month} {date.getFullYear()}</h5>
                    </div>

                    <Calendar onChange={setDate} value={date}
                    tileClassName = {tileClassName}
                    />
                </div>
            </div>
            <div className={styles.tableContainer}>
                <div className={styles.tableHead}>Students List</div>
                <table>
                    <thead>
                        <tr className={styles.head}>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Gender</th>
                            <th>Program</th>
                            <th>Level</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data &&
                            data.map(row => (
                                <tr className={styles.data}>
                                    <td>{row.id}</td>
                                    <td>{row.name}</td>
                                    <td>{<div className={styles.photo}></div>}</td>
                                    <td>{row.gender}</td>
                                    <td>{row.program}</td>
                                    <td>{row.Level}</td>
                                    <td style={{cursor:'pointer'}}>
                                        <NavDropdown >
                                            <NavDropdown.Item style={{fontSize:'14px'}}>View Profile</NavDropdown.Item>
                                            <NavDropdown.Item  style={{fontSize:'14px'}}>View Results</NavDropdown.Item>
                                            <NavDropdown.Item style={{fontSize:'14px'}}>Update student record</NavDropdown.Item>
                                        </NavDropdown>
                                        
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                
                </table>
            </div>

        </div>
     );
}
 
export default Dashboard;