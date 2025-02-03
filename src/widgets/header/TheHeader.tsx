import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import styles from "./TheHeader.module.css"

export const TheHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <p>Avion</p>
      <div className={styles.header_navbar}>
          <CiSearch size={16}/>
          <IoMdMenu size={16}/>
      </div>
    </header>
  );
};
