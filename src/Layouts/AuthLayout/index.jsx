import React from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import SideNav from '../../components/sidenav';


import AuthHeader from '../../components/authHeader';

//pages
import Dashboard from '../../views/User/dashboard';
import Students from '../../views/User/students';
import RegisterStudent from '../../views/User/newStudent';
import StudentProfile from '../../views/User/profile';


import styles from './layout.module.scss'

const AuthLayout = () => {
   
    return ( 
        <div>
            <AuthHeader/>
           <div className={styles.layoutContent}>

                <div className={styles.sideBar}>
                    <SideNav/>
                </div>
                <div className={styles.pageContent}>
                    <Routes>
                        <Route path='/students/profile' element={<StudentProfile/>} />
                        <Route path='/students/new' element={<RegisterStudent/>} />
                        <Route path="/students" element={<Students/>}/>
                        <Route path='/' element={<Dashboard/>}/>
                    </Routes>
                </div>

           </div>
        </div>
     );
}
 
export default AuthLayout;