import React, {useState, useEffect} from 'react';
import config from '../../../config'
import { useSearchParams } from "react-router-dom";
import Loader from "../../../components/Loader/loader";
import axios from "axios";
import { Row, Col } from 'react-bootstrap';
import ResultTable from '../../../components/Table/resultTable';
import styles from './style/studentResult.module.scss'
import { BsThreeDotsVertical } from 'react-icons/bs';

function StudentResult(props) {

    const [searchParams] = useSearchParams()
    const studentId = searchParams.get('id') 
    const [isFetching, setIsFetching]  = useState(true)
    const [data, setData] = useState({})

    useEffect(()=>{
        (async ()=>{
            try{
                const response = await axios.get(`${config.apiUrl}/result/${studentId}`, {headers:{
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                  }})
                  console.log(response.data.result.results)
                  setData(response.data.result)
                  setIsFetching(false)
            }catch(error){
                console.log(error.response?.data)
            }
        })()
    },[])

    // const arr = [1,2,3].reverse

    return (
        <div>
            <div className={styles.result}>
                {isFetching && <Loader/> }
                <div>
                    <div className={styles.para1}>Student Results</div>
                    <div className={styles.para2}>
                         <span>Home</span>
                        <span className={styles.para2_logo}>&gt;</span>
                        <span className={styles.para2_sub}>Student Result</span>
                     </div>
                </div>

                <Row >
                    <Col lg="3" md="3" sm="5" xs="5" >
                        <img className={styles.passport} src="../../../assets/man.jpg" alt='student passport' />
                    </Col>

                    <Col lg="9" md="9" sm="7" xs="7" className={styles.studentInfo}>
                    <p className={styles.para4}>{data?.firstName} {data?.lastName} </p>
                        
                        <div className={styles.details}>
                            <span className={styles.details_main}>Class:</span>
                            <span className={styles.details_sub}>{data?.level}</span>
                        </div>

                        <div className={styles.details}>
                            <span className={styles.details_main}>Reg Number:</span>
                            <span className={styles.details_sub}>{data?.regNumber}</span>
                        </div>
                       
                    </Col>
                </Row>
        
            
                 {[...data.results]?.reverse().map((item, i)=>
                    <div className={styles.studentTable}>
                        <ResultTable
                            tableTitle={`Results for ${item?.session} SESSION`}
                            results={item?.scores}
                        />                    
                    </div>
                 )}
            </div>
                
        </div>
    );
}

export default StudentResult;