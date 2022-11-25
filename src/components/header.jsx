import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import { navItems } from '../utils/helpers/nav';
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import styles from './styles/header.module.scss'

const linkStyle = {
    textDecoration:'none'
}
const AppHeader = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return ( 
        <div className={`${styles.header}`}>
          
            <div className={`${styles.textLogo}`}>
                <img className={`${styles.logo}`} src="/assets/logo.png" alt="logo" />
                <div>KHAYRUL ADAB <span className="hideOnMobile">SCHOOL OF ARABIC AND ISLAMIC STUDIES</span> </div>
            </div>
            <div  className={`${styles.navSection} hideOnMobile justify-content-end`}>
                <Link to="/" style={linkStyle}><span className={`${styles.navItem}`}>Home</span></Link>
                <Link to="#" style={linkStyle}><span className={`${styles.navItem}`}>About Us</span></Link>
                <Link to="/login" style={linkStyle}><span className={`${styles.navItem}`}>E-portal</span></Link>
                <Link to="#" style={linkStyle}><span className={`${styles.navItem}`}>Programs</span></Link>
                <Link to="/resources" style={linkStyle}><span className={`${styles.navItem}`}>Resources</span></Link>
                <Link to="#" style={linkStyle}><span className={`${styles.navItem}`}>Contact us</span></Link>
                
            </div>

            <div  className={`hideOnDesktop ${styles.navSection} `}>
               <div style={{float:'right'}} className='pull-right'>
                    <HiOutlineMenuAlt1 onClick={()=>setShow(true)} size={29} />
               </div>
            </div>
            <Offcanvas 
                show={show} 
                onHide={handleClose} 
                placement="end" 
                style={{width:'70%'}}
            >
            <div className={styles.sideBarContainer}>
                <div className={`${styles.textLogo}`}>
                    <img className={`${styles.logo}`} src="../assets/logo.png" alt="logo" />
                    <div>KHAYRUL ADAB <span className="hideOnMobile">SCHOOL OF ARABIC AND ISLAMIC STUDIES</span> </div>
                </div>

                <div className={styles.navItems}>
                    {navItems.map((item, i)=>
                       <Link style={{textDecoration:'none'}} to={item.path} >
                            <div className={styles.navItem}>
                                <span  className={styles.icon}>{item.icon}</span>
                                <span>{item.label}</span>
                            </div>
                       </Link>
                    )}
                </div>
            </div>
            </Offcanvas>
        </div>
     );
}
 
export default AppHeader;