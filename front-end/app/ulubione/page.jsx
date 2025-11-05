import { CenteredContent } from "../components/CenteredContent/CenteredContent";
import { FavouritesList } from "../components/FavouritesList/FavouritesList";
import { PageTitle } from "../components/PageTitle/PageTitle";
import css from "./page.module.css";

export default async function Favourites() {
  const BACKEND_URL = process.env.BACKEND_URLa;

  try {
    const [favourites, products] = await Promise.all([
      (await fetch(`${BACKEND_URL}/favourites`)).json(),
      (await fetch(`${BACKEND_URL}/products`)).json(),
    ]);

    if (!favourites.ok) {
      throw new Error(`Błąd połączenia z bazą danych: ${favourites.status}`);
    }

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

    return (
      <>
        <CenteredContent>
          <div className={css.container}>
            <img
              src="/images/error.png"
              alt="Błąd połączenia z bazą danych"
              title="Błąd połączenia z bazą danych"
            />
            <h2>Błąd połączenia z bazą danych</h2>
            <p>Spróbuj ponownie za kilka minut</p>
          </div>
        </CenteredContent>
      </>
    );
  }
}
