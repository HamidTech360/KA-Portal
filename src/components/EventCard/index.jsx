import React from 'react';
import moment from 'moment';
import styles from './styles/events.module.scss'

const EventCard = ({date, text}) => {

    const trimString = (string)=>{
        return string.split(" ").slice(0, 8).join(" ")  
    }

    return ( 
            <div
                style={{ backgroundImage: `url('../../../assets/events.jpg')`, backgroundSize:'cover' }}
                className={styles.events}
              >
                <div className={styles.badge}>
                  <div className={styles.badge_para1}>
                    <p>{moment(date).format('Do')} </p>
                    <p>{moment(date).format('MMM')} </p>
                    
                  </div>
                </div>
                <div className={styles.events_text}>{trimString(text)}...  </div>
              </div>
     );
}
 
export default EventCard;