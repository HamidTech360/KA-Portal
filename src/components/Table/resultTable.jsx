import React, {useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import {AiFillPrinter} from 'react-icons/ai'
import ResultFileHeader from '../ResultFileHeader';
import styles from './resultTable.module.scss'

const ResultTable =  ({session,results, fileName, data}) =>{

    //refs
    const componentRef = useRef();
    const titleRef = useRef();
    const subTitleRef = useRef();
    const headerRef = useRef()
    const containerRef = useRef()
    const footerRef = useRef()
    //console.log(session);

    const resultArr = []
    const printTextRef = useRef()
     results?.forEach(item=>{
        resultArr.push({
            subject:item[0] || 0,
            test1:item[1] ,
            exam1:item[2] ,
            test2:item[3] ,
            exam2:item[4],
            test3:item[5] ,
            exam3:item[6]
        })
    })

    


    const getTotal = (result)=>{
        return  parseInt( result.test1 || 0)  + 
                parseInt(result.exam1 || 0)   
                // parseInt( result.test2 || 0) +
                // parseInt(result.exam2 || 0) +
                // parseInt( result.test3 || 0) +
                // parseInt(result.exam3 || 0) 
    }

    const getPercentage = (result)=>{
        const overall = 100 //300
        const total = getTotal(result)

        return Math.ceil((total/overall) * 100)
    }

    const getGrade = (result)=>{

        if(!result.test1 || !result.exam1 ) return 'Awaiting'
        //|| !result.test2 || !result.exam2|| !result.test3 || !result.exam3
        const percent = getPercentage(result)
        if(percent >= 80 && percent <= 100) return 'Excellent'
        else if (percent >= 70 && percent < 80 ) return 'Very Good' 
        else if (percent >= 60 && percent < 70 ) return 'Good'
        else if (percent >= 50 && percent < 60 ) return 'Fair'
        else if (percent < 50) return 'Fail'
        else return 'Invalid score'
    }

    const passed = (result)=>{
        if(!result.test1 || !result.exam1 ) return 'Awaiting'
        //|| !result.test2 || !result.exam2 || !result.test3 || !result.exam3
        const avg = getPercentage(result)
        if(avg < 50){
            return false
        }else{
            return true
        }
    }

    const getOverall = ()=>{
        
        let sumTotal = 0
        const overall = resultArr.length * 100 //300

        resultArr.forEach(item=>{
            sumTotal += getTotal(item)
        })
        const totalPercent = sumTotal/overall * 100
        return Math.round(totalPercent * 10) / 10
        
        
    }
    
    const getOverallGrade = ()=>{

        if(getOverall() >= 80 && getOverall() <= 100) return 'Excellent'
        else if (getOverall() >= 70 && getOverall() < 80 ) return 'Very Good '
        else if (getOverall() >= 60 && getOverall() < 70 ) return 'Good'
        else if (getOverall() >= 50 && getOverall() < 60 ) return 'Fair'
        else if (getOverall() < 50) return 'Fail'
        else return 'Invalid score'
    }

   

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle:fileName
        // onBeforeGetContent:()=>{
        //     setIsReadyToPrint(true)
        // },
        // onAfterPrint:()=>{
        //     setIsReadyToPrint(false)
        // }
    });

    const printResult = ()=>{
        printTextRef.current.style.display="none"
        titleRef.current.style.display="none"
        subTitleRef.current.style.display="none"
        headerRef.current.style.display="block"
        footerRef.current.style.display="block"
        containerRef.current.style.padding="0rem 1rem"
      
        handlePrint()
        printTextRef.current.style.display="block"
        containerRef.current.style.padding="0rem"
        titleRef.current.style.display="block"
        subTitleRef.current.style.display="block"
        headerRef.current.style.display="none"
        footerRef.current.style.display="none"
    }

    return (
        <div ref={componentRef} >
            <div className={styles.table_title}>
                <p ref={titleRef} className={styles.table_title_main}> {`Results for ${session} SESSION`}</p>
                <p ref={subTitleRef} className={styles.table_title_sub}> List of offered courses</p>
            </div>
            <div ref={headerRef} style={{display:'none', marginBottom:'20px'}}>
                <ResultFileHeader data={data} session={session} />
            </div>
            <div style={{fontWeight:'700', marginBottom:'20px', fontSize:'15px', paddingLeft:'10px', textAlign:'center'}}>
                FIRST TERM REPORT
            </div>
            <div ref={containerRef} className={styles.tableContainer}>
                <table>
                    <thead>
                        <th > <b>Subjects</b>   </th>
                        <th> <b> CA Test </b>  </th>
                        <th>  <b>  Exam </b>  </th>
                        {/* <th><b>  2nd CA</b> </th>            
                        <th><b>  2nd Exam</b>   </th>
                        <th><b>  3rd CA</b> </th>            
                        <th><b>  3rd Exam</b>   </th> */}
                        <th>Comment</th>
                        {/* <th>Total</th> */}
                        <th>Average</th>
                        <th>Grade</th>
                    </thead>

                    <tbody>
                        {resultArr.map((result, i)=>(    
                        <tr key={i} className={styles.trows}>
                            <td>{result.subject}</td>
                            <td>{result.test1 || 'Awaiting'}</td>
                            <td>{result.exam1 || 'Awaiting'}</td>
                            {/* <td>{result.test2 || 'Awaiting'}</td>
                            <td>{result.exam2 || 'Awaiting'}</td>
                            <td>{result.test3 || 'Awaiting'}</td>
                            <td>{result.exam3 || 'Awaiting'}</td> */}
                            <td> 
                                {passed(result)==="Awaiting"?'Awaiting':
                                <span className={passed(result)? `${styles.pass}`: `${styles.fail}`}>
                                        {passed(result) ? 'Pass': 'Fail'}
                                </span>}
                             </td>
                            {/* <td>{getTotal(result)}</td> */}
                            <td>{getPercentage(result)}%</td>
                            <td> <b>{getGrade(result)}</b> </td>
                        </tr>
                        ))}
                    
                    </tbody>
                </table>
            </div>
            <div className={styles.totalGrade}>
                <div className={`${styles.figure} ${getOverall() < 50? styles.failTotal:styles.passTotal}`}>{getOverall()}%</div>
                <div className={styles.totalComment}>{getOverallGrade()}</div>
            </div>
            <div ref={footerRef} style={{display:'none', padding:'0 1rem'}} className={styles.resultFileFooter}>
                <div className={styles.footerItem}>
                    <div className={styles.infoLabel}>  <b> Principal's Signature</b> </div>
                    <div className={styles.infoValue}> </div>            
                </div>
                <div className={styles.footerItem}>
                    <div className={styles.infoLabel}><b>Comment</b></div>
                    <div className={styles.infoValue}></div>           
                </div>
                <div style={{marginTop:'40px', marginRight:'25px'}} className={styles.infoValue}></div>
            </div>
            <div
                style={{color:'#1A8F4A', cursor:'pointer', float:'left', marginRight:'20px'}}
                onClick={()=>printResult()}
                ref={printTextRef}
            >
                    Print <AiFillPrinter size={23} />
            </div>
        </div>
    );
}

export default ResultTable;
