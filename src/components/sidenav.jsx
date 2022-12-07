import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthNav } from '../utils/helpers/nav';
import { AiOutlineLogout, AiOutlinePlus } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import styles from './styles/sidenav.module.scss'

const SideNav = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const logOut = ()=>{
        localStorage.removeItem('accessToken')
        navigate('/')
    }
    return ( 
        <>
                    <div className={`${styles.searchBox} hideOnMobile`}>
                        <BsSearch size={20} />
                        <input type="text" className={styles.searchInput} />
                    </div>

                    <div className={styles.navLists}>
                       {AuthNav.map((item, i)=>
                        <Link key={i} to={item.path} style={{textDecoration:'none'}}>
                            <div 
                                style={item.location.includes(location.pathname)? 
                                    {color:'#1A8F4A'}
                                    :{}}
                                className={styles.navItem}
                            >
                                <span className={styles.icon}> {item.icon} </span>
                                <span style={{fontWeight:item.location.includes(location.pathname)?'700':''}} className={styles.navLabel}>{item.label}</span>
                                {
                                    item.location.includes(location.pathname) &&
                                    <span className={styles.dot}>
                                        <GoPrimitiveDot color='#1A8F4A' />
                                    </span>
                                }
                            </div>
                        </Link>
                       )}
                    </div>

                    <div className="logOut" >
                        <div className={styles.navItem}>
                            <span className={styles.icon}> <AiOutlineLogout size={24} /> </span>
                            <span 
                                className={styles.navLabel} 
                                style={{cursor:'pointer'}} 
                                onClick={logOut}
                            > Logout </span>
                        </div>
                    </div>

                    <div className={styles.newStudentBlock}>
                        <div onClick={()=>navigate('/user/students/new')} className={styles.fab}>
                            <AiOutlinePlus color='white' size={20} />
                        </div>
                        <div className={styles.bold}>Add New Student</div>
                        <div className={styles.light}>Fill student form and upload</div>
                    </div>
        </>
     );
}
 
export default SideNav;