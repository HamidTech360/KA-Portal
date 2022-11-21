import React from 'react';
import {AiOutlineHome, AiOutlineFile} from "react-icons/ai"
// import {TfiAngleRight} from "react-icons/tfi"
import styles from "./styles/news.module.scss"
import AppHeader from './../../components/header';
import Footer from '../../components/footer';
import image from "../../assets/islam.png"
import { Row } from 'react-bootstrap';
import {Col } from 'react-bootstrap';



const News = () => {
    return (
        <>
                <AppHeader />
                <div className={styles.newsContainer}>
                <Row>
                    <Col><img src = {image} alt="Image" /></Col>
                    <Col>
                        <div className={styles.topBar}>
                                       <div className= {styles.item}>
                        <AiOutlineHome/>
                        <span>Home</span>
                                       </div>
                         <div>
                            {/* <TfiAngleRight /> */}
                         </div>
                                       <div className= {styles.item}>
                        <AiOutlineFile />
                        <span>News & Updates</span>
                                       </div>
                                    </div>
            
                                    <article className= {styles.article}>
                                <h1>News Title</h1>
                                <p>
                                            Home
                                            News & Updates
                                            News Title
                                            Adipiscing habitasse dolor nam leo
                                            fringilla bibendum. Suspendisse sed amet,
                                            erat auctor vulputate elit sed hendrerit nulla.
                                            Consectetur massa auctor eget congue lobortis
                                            faucibus sed proin neque. Auctor massa sagittis,
                                            sodales at. Dolor, proin purus integer eget pellentesque
                                            sed. Scelerisque pretium facilisis mollis auctor. Odio tortor,
                                            turpis tincidunt libero ac. Imperdiet sed sed tellus aliquet.
                                            Aenean pretium adipiscing lacus dictum eu mattis sed aenean.
                                            Adipiscing habitasse dolor nam leo fringilla bibendum.
                                            Suspendisse sed amet, erat auctor vulputate elit sed hendrerit nulla.
                                            Consectetur massa auctor eget congue lobortis faucibus sed proin neque.
                                            Auctor massa sagittis, sodales at. Dolor, proin purus integer eget pellentesque sed.
                                            Scelerisque pretium facilisis mollis auctor. Odio tortor, turpis tincidunt libero ac.
                                            Imperdiet sed sed tellus aliquet. Aenean pretium adipiscing lacus dictum eu mattis sed aenean.
                                            </p>
                                            <p>
                                                Sociis sit turpis ridiculus nisi amet integer ligula mattis massa. Tellus tortor, vulputate nunc donec mauris dolor
                                                 iaculis cras arcu. Dui ligula nec, lectus tempor vestibulum eu accumsan,
                                                 arcu pretium. Aliquet hac sagittis vitae mus ut donec adipiscing. Mattis cursus neque,
                                                  congue mattis adipiscing vel sagittis nunc. Viverra cursus mauris tortor, sit sed et pharetra in nisi.
                                            </p>
                                            <p>
                                                Adipiscing habitasse dolor nam leo fringilla bibendum.
                                                Suspendisse sed amet, erat auctor vulputate elit sed hendrerit nulla.
                                                 Consectetur massa auctor eget congue lobortis faucibus sed proin neque.
                                                  Auctor massa sagittis, sodales at. Dolor, proin purus integer eget pellentesque sed.
                                                  Scelerisque pretium facilisis mollis auctor. Odio tortor, turpis tincidunt libero ac.
                                                   Imperdiet sed sed tellus aliquet. Aenean pretium adipiscing lacus dictum eu mattis sed aenean.
                                            </p>
            
            
                                    </article>
                    </Col>
                </Row>
                </div>
                <Footer />
               </>
   
     );
}
 
export default News;