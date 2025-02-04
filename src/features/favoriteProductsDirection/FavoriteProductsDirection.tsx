import React from "react";
import { Link } from "react-router";
import { CiBookmarkCheck } from "react-icons/ci";

interface IFavoriteProductsDirection {
    className?: string,
}

export const FavoriteProductsDirection: React.FC<IFavoriteProductsDirection> = (className) => {
  return (
    <Link {...className} to={"/favorites"}>
      <CiBookmarkCheck />
    </Link>
  );
};
