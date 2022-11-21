import React from "react";
import styles from './styles/lecture.module.scss'


function Lecture(props) {
  return (
    <div className={styles.lecture} >
      <div className={styles.upper}>
        <div className={styles.filter}>
        <label for="username" className={styles.text}  >Filter: </label>
        <input id="username" placeholder='categories'className={styles.input} type='text' />
        </div>
        <div className={styles.search}>
        <label for="username" className={styles.text}>Search: </label>
        <input id="username" className={styles.input}type='text' />
        </div>
      </div>

    </div>
  );
}

export default Lecture;
