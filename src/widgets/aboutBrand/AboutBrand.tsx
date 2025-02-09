import React from "react";
import { AboutBrandItems } from "@/shared";
import { AboutBrandItem } from "@/entities";
import styles from "./AboutBrand.module.css";

export const AboutBrand: React.FC = () => {
  return (
    <div className={styles.aboutBrandItems}>
      {AboutBrandItems.map((item) => (
        <AboutBrandItem key={item.id} {...item} />
      ))}
    </div>
  );
};
