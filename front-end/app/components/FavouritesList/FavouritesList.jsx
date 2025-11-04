"use client";
import { useState } from "react";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import { deleteFromFavourites } from "@/app/actions/deleteFromFavourites";
import css from "./FavouritesList.module.css";
import { Notify } from "notiflix";

export function FavouritesList({
  data: [userFavouritesProducts, userFavouritesIds],
}) {
  const [favouritesProducts, setFavouritesProducts] = useState(
    userFavouritesProducts
  );

  const handleDeleteFormFavouritesButton = async (favouriteId, productId) => {
    const result = await deleteFromFavourites(favouriteId);

    if (result.success) {
      setFavouritesProducts((prevState) =>
        prevState.filter((product) => product.id !== productId)
      );
      Notify.success("Produkt został usunięty z ulubionych");
    } else {
      Notify.failure("Bład podczas usuwania produktu z ulubionych");
    }
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
