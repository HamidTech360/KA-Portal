import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import styles from './appTable.module.scss'

const AppTable = ({
    tableHeader,
     tableData, 
     hasAction, 
     actions}) => {


    return ( 
        <div className={styles.tableContainer}>
            <table>
                <thead>
                    <tr className={styles.head}>
                       {tableHeader.map((item, i)=>
                            <th key={i}>{item.label}</th>
                       )}
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData &&
                        tableData.map((row, i) => (
                            <tr key={i} className={styles.data}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{<div className={styles.photo}></div>}</td>
                                <td>{row.gender}</td>
                                <td>{row.program}</td>
                                <td>{row.Level}</td>
                                {
                                    hasAction && 
                                    <td style={{cursor:'pointer'}}>
                                        <NavDropdown >
                                            {actions.map((item, i)=>
                                                 <NavDropdown.Item key={i} style={{fontSize:'14px'}}> 
                                                    <Link style={{textDecoration:'none'}} to={item.link}>{item.label}</Link>
                                                 </NavDropdown.Item>
                                            )}
               
                                        </NavDropdown>
                                        
                                    </td>
                                }
                            </tr>
                        ))
                    }
                </tbody>
            
            </table>
        </div>

     );
}
 
export default AppTable;