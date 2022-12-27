import React from 'react';
import styles from './resultTable.module.scss'
function ResultTable({tableHeader,results}) {
 
    // if (results.score<50){
    //     results.grade='fail'
    // }else if (results.score >=50 || results.score<69 ){
    //     results.grade= 'Average'
    // }else if (results.score >=70 || results.score<80){
    //     results.grade='Very Good'

    // }else {
    //     results.grade='Excellent'
    // }
    // console.log(results);

    // let classOption = results.score<50? `${styles.fail}`: `${styles.pass}`
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
                        {/* <td className={classOption}>{result.score<50 ? result.pass='fail': result.pass='pass'}</td> */}
                        <td > <span className={result.score<50? `${styles.fail}`: `${styles.pass}`}>{result.score<50 ? result.pass='fail': result.pass='pass'}</span> </td>
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