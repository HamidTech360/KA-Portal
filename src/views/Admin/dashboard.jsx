import React, {useContext} from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getRequest } from '../../utils/axios';
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BiSearchAlt2} from 'react-icons/bi'
import { Form } from 'react-bootstrap';
import Avatar from 'react-avatar';
import Header from '../../components/header';
import AppTable from '../../components/table';
import Backdrop from '../../components/backdrop';
import { userContext } from '../../context/user';

import styles from './styles/dashboard.module.scss'

const Dashboard = () => {

    const [user, setUser] = useContext(userContext)
    
    const navigate = useNavigate()
    const { isLoading, isFetching, data:response} = useQuery(
        'schools',
        ()=>getRequest({url:'api/schools'}),
        {
            refetchOnWindowFocus:false,
            onSuccess(response){
                //  console.log(response); 
            },
            onError(error){
                console.log(error)
            }
        }
    )

    const handleSearch = ()=>{
        navigate('/dashboard/manage')
    }

    if(isLoading){
        return <Backdrop/>
    }
   
    let tableData = response?.data?.schools || []
    tableData = [...tableData].reverse().slice(0, 5)
    

    return ( 
        <HomeLayout>
            <div className={styles.pageContainer}>
                <Header
                    title={`Hello, ${user?.firstName} ${user?.lastName}`}
                    subTitle="Welcome to your dashboard"
                />
                <div>
                    <div className={`d-flex`}>
                       <Link to="/dashboard/new"> <button className={styles.btnCreate}>Create Record</button></Link>
                        <div className={`numberBox d-flex justify-content-end flex-1`}>
                            <div className={`${styles.numberBox}`}>
                                <div className="d-flex">
                                    <div className={styles.number}>{response?.data?.schools?.length}</div>
                                    <div className={`${styles.numberLabel} ml-2`}>
                                        <div>Records</div><div>uploaded</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={` ${styles.searchLayer}`}>
                        <div className={styles.searchBox} onClick={handleSearch}>
                            <Form.Control placeholder='Search' className={`${styles.searchInput} shadow-none`} type="search" />
                            <BiSearchAlt2 color="lightgray" size={23} />
                        </div>
                    </div>
                   
                </div>
                <AppTable 
                    TbHeadings="Recent records" 
                    tbData={tableData || []} 
                    type="uploads"
                />
            </div>

            
           
            {!user && <Backdrop/>}
        </HomeLayout>
     );
}
 
export default Dashboard;