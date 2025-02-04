import React, { useEffect } from "react";
import styles from "./ProductList.module.css";
import { useAppDispatch } from "../../shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "../../shared/lib/hooks/useAppSelector";
import { RootState } from "../../app/providers/store";
import { fetchProducts } from "../../entities/productCard/model/productSlice";
import { ProductCard } from "../../entities/productCard/ui/ProductCard";
import { Loading } from "../../shared/ui/loading/Loading";

interface IProductList {
  count: number;
  category?: string;
  sort?: string;
}

export const ProductList: React.FC<IProductList> = ({ count, category, sort }) => {
  const dispatch = useAppDispatch();
  const { products, status, error } = useAppSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  let filteredProducts = products;
  if (category && category !== "All") {
    filteredProducts = products.filter((product) =>
      product.category?.toLowerCase() === category.toLowerCase()
    );
  }

  if (filteredProducts.length > 0) {
    if (sort === "Price: Low to High") {
      filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (sort === "Price: High to Low") {
      filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    }
  }

  return (
    <div className={styles.productList}>
      {filteredProducts.slice(0, count).map(({ id, name, price, image }) => (
        <ProductCard key={id} name={name} price={price} image={image} />
      ))}
    </div>
  );
};
