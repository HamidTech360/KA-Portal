import React, {useContext, useState} from 'react';
import { useQuery } from 'react-query';
import HomeLayout from '../../Layouts/HomeLayout';
import Header from '../../components/header';
import { Link , useNavigate} from 'react-router-dom';
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BiSearchAlt2} from 'react-icons/bi'
import { Form } from 'react-bootstrap';
import Avatar from 'react-avatar';
import axios from 'axios';
import config from '../../config'
import { getRequest } from '../../utils/axios';
import { userContext } from '../../context/user';
import Backdrop from '../../components/backdrop';
import AppTable from '../../components/table';

import styles from './styles/dashboard.module.scss'

const ManageRecords = () => {

    const [user, setUser] = useContext(userContext)
    const [searchResult, setSearchResult] = useState([])
    const { isLoading, isFetching, data} = useQuery(
        'manage',
        ()=>getRequest({url:`api/schools`}),
        {
            refetchOnWindowFocus:false,
            onSuccess(response){
                //  console.log(response);
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

    const handleSearch = async (e)=>{
        const query = e.currentTarget.value
        try{
            const response = await axios.get(`${config.apiUrl}/api/schools/search?keyword=${query}`)
            setSearchResult(response.data?.result)
        }catch(error){
            console.log(error.response?.data)
        }
    }
   

    return ( 
        <HomeLayout>
            {isLoading && <Backdrop/>}
            <div className={styles.pageContainer}>
                <Header
                    title={'Manage'}
                    subTitle={'Manage All Records'}
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


                    <div className={` ${styles.searchLayer}`}>
                        <div className={styles.searchBox}>
                            <Form.Control onChange={(e)=>handleSearch(e)}  placeholder='Search' className={`${styles.searchInput} shadow-none`} type="search" />
                            <BiSearchAlt2 color="lightgray" size={23} />
                        </div>
                    </div>
                   
                </div>
                {isLoading?'Loading......':''}
                <AppTable
                    tbData={searchResult.length > 0 ? searchResult: data?.data?.schools  || []}
                    TbHeadings="All Records"
                    type="uploads"
                />
            </div>

            
           

        </HomeLayout>
     );
}
 
export default ManageRecords;