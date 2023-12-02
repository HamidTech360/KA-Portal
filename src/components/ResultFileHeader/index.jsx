import React from 'react'
import { getStudentClass } from '../../utils/helpers/data/levels'
import styles from './style.module.scss'

const ResultFileHeader = ({data, session})=>{
    return(
        <div>
            <div className={styles.header}>
                {/* <div className="logo">
                    <img src="../../assets/logo.png" alt="logo" />
                </div> */}
                <div className={styles.headertext}>
                    <div className={styles.name1}>مدرسة خير الأدب للدراسات العربية والإسلامية</div>
                    <div className={styles.name2}>ADABI GROUP OF SCHOOLS</div>
                    <div className={styles.address}>
                        P.O Box 21181, Adabi Area, Apete, Ibadan, Nigeria
                    </div>
                </div>
            </div>
            <div className={styles.box}>كشف الدرجات </div>
            <div className={styles.info}>
                <div className={styles.infoItem}>
                    <div className={styles.infoLabel}> <b>Student's Name:</b>  </div>
                     <div className={styles.infoValue}> {data?.firstName} {data?.lastName}</div>       
                </div>
                <div className={styles.infoItem}>
                    <div className={styles.infoLabel}> <b>Session:</b>  </div>
                    <div className={styles.infoValue}> Sesion {session} </div>   
                </div>
                <div className={styles.infoItem}>
                    <div className={styles.infoLabel}> <b>Class : </b>  </div>  
                     <div className={styles.infoValue}> {getStudentClass(data?.level)} </div>     
                </div>
                <div className={styles.infoItem}>
                    <div className={styles.infoLabel}> <b> Class Teacher : </b>  </div>
                     <div className={styles.infoValue}>  </div>   
                </div>
            </div>
        </div>
    )
}

export default ResultFileHeader