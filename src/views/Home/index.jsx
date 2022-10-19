import React from 'react';
import styles from './styles/home.module.scss'

//Components
import Banner from './templates/banner';
import About from './templates/about';
import Calendar from './templates/calendar';
import Events from './templates/events';
import News from './templates/news';

const Home = () => {
    return ( 
        <div className={styles.wrapper}>
           <Banner/>
           <About/>
           <Calendar/>
           <Events/>
           <News/>
        </div>
     );
}
 
export default Home;