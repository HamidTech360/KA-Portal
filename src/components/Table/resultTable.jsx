import React from 'react';
import styles from './resultTable.module.scss'
function ResultTable({tableHeader,results}) {
   let check = [...results]
    if (check.score<50){
        check.grade='fail'
    }else if (check.score>=50 || check.score<69 ){
        check.grade= 'Average'
    }else if (check.score >=70 || check.score<80){
        check.grade='Very Good'

    }else {
        check.grade='Excellent'
    }
    console.log(check);
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
                        <td className={result.score<50? `${styles.fail}`: `${styles.pass}`}>{result.score<50 ? result.pass='fail': result.pass='pass'}</td>
                        <td>{result.score}%</td>
                        <td>{result.score}</td>
                        <td>{result.score}%</td>
                    </tr>
                        ))}
                   
                </tbody>
            </table>
        </div>
    );
}

export default ResultTable;