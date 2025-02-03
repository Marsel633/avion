import React, { useEffect } from "react";
import styles from "./ProductList.module.css";
import { useAppDispatch } from "../../shared/lib/hooks/useAppDispatch";

import { useAppSelector } from "../../shared/lib/hooks/useAppSelector";
import { RootState } from "../../app/providers/store";
import { fetchProducts } from "../../entities/productCard/model/productSlice";
import { ProductCard } from "../../entities/productCard/ui/ProductCard";

export const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, status, error } = useAppSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (status === "loading") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  return (
    <div className={styles.productList}>
      {products.slice(0, 4).map(({ id, name, price, image }) => (
        <ProductCard key={id} name={name} price={price} image={image} />
      ))}
    </div>
  );
};
