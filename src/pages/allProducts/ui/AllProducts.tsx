import React from "react";
import { Layout } from "../../../shared/ui/layout/Layout";
import { ProductList } from "../../../widgets/productList/ProductList";
import styles from "./AllProducts.module.css"

export const AllProducts: React.FC = () => {
  return (
    <Layout>
      <div className={styles.allProducts_bgImage}>
        <h1>All products</h1>
        <img src="/allProducts_bg.jpeg" alt="Table" />
      </div>
      <section className={styles.allProducts}>
      <ProductList count={8}/>
      </section>
    </Layout>
  );
};
