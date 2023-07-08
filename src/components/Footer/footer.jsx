import React from "react";
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
function Footer(props) {

  const links=[
        {
          linkName:'About Adabi',
          linkTo:'/'
        },
        {
          linkName:'Calender',
          linkTo:'/'
        },
        {
          linkName:'About Adabi',
          linkTo:'/'
        },
        {
          linkName:'News & Update',
          linkTo:'/'
        },
        {
          linkName:'Contact ',
          linkTo:'/'
        },
        {
          linkName:'FAQ',
          linkTo:'/'
        }
  ]
  return (
    <div className={styles.footer} id="contactUs">
      <div className={styles.letter}>
        <div className={styles.letter_main}>
          <div className={styles.letter_text}>
            <p>Join our Newsletter</p>
          </div>

          <div className={styles.letter_input}>
            <input
              type="text"
              className={`${styles.input}`}
              placeholder="Enter your mail"
            ></input>
            <button className={styles.letter_button}>Subscribe Now</button>
          </div>
        </div>
      </div>

      <div className={`${styles.social} row`}>
        <div className={`${styles.social_name} col-12 col-lg-5  col-md-6`}>
          <div className={`${styles.logo} `}>
            <img src={logo} alt="School logo" />
          </div>
          <div>KHAYRUL ADAB SCHOOL OF ARABIC AND ISLAMIC STUDIES</div>
        </div>

        <div className={`col-12 col-lg-2  col-md-6  ${styles.social_links}`}>
          <p>Quick Links</p>
          <div className={styles.linkTexts}>
          {links.map((link,i)=>(
            <Link key={i} className={styles.social_link} to={link.linkTo}>{link.linkName}</Link>
          ))}
          </div>
        </div>
        <div className={`col-12 col-lg-2  col-md-6 ${styles.social_location}`}>
          <p>Location</p>
          <p className={styles.location}>
           Adabi Area, Awotan, Apete, Ibadan, Oyo state, Nigeria``.
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
        <div className={styles.social_line}></div>
        <div className={styles.year}>© 2022 Khayrul Adab School | All Rights Reserved</div>

    </div>
  );
}

export default Footer;
