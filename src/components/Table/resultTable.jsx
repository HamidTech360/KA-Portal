import React from 'react';
import styles from './resultTable.module.scss'

function ResultTable({tableTitle,results}) {

    const resultArr = []
     results?.forEach(item=>{
        resultArr.push({
            subject:item[0] || 0,
            test1:item[1] || 0,
            exam1:item[2] || 0,
            test2:item[3] || 0,
            exam2:item[4]|| 0
        })
    })
    // console.log(resultArr)

    const getTotal = (result)=>{
        return  parseInt( result.test1) + 
                parseInt(result.exam1) + 
                parseInt( result.test2) +
                parseInt(result.exam2)
    }

    const getPercentage = (result)=>{
        const overall = 200
        const total = getTotal(result)

        return Math.ceil((total/overall) * 100)
    }

    const getGrade = (result)=>{
        const percent = getPercentage(result)
        if(percent >= 80 && percent <= 100) return 'Excellent'
        else if (percent >= 70 && percent < 80 ) return 'Very Good'
        else if (percent >= 60 && percent < 70 ) return 'Good'
        else if (percent >= 50 && percent < 60 ) return 'Fair'
        else if (percent < 50) return 'Fail'
        else return 'Invalid score'
    }

    return (
        <div>
            <div className={styles.table_title}>
                <p className={styles.table_title_main}> {tableTitle}</p>
                <p className={styles.table_title_sub}> List of offered courses</p>
            </div>
            <div className={styles.tableContainer}>
                <table>
                    <thead>
                        <th >Subjects</th>
                        <th>1st CA</th>
                        <th>1st Exam</th>
                        <th>2nd CA</th>
                        <th>2nd Exam</th>
                        <th>Total</th>
                        <th>Average</th>
                        <th>Grade</th>
                    </thead>

                    <tbody>
                        {resultArr.map((result, i)=>(    
                        <tr key={i} className={styles.trows}>
                            <td>{result.subject}</td>
                            <td>{result.test1}</td>
                            <td>{result.exam1}</td>
                            <td>{result.test2}</td>
                            {/* <td > <span className={result.score<50? `${styles.fail}`: `${styles.pass}`}>{result.score<50 ? result.pass='Failed': result.pass='Passed'}</span> </td> */}
                            <td>{result.exam2}</td>
                            <td>{getTotal(result)}</td>
                            <td>{getPercentage(result)}%</td>
                            <td> {getGrade(result)} </td>
                        </tr>
                        ))}
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ResultTable;