import React from 'react';
import styles from './styles/student.module.scss'
import AppHeader from '../../../components/header';
import Footer from '../../../components/footer';

import { BsSearch } from 'react-icons/bs';
import { NavDropdown } from 'react-bootstrap';
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
                    <div className={`${styles.boldHeader}`}>All Students</div>
                    <div className={`${styles.subHeader}`}>284 students</div>
                </div>
                <div className={styles.searchPanel}>
                    <div className={styles.search}>
                        <input type="text" placeholder='Search by Name' />
                        <BsSearch size={20} className={styles.mdsearch}/> 
                    </div>
                    <div>
                        <button  className={styles.button}>
                            Add Filter <AiOutlinePlus color="white" /> 
                        </button>
                    </div>
                </div>
            </div>

            
            <div className={styles.tableContainer}>
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
 
export default Students;