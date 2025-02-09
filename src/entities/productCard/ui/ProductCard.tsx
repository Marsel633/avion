import React from "react";
import { IProduct } from "../api";
import styles from "./ProductCard.module.css";

export const ProductCard: React.FC<IProduct> = ({ image, name, price }) => {
  return (
    <div className={styles.productItem}>
      <div className={styles.productItem_image}>
        <img src={image} alt={name} />
      </div>
          <h5>{name}</h5>
          <p>£{price}</p>
    </div>
  );
};
