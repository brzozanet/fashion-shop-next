import { Bestsellers } from "../components/Bestsellers/Bestsellers";
import { Hero } from "../components/Hero/Hero";
import { GENDERS_MAPPING } from "../constants/mappings";
import NotFound from "../not-found";
import Error from "../components/Error/Error";

// INFO: Wymusza renderowanie dynamiczne - Next.js nie będzie próbował pre-renderować tej strony podczas buildowania (co wymagałoby dostępu do backendu)
export const dynamic = "force-dynamic";

export default async function GenderPage({ params }) {
  const BACKEND_URL = process.env.BACKEND_URL;
  const gender = GENDERS_MAPPING.get((await params).gender);

  try {
    const genderResponse = await fetch(`${BACKEND_URL}/${gender}`);
    const favouriteResponse = await fetch(`${BACKEND_URL}/favourites`);

    if (!gender) {
      return <NotFound />;
    }

    if (!genderResponse.ok || !favouriteResponse.ok) {
      throw new Error(
        `Błąd połączenia z bazą danych: ${genderResponse.status}`
      );
    }

    const genderProducts = await genderResponse.json();
    const favouriteProducts = await favouriteResponse.json();

    return (
      <>
        <Hero imageUrl={genderProducts.heroImageUrl} />
        <Bestsellers
          bestsellersData={genderProducts.bestsellers}
          favouritesData={favouriteProducts}
        />
      </>
    );
  } catch (error) {
    console.error("Błąd połączenia z bazą danych: ", error);
    return <Error />;
  }
}
