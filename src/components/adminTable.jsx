import React, {useContext} from 'react';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { getRequest, postRequest } from '../utils/axios';
import { userContext } from '../context/user';
import Spinner from 'react-spinner-material'
import { Button } from 'react-bootstrap';
import styles from './styles/table.module.scss'

const AdminTable = ({tbTitle, tbData, TbHeadings}) => {
    const queryClient = useQueryClient()
    const [user] = useContext(userContext)
    const {isLoading, mutate} = useMutation(
        postRequest,
        {
            onSuccess(response){
                queryClient.invalidateQueries('admins')
                console.log(response.data)
            },
            onError(error){
                console.log(error)
            }
        }
    )
    
    const handleAdminVerification = (admin, action)=>{
        console.log(admin)
        mutate({
            url:`api/admins?action=${action}`,
            data:{ admin:admin._id}
        })
        
    }

    return ( 
        <div className={`mt-14 ${styles.tableContainer}`}>
            <div className={`d-flex`}>
                <div className={`${styles.tableTitle}`}>
                    {tbTitle}
                </div>
                <div className={`d-flex flex-1 justify-content-end`}>
                    <span className={` ${styles.viewAll}`}>View all</span>
                </div>
            </div>
            <hr />
           
            <table className={`${styles.table}`}>
                <thead className={`${styles.tableHead}`}>
                    <tr>
                        <td className={styles.th}>FirstName</td>
                        <td className={styles.th}>LastName</td>
                        <td className={styles.th}>Email</td>
                        <td className={styles.th}>Id</td>
                        <td className={styles.th}>Action</td>
                    </tr>

                </thead>
                <tbody>
                    {
                        tbData.map((item, i)=>
                        <tr key={i}>
                            <td className={styles.td}>{item.firstName}</td>
                            <td className={styles.td}>{item.lastName}</td>
                            <td className={styles.td}>{item.email}</td>
                            <td className={styles.td}>00123</td>
                            <td className={styles.td} style={{color:'green'}}>
                              <>
                                {item.isVerified?
                                    <Button disabled={user?.isMainAdmin?false:true} onClick={()=>handleAdminVerification(item, 'unverify')} variant='danger' style={{fontSize:'12px', fontWeight:'bold', color:'white'}}>
                                        Unverify
                                    </Button>:
                                    <Button disabled={user?.isMainAdmin?false:true} onClick={()=>handleAdminVerification(item, 'verify')}  style={{fontSize:'12px', fontWeight:'bold', color:'white'}}>
                                        {isLoading?<Spinner className="mx-auto" color="white" radius={20} stroke={2} />:'verify'}
                                    </Button>
                                }
                              </>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
         
        </div>
     );
}
 
export default AdminTable;