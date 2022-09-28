import React, {useState} from 'react';
import { useQuery } from 'react-query';
import styles from '../styles/home.module.scss'
import { Col, Row} from 'react-bootstrap'
import {IoMdLogOut} from 'react-icons/io'
import {RiMenu5Fill} from 'react-icons/ri'
import {IoIosNotificationsOutline} from 'react-icons/io'
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Offcanvas } from "react-bootstrap";
import SideBarContent from '../../components/sideBarContent';
import { getRequest } from '../../utils/axios';
import {userContext} from '../../context/user';
import Backdrop from '../../components/backdrop';


const HomeLayout = ({children}) => {

   
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const navigate = useNavigate()

    const [userDetails, setUserDetails] = useContext(userContext)
    const {data, isLoading, isFetching} = useQuery(
        'user',
        ()=>getRequest({url:'api/auth/admin'}),
        {
            onSuccess(response){
                setUserDetails(response.data.admin)
            },
            onError(error){
                localStorage.removeItem('authToken')
                navigate('/')
            },
            // refetchOnWindowFocus:false
        }
    )

        
    
    return ( 
        <div className={styles.layout}>
            <Row style={{minHeight:'100vh'}}>
                <Col className={`hideOnMobile ${styles.sideBar}`} lg="2" md="3" >
                    <SideBarContent/>
                </Col>

                <Col style={{height:'100vh', overflow:'scroll', paddingBottom:'50px'}} lg="10" md="9" className={styles.childSection}>
                   <div className="hideOnDesktop">
                    <div className={` d-flex  ${styles.mobileTop}`} >
                            <div> <RiMenu5Fill onClick={()=>setShow(true)} size="40" color='#0D5459' /> </div>
                            <div className="d-flex flex-1 justify-content-end px-4">
                                    <IoIosNotificationsOutline className='mr-4 mt-2' size={23} color='#0D5459' />
                                    <Avatar fgcolor ="#fff" name={!isLoading? data.data.admin.userName:''} round={true} size={'40px'}/>
                            </div>
                        </div>
                   </div>

                   <Offcanvas show={show} onHide={handleClose} placement="start" style={{width:'70vw', backgroundColor:'#0D5459'}}>
                        <Offcanvas.Body>
                            <SideBarContent/>                        
                      </Offcanvas.Body>
                    </Offcanvas>
                    {children}
                </Col>
            </Row>
        </div>
     );
}
 
export default HomeLayout;