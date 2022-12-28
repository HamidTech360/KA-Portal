import React from 'react';
import styles from './resultTable.module.scss'
function ResultTable({ tableHeader, results }) {





    return (
        <div>
            <table >
                <thead>
                    {tableHeader.map((theader, i) => (
                        <th key={i}>{theader.label}</th>
                    ))}
                </thead>

                <tbody>
                    {results.map(result => (

                        <tr className={styles.trows}>
                            <td>{result.courseCode}</td>
                            <td>{result.courseTitle}</td>
                            {/* <td className={classOption}>{result.score<50 ? result.pass='fail': result.pass='pass'}</td> */}
                            <td > <span className={result.score < 50 ? `${styles.fail}` : `${styles.pass}`}>{result.score < 50 ? result.pass = 'Failed' : result.pass = 'Passed'}</span> </td>
                            <td>{result.score}%</td>
                            <td>{result.grade}</td>
                            <td>{result.dots}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default ResultTable;