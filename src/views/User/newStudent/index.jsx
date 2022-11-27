import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles/new.module.scss'


const RegisterStudent = () => {
    return ( 
        <div className={styles.addNewPage}>
           <div className={styles.header}>
            <div className={styles.headerText}>Add New Student</div>
                <div className={styles.breadCrumb}>
                    <Link style={{textDecoration:'none'}} to="/user/students"><span className={styles.b__student}>Student</span></Link>
                    <span className={styles.b__icon}>{">"}</span>
                    <span className={styles.b__addNew}>Add New student</span>
                </div>
           </div>


            <div className={styles.formContainer}>
                <div className={styles.formHeader}>Student Information</div>

                <form>
                <div className={styles.formContent}>
                    <Row className={styles.row}>
                        <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                            <div className={styles.formLabel}>First Name</div>
                            <div className={styles.input__wrappper}>
                                <input 
                                    type="text" 
                                    className={styles.input}
                                    name="firstName"
                                />
                            </div>
                        </Col>

                        <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                            <div className={styles.formLabel}>Last Name</div>
                            <div className={styles.input__wrappper}>
                                <input 
                                    type="text" 
                                    className={styles.input}
                                    name="lastName"
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row className={styles.row}>
                        <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                            <div className={styles.formLabel}>Gender</div>
                            <div className={styles.input__wrappper}>
                               <select className={styles.input} name="gender">
                                    <option value="">select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                               </select>
                            </div>
                        </Col>

                        <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                            <div className={styles.formLabel}>Date of Birth</div>
                            <div className={styles.input__wrappper}>
                                <input 
                                    type="date" 
                                    className={styles.input}
                                    name="dob"
                                />
                            </div>
                        </Col>
                    </Row>


                    <Row className={styles.row}>
                        <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                            <div className={styles.formLabel}>Admission Date</div>
                            <div className={styles.input__wrappper}>
                                <input 
                                    type="date" 
                                    className={styles.input}
                                    name="admissionDate"
                                    />
                            </div>
                        </Col>

                        <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                            <div className={styles.formLabel}>Residential Address</div>
                            <div className={styles.input__wrappper}>
                                <input 
                                    type="text" 
                                    className={styles.input}
                                    name="address"
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row className={styles.row}>
                        <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                            <div className={styles.formLabel}>State of Origin</div>
                            <div className={styles.input__wrappper}>
                                <input 
                                    type="text" 
                                    className={styles.input}
                                    name="state"
                                    />
                            </div>
                        </Col>

                        <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                            <div className={styles.formLabel}>Current Level</div>
                            <div className={styles.input__wrappper}>
                                <select className={styles.input} name="level">
                                    <option value="">select level</option>
                                    <option value={10}>SSS 3</option>
                                    <option value={9}>SSS 2</option>
                                    <option value={8}>SSS 1</option>
                               </select>
                            </div>
                        </Col>
                    </Row>

                    
                </div>

                <div className={styles.formContent}>
                    <div className={`${styles.formHeader} mb-5`}>Parent Information</div>
                    <Row className={styles.row}>
                        <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                            <div className={styles.formLabel}>Parent/Guardian Name </div>
                            <div className={styles.input__wrappper}>
                                <input 
                                    type="text" 
                                    className={styles.input}
                                    name="parentName"
                                />
                            </div>
                        </Col>

                        <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                            <div className={styles.formLabel}>Parent Address</div>
                            <div className={styles.input__wrappper}>
                                <input 
                                    type="text" 
                                    className={styles.input}
                                    name="parentAddress"
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row className={styles.row}>
                        <Col lg="6" md="12" sm="12" xs="12" className={styles.formGroup}>
                            <div className={styles.formLabel}>Phone Number</div>
                            <div className={styles.input__wrappper}>
                                <input 
                                    type="number" 
                                    className={styles.input}
                                    name="phoneNumber"
                                />
                            </div>
                        </Col>

                    </Row>
                    <div className={styles.buttons}>
                        <button className={styles.btnReset}>Reset</button>
                        <button className={styles.btnSave}>Save</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
     );
}
 
export default RegisterStudent;