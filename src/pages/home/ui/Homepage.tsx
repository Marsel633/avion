import React from "react";
import { Layout } from "../../../shared/ui/layout/Layout";
import styles from "./Homepage.module.css";
import { AboutBrand } from "../../../widgets/aboutBrand/AboutBrand";
import { AllProductsBtn } from "../../../features/allProductsBtn/AllProductsBtn";
import { ProductList } from "../../../widgets/productList/ProductList";

export const Homepage: React.FC = () => {
  return (
    <Layout>
      <section className={styles.homepage}>
       <div className={styles.homepage_wrapper}>
          <h1>Luxury homeware for people who love timeless design quality</h1>
          <p>
            With our new collection, view over 400 bespoke pieces from homeware
            through to furniture today
          </p>
          <AllProductsBtn width={270} dark={false}>
            Vew collection
          </AllProductsBtn>
       </div>
        <img src="/Homepage_bg.png" alt="Picture's name" />
      </section>
      <section className={styles.aboutBrand}>
        <h1>
        What makes our brand different
        </h1>
        <AboutBrand/>
      </section>
      <section className={styles.products}>
        <ProductList/>
        <AllProductsBtn width={270} dark={false}>
            Vew collection
          </AllProductsBtn>
      </section>
      <section className={styles.idea}>
        <div className={styles.idea_content}>
          <h5>It started with a small idea</h5>
          <p>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
          <AllProductsBtn width={210} dark={true}>
            Vew collection
          </AllProductsBtn>
        </div>
        <img src="/Yellow_chair.png" alt="Yellow chair" />
      </section>
    </Layout>
  );
};
