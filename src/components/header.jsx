import React from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import styles from './styles/header.module.scss'

const linkStyle = {
    textDecoration:'none'
}
const AppHeader = () => {
    return ( 
        <div className={`${styles.header}`}>
            <div className={`${styles.textLogo}`}>
                <img className={`${styles.logo}`} src="../assets/logo.png" alt="logo" />
                <div>KHAYRUL ADAB <span className="hideOnMobile">SCHOOL OF ARABIC AND ISLAMIC STUDIES</span> </div>
            </div>
            <div  className={`${styles.navSection} hideOnMobile justify-content-end`}>
                <Link to="/" style={linkStyle}><span className={`${styles.navItem}`}>Home</span></Link>
                <Link to="#" style={linkStyle}><span className={`${styles.navItem}`}>About Us</span></Link>
                <Link to="#" style={linkStyle}><span className={`${styles.navItem}`}>E-portal</span></Link>
                <Link to="#" style={linkStyle}><span className={`${styles.navItem}`}>Programs</span></Link>
                <Link to="#" style={linkStyle}><span className={`${styles.navItem}`}>Resources</span></Link>
                <Link to="#" style={linkStyle}><span className={`${styles.navItem}`}>Contact us</span></Link>
                
            </div>

            <div  className={`hideOnDesktop ${styles.navSection} `}>
               <div style={{float:'right'}} className='pull-right'>
                    <HiOutlineMenuAlt1 size={29} />
               </div>
            </div>
        </div>
     );
}
 
export default AppHeader;