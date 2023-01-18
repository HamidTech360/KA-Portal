import React from 'react';
import styles from './resultTable.module.scss'

function ResultTable({tableTitle,results}) {

    const resultArr = []
     results?.forEach(item=>{
        resultArr.push({
            subject:item[0] || 0,
            test1:item[1] ,
            exam1:item[2] ,
            test2:item[3] ,
            exam2:item[4]
        })
    })
    // console.log(resultArr)

    const getTotal = (result)=>{
        return  parseInt( result.test1 || 0)  + 
                parseInt(result.exam1 || 0)  + 
                parseInt( result.test2 || 0) +
                parseInt(result.exam2 || 0) 
    }

    const getPercentage = (result)=>{
        const overall = 200
        const total = getTotal(result)

        return Math.ceil((total/overall) * 100)
    }

    const getGrade = (result)=>{

        if(!result.test1 || !result.exam1 || !result.test1 || !result.exam2) return 'Awaiting'

        const percent = getPercentage(result)
        if(percent >= 80 && percent <= 100) return 'Excellent'
        else if (percent >= 70 && percent < 80 ) return 'Very Good'
        else if (percent >= 60 && percent < 70 ) return 'Good'
        else if (percent >= 50 && percent < 60 ) return 'Fair'
        else if (percent < 50) return 'Fail'
        else return 'Invalid score'
    }

    const passed = (result)=>{
        if(!result.test1 || !result.exam1 || !result.test1 || !result.exam2) return 'Awaiting'
        const avg = getPercentage(result)
        if(avg < 50){
            return false
        }else{
            return true
        }
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
                        <th>Comment</th>
                        <th>2nd Exam</th>
                        <th>Total</th>
                        <th>Average</th>
                        <th>Grade</th>
                    </thead>

                    <tbody>
                        {resultArr.map((result, i)=>(    
                        <tr key={i} className={styles.trows}>
                            <td>{result.subject}</td>
                            <td>{result.test1 || 'Awaiting'}</td>
                            <td>{result.exam1 || 'Awaiting'}</td>
                            <td>{result.test2 || 'Awaiting'}</td>
                            <td> 
                                {passed(result)==="Awaiting"?'Awaiting':
                                <span className={passed(result)? `${styles.pass}`: `${styles.fail}`}>
                                        {passed(result) ? 'Pass': 'Fail'}
                                </span>}
                             </td>
                            <td>{result.exam2 || 'Awaiting'}</td>
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