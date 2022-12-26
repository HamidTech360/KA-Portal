import React from 'react';
import ResultTable from '../../../components/Table/resultTable';
import styles from './style/studentResult.module.scss'
import passport from './../../../assets/pass.png'
function StudentResult(props) {
    const details = [
        {
            main:'Student ID',
            sub: '12345'
        },
        {
            main:'Session',
            sub: '2015/2016 Session'
        },
        {
            main:'Programe',
            sub: 'Full Time'
        },
        {
            main:'Current',
            sub: '200'
        },
       
    ]

    return (
        <div className={styles.result}>
            <div>
                <div className={styles.para1}>View Examination Results</div>
                <div className={styles.para2}>
                     <span>Home</span>
                    <span className={styles.para2_logo}>&gt;</span>
                    <span className={styles.para2_sub}>Student Result</span>
                 </div>    
            </div>

            <div className={`row ${styles.studentDetails} `}>
                <div className={`col-12 col-md-3 col-lg-3 ${styles.pass_container}`}>
                    <img className={styles.pass} src={passport} alt='student passport' />
                </div>
                <div className="col-12 col-md-8 col-lg-8">
                    <p className={styles.para4}>Abdullah Fattah</p>
                    {details.map((detail,i)=>(
                    <div key={i} className={styles.details}>
                        <span className={styles.details_main}>{detail.main}</span>
                        <span className={styles.details_sub}>{detail.sub}</span>
                    </div>
                    ))}
                    


                </div>

            </div>

            {/* < ResultTable/> */}
        </div>
    );
}

export default StudentResult;