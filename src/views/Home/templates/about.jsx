import React, {useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './styles/about.module.scss'
import {FaRegHeart, FaAngleDoubleRight }from "react-icons/fa"
import { ourValues } from '../../../utils/helpers/data';
import img from "../../../assets/Image.svg"

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
                            >
                                {item.icon}
                                <p className='ml-3'>{item.label}</p>
                            </button>
                        )}
                       
                    </aside>

                   <div className="tabList">
                        {ourValues[active].item.map((item, i)=>
                        <div className={styles.flex}>
                            <div className={styles.flexicon} >
                                <FaAngleDoubleRight/>
                            </div>   
                            <p>{item}</p>
                        </div>
                        )}  
                   </div>
                   
                   
                      
                </Col>

                <Col lg={6} md={6} sm={12} xs={12}  className={styles.sidebar2}>
                    <img className={styles.img} src= {img} alt="Al-Qur'an" width={350} height={250} />
                    <div className={styles.article}>
                        <h1>About Our Institution</h1>
                        <p>
                        Consectetur adipiscing elit.
                        Feugiat nunc varius interdum lectus eget elit malesuada.
                        Pulvinar viverra at amet ut. At justo at mauris id amet tellus ipsum.
                         Nisl porttitor quam libero elementum mauris diam nunc, volutpat.
                          Ultricies sit purus, scelerisque malesuada orci sed quis vel, commodo.
                          <br /> <br />
                        Felis porttitor suspendisse sit integer interdum amet.
                         Nulla sapien lorem fermentum pellentesque.
                         Purus tempus purus in mauris odio sed sollicitudin , volutpat.
                          Ultricies sit purus, scelerisque malesuada orci sed quis vel, commodo. 
                                       </p>
                    </div>
                </Col>
            </Row>



            <div className={styles.footerwrap}>
                    {/* <div> 
                        <iframe src={img} frameborder="0"></iframe> 
                    </div> */}

                    <div className={styles.foot}>
                         
                        <div className={styles.que}>
                            <h1 >Is <span>Khayrul Adab School</span> the right choice for you?</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Tortor nisl eget orci magna malesuada ipsum turpis eu.
                                Tortor cursus.
                            </p>
                        </div>

                        <div className={styles.footer}>
                            <div className={styles.footitem}>
                                <h4>Program Title</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Feugiat accumsan urna libero molestie. Laoreet sed tempus augue ipsum,
                                    est sagittis duis arcu, pretium.
                                    Consectetur nec, eget amet, vitae facilisi dui, tristique arcu.
                                </p>
                            </div>
                            <div className={styles.footitem}>
                                <h4>Program Title</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Feugiat accumsan urna libero molestie. Laoreet sed tempus augue ipsum,
                                    est sagittis duis arcu, pretium.
                                    Consectetur nec, eget amet, vitae facilisi dui, tristique arcu.
                                </p>
                            </div>
                            <div className={styles.footitem}>
                                <h4>Program Title</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Feugiat accumsan urna libero molestie. Laoreet sed tempus augue ipsum,
                                    est sagittis duis arcu, pretium.
                                    Consectetur nec, eget amet, vitae facilisi dui, tristique arcu.
                                </p>
                            </div>
                            <div className={styles.footitem}>
                                <h4>Program Title</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Feugiat accumsan urna libero molestie. Laoreet sed tempus augue ipsum,
                                    est sagittis duis arcu, pretium.
                                    Consectetur nec, eget amet, vitae facilisi dui, tristique arcu.
                                </p>
                            </div>
                        </div>


                </div>
            </div>
        </div>
     );
}
 
export default About;