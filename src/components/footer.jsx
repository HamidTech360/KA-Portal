import React from "react";
import styles from "./styles/footer.module.scss";
function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={styles.letter}>
        <div className={styles.letter_main}>
            <div className={styles.letter_text}>
                <p >Join our Newsletter</p>
            </div>

          <div className={styles.letter_input}>
                <input type='text' className={styles.input} placeholder='Enter your mail' ></input> 
                <button className={styles.letter_button}>Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
