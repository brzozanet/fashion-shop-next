"use client";
import { useState } from "react";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import css from "./FavouritesList.module.css";
import { deleteFromFavourites } from "@/app/actions/deleteFromFavourites";

export function FavouritesList({
  data: [userFavouritesProducts, userFavouritesIds],
}) {
  const [favouritesProducts, setFavouritesProducts] = useState(
    userFavouritesProducts
  );

  const handleDeleteFormFavouritesButton = (favouriteId, productId) => {
    deleteFromFavourites(favouriteId);
    setFavouritesProducts((prevState) =>
      prevState.filter((product) => product.id !== productId)
    );
  };

  return (
    <>
      <div className={css.favouritesList}>
        {favouritesProducts.map((product) => {
          // Znajdź odpowiedni rekord z favourites dla tego produktu
          const favouriteRecord = userFavouritesIds.find(
            (favourite) => favourite.productId === product.id
          );
          return (
            <FavouriteProduct
              product={product}
              // Optional chaining
              favouriteId={favouriteRecord?.id}
              deleteFromFavourites={handleDeleteFormFavouritesButton}
              key={product.id}
            />
          );
        })}
      </div>
    </>
  );
}
