import React from "react";
import { Link } from "react-router";
import { IPrimaryButton } from "@shared/types";
import styles from "./PrimaryButton.module.css";

export const PrimaryButton: React.FC<IPrimaryButton> = ({
  children,
  dark,
  width,
  to,
  ...buttonProps
}) => {
  return (
    <Link to={to}>
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
