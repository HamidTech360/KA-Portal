import React from 'react';
import styles from './resultTable.module.scss'
function ResultTable({tableHeader,results}) {
    return (
        <div>
            <table >
                <thead>
                    {tableHeader.map((theader,i)=>(
                        <th key={i}>{theader.label}</th>
                        ))}
                </thead>
                
                <tbody>
                        {results.map(result=>(
                            
                    <tr className={styles.trows}>
                        <td>{result.courseCode}</td>
                        <td>{result.courseTitle}</td>
                        <td className={styles.pass}>{result.pass}</td>
                        <td>{result.score}%</td>
                    </tr>
                        ))}
                   
                </tbody>
            </table>
        </div>
    );
}

export default ResultTable;