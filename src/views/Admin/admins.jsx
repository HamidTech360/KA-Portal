import React, {useContext, useState} from 'react';
import { useQuery } from 'react-query';
import HomeLayout from '../../Layouts/HomeLayout';
import Header from '../../components/header';
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
                
                <Header
                    title={`Hello, ${user?.userName}`}
                    subTitle="Welcome to your dashboard"
                />

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