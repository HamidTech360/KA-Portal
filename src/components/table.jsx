import React from 'react';
import styles from './styles/table.module.scss'

const AppTable = ({tbTitle, tbData, TbHeadings}) => {
    return ( 
        <div className={`mt-14 ${styles.tableContainer}`}>
            <div className={`d-flex`}>
                <div className={`${styles.tableTitle}`}>
                    {TbHeadings}
                </div>
                <div className={`d-flex flex-1 justify-content-end`}>
                    <span className={` ${styles.viewAll}`}>View all</span>
                </div>
            </div>
            <hr />
            <table className={`${styles.table}`}>
                <thead className={`${styles.tableHead}`}>
                    <td>School</td>
                    <td>Location</td>
                    <td>Status</td>
                    <td>Id</td>
                    <td>Action</td>

                </thead>
                <tbody>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item, i)=>
                        <tr>
                            <td className={styles.td}>Obafemi Awolowo University, Ile-ife</td>
                            <td className={styles.td}>Ife</td>
                            <td className={styles.td}>Verified</td>
                            <td className={styles.td}>00123</td>
                            <td className={styles.td}>preview</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
     );
}
 
export default AppTable;