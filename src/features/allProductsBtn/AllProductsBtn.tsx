import React from "react";
import { Link } from "react-router";
import { IAllProductsBtn } from "@/shared";
import styles from "./AllProductsBtn.module.css";

export const AllProductsBtn: React.FC<IAllProductsBtn> = ({
  children,
  dark,
  width,
  ...buttonProps
}) => {
  return (
    <Link to="/all-products">
      <button
        style={{ width: `${width}px` }}
        className={`${styles.btn} ${dark ? styles.dark : styles.light}`}
        {...buttonProps}
      >
        {children}
      </button>
    </Link>
  );
};
