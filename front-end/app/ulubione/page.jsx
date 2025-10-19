import { CenteredContent } from "../components/CenteredContent/CenteredContent";
import { FavouritesList } from "../components/FavouritesList/FavouritesList";
import { PageTitle } from "../components/PageTitle/PageTitle";

export default async function Favourites() {
  const BACKEND_URL = process.env.BACKEND_URL;

  const [favourites, products] = await Promise.all([
    (await fetch(`${BACKEND_URL}/favourites`)).json(),
    (await fetch(`${BACKEND_URL}/products`)).json(),
  ]);

  const userFavouritesProducts = products.filter((product) =>
    favourites.some((favourite) => favourite.productId === product.id)
  );

  const userFavouritesIds = favourites;

  return (
    <>
      <CenteredContent>
        {userFavouritesProducts.length ? (
          <>
            <PageTitle>
              Ulubione {`(${userFavouritesProducts.length})`}
            </PageTitle>
            <FavouritesList
              data={[userFavouritesProducts, userFavouritesIds]}
            />
          </>
        ) : (
          <PageTitle>Nie masz żadnych ulubionych produktów</PageTitle>
        )}
      </CenteredContent>
    </>
  );
}
