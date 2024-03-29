import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import styles from './appTable.module.scss'

const AppTable = ({
    tableHeader,
     tableData, 
     hasAction, 
     tableLabel,
     isEditMode,
     onEdit,
     showSerialNumber
    }) => {

    const linkStyle = {
        textDecoration:'none',
        fontSize:'14px'
    }
    const entries = []
    tableHeader.forEach(element => {
        entries.push(element.key)
    });
   
    
    return ( 
        <div className={styles.tableContainer}>
            <table>
                <thead>
                    <tr className={styles.head}>
                        {showSerialNumber && <th>S/N</th>}
                       {tableHeader.map((item, i)=>
                            <th key={i}>{item.label}</th>
                       )}
                    {(hasAction || isEditMode )&& <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData &&
                        tableData.map((row, i) => (
                            <tr key={i} className={styles.data}>
                                {showSerialNumber && <td>{i+1}</td> }
                                {entries.map((item, i)=>
                                    <td key={i}> {row[item]} </td>
                                )}

                                

                                {hasAction && 
                                    <td style={{cursor:'pointer'}}>
                                        {tableLabel ==="students" && 
                                        <NavDropdown className={styles.NavDropdown} >
                                            <NavDropdown.Item className={styles.NavDropdownItem}> 
                                                <Link style={linkStyle} to={`/user/students/profile?id=${row._id}`}>View Profile</Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item className={styles.NavDropdownItem}>  
                                                <Link style={linkStyle} to={`/user/students/create?action=edit&id=${row._id}`}>Update Profile</Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item className={styles.NavDropdownItem}>  
                                                <Link style={linkStyle} to={`/user/students/result?id=${row._id}`}>View Result</Link>
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        } 
                                    </td>
                                }

                                {
                                    isEditMode && 
                                    <td onClick={()=>onEdit(row, i)} style={{cursor:'pointer'}}>
                                        <b>Modify</b>
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