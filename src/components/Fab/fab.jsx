import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import styles from './fab.module.scss'

const Fab = ({icon, bgColor}) => {

    const style = {
        backgroundColor:bgColor
    }
    return ( 
        <div className={styles.icon} style={style}>
            <AiOutlineUser size={28} />
        </div>
     );
}
 
export default Fab;