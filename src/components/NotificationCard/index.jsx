import React from 'react';
import styles from './style.module.scss'

const NottficationCard = ({
    header, 
    body, 
    date, 
    isLatest,
     hasBorder}) => {
    
     const trimString = (string)=>{
        return string.split(" ").slice(0, 8).join(" ")  
    }
    return ( 
        <div className={isLatest?styles.activeSubTab:styles.subTab} style={hasBorder?{border:'1px solid grey'}:{}}>
            <div className={styles.tabMain}>
                <h6 style={{ color: "#000", fontSize: "16px", fontWeight: "700" }}>{header}</h6>
                <h6 style={{ fontSize: "13px", color: "grey" }}>{trimString(body)} .....</h6>
            </div>
            <div className={styles.subRight}>
                {isLatest &&  <h6 style={{ color: "orange", fontSize: "14px" }}>Latest</h6>}
                <h6 style={{ fontSize: "13px", color: "grey" }}>{date}</h6>
            </div>
        </div>
     );
}
 
export default NottficationCard;