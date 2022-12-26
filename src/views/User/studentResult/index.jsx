import React from 'react';
import ResultTable from '../../../components/Table/resultTable';
import styles from './style/studentResult.module.scss'
function StudentResult(props) {
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

            {/* < ResultTable/> */}
        </div>
    );
}

export default StudentResult;