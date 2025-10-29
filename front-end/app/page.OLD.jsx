import { Bestsellers } from "./components/Bestsellers/Bestsellers";
import { Hero } from "./components/Hero/Hero";
// import { GENDERS_MAPPING } from "./constants/mappings";

export default async function Home() {
  const BACKEND_URL = process.env.BACKEND_URL;
  let genderProducts;
  let favouriteProducts;

  try {
    const gender = "women";
    // const gender = GENDERS_MAPPING.get(params.gender);
    const [genderResponse, favouriteResponse] = await Promise.all([
      await fetch(`${BACKEND_URL}/${gender}`),
      await fetch(`${BACKEND_URL}/favourites`),
    ]);

    if (!genderResponse.ok || !favouriteResponse.ok) {
      throw new Error(`Błąd HTTP, ${response.status}`);
    }

    genderProducts = await genderResponse.json();
    favouriteProducts = await favouriteResponse.json();
  } catch (error) {
    console.error("Błąd pobierania danych", error);
    return <div>Błąd pobierania danych</div>;
  }

  return (
    <>
      <Hero imageUrl={genderProducts.heroImageUrl} />
      <Bestsellers
        bestsellersData={genderProducts.bestsellers}
        favouritesData={favouriteProducts}
      />
    </>
  );
}
