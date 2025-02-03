import React from "react";
import styles from "./AboutBrandItem.module.css";
import { IAboutBrandItemProps } from "../../shared/config/arrays";

export const AboutBrandItem: React.FC<IAboutBrandItemProps> = ({icon: Icon, title, description}) => {
  return (
    <div className={styles.aboutBrandCard}>
      <Icon size={24} aria-hidden="true"/>
      <h3>{title}</h3>
      <p>
        {description}
      </p>
    </div>
  );
};
