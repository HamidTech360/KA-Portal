import React, {useState, useEffect} from 'react';
import axios from 'axios';
import config from '../../../config'
import Loader from '../../../components/Loader/loader';
import styles from './styles/student.module.scss'
import AppTable from '../../../components/Table/appTable';

import { BsSearch } from 'react-icons/bs';

import {AiOutlinePlus} from 'react-icons/ai'


const Students = () => {
    const [studentsRecord, setStudentsRecord] = useState([])
    const [isFetching, setIsFetching] = useState(true)

    const tableHeader = [
        {label:'Student ID', key:'regNumber'},
        {label:'Name', key:'fullName'},
        {label:'Gender',  key:'gender'},
        {label:'Level', key:'level'},
        
    ]

    useEffect(()=>{
        (async function(){
            try{
                const response = await axios.get(`${config.apiUrl}/student`, {headers:{
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                }})
               // console.log(response.data.students)
                const allStudents = [...response.data.students]
                allStudents.forEach(item=>{
                    item['fullName'] = `${item.firstName} ${item.lastName}`
                })
                // console.log(allStudents)
                setStudentsRecord(allStudents)
                setIsFetching(false)
            }catch(error){
                console.log(error.response?.data)
            }
        })()
    },[])

 


    return ( 
        <div className={styles.studentScreen}>
            {isFetching && <Loader/>}
            <div className={styles.main}>
                <div className={styles.top}>
                    <div className={`${styles.boldHeader}`}>All Students</div>
                    <div className={`${styles.subHeader}`}>{studentsRecord.length} students</div>
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
                tableData={studentsRecord}
                tableHeader={tableHeader}
                hasAction={true}
                tableLabel="students"
            />
        </div>
     );
}
 
export default Students;