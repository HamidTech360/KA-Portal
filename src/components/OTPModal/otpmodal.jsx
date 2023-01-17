import React, {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import config from '../../config'
import styles from './otp.module.scss'


const OTPModal = ({action}) => {
    const [otpReceived, setOTPeceived] = useState(false)
    const [requesting, setRequesting] = useState(false)
    const [verifying, setVerifying] = useState(false)
    const [otp, setOtp] = useState('')

    const handleChange = (e)=>{
        //console.log(e.target.value)
        setOtp(e.target.value)
    }

    const requestOTP = async ()=>{
        try{
            setRequesting(true)
            const response = await axios.get(`${config.apiUrl}/otp`)
            //console.log(response)
            setOTPeceived(true)
        }catch(error){
            console.log(error.response?.data)
            alert('Failed to get OTP. Please retry')
        }finally{
            setRequesting(false)
        }
    }

    const verifyOTP = async ()=>{
        try{
            setVerifying(true)
            const response = await axios.post(`${config.apiUrl}/otp`, {otp})
            console.log(response)
            action()
        }catch(error){
            console.log(error.response?.data)
            alert('Failed to verify OTP')
        }finally{
            setVerifying(false)
        }
    }

    return ( 
        <Modal 
            show={true}
            centered
        >
            <div className={styles.container}>
                <div style={{height:'fit-content'}}>
                   {!otpReceived && 
                    <>
                        <div className={styles.promptMsg}><b>You need an OTP to proceed with this action</b></div>
                        <div className="text-center">
                            <Button
                                variant="success"
                                disabled={requesting}
                                onClick={requestOTP}
                            >
                            {requesting ? 'Requesting...':'Request for OTP'}
                            </Button>
                        </div>
                    </>
                   }

                   {
                    otpReceived &&
                    <>
                        
                        <div className={`${styles.promptMsg} text-center`}>An OTP has been sent to the school Email. Please enter the OTP below</div>
                        <input 
                            type="text" 
                            className={styles.input}
                            onChange={(e)=>handleChange(e)}
                        />
                        <div className="text-center">
                            <Button 
                                variant='success'
                                onClick={verifyOTP}
                                disabled={verifying}
                            >
                                Verify OTP
                            </Button>
                        </div>
                    </>
                   }
                </div>
            </div>
        </Modal>
     );
}
 
export default OTPModal;