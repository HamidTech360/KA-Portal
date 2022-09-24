import React from 'react';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { getRequest, postRequest } from '../utils/axios';
import Spinner from 'react-spinner-material'
import { Button } from 'react-bootstrap';
import styles from './styles/table.module.scss'

const AdminTable = ({tbTitle, tbData, TbHeadings}) => {
    const queryClient = useQueryClient()

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
    
    const handleVerifyAdmin = (admin)=>{
        console.log(admin)
        mutate({
            url:'api/admins',
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
                    <td>FirstName</td>
                    <td>LastName</td>
                    <td>Email</td>
                    <td>Id</td>
                    <td>Action</td>

                </thead>
                <tbody>
                    {
                        tbData.map((item, i)=>
                        <tr>
                            <td className={styles.td}>{item.firstName}</td>
                            <td className={styles.td}>{item.lastName}</td>
                            <td className={styles.td}>{item.email}</td>
                            <td className={styles.td}>00123</td>
                            <td className={styles.td}>
                                {item.isVerified?
                                 'Verified':
                                 <Button onClick={()=>handleVerifyAdmin(item)} variant='danger' style={{fontSize:'12px', fontWeight:'bold', color:'white'}}>
                                     {isLoading?<Spinner className="mx-auto" color="white" radius={20} stroke={2} />:'verify'}
                                </Button>
                                }
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