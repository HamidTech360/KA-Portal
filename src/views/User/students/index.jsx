import { Link } from 'react-router-dom';
import styles from './styles/student.module.scss'

const Students = () => {
    const [studentsRecord, setStudentsRecord] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [filteredGender, setFilteredGender] = useState(null)
    const [filteredClass, setFilteredClass] = useState(null)
    const [filteredList, setFilteredList] = useState([])

    const tableHeader = [
        {label:'Student ID', key:'regNumber'},
        {label:'Name', key:'fullName'},
        {label:'Gender',  key:'gender'},
        {label:'Level', key:'level'},
        
    ]

    const handleFilter = (criteria, value)=>{
        let filtered
        if(!value) setFilteredList([])
        const record__c = [...studentsRecord]
        if(criteria ==="class"){
            setFilteredClass(value)
            filtered = record__c.filter(item=>item.gender?.toLowerCase() ===value.toLowerCase())
        }else if (criteria === "level"){
            setFilteredGender(value)
            filtered = record__c.filter(item=>item.level ==value)
        }
        setFilteredList(filtered)
    }

    useEffect(()=>{
        (async function(){
            try{
                const response = await axios.get(`${config.apiUrl}/student`, {headers:{
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                }})
                const allStudents = [...response.data.students]
                allStudents.forEach(item=>{
                    item['fullName'] = `${item.firstName} ${item.lastName}`
                })
                setStudentsRecord(allStudents)
                setIsFetching(false)
            }catch(error){
                console.log(error.response?.data)
            }
        })()
    },[])

    


    return ( 
        <div className={styles.studentScreen}>
            {isFetching && <Loader/>}
            <div className={styles.main}>
                <div className={styles.top}>
                    <div className={`${styles.boldHeader}`}>All Students</div>
                    <div className={`${styles.subHeader}`}>{studentsRecord.length} students</div>
                </div>
                <div className={styles.searchPanel}>
                    <div className={styles.search}>
                        <input type="text" placeholder='Search by Name' />
                        <BsSearch size={20} className={styles.mdsearch}/> 
                    </div>

                    <div className={styles.dropDownContainer}>
                        {/* <button  className={styles.button}>
                            Add Filter <AiOutlinePlus color="white" /> 
                        </button> */}
                        <Dropdown style={{fontSize:'14px'}}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                All classes
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>handleFilter('level', null)} >All classes</Dropdown.Item>
                                {levels.map((item, i)=>
                                    <Dropdown.Item key={i} onClick={()=>handleFilter('level', item.value)}>
                                        {item.label}
                                    </Dropdown.Item>
                                )}
                                {/* <Dropdown.Item>Another action</Dropdown.Item>
                                <Dropdown.Item>Something else</Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown style={{fontSize:'14px'}} className='dropdown'>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {!filteredClass?'All gender':filteredClass}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>handleFilter('class', null)} >All</Dropdown.Item>
                                <Dropdown.Item onClick={()=>handleFilter('class', 'male')}>Male students</Dropdown.Item>
                                <Dropdown.Item onClick={()=>handleFilter('class', 'female')}>Female stuents</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        
                    </div>
                </div>
            </div>

        
            <AppTable
                tableData={filteredList.length>0?filteredList:studentsRecord}
                tableHeader={tableHeader}
                hasAction={true}
                tableLabel="students"
            />
        </div>
     );
}
 
export default Students;