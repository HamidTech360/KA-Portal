import React, {useState} from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import config from '../config'
import axios from 'axios';
import styles from './styles/table.module.scss'

const AppTable = ({showDraftAction, tbData, TbHeadings, enableActions, removeDraft, type}) => {

    const formatDigit  = (number)=>{
        let s__number = `000${number}`
        s__number = s__number.slice(-3)
        const id = `ADM${s__number}`
        return id
    }
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const [isLaoding, setIsLaoding] = useState(null)

    
    const deleteRecord = async (item)=>{
        console.log(item)
        const query = window.confirm("Are you sure to proceed with this action?")
        if(!query) return
        Swal.fire({
            icon: 'success',
            title: 'Record deleted',
            text:'Record has been deleted succesfully'
        })
        try{
            const response = await axios.delete(`${config.apiUrl}/api/schools/${item._id}`, {
                headers:{
                    authorization:`Bearer ${localStorage.getItem('authToken')}`
                }
            })
            console.log(response.data)
            queryClient.invalidateQueries('user-uploads')
            Swal.close()
        }catch(error){
            console.log(error)
            Swal.close()
        }
    }

    const editRecord = (item)=>{
        // Swal.fire({
        //     icon: 'info',
        //     title: 'Not available',
        //     text:'Currently working on this feature'
        // })
        navigate(`/dashboard/edit/${item._id}?type=${type}`)
    }

   
    
   
    return ( 
        <div className={`mt-7 ${styles.tableContainer}`}>
            <div className={`d-flex`}>
                <div className={`${styles.tableTitle}`}>
                    {TbHeadings}
                </div>
                <div className={`d-flex flex-1 justify-content-end`}>
                    <span className={` ${styles.viewAll}`}>View all</span>
                </div>
            </div>
            <hr />
            <table className={`${styles.table}`}>
                <thead className={`${styles.tableHead}`}>
                    <tr>
                        <td className={styles.th}>Id</td>
                        <td className={styles.th}>School</td>
                        <td className={styles.th}>Location</td>
                        <td className={styles.th}>department</td>
                        <td className={styles.th}>Faculty</td>
                        {enableActions?  <td className={styles.th}>Action</td>:<td className={styles.th}>Author</td>}

                    </tr>
                </thead>
                <tbody>
                    {
                        tbData.map((item, i)=>
                        <tr key={i}>
                            <td className={styles.td}>{formatDigit(i+1)}</td>
                            <td className={styles.td}>{item.schoolName}</td>
                            <td className={styles.td}>{item.country}</td>
                            <td className={styles.td}>{item.department}</td>
                            <td className={styles.td}>{item.faculty}</td>
                            <td className={styles.td}> 
                                {
                                    enableActions?
                                    <>
                                    <span onClick={()=>editRecord(item)} className={`${styles.edit} mr-3`}>Edit </span>
                                    {showDraftAction?
                                        <span  className={styles.delete} onClick={()=>removeDraft(item)} >Delete</span>:
                                        <span className={styles.delete} onClick={()=>deleteRecord(item)}>Delete</span>
                                    } 
                                    </>:
                                    <td className={styles.td}>
                                        <Link style={{color:'blue', textDecoration:'none'}} to={`/dashboard/profile/${item?.author?._id}`}>
                                            {`${item?.author?.firstName} ${item?.author?.lastName}`}
                                             
                                        </Link>
                                    </td>
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
 
export default AppTable;