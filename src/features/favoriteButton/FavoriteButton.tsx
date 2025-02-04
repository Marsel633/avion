import React, { useEffect, useState } from "react";
import { IProduct } from "../../entities/productCard/api/types";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

interface IFavoriteButton {
  product: IProduct;
  onUpdate?: () => void;
}

export const FavoriteButton: React.FC<IFavoriteButton> = ({ product, onUpdate }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    const favorites: IProduct[] = storedFavorites
      ? JSON.parse(storedFavorites)
      : [];
    setIsFavorite(favorites.some((fav) => fav.id === product.id));
  }, [product.id]);

  const toggleFavorite = (product: IProduct) => {
    const storedFavorites = localStorage.getItem("favorites");
    let favorites: IProduct[] = storedFavorites
      ? JSON.parse(storedFavorites)
      : [];

    if (favorites.some((fav) => fav.id === product.id)) {
      favorites = favorites.filter((fav) => fav.id !== product.id);
      setIsFavorite(false);
    } else {
      favorites.push(product);
      setIsFavorite(true);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    if(onUpdate) {
        onUpdate()
    }
  };

  return (
    <button onClick={() => toggleFavorite(product)}>
      {isFavorite ? <FcLike size={24} /> : <FcLikePlaceholder size={24} />}
    </button>
  );
};
