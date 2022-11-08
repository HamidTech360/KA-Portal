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
                        <div>
                            <FaRegHeart />
                            <p>Our Values</p>
                        </div>
                        <div>
                            <FaRegHeart />
                            <p>Our Mission</p>
                        </div>
                        <div>
                            <FaRegHeart />
                            <p>Our Vision</p>
                        </div>
                    </aside>
                    <ul>
                        <li> <FaAngleDoubleRight/> Lorem Ipsum</li>
                        <li> <FaAngleDoubleRight/>Purus tempus purus </li>
                        <li><FaAngleDoubleRight/>Ultricies sit purus, scelerisque</li>
                        <li><FaAngleDoubleRight/>Lorem Ipsum feugiat</li>
                        <li><FaAngleDoubleRight/>Lorem Ipsum</li>
                    </ul>

                    <iframe src={img} frameborder="0"></iframe>
                </div>
                <aside className={styles.sidebar2}>
                    <img src= {img} alt="" />
                    <h1>About Our Institution</h1>
                    <p>
                    Consectetur adipiscing elit.
                    Feugiat nunc varius interdum lectus eget elit malesuada.
                    Pulvinar viverra at amet ut. At justo at mauris id amet tellus ipsum.
                     Nisl porttitor quam libero elementum mauris diam nunc, volutpat.
                      Ultricies sit purus, scelerisque malesuada orci sed quis vel, commodo.
                    elis porttitor suspendisse sit integer interdum amet.
                     Nulla sapien lorem fermentum pellentesque. 
                     Purus tempus purus in mauris odio sed sollicitudin , volutpat.
                      Ultricies sit purus, scelerisque malesuada orci sed quis vel, commodo. 
               </p>
                </aside>
            </div>
            <div>
                    <h1>Is <span>Khayrul Adab School</span> the right
choice for you?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Tortor nisl eget orci magna malesuada ipsum turpis eu.
                  Tortor cursus.</p>
            </div>

            <div className={styles.foot}>

                <div>
                    <h4>Program Title</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Feugiat accumsan urna libero molestie. Laoreet sed tempus augue ipsum,
                        est sagittis duis arcu, pretium.
                        Consectetur nec, eget amet, vitae facilisi dui, tristique arcu.
                        </p>
                </div>
                <div>
                    <h4>Program Title</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Feugiat accumsan urna libero molestie. Laoreet sed tempus augue ipsum,
                        est sagittis duis arcu, pretium.
                        Consectetur nec, eget amet, vitae facilisi dui, tristique arcu.
                        </p>
                </div>
                <div>
                    <h4>Program Title</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Feugiat accumsan urna libero molestie. Laoreet sed tempus augue ipsum,
                        est sagittis duis arcu, pretium.
                        Consectetur nec, eget amet, vitae facilisi dui, tristique arcu.
                        </p>
                </div>
                <div>
                    <h4>Program Title</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Feugiat accumsan urna libero molestie. Laoreet sed tempus augue ipsum,
                        est sagittis duis arcu, pretium.
                        Consectetur nec, eget amet, vitae facilisi dui, tristique arcu.
                        </p>
                </div>
            </div>
        </div>
     );
}
 
export default About;