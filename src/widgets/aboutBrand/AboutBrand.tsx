import React from "react";
import { AboutBrandItem } from "../../entities/aboutBrandItem/AboutBrandItem";
import styles from "./AboutBrand.module.css";
import { AboutBrandItems } from "../../shared/config/arrays";

export const AboutBrand: React.FC = () => {
  return (
    <div className={styles.aboutBrandItems}>
      {AboutBrandItems.map((item) => (
        <AboutBrandItem key={item.id} {...item} />
      ))}
    </div>
  );
};
