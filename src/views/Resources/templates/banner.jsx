import React from 'react';
import styles from './../style/banner.module.scss'
function ResoucesBanner(props) {
    return (
        <div className={styles.banner}>
            <div className={styles.text}>
                <p className={styles.para1}>RESOURCES</p>
                <p className={styles.para2}>Lectures</p>
            </div>
        </div>
    );
}

export default ResoucesBanner;