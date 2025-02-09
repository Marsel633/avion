import React, { useState } from "react";
import { Layout } from "@/shared";
import { FilterDropdown, SortDropdown } from "@/features";
import { ProductList } from "@/widgets";
import styles from "./AllProducts.module.css";

export const AllProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Default");

  return (
    <Layout>
      <div className={styles.allProducts_bgImage}>
        <h1>All products</h1>
        <img src="/allProducts_bg.jpeg" alt="Table" />
      </div>
      <div className={styles.mobile}>
        <FilterDropdown setCategory={setSelectedCategory}/>
        <SortDropdown setSort={setSortOption}/>
      </div>
      <div className={styles.allProducts}>
        <ProductList count={8} category={selectedCategory} sort={sortOption} />
      </div>
    </Layout>
  );
};
