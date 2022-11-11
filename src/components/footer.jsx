import React from "react";
import styles from "./styles/footer.module.scss";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={styles.letter}>
        <div className={styles.letter_main}>
          <div className={styles.letter_text}>
            <p>Join our Newsletter</p>
          </div>

          <div className={styles.letter_input}>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter your mail"
            ></input>
            <button className={styles.letter_button}>Subscribe Now</button>
          </div>
        </div>
      </div>

      <div className={`${styles.social} row`}>
        <div className={`${styles.social_name} col-12 col-lg-5  col-md-6 `}>
          <div className={`${styles.logo} `}>
            <img src={logo} alt="School logo" />
          </div>
          <div>KHAYRUL ADAB SCHOOL OF ARABIC AND ISLAMIC STUDIES</div>
        </div>

        <div className={`col-12 col-lg-2  col-md-6  ${styles.social_links}`}>
          <p>Quick Links</p>
          <Link className={styles.social_link} to="/">
            About Adab
          </Link>
          <Link className={styles.social_link} to="/">
            Calender
          </Link>
          <Link className={styles.social_link} to="/">
            News & update
          </Link>
          <Link className={styles.social_link} to="/">
            Contact
          </Link>
          <Link className={styles.social_link} to="/">
            FAQ
          </Link>
        </div>
        <div className={`col-12 col-lg-2  col-md-6 ${styles.social_location}`}>
          <p>Location</p>
          <p className={styles.location}>
            KM 30, Lagos/Ibadan Expressway, Imolisa Village, Ogun State.
          </p>
        </div>
        <div className={` col-12 col-lg-2  col-md-6 `}>
          <p className={styles.social_text}>Social</p>
          <>
            <Link to="/">
              {" "}
              <FaTwitter size={23} style={{marginRight:'12px'}} color={'black'} />{" "}
            </Link>
            <Link to="/">
              <FaInstagram size={23} style={{marginRight:'12px'}} color={'black'}/>{" "}
            </Link>
            <Link to="/">
              {" "}
              <FaLinkedin size={23} style={{marginRight:'12px'}} color={'black'}/>{" "}
            </Link>
            <Link to="/">
              {" "}
              <FaFacebook size={23} style={{marginRight:'12px'}} color={'black'}/>{" "}
            </Link>
          </>
        </div>
      </div>
    </div>
  );
}

export default Footer;
