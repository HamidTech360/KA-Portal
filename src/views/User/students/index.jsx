import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/student.module.scss'
import AppTable from '../../../components/Table/appTable';

import { BsSearch } from 'react-icons/bs';
import { NavDropdown } from 'react-bootstrap';
import {AiOutlinePlus} from 'react-icons/ai'





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
    const tableHeader = [
        {label:'Student ID'},
        {label:'Name'},
        {label:'Photo'},
        {label:'Gender'},
        {label:'Program'},
        {label:'Level'},
        {label:'Action'},
    ]
    const actions = [
        {label:'View Profile', link:'/user/students/profile'},
        {label:'View Result', link:'/user/students'},
        {label:'Update Student Record', link:'/user/students'}
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

        
            <AppTable
                tableData={data}
                tableHeader={tableHeader}
                hasAction={true}
                actions={actions}
            />
        </div>
     );
}
 
export default Students;