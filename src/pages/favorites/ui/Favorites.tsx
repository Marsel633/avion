import React, { useEffect, useState } from "react";
import { IProduct, ProductCard } from "@entities/productCard";
import { Layout } from "@shared/ui";
import { FavoriteButton } from "@features/favoriteButton";
import styles from "./Favorites.module.css";

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
