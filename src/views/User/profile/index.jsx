import React, {useState, useEffect} from "react";
import Loader from "../../../components/Loader/loader";
import axios from "axios";
import config from '../../../config'
import { useSearchParams } from "react-router-dom";
import styles from "./styles/profile.module.scss";
import { HiOutlineDotsHorizontal } from "react-icons/hi";



const StudentProfile = () => {
  const [searchParams] = useSearchParams()
  const studentId = searchParams.get('id')
  const [record, setRecord] = useState({})
  const [isFetching, setIsFetching] = useState(true)

  useEffect(()=>{
      (async function (){
          try{
              const response = await axios.get(`${config.apiUrl}/student/${studentId}`, {headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
              }})
              // console.log(response.data)
              setRecord(response.data.student)
              setIsFetching(false)
          }catch(error){
            console.log(error.response?.data)
          }
      })()
  },[])
 

  return (
    <div className={styles.profile}>
      {isFetching && <Loader/> }
      <div className={styles.profile_top}>
        <p className={styles.para6}>
          <span className={styles.para6_main}>All Students</span>
          <span className={styles.para6_line}> | </span>
          <span className={styles.sub}>248 students</span>
        </p>
        <p className={styles.para7}>
          <span className={styles.para7_main}>Students </span>
          <span className={styles.para7_icon}> &gt; </span>
          <span className={styles.para7_sub}> {record?.firstName} </span>
        </p>
      </div>

      <div className={styles.profile_body}>
        {/* <h1>Student profile</h1> */}
        <div className={styles.para1_container}>
          <p className={styles.para1}>Student Details</p>
          <span className={styles.menu_btn}>
            {" "}
            <HiOutlineDotsHorizontal size={40} />{" "}
          </span>
        </div>
        <div className="row">
          <div className={`col-12 col-md-4`}>
            <img src={record?.gender==="male"?`../../../assets/man.jpg`:`../../../assets/woman.png`} alt="Passport" className={styles.passport} />
          </div>
          <div className={`${styles.student_details} col-12 col-md-8`}>
            <p className={styles.para2}> {record?.firstName} {record?.lastName}</p>
            <p className={styles.para4}>
                {record?.firstName} {record?.lastName} is a student of Khayrul Adab modrosa. {record?.gender=="male"?'He':'She'} is currently in the 
                 class {record?.level}. {record?.gender=="male"?'He':'She'} was admitted on {record?.admissionDate}
            </p>

           
            <div className={styles.para5}>
                <p className={styles.para5_main}>First Name</p>
                <p className={styles.para5_sub}>{record?.firstName}</p>
            </div>

            <div className={styles.para5}>
                <p className={styles.para5_main}>Last Name</p>
                <p className={styles.para5_sub}>{record?.lastName}</p>
            </div>

            <div className={styles.para5}>
                <p className={styles.para5_main}>Date of Birth</p>
                <p className={styles.para5_sub}>{record?.dob}</p>
            </div>

            <div className={styles.para5}>
                <p className={styles.para5_main}>Class</p>
                <p className={styles.para5_sub}>{record?.level}</p>
            </div>

            <div className={styles.para5}>
                <p className={styles.para5_main}>Admission Date</p>
                <p className={styles.para5_sub}>{record?.admissionDate}</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
