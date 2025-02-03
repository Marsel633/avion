import React from "react";
import styles from "./AboutBrandItem.module.css";
import { IAboutBrandItemProps } from "../../../public/arrays";

export const AboutBrandItem: React.FC<IAboutBrandItemProps> = ({id,icon, title, description}) => {
  return (
    <div key={id} className={styles.aboutBrandCard}>
      {React.createElement(icon, { size: 24})}
      <h3>{title}</h3>
      <p>
        {description}
      </p>
    </div>
  );
};
