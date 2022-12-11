import React from 'react';
// import styles from './styles/home.module.scss'

//Components
import AppHeader from '../../components/Header/header';
import Banner from './templates/banner';
import About from './templates/about';
import Calendar from './templates/calendar';
import Events from './templates/events';
import News from './templates/news';
import Footer from './../../components/Footer/footer';

const Home = () => {
    return ( 
        <div >
           <AppHeader/>
           <Banner/>
           <About/>
           <Calendar/>
           <Events/>
           <News/>
           <Footer/>
        </div>
     );
}
 
export default Home;