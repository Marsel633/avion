import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import styles from "./TheHeader.module.css";
import { Navbar } from "../navbar/Navbar";

export const TheHeader: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <CiSearch size={24} className={styles.desktop} />
        <h3>Avion</h3>
        <div className={styles.header_navbar}>
          <CiSearch size={16} className={styles.mobile} />
          <IoMdMenu size={16} className={styles.mobile} />
          <FiShoppingCart size={24} className={styles.desktop} />
          <FaRegUserCircle size={24} className={styles.desktop} />
        </div>
      </header>
      <Navbar />
    </>
  );
};
