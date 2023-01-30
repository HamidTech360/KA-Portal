import React, { useState } from 'react';
import Fab from '../../../components/Fab/fab';
import AppTable from '../../../components/Table/appTable';
import styles from './styles/dashboard.module.scss'
import Calendar from 'react-calendar';
import './styles/calendar.css'
import NotificationCard from '../../../components/NotificationCard';
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
    const tableHeader = [
        {label:'Student Id', key:'id'},
        {label:'Name', key:'name'},
        {label:'Photo', key:''},
        {label:'Gender', key:'gender'},
        {label:'Program', key:'program'},
        {label:'Level', key:'Level'}
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
                    <Fab bgColor="#E1FFED" />
                    <div className={styles.cardContent}>
                        <div className={styles.details}>Total Students</div>
                        <div className={styles.subDetails}>932</div>
                        <div className={styles.details}><b style={{ color: "green" }}>+10%</b> than last month</div>
                    </div>
                 </div>
                 <div className={`${styles.card2} hideOnMobile`}>
                    <Fab bgColor="#F0FFD1" />
                    <div className={styles.cardContent}>
                        <div className={styles.details}>Total Staffs</div>
                        <div className={styles.subDetails}>20</div>
                        <div className={styles.details}><b style={{ color: "lightgreen" }}>-0.5%</b> than last month</div>
                    </div>
                 </div>
                 <div className={`${styles.card3} hideOnMobile`}>
                    <Fab bgColor="#FFF2D4 " />
                    <div className={styles.cardContent}>
                        <div className={styles.details}>Total Active</div>
                        <div className={styles.subDetails}>4</div>
                        <div className={styles.details}><b style={{ color: "orange" }}>-0.5%</b> than last month</div>
                    </div>
                 </div>
            </div>
            <div className={styles.calTab}>
                <div className={styles.tab}>
                    <h5 className={styles.notify}>Notifications</h5>
                    
                    {[1,2,3,4].map((item, i)=>
                        <NotificationCard
                            isLatest={i===0}
                            date={"4.4.2019; 13:44"}
                            header="Registration for winter semester starts"
                            body={"Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing"}
                        />
                    )}
                  
                </div>
                <div className={styles.calendar}>
                    <div className={styles.calHeader}>
                        <h4 style={{ fontSize: "19px", fontWeight: "600" }}>School Calendar</h4>
                        <h5 style={{ color: "#1A8F4A", fontSize: "17px" }}>{month} {date.getFullYear()}</h5>
                    </div>

                    <Calendar 
                        onChange={setDate} 
                        value={date}
                        tileClassName = {tileClassName}
                    />
                </div>
            </div>

           <div className={styles.tableSection}>
           <div className={styles.tableHead}>Student List</div>
            <AppTable
                hasAction={false}
                tableHeader={tableHeader}
                tableData={data}
            />
           </div>
            

        </div>
     );
}
 
export default Dashboard;