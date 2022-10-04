import React, {useContext, useState, useEffect} from 'react';
import { useQuery } from 'react-query';
import HomeLayout from '../../Layouts/HomeLayout';
import { Link, useNavigate } from 'react-router-dom';
import {IoIosNotificationsOutline} from 'react-icons/io'
import Header from '../../components/header';
import Avatar from 'react-avatar';
import { userContext } from '../../context/user';
import Backdrop from '../../components/backdrop';
import AppTable from '../../components/table';

import styles from './styles/dashboard.module.scss'

const Draft = () => {

    const [user, setUser] = useContext(userContext)
    const [tableData, setTableData] = useState(JSON.parse(localStorage.getItem('draft')) || [])
    const navigate = useNavigate()
    const removeFromDraft = (item)=>{
        const draft = JSON.parse(localStorage.getItem('draft'))
        // console.log(draft)
        const draft__c = draft.filter(el=>el._id!==item._id)
        setTableData(draft__c)
        localStorage.setItem('draft', JSON.stringify(draft__c))
    }
    
    const handleSearch = ()=>{
        navigate('/dashboard/manage')
    }
    
    

    return ( 
        <HomeLayout>
        
            <div className={styles.pageContainer}>
                

                <Header
                    title={`Draft`}
                    subTitle={`Edit draft items`}
                />

                <div>
                    <div className={`d-flex`}>
                        {/* <button className={styles.btnCreate}>Create Record</button> */}
                        <div className={`numberBox mb-3`}>
                            <div className={`${styles.numberBox}`}>
                                <div className="d-flex">
                                    <div className={styles.number}>{tableData.length}</div>
                                    <div className={`${styles.numberLabel} ml-2 `}>
                                        <div className='text-sm'>records</div><div className='text-sm'>in draft</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className={` ${styles.searchLayer}`}>
                        <div className={styles.searchBox} onClick={navigate}>
                            <Form.Control placeholder='Search' className={`${styles.searchInput} shadow-none`} type="search" />
                            <BiSearchAlt2 color="lightgray" size={23} />
                        </div>
                    </div> */}
                   
                </div>
               
                <AppTable
                    tbData={tableData}
                    TbHeadings="Drafts"
                    showDraftAction={true}
                    enableActions={true}
                    removeDraft={removeFromDraft}
                    type="draft"
                />
            </div>

            
           

        </HomeLayout>
     );
}
 
export default Draft;