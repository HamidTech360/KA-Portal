import React from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import DashBoardHeader from '../../components/dashboard_header';
import { Row, Col, Form } from 'react-bootstrap';

import styles from './styles/new.module.scss'

const NewRecord = () => {
    return ( 
        <HomeLayout>
            <DashBoardHeader 
                title={"New Record"} 
                subTitle="Create new record for institution"
            />

            <Row className={styles.Layout}>
                <Col lg="12" md="12" sm="12" xs="12">
                    <div className={styles.formContainer}>
                        <Row>
                        <Col lg="6" className=' mb-3' >
                            <Form.Group>
                                <Form.Label htmlFor="school name" className={`${styles.label} ml-3`}>School Name </Form.Label>
                                <Form.Control 
                                    type="text" className={`${styles.input} ml-3 `}
                                    id="schoolName" 
                                />
                            </Form.Group>
                        </Col>
                        </Row>
                        <Row>
                            <Col lg="5" className=' mb-3'>
                            <Form.Group>
                                <Form.Label htmlFor="Department" className={`${styles.label} ml-3`}>Department</Form.Label>
                                <Form.Control 
                                    type="text" className={`${styles.input} ml-3 `}
                                    id="department" 
                                />
                            </Form.Group>
                            </Col>

                            <Col lg="5" className=' mb-3'>
                            <Form.Group>
                                <Form.Label htmlFor="fee" className={`${styles.label} ml-3`}>fee</Form.Label>
                                <Form.Control 
                                    type="text" className={`${styles.input} ml-3 `}
                                    id="fee" 
                                />
                            </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="5" className=' mb-3'>
                            <Form.Group>
                                <Form.Label htmlFor="faculty" className={`${styles.label} ml-3`}>Faculty</Form.Label>
                                <Form.Control 
                                    type="text" className={`${styles.input} ml-3 `}
                                    id="faculty" 
                                />
                            </Form.Group>
                            </Col>

                            <Col lg="5" className=' mb-3'>
                            <Form.Group>
                                <Form.Label htmlFor="country" className={`${styles.label} ml-3`}>Country</Form.Label>
                                <Form.Control 
                                    type="text" className={`${styles.input} ml-3 `}
                                    id="country" 
                                />
                            </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="5" className=' mb-3'>
                            <Form.Group>
                                <Form.Label htmlFor="email" className={`${styles.label} ml-3`}>Email</Form.Label>
                                <Form.Control 
                                    type="text" className={`${styles.input} ml-3 `}
                                    id="email" 
                                />
                            </Form.Group>
                            </Col>

                            <Col lg="5" className=' mb-3'>
                            <Form.Group>
                                <Form.Label htmlFor="website" className={`${styles.label} ml-3`}>Website</Form.Label>
                                <Form.Control 
                                    type="text" className={`${styles.input} ml-3 `}
                                    id="website" 
                                />
                            </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="5" className=' mb-3'>
                            <Form.Group>
                                <Form.Label htmlFor="contact" className={`${styles.label} ml-3`}>Contact</Form.Label>
                                <Form.Control 
                                    type="text" className={`${styles.input} ml-3 `}
                                    id="contact" 
                                />
                            </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="8" md="9" className=' mb-3'>
                            <Form.Group>
                                <Form.Label htmlFor="overview" className={`${styles.label} ml-3`}>Course Overview</Form.Label>
                                <Form.Control 
                                    as="textarea"
                                    rows={7}
                                    type="text" className={`${styles.input} ml-3 `}
                                    id="contact" 
                                />
                            </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="8" md="9" className=' mb-3'>
                            <Form.Group>
                                <Form.Label htmlFor="about" className={`${styles.label} ml-3`}>About School </Form.Label>
                                <Form.Control 
                                    as="textarea"
                                    rows={7}
                                    type="text" className={`${styles.input} ml-3 `}
                                    id="contact" 
                                />
                            </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="8" md="9" className=' mb-3'>
                            <Form.Group>
                                <Form.Label  className={`${styles.label} ml-3`}>Requirement </Form.Label>
                                <Form.Control 
                                    as="textarea"
                                    rows={7}
                                    type="text" className={`${styles.input} ml-3 `}
                                    id="requirement" 
                                />
                            </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="8" md="9" className=' mb-3'>
                            <Form.Group>
                                <Form.Label  className={`${styles.label} ml-3`}>Services </Form.Label>
                                <Form.Control 
                                    as="textarea"
                                    rows={7}
                                    type="text" className={`${styles.input} ml-3 `}
                                    id="services" 
                                />
                            </Form.Group>
                            </Col>
                        </Row>

                    </div>
                </Col>
                {/* <Col lg="3" className='hideOnMobile'>
                    <div className={styles.activities}>
                        <div>Recenet activities</div>
                        <div></div>
                    </div>
                </Col> */}
            </Row>
        </HomeLayout>
     );
}
 
export default NewRecord;