import { CenteredContent } from "../components/CenteredContent/CenteredContent";
import { PageTitle } from "../components/PageTitle/PageTitle";

export default async function Favourites() {
  const BACKEND_URL = process.env.BACKEND_URL;

  const [favourites, products] = await Promise.all([
    (await fetch(`${BACKEND_URL}/favourites`)).json(),
    (await fetch(`${BACKEND_URL}/products`)).json(),
  ]);

  return (
    <>
      <CenteredContent>
        {userFavouritesProducts.length ? (
          <>
            <PageTitle>
              Ulubione {`(${userFavouritesProducts.length})`}
            </PageTitle>
            <FavouritesList data={data} />
          </>
        ) : (
          <PageTitle>Nie masz żadnych ulubionych produktów</PageTitle>
        )}
      </CenteredContent>
    </>
  );
}
