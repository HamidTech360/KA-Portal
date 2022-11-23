import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AuthNav } from '../../utils/helpers/nav';
import {BsSearch} from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'
import {AiOutlineLogout, AiOutlinePlus} from 'react-icons/ai'

import AppHeader from '../../components/header'

//pages
import Dashboard from '../../views/User/dashboard';
import NewStudent from '../../views/User/NewStudent';
import Students from '../../views/User/students';

import styles from './layout.module.scss'

const AuthLayout = () => {

    const location = useLocation()
   
    return ( 
        <div>
            <AppHeader/>
           <div className={styles.layoutContent}>

                <div className={styles.sideBar}>
                    <div className={styles.searchBox}>
                        <BsSearch size={20} />
                        <input type="text" className={styles.searchInput} />
                    </div>

                    <div className={styles.navLists}>
                       {AuthNav.map((item, i)=>
                        <Link key={i} to={item.path} style={{textDecoration:'none'}}>
                            <div 
                                style={location.pathname===item.path? 
                                    {color:'#1A8F4A'}
                                    :{}}
                                className={styles.navItem}
                            >
                                <span className={styles.icon}> {item.icon} </span>
                                <span style={{fontWeight:location.pathname===item.path?'700':''}} className={styles.navLabel}>{item.label}</span>
                                {
                                    location.pathname===item.path &&
                                    <span className={styles.dot}>
                                        <GoPrimitiveDot color='#1A8F4A' />
                                    </span>
                                }
                            </div>
                        </Link>
                       )}
                    </div>

                    <div className="logOut">
                        <div className={styles.navItem}>
                            <span className={styles.icon}> <AiOutlineLogout size={24} /> </span>
                            <span className={styles.navLabel}> Logout </span>
                        </div>
                    </div>

                    <div className={styles.newStudentBlock}>
                        <div className={styles.fab}>
                            <AiOutlinePlus color='white' size={20} />
                        </div>
                        <div className={styles.bold}>Add New Student</div>
                        <div className={styles.light}>Fill student form and upload</div>
                    </div>
                </div>
                <div className={styles.pageContent}>
                    <Routes>
                        <Route path="/students" element={<Students/>}/>
                        <Route path='/new' element={<NewStudent/>} />
                        <Route path='/' element={<Dashboard/>}/>
                    </Routes>
                </div>

           </div>
        </div>
     );
}
 
export default AuthLayout;