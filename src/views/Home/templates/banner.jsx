import React, {useState} from 'react';
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'
import styles from './styles/banner.module.scss'


const Banner = () => {
    const backgrounds = ['banner4.png', 'banner3.png', 'banner2.png', 'banner1.png']
    const [currentBG, setCurrentBG] = useState(0)

    setTimeout(()=>{
        setCurrentBG(currentBG+1 === backgrounds.length? 0:currentBG+1)
    },7000)

    const backgroundStyle ={
        backgroundImage:`linear-gradient(rgba(26, 143, 74, 0.4),rgba(26, 143, 74, 0.4) ),url(../../../../assets/${backgrounds[currentBG]})` ,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // transition:'background 2s ease-in'

    }

    const setBackground = (position)=>{
        // if(position=='right'){
        //     setCurrentBG(0)
        // }else{
        //    setCurrentBG(3)
        // }
        // setCurrentBG(position=='right'?currentBG+1:currentBG-1)
    }
    return ( 
        <div style={backgroundStyle} className={`${styles.banner}`}>
            <div onClick={()=>setBackground('left')} className={` hideOnMobile ${styles.control}`}><AiOutlineLeft color='white' size={20} /></div>
            <div className={`${styles.nameBox} text-center`}>
                <div className={`  ${styles.bold}`}>
                    Khayrul Adab School of Arabic and Islamic Studies
                </div>
                <div className={`${styles.normalText}`}>
                Welcome to khayrul adab school, where knowledge meets limitless possibilities! As a premier institution of learning
                </div>
                <button className={`${styles.btnRegister} btn btn-success`}>Register today</button>
            </div>
            <div onClick={()=>setBackground('right')} className={`hideOnMobile ${styles.control}`}><AiOutlineRight color='white' size={20} /></div>
        </div>
     );
}
 
export default Banner;