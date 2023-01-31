import React from 'react';
import Time from "react-timeago";
import styles from './style.module.scss'

const NottficationCard = ({
    header, 
    body, 
    date, 
    isLatest,
    handleClick,
    isInView,
    index,
    hasBorder}) => {
    
     const trimString = (string)=>{
        return string.split(" ").slice(0, 8).join(" ")  
    }

    // console.log(isInView)
    return ( 
        <div onClick={()=>handleClick(index)} className={isLatest?styles.activeSubTab:styles.subTab} style={hasBorder?{border:'1px solid grey'}:{}}>
            <div className={styles.tabMain}>
                <h6 style={{ color: "#000", fontSize: "16px", fontWeight: "700" }}>{header}</h6>
                <h6 className={styles.text} >
                    {isInView?body:`${trimString(body)}...`}
                </h6>
            </div>
            <div className={styles.subRight}>
                {isLatest &&  <h6 style={{ color: "orange", fontSize: "14px" }}>Latest</h6>}
                <h6 style={{ fontSize: "13px", color: "grey" }}> <Time date={date} /> </h6>
            </div>
        </div>
     );
}
 
export default NottficationCard;