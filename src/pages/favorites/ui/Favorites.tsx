import React, { useEffect, useState } from "react";
import { Layout } from "../../../shared/ui/layout/Layout";
import styles from "./Favorites.module.css";
import { IProduct } from "../../../entities/productCard/api/types";
import { ProductCard } from "../../../entities/productCard/ui/ProductCard";
import { FavoriteButton } from "../../../features/favoriteButton/FavoriteButton";

export const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<IProduct[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("favorites");
    if (data) {
      setFavorites(JSON.parse(data));
    }
  }, []);

  const updateFavorites = () => {
    const data = localStorage.getItem("favorites");
    if (data) {
      setFavorites(JSON.parse(data));
    }
  };

  return (
    <Layout>
      <section className={styles.favorites}>
        {favorites.length === 0 ? (
          <div className={styles.noFavorites}>No favorites found</div>
        ) : (
          favorites.map((product) => (
            <div className={styles.favorites_item} key={product.id}>
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
              <FavoriteButton product={product} onUpdate={updateFavorites} />
            </div>
          ))
        )}
      </section>
    </Layout>
  );
};
