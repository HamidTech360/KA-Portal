import React, { useState } from "react";
import SideNav from "./sidenav";
import { Link } from "react-router-dom";
import styles from "./styles/authHeader.module.scss";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Offcanvas } from "react-bootstrap";
import { navItems } from "../utils/helpers/nav";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const AuthHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.textLogo}`}>
        <img className={`${styles.logo}`} src="/assets/logo.png" alt="logo" />
        <div>
          KHAYRUL ADAB{" "}
          <span className="hideOnMobile">
            SCHOOL OF ARABIC AND ISLAMIC STUDIES
          </span>{" "}
        </div>
      </div>
      <div className={`${styles.navSection} hideOnMobile justify-content-end`}>
        <form action="" className={styles.form}>
          <input className={styles.input} type="text" placeholder="Search..." />
          <FaSearch className={styles.searchIcon} />
        </form>
        <div className={styles.notification}>
          <IoMdNotificationsOutline size={22} className={styles.notificationIcon} />
          <div className={styles.dot}></div>
        </div>
        <div className={styles.user}>
          <p className={styles.username}>Staff.</p>
          <span className={styles.usertype}>Admin</span>
        </div>
        <img
          src="https://media.istockphoto.com/id/468900036/photo/portrait-of-middle-eastern-man.jpg?b=1&s=170667a&w=0&k=20&c=CyIbNLKkQ7gu2Jy6nHh7Thx8obPPZ07tYzQcS5fPNTE="
          alt=""
        />
      </div>

      <div className={`hideOnDesktop ${styles.menuBar} `}>
              <div style={{ float: "right" }} className="pull-right">
                <HiOutlineMenuAlt1 onClick={() => setShow(true)} size={29} />
              </div>
              </div>

              <Offcanvas 
                show={show} 
                onHide={handleClose} 
                placement="end" 
                style={{width:'70%'}}
            >
               <div className={styles.mobileSideNavContainer}>
                  <div className={styles.avatar}>
                      KA
                  </div>
                  <SideNav/>
               </div>
            </Offcanvas>
    </div>
  );
};

export default AuthHeader;
