import React from "react";
import styles from "./PrimaryButton.module.css";


interface IPrimaryButton {
  children: React.ReactNode;
  width: number;
  dark: boolean;
}

export const PrimaryButton: React.FC<IPrimaryButton> = ({
  children,
  dark,
  width,
}) => {
  return (
    <button style={{ width: `${width}px` }} className={`${styles.btn} ${dark ? styles.dark : styles.light}`}>
      {children}
    </button>
  );
};
