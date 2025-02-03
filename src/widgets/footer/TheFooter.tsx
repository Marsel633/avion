import React from "react";
import styles from "./TheFooter.module.css";
import {FooterCategories, FooterMenu, FooterOurCompany} from "../../shared/config/arrays"

export const TheFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_navigation}>
          <div><h3>Categories</h3>{FooterCategories.map((item) => (
            <a key={item} href="#">{item}</a>
          ))}</div>
          <div><h3>Menu</h3>{FooterMenu.map((item) => (
            <a key={item} href="#">{item}</a>
          ))}</div>
          <div><h3>Our company</h3>{FooterOurCompany.map((item) => (
            <a key={item} href="#">{item}</a>
          ))}</div>
      </div>
          <tfoot>Copyright 2022 Avion LTD</tfoot>
    </footer>
  );
};
