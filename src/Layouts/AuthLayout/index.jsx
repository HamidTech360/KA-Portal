import React from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import SideNav from "../../components/SideNav/sidenav";

import AuthHeader from "../../components/Header/authHeader";

//pages
import Dashboard from "../../views/User/dashboard";
import UploadResult from "../../views/User/uploadResult";
import Students from "../../views/User/students";
import RegisterStudent from "../../views/User/newStudent";
import StudentProfile from "../../views/User/profile";
import StudentResult from "../../views/User/studentResult";
import Resources from "../../views/User/resources";
import ResultFileHeader from "../../components/ResultFileHeader";

import styles from "./layout.module.scss";
import NewStaff from './../../views/User/newStaff/newStaff';

const AuthLayout = () => {
  return (
    <div className={styles.appContent}>
      <AuthHeader />
      <div className={styles.layoutContent}>
        <div className={styles.sideBar}>
          <SideNav />
        </div>
        <div className={styles.pageContent}>
          <Routes>
            <Route path="/newStaff" element={< NewStaff />} />
            <Route path="/events" element={< Resources />} />
            <Route path="/ref" element={< ResultFileHeader />} />
            <Route path="/students/profile" element={<StudentProfile />} />
            <Route path="/students/create" element={<RegisterStudent />} />
            <Route path="/students/result" element={<StudentResult />} />
            <Route path="/students" element={<Students />} />
            <Route path="/uploadResult" element={<UploadResult />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
