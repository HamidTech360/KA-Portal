import React, {useState, useEffect} from 'react';
import axios from 'axios';
import config from '../../config'

//Components
import AppHeader from '../../components/Header/header';
import Banner from './templates/banner';
import About from './templates/about';
import Calendar from './templates/calendar';
import Events from './templates/events';
import News from './templates/news';
import Footer from './../../components/Footer/footer';

const Home = () => {

   // const [isFetching, setIsFetching] = useState(false)
   // useEffect(()=>{
   //    (async ()=>{
   //       try{
            
   //       }catch(error){
   //          console.log(error.response?.data)
   //       }
   //    })()
   // },[])
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