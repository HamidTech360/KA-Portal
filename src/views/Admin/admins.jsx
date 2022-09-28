import React, {useContext, useState} from 'react';
import { useQuery } from 'react-query';
import HomeLayout from '../../Layouts/HomeLayout';
import { Link } from 'react-router-dom';
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BiSearchAlt2} from 'react-icons/bi'
import { Form } from 'react-bootstrap';
import Avatar from 'react-avatar';
import AdminTable from '../../components/adminTable';
import { getRequest } from '../../utils/axios';
import { userContext } from '../../context/user';
import Backdrop from '../../components/backdrop';

import styles from './styles/dashboard.module.scss'

const Admins = () => {

    const [user, setUser] = useContext(userContext)
    const [Admins, setAdmins] = useState([])
    
    const { isLoading, isFetching, data} = useQuery(
        'admins',
        ()=>getRequest({url:'api/admins'}),
        {
            refetchOnWindowFocus:false,
            onSuccess(response){
                // console.log(response);
               
            },
            onError(error){
                console.log(error)
            }
        }
    )
    if(isLoading){
        // console.log(data)
        return <Backdrop/>
    }
   

    return ( 
        <HomeLayout>
            {isLoading && <Backdrop/>}
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
                           <div><Link className={styles.links}>Admins</Link></div>
                           <div><Link className={styles.links}>Logout</Link></div>
                        </div>
                </div>

                <div>
                    <div className={`d-flex`}>
                        {/* <button className={styles.btnCreate}>Create Record</button> */}
                        <div className={`numberBox mb-3`}>
                            <div className={`${styles.numberBox}`}>
                                <div className="d-flex">
                                    <div className={styles.number}>{data?.data?.admins.length}</div>
                                    <div className={`${styles.numberLabel} ml-2 `}>
                                        <div className='text-sm'>Admins</div><div className='text-sm'>in Database</div>
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
                {isLoading?'Loading......':''}
                <AdminTable
                    tbData={data?.data?.admins}
                    tbTitle="Admins"
                />
            </div>

            
           

        </HomeLayout>
     );
}
 
export default Admins;