import React, {useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './styles/about.module.scss'
import {FaRegHeart, FaAngleDoubleRight }from "react-icons/fa"
import { ourValues } from '../../../utils/helpers/data';
// import img from "../../../assets/Image.svg"

const About = () => {
    const [active, setActive] = useState(0)
    const buttons = [
        {label: 'Our values', icon:<FaRegHeart />},
        {label: 'Our Mission', icon:''},
        {label: 'Our Vision', icon:''}
       
    ]
    return ( 
        <div className = {styles.about}>
            <Row className={`${styles.welcomeTab}`}>
                <Col lg={6} md={6} sm={12} xs={12} className={styles.sidebar1}>
                    <div className={styles.welcomeBold}> Welcome to Khayrul Adab School of Arabic and Islamic Studies</div>
                    <aside className={styles.icons}>
                        {buttons.map((item, index)=>
                            <button
                                    style={{backgroundColor:active==index && ' #1A8F4A', color:active==index && 'white'}} 
                                    className={styles.icon}
                                    onClick={()=>setActive(index)}
                                    key={index}       
                            >
                                {item.icon}
                                <p className='ml-3'>{item.label}</p>
                            </button>
                        )}
                       
                    </aside>

                   <div className="tabList">
                        {ourValues[active].item.map((item, i)=>
                        <div key={i} className={styles.flex}>
                            <div className={styles.flexicon} >
                                <FaAngleDoubleRight/>
                            </div>   
                            <p>{item}</p>
                        </div>
                        )}  
                   </div>
                   
                   
                      
                </Col>

                <Col id='aboutUs' lg={6} md={6} sm={12} xs={12}  className={styles.sidebar2}>
                    <img className={styles.img} src= "../../../assets/Image.svg" alt="Al-Qur'an" />
                    <div className={styles.article}>
                        <h1>About Our Institution</h1>
                        <p>
                        At Adabi school``, we believe that education extends far beyond textbooks and classrooms. We strive to nurture the holistic development of each student, fostering their intellectual, emotional, and social well-being. Our dedicated team of experienced educators is passionate about creating a supportive and inclusive environment where every student can thrive.
                          <br /> <br />
                        Adabi is not just a school; it's a second home for our students—a place where lifelong friendships are formed, talents are nurtured, and dreams take flight. We invite you to join our warm and inclusive community, where we empower young minds to shine brightly and make a positive impact on the world.
                                       </p>
                    </div>
                </Col>
            </Row>



            <div className={styles.footerwrap}>
                    <div className={styles.iframeContainer}> 
                        <iframe width="100%"  src="https://www.youtube.com/embed/ekpCDd9jE9c"></iframe>
                    </div>

                    <div className={styles.foot} id="programs">
                         
                        <div className={styles.que}>
                            <h1 >Is <span>Khayrul Adab School</span> the right choice for you?</h1>
                            <p>
                            Ultimately, the right school for you is one that aligns with your values, goals, and aspirations. We encourage you to visit Adabi school, meet our staff, and experience our vibrant community firsthand.
                            </p>
                        </div>

                        <div className={styles.footer}>
                            <div className={styles.footitem}>
                                <h4>Advanced Placement</h4>
                                <p> For students aiming to pursue higher education, we offer an advanced placement and college preparatory program. These courses provide rigorous academic challenges and help students develop the skills needed for success in college-level studies.
                                </p>
                            </div>
                            <div className={styles.footitem}>
                                <h4>Service-Learning</h4>
                                <p>We encourage our students to actively contribute to their communities through service-learning projects. These programs promote empathy, social responsibility, and global awareness.
                                </p>
                            </div>
                            <div className={styles.footitem}>
                                <h4>Language Immersion</h4>
                                <p>Our language immersion program provides students with the opportunity to become fluent in a second language. Through a combination of immersive instruction, cultural activities, and language exchanges, students develop proficiency and a deeper understanding of other cultures.
                                </p>
                            </div>
                            <div className={styles.footitem}>
                                <h4>STEAM</h4>
                                <p> Our STEAM program encourages students to explore and integrate knowledge from various disciplines. Through hands-on projects, experiments, and collaborative learning, students develop critical thinking, problem-solving, and creativity skills.
                                </p>
                            </div>
                        </div>


                </div>
            </div>
        </div>
     );
}
 
export default About;