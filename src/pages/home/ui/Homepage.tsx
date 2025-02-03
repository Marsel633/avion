import React from "react";
import { Layout } from "../../../shared/ui/layout/Layout";
import { PrimaryButton } from "../../../shared/ui/buttons/PrimaryButton";
import styles from "./Homepage.module.css";
import { AboutBrand } from "../../../widgets/aboutBrand/AboutBrand";

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
          <PrimaryButton width={270} dark={false}>
            Vew collection
          </PrimaryButton>
       </div>
        <img src="/Homepage_bg.png" alt="Picture's name" />
      </section>
      <section className={styles.aboutBrand}>
        <h1>
        What makes our brand different
        </h1>
        <AboutBrand/>
      </section>
    </Layout>
  );
};
