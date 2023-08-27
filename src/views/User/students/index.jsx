import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import config from '../../../config'
import Loader from '../../../components/Loader/loader';
import { levels } from '../../../utils/helpers/data/levels';
import styles from './styles/student.module.scss'
import AppTable from '../../../components/Table/appTable';

import { BsSearch } from 'react-icons/bs';

import {AiOutlinePlus} from 'react-icons/ai'

const Students = () => {
    const [studentsRecord, setStudentsRecord] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [filteredGender, setFilteredGender] = useState(null)
    const [filteredClass, setFilteredClass] = useState(null)
    const [filteredList, setFilteredList] = useState([])

    const tableHeader = [
        {label:'Reg Number', key:'registrationNumber'},
        {label:'Name', key:'fullName'},
        {label:'Gender',  key:'gender'},
        {label:'Level', key:'class'},
        
    ]

    const handleFilter = (criteria, value)=>{
        let filtered
        if(!value) setFilteredList([])
        const record__c = [...studentsRecord]
        if(criteria ==="class"){
            setFilteredClass(value)
            filtered = record__c.filter(item=>item.gender?.toLowerCase() ===value.toLowerCase())
        }else if (criteria === "level"){
            setFilteredGender(value)
            filtered = record__c.filter(item=>item.level ==value)
        }
        setFilteredList(filtered)
    }

    useEffect(()=>{
        (async function(){
            try{
                const response = await axios.get(`${config.apiUrl}/student`, {headers:{
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                }})
                const allStudents = [...response.data.students]
                allStudents.forEach(item=>{
                    const itemIndex = levels.findIndex(el=>el.value==item?.level)
                    item['class'] = levels[itemIndex]?.label
                    item['fullName'] = `${item.firstName} ${item.lastName}`
                })

        
                setStudentsRecord(allStudents)
                setIsFetching(false)
            }catch(error){
                console.log(error.response?.data)
            }
        })()
    },[])

    const handleSearch = (e)=>{
        //console.log(e.target.value)
        let query = e.target.value
       const filtered = studentsRecord?.filter((item)=>
           item?.firstName?.toLowerCase() === query?.toLowerCase()  || item.lastName?.toLowerCase()  === query?.toLowerCase() 
        )
        setFilteredList(filtered)
    }
    

    


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
                        <input 
                            type="text" 
                            placeholder='Search by Name' 
                            onChange={(e)=>handleSearch(e)}
                        />
                        <BsSearch size={20} className={styles.mdsearch}/> 
                    </div>

                    <div className={styles.dropDownContainer}>
                        {/* <button  className={styles.button}>
                            Add Filter <AiOutlinePlus color="white" /> 
                        </button> */}
                        <Dropdown style={{fontSize:'14px'}}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Filter by class
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>handleFilter('level', null)} >All classes</Dropdown.Item>
                                {levels.map((item, i)=>
                                    <Dropdown.Item key={i} onClick={()=>handleFilter('level', item.value)}>
                                        {item.label}
                                    </Dropdown.Item>
                                )}
                               
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown style={{fontSize:'14px'}} className='dropdown'>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                               filter by gender
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>handleFilter('class', null)} >All</Dropdown.Item>
                                <Dropdown.Item onClick={()=>handleFilter('class', 'male')}>Male students</Dropdown.Item>
                                <Dropdown.Item onClick={()=>handleFilter('class', 'female')}>Female stuents</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        
                    </div>
                </div>
            </div>

        
            <div className={styles.tblContainer}>
            <AppTable
                tableData={filteredList.length>0?filteredList:studentsRecord}
                tableHeader={tableHeader}
                hasAction={true}
                tableLabel="students"
                showSerialNumber={true}
            />
            </div>
        </div>
     );
}
 
export default Students;