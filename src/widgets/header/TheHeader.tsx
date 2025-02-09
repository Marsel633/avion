import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { HomepageDirectionClick } from "@features/homepageDirectionClick";
import { FavoriteProductsDirection } from "@features/favoriteProductsDirection";
import { Navbar } from "../navbar";
import styles from "./TheHeader.module.css";

export const TheHeader: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <CiSearch size={24} className={styles.desktop} />
        <HomepageDirectionClick />
        <div className={styles.header_navbar}>
          <CiSearch size={16} className={styles.mobile} />
          <IoMdMenu size={16} className={styles.mobile} />
          <FavoriteProductsDirection />
          <FaRegUserCircle size={24} className={styles.desktop} />
        </div>
      </header>
      <Navbar />
    </>
  );
};
