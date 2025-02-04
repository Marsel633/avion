import React from "react";
import styles from "./TheFooter.module.css";
import {
  NavbarItems,
  FooterMenu,
  FooterOurCompany,
} from "../../shared/config/arrays";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import {
  FaFacebookSquare,
  FaPinterest,
  FaTwitter,
  FaSkype,
} from "react-icons/fa";

export const TheFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_navigation}>
        <div className={styles.navigation_items}>
          <h3>Categories</h3>
          {NavbarItems.map((item, index) => (
            <a key={index} href="#">
              {item}
            </a>
          ))}
        </div>
        <div className={styles.navigation_items}>
          <h3>Menu</h3>
          {FooterMenu.map((item, index) => (
            <a key={index} href="#">
              {item}
            </a>
          ))}
        </div>
        <div className={styles.navigation_items}>
          <h3>Our company</h3>
          {FooterOurCompany.map((item, index) => (
            <a key={index} href="#">
              {item}
            </a>
          ))}
        </div>
        <div className={`${styles.desktop} ${styles.footer_joinUs}`}>
          <h3>Join our mailing list</h3>
          <form className={styles.joinUs_form}>
            <input type="email" placeholder="your@email.com" />
            <button>Sign up</button>
          </form>
        </div>
      </div>
      <div className={styles.footer_copy}>
        <p>Copyright 2022 Avion LTD</p>
        <div className={`${styles.desktop} ${styles.footer_socials}`}>
          <CiLinkedin size={20}/>
          <FaFacebookSquare size={20}/>
          <CiInstagram size={20}/>
          <FaSkype size={20}/>
          <FaTwitter size={20}/>
          <FaPinterest size={20}/>
        </div>
      </div>
    </footer>
  );
};
