import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles/sidebar.module.scss'
import { NavBarOptions } from '../utils/helpers/data/navbar';
import {IoMdLogOut} from 'react-icons/io'


const SideBarConten = () => {
    const navOptions = NavBarOptions()
    const navigate = useNavigate()
    
    const LogOut = ()=>{
        localStorage.removeItem('authToken')
        navigate('/')
    }
    return ( 
        <div className={styles.sideBarContent}>
            <div className={`${styles.logoArea}`}>
                <div className={`${styles.logoBox}`}>
                    <img src="../../assets/logo.png" style={{objectFit:'contain'}} alt="" />
                </div>
                <div className={`${styles.logoText}`}>
                    <div>Tution-free</div>
                    <div>English Course</div>
                </div>
            </div>
            <hr className='mt-4' style={{border:'1px solid white', color:'white'}} />
            <div className={styles.navBarOptions}>
                {
                    navOptions.map((item,i)=>
                    <div className={styles.listsBox}>
                        <Link style={{color:'white', textDecoration:'none'}} to={item.target}>
                        <span className='mr-2'> {item.icon}</span>
                            {item.label}
                        </Link> 
                    </div>)
                }

            </div>
            <div className={styles.footer}>
                <hr className='mt-4' style={{border:'1px solid white', color:'white'}} />
                <div onClick={LogOut} >
                    <IoMdLogOut size={25} />
                    <span className="ml-4" style={{fontWeight:'600', cursor:'pointer'}}>Logout</span>
                </div>
            </div>
        </div>
     );
}
 
export default SideBarConten;