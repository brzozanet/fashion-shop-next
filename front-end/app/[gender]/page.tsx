import { Bestsellers } from "../components/Bestsellers/Bestsellers";
import { Hero } from "../components/Hero/Hero";
import { GENDERS_MAPPING } from "../constants/mappings";
import { normalizeImageUrl, normalizePhotos } from "../utils/imageNormalize";
import ErrorComponent from "../components/Error/Error";
import { Product } from "../types/product";

// INFO: Wymusza renderowanie dynamiczne - Next.js nie będzie próbował pre-renderować tej strony podczas buildowania (co wymagałoby dostępu do backendu)
export const dynamic = "force-dynamic";

type GenderPageProps = {
  params: Promise<{ gender: string }>;
};

export default async function GenderPage({ params }: GenderPageProps) {
  const BACKEND_URL = process.env.BACKEND_URL;

  if (!BACKEND_URL) {
    return <ErrorComponent />;
  }

  const gender = GENDERS_MAPPING.get((await params).gender);

  try {
    const genderResponse = await fetch(`${BACKEND_URL}/${gender}`);
    const favouriteResponse = await fetch(`${BACKEND_URL}/favourites`);

    if (!gender) {
      // INFO: Dynamiczny import - komponent i jego CSS są ładowane tylko gdy są potrzebne, co zapobiega niepotrzebnemu preloadowaniu zasobów przez Next.js
      const NotFound = (await import("../not-found")).default;
      return <NotFound />;
    }

    if (!genderResponse.ok || !favouriteResponse.ok) {
      throw new Error(
        `Błąd połączenia z bazą danych: ${genderResponse.status}`
      );
    }

    const genderProducts = await genderResponse.json();
    const favouriteProducts = await favouriteResponse.json();

    const normalizedBestsellers = genderProducts.bestsellers.map(
      (product: Product) => ({
        ...product,
        photos: normalizePhotos(product.photos, BACKEND_URL),
      })
    );

    return (
      <>
        <Hero
          imageUrl={normalizeImageUrl(genderProducts.heroImageUrl, BACKEND_URL)}
        />
        <Bestsellers
          bestsellersData={normalizedBestsellers}
          favouritesData={favouriteProducts}
        />
      </>
    );
  } catch (error) {
    console.error("Błąd połączenia z bazą danych: ", error);
    return <ErrorComponent />;
  }
}
