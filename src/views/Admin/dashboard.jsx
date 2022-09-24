import React, {useContext} from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import { Link } from 'react-router-dom';
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BiSearchAlt2} from 'react-icons/bi'
import { Form } from 'react-bootstrap';
import Avatar from 'react-avatar';
import AppTable from '../../components/table';
import Backdrop from '../../components/backdrop';
import { userContext } from '../../context/user';

import styles from './styles/dashboard.module.scss'

const Dashboard = () => {

    const [user, setUser] = useContext(userContext)
    console.log('User exported from store:', user)

   

    return ( 
        <HomeLayout>
            <div className={styles.pageContainer}>
                <div className={`d-flex`}>
                    <div>
                        <div className={styles.hello}>Hello, {user?.userName} </div>
                        <div className={styles.welcome}>Welcome to your dashboard</div>
                    </div>
                    <div className={`d-flex flex-1 justify-content-end`} >
                        <div className='hideOnMobile'>
                            <IoIosNotificationsOutline className='mr-4' size={23} color='#0D5459' />
                            <Avatar name={user?.userName} round={true} size={'60px'}/>
                        </div>
                       
                    </div>
                    
                </div>
                
                <div className="d-flex flex-1 justify-content-end hideOnMobile">
                        <div className={`${styles.smallNavs} hideOnMobile`}>
                           <div><Link className={styles.links}> Contact Supervisor</Link></div>
                           <div><Link to="/dashboard/admins" className={styles.links}>Admins</Link></div>
                           <div><Link className={styles.links}>Logout</Link></div>
                        </div>
                </div>

                <div>
                    <div className={`d-flex`}>
                       <Link to="/dashboard/new"> <button className={styles.btnCreate}>Create Record</button></Link>
                        <div className={`numberBox d-flex justify-content-end flex-1`}>
                            <div className={`${styles.numberBox}`}>
                                <div className="d-flex">
                                    <div className={styles.number}>30</div>
                                    <div className={`${styles.numberLabel} ml-2`}>
                                        <div>Records</div><div>Updated</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={` ${styles.searchLayer}`}>
                        <div className={styles.searchBox}>
                            <Form.Control placeholder='Search' className={`${styles.searchInput} shadow-none`} type="search" />
                            <BiSearchAlt2 color="lightgray" size={23} />
                        </div>
                    </div>
                   
                </div>
                <AppTable/>
            </div>

            
           
            {!user && <Backdrop/>}
        </HomeLayout>
     );
}
 
export default Dashboard;