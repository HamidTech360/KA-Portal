import React, {useContext, useState} from 'react';
import { useQuery } from 'react-query';
import HomeLayout from '../../Layouts/HomeLayout';
import { Link , useNavigate} from 'react-router-dom';
import {IoIosNotificationsOutline} from 'react-icons/io'
import Header from '../../components/header';
import Avatar from 'react-avatar';
import { getRequest } from '../../utils/axios';
import { userContext } from '../../context/user';
import Backdrop from '../../components/backdrop';
import AppTable from '../../components/table';

import styles from './styles/dashboard.module.scss'

const Trash = () => {

    const [user, setUser] = useContext(userContext)
    const [searchResult, setSearchResult] = useState([])
    const { isLoading, isFetching, data} = useQuery(
        'trash',
        ()=>getRequest({url:`api/schools/trash`}),
        {
            refetchOnWindowFocus:false,
            onSuccess(response){
                // console.log(response);
            },
            onError(error){
                console.log(error)
            },
            enabled:!!user?._id
        }
    )
    if(isLoading){
        return <Backdrop/>
    }

    

    return ( 
        <HomeLayout>
            {isLoading && <Backdrop/>}
            <div className={styles.pageContainer}>
                <Header
                    title="Trash"
                    subTitle="Item in trash"
                />
                

                <div>
                    <div className={`d-flex`}>
                        {/* <button className={styles.btnCreate}>Create Record</button> */}
                        <div className={`numberBox mb-3`}>
                            <div className={`${styles.numberBox}`}>
                                <div className="d-flex">
                                    <div className={styles.number}>{data?.data?.schools?.length}</div>
                                    <div className={`${styles.numberLabel} ml-2 `}>
                                        <div className='text-sm'>records</div><div className='text-sm'>in database</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className={` ${styles.searchLayer}`}>
                        <div className={styles.searchBox}>
                            <Form.Control onChange={(e)=>handleSearch(e)}  placeholder='Search' className={`${styles.searchInput} shadow-none`} type="search" />
                            <BiSearchAlt2 color="lightgray" size={23} />
                        </div>
                    </div> */}
                   
                </div>
                {isLoading?'Loading......':''}
                <AppTable
                    tbData={data?.data?.trash  || []}
                    TbHeadings="Trash"
                />
            </div>

            
           

        </HomeLayout>
     );
}
 
export default Trash;