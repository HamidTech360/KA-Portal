import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2';
import config from '../../../config'
import { useFormik } from 'formik';
import { LoginValidator } from '../../../utils/validators/auth';
import AppHeader from '../../../components/header';
import Footer from '../../../components/footer';

//components
import { Form, Button } from 'react-bootstrap';
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

//styles
import styles from '../styles/login.module.scss'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setisLoading] = useState(false)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        validationSchema:LoginValidator(),
        onSubmit:async (values)=>{
            setisLoading(true)
           //console.log('values', values)
           try{
                const {data} = await axios.post(`${config.apiUrl}/auth/login`, values)
                localStorage.setItem('accessToken', data.accessToken)
                navigate('/user/students')
           }catch(error){
              console.log(error.response?.data)
              setisLoading(false)
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text:error.response?.data || 'Authentication failed',
                showCancelButton:true,
                showConfirmButton:false
              })
           }finally{
             setisLoading(false)
           }
        }
    })
    

    
    return ( 
        <div className={styles.loginScreen} >
            <AppHeader/>
                <div className={styles.loginBox}>
                    <div className={styles.loginHeader}>Login</div>
                    <div className={styles.subText}>Enter login credential to access the portal</div>

                    <div className={styles.formArea}>
                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Group className={`mb-3`}>
                                <Form.Label className={styles.label}>
                                    Username
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    className={`${styles.formInput}`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.username}

                                />
                                {
                                    formik.touched.username &&
                                    <p className={styles.errorMsg}>{formik.errors.username}</p>
                                }
                            </Form.Group>

                            <Form.Group className={`mb-3`}>
                                <Form.Label className={styles.label}>
                                    Password
                                </Form.Label>
                               <div className={styles.inputBox}>
                                <Form.Control
                                    name="password"
                                    className={styles.formInput}
                                    type={showPassword?'text':'password'}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                
                                <span style={{cursor:'pointer'}}>
                                    {
                                        showPassword?
                                        <AiFillEyeInvisible size={25} color='lightgrey' onClick={()=>setShowPassword(false)} />:
                                        <AiFillEye size={25} color='lightgrey' onClick={()=>setShowPassword(true)}  />
                                    }
                                </span>
                               </div>
                               {
                                    formik.touched.password &&
                                    <p className={styles.errorMsg}>{formik.errors.password}</p>
                                }
                            </Form.Group>
                            <div className={`${styles.query} d-flex`}>
                                <div className={`d-flex`}> 
                                    <Form.Check style={{marginRight:'6px'}} /> Remeber me                                   
                                </div> 
                                <div className="pull-right justify-content-end pull-right flex-1" style={{flex:'1', justifyContent:'flex-end', display:'flex'}}>
                                    <span className={styles.forgot}>Forgot password ?</span>
                                </div>
                            </div>

                            <Form.Group>
                                <Button 
                                    type="submit" 
                                    className={styles.btnLogin}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Authenticating...':'Login'}
                                </Button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            <Footer/>
        </div>
     );
}
 
export default Login;