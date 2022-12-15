import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Modal } from 'react-bootstrap';
import AppTable from '../../../components/Table/appTable';
import {AiOutlineClose} from 'react-icons/ai'
import styles from './styles/result.module.scss'

const Result = () => {
    const tableHeader = [
        {label:'Subject', key:'subject'},
        {label:'1st Semester Test ', key:'test1'},
        {label:'1st Semester Exam ',  key:'exam1'},
        {label:'2nd Semester Test', key:'test2'},
        {label:'2nd Semester Exam', key:'exam2'},
    ]
    const [tableData, setTableData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [result, setResult] = useState({
        subject:'',
        test1:'',
        exam1:'',
        test2:'',
        exam2:''
    })

    const handleChange = (e)=>{
        const result__c = {...result}
        result__c[e.currentTarget.name] = e.currentTarget.value
        setResult(result__c)
    }

    const AddToList = ()=>{
        if(result.test1=="" && result.exam1=="" && result.test2=="" && result.exam2==""){
            alert('Cannot add an empty record to queue')
            return
        }

        // setTableData(tbd__c)
        tableData.push({
            subject:result.subject,
            test1:result.test1 || 0,
            exam1:result.exam1 || 0,
            test2:result.test2 || 0,
            exam2:result.exam2 || 0
        })
        console.log(tableData)
        setResult({subject:'',test1:'', exam1:'',test2:'', exam2:'' })
        setShowModal(false)
    }

    return ( 
        <div className={styles.result}>

            <div className={styles.header}>
                <div className={styles.headerText}>Upload Result </div>
                <div className={styles.breadCrumb}>
                    <Link style={{ textDecoration: "none" }} to="/user">
                        <span className={styles.b__student}>Home</span>
                    </Link>
                    <span className={styles.b__icon}>{">"}</span>
                    <span className={styles.b__addNew}> Upload result </span>
                </div>
            </div>

            <div className={styles.uploadArea}>
                <div className={styles.formHeaderText}>Student Information</div>
                <div className={styles.formArea}>
                    <Row className={styles.row}>
                        <Col lg="6" md="6" sm="12" xs="12" className={styles.formGroup}>
                            <div className={styles.formLabel}>Registration Number</div>
                            <div className={styles.input__wrappper}>
                                <input
                                    type="text"
                                    className={styles.input}
                                    name="firstName"
                                    // value={formik.values.firstName}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                />
                            </div>
                        </Col>

                        <Col lg="6" md="6" sm="12" xs="12" className={styles.formGroup}>
                            <div className={styles.formLabel}>Session</div>
                            <div className={styles.input__wrappper}>
                                <input
                                    type="text"
                                    className={styles.input}
                                    name="firstName"
                                    // value={formik.values.firstName}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={styles.formHeaderText}>Result Details</div>
                <button onClick={()=>setShowModal(true)} className={styles.btnAdd}> <span className={styles.plusSign}>+</span> Add Course</button>

                <div className={styles.tableSection}>
                <AppTable
                    tableHeader={tableHeader}
                    tableData={tableData}
                />
                </div>

                <div className={styles.buttons}>
                    <button className={styles.btnReset} type='reset'>Reset</button>
                    <button className={styles.btnSave}  type='submit' disabled={false}>Upload</button>
                </div>
                
            </div>

            <Modal show={showModal}>
                <div className={styles.modalContent}>
                    <div className={styles.close}> <AiOutlineClose onClick={()=>setShowModal(false)} size={23} /> </div>
                    <div className={styles.modalHeader}>  Result Details   </div>
                    <div className={styles.modalSubtitle}>Enter the student result details per subject</div>

                    <div className={styles.modalForm}>
                        <div className={styles.row}>
                            <div className={styles.formLabel}> Subject </div>
                            <div className={styles.input__wrappper}>
                                <input
                                    type="text"
                                    className={styles.input}
                                    name="subject"
                                    onChange={(e)=>handleChange(e)}
                                />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.formLabel}> First Semester Test Score </div>
                            <div className={styles.input__wrappper}>
                                <input
                                    type="number"
                                    className={styles.input}
                                    name="test1"
                                    onChange={(e)=>handleChange(e)}
                                />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.formLabel}> First Semester Exam Score </div>
                            <div className={styles.input__wrappper}>
                                <input
                                    type="number"
                                    className={styles.input}
                                    name="exam1"
                                    onChange={(e)=>handleChange(e)}
                                />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.formLabel}> Second Semester Test Score </div>
                            <div className={styles.input__wrappper}>
                                <input
                                    type="number"
                                    className={styles.input}
                                    name="test2"
                                    onChange={(e)=>handleChange(e)}
                                />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.formLabel}> Second Semester Exam Score </div>
                            <div className={styles.input__wrappper}>
                                <input
                                    type="number"
                                    className={styles.input}
                                    name="exam2"
                                    onChange={(e)=>handleChange(e)}
                                />
                            </div>
                        </div>

                        <button onClick={AddToList} className={styles.btnAddResult}>Add Result</button>


                    </div>
                </div>
            </Modal>

        </div>
     );
}
 
export default Result;