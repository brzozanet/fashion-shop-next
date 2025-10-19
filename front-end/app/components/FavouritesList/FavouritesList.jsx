import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import css from "./FavouritesList.module.css";

export function FavouritesList({
  data: [userFavouritesProducts, userFavouritesIds],
}) {
  return (
    <>
      <div className={css.favouritesList}>
        {userFavouritesProducts.map((product) => {
          // Znajdź odpowiedni rekord z favourites dla tego produktu
          const favouriteRecord = userFavouritesIds.find(
            (favourite) => favourite.productId === product.id
          );
          return (
            <FavouriteProduct
              product={product}
              // Optional chaining
              favouriteId={favouriteRecord?.id}
              key={product.id}
              // key={nanoid()}
            />
          );
        })}
      </div>
    </>
  );
}
