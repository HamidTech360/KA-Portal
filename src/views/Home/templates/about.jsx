import React from 'react';
import styles from './styles/about.module.scss'
import {FaRegHeart, FaAngleDoubleRight }from "react-icons/fa"
import img from "../../../assets/Image.svg"

const About = () => {
    return ( 
        <div className = {styles.about}>
            <div className= {styles.box}>
                <div className={styles.sidebar1}>
                    <h1>
                    Welcome to
                    Khayrul Adab School of
                    Arabic and Islamic Studies
                   </h1>
                    <aside className={styles.icons}>
                        <div className={styles.icon}>
                            <FaRegHeart />
                            <p>Our Values</p>
                        </div>
                        <div className={styles.icon}>
                           
                            <p>Our Mission</p>
                        </div>
                        <div className={styles.icon}>
                        
                            <p>Our Vision</p>
                        </div>
                    </aside>
                   
                   <div className={styles.flex}>
                   <div className={styles.flexicon} >
                           <FaAngleDoubleRight/>
                       </div>
                       <p>Lorem Ipsum</p>
                   </div>
                   <div className={styles.flex}>
                   <div className={styles.flexicon} >
                           <FaAngleDoubleRight/>
                       </div>
                       <p>Purus tempus purus</p>
                   </div>
                   <div className={styles.flex}>
                       <div className={styles.flexicon} >
                           <FaAngleDoubleRight/>
                       </div>
                       <p>Ultricies sit purus, scelerisque</p>
                   </div>
                   <div  className={styles.flex}>
                   <div className={styles.flexicon} >
                           <FaAngleDoubleRight/>
                       </div>
                       <p>Lorem Ipsum feugiat</p>
                   </div>
                   <div  className={styles.flex}>
                   <div className={styles.flexicon} >
                           <FaAngleDoubleRight/>
                       </div>
                       <p>Lorem Ipsum</p>
                   </div>
                      
                </div>
                <aside className={styles.sidebar2}>
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
                </aside>
            </div>

                <div className={styles.footerwrap}>
                    <div>
                    <iframe src={img} frameborder="0"></iframe>
                    </div>
                    
                    
                                <div className={styles.foot}>
                         
                                <div className={styles.que}>
                        <h1 >Is <span>Khayrul Adab School</span> the right
                    choice for you?</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Tortor nisl eget orci magna malesuada ipsum turpis eu.
                      Tortor cursus.</p>
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