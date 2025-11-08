import { CenteredContent } from "../components/CenteredContent/CenteredContent";
import { FavouritesList } from "../components/FavouritesList/FavouritesList";
import { PageTitle } from "../components/PageTitle/PageTitle";
import Error from "../components/Error/Error";

// INFO: Wymusza renderowanie dynamiczne - Next.js nie będzie próbował pre-renderować tej strony podczas buildowania (co wymagałoby dostępu do backendu)
export const dynamic = "force-dynamic";

export default async function Favourites() {
  const BACKEND_URL = process.env.BACKEND_URL;

  try {
    const favouritesResponse = await fetch(`${BACKEND_URL}/favourites`);
    const productsResponse = await fetch(`${BACKEND_URL}/products`);

    if (!favouritesResponse.ok || !productsResponse.ok) {
      throw new Error(
        `Błąd połączenia z bazą danych: ${favouritesResponse.status}`
      );
    }

    const favourites = await favouritesResponse.json();
    const products = await productsResponse.json();

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
  } catch (error) {
    console.error("Błąd połączenia z bazą danych: ", error);
    return <Error />;
  }
}
