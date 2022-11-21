import React from 'react';
import styles from './styles/student.module.scss'
import AppHeader from '../../../components/header';
import Footer from '../../../components/footer';
import { BsSearch } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import {AiOutlinePlus} from 'react-icons/ai'
import {IoMdMore} from 'react-icons/io'



const Students = () => {
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
        {
            id: 6,
            name: 'Abdullah Fatih',
            photo: 'image6.jpg',
            gender: 'Male',
            program: 'Program title',
            Level: 300
        },
        {
            id: 7,
            name: 'Adekolu Fatima',
            photo: 'image7.jpg',
            gender: 'Female',
            program: 'Program title',
            Level: 100
        },
        {
            id: 8,
            name: 'Abdullah Fatih',
            photo: 'image8.jpg',
            gender: 'Male',
            program: 'Program title',
            Level: 300
        },


    ]


    return ( 
        <div className={styles.studentScreen}>
            
            <div className={styles.main}>
                <div className={styles.top}>
                    <h1>All Students</h1>
                    <h4>284 students</h4>
                </div>
                <div className={styles.search}>
                    <input type="text" placeholder='Search by Name' />
                    <BsSearch size={23} className={styles.mdsearch}/>
                    <Button variant="contained"  className={styles.button}>Add Filter <AiOutlinePlus color="white" /> </Button>
                </div>
            </div>
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
                                <td style={{cursor:'pointer'}}><IoMdMore size={25} /></td>
                            </tr>
                        ))
                    }
                </tbody>
                {/* <button className={styles.scroll}><ExpandMoreIcon />  Scroll down</button> */}
            </table>
           
        </div>
     );
}
 
export default Students;