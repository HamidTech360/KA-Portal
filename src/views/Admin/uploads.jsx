import React, {useContext, useState} from 'react';
import { useQuery } from 'react-query';
import HomeLayout from '../../Layouts/HomeLayout';
import { Link } from 'react-router-dom';
import {IoIosNotificationsOutline} from 'react-icons/io'
import Header from '../../components/header';
import Avatar from 'react-avatar';
import AdminTable from '../../components/adminTable';
import { getRequest } from '../../utils/axios';
import { userContext } from '../../context/user';
import Backdrop from '../../components/backdrop';
import AppTable from '../../components/table';

import styles from './styles/dashboard.module.scss'

const Uploaded = () => {

    const [user, setUser] = useContext(userContext)
    const [Admins, setAdmins] = useState([])

    const { isLoading, isFetching, data} = useQuery(
        'user-uploads',
        ()=>getRequest({url:`api/schools/user/${user?._id}`}),
        {
            refetchOnWindowFocus:false,
            onSuccess(response){
                 console.log(response);
            },
            onError(error){
                console.log(error)
            },
            enabled:!!user?._id
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
                    title="Uploaded"
                    subTitle="All active institutions"
                />
                

                <div>
                    <div className={`d-flex`}>
                        {/* <button className={styles.btnCreate}>Create Record</button> */}
                        <div className={`numberBox mb-3`}>
                            <div className={`${styles.numberBox}`}>
                                <div className="d-flex">
                                    <div className={styles.number}>{data?.data?.schools?.length}</div>
                                    <div className={`${styles.numberLabel} ml-2 `}>
                                        <div className='text-sm'>records</div><div className='text-sm'>uploaded</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className={` ${styles.searchLayer}`}>
                        <div className={styles.searchBox}>
                            <Form.Control placeholder='Search' className={`${styles.searchInput} shadow-none`} type="search" />
                            <BiSearchAlt2 color="lightgray" size={23} />
                        </div>
                    </div> */}
                   
                </div>
                {isLoading?'Loading......':''}
                <AppTable
                    tbData={data?.data?.schools || []}
                    TbHeadings="Your uploads"
                    enableActions={true}
                    type="uploads"
                />
            </div>

            
           

        </HomeLayout>
     );
}
 
export default Uploaded;