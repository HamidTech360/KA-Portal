import React, {useContext, useState, useEffect} from 'react';
import { useQuery } from 'react-query';
import HomeLayout from '../../Layouts/HomeLayout';
import { Link } from 'react-router-dom';
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BiSearchAlt2} from 'react-icons/bi'
import { Form } from 'react-bootstrap';
import Avatar from 'react-avatar';
import { userContext } from '../../context/user';
import Backdrop from '../../components/backdrop';
import AppTable from '../../components/table';

import styles from './styles/dashboard.module.scss'

const Draft = () => {

    const [user, setUser] = useContext(userContext)
    const [tableData, setTableData] = useState(JSON.parse(localStorage.getItem('draft')) || [])

    const removeFromDraft = (item)=>{
        const draft = JSON.parse(localStorage.getItem('draft'))
        console.log(draft)
        const draft__c = draft.filter(el=>el.id!==item.id)
        setTableData(draft__c)
        localStorage.setItem('draft', JSON.stringify(draft__c))
    }
    
    
    

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
                                    <div className={styles.number}>{tableData.length}</div>
                                    <div className={`${styles.numberLabel} ml-2 `}>
                                        <div className='text-sm'>records</div><div className='text-sm'>in draft</div>
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
               
                <AppTable
                    tbData={tableData}
                    TbHeadings="Drafts"
                    showDraftAction={true}
                    enableActions={true}
                    removeDraft={removeFromDraft}
                />
            </div>

            
           

        </HomeLayout>
     );
}
 
export default Draft;