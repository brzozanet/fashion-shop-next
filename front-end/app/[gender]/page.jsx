import { Bestsellers } from "../components/Bestsellers/Bestsellers";
import { Hero } from "../components/Hero/Hero";
import { GENDERS_MAPPING } from "../constants/mappings";

export default async function GenderPage({ params }) {
  const BACKEND_URL = process.env.BACKEND_URL;
  const gender = GENDERS_MAPPING.get((await params).gender);

  const genderResponse = await fetch(`${BACKEND_URL}/${gender}`);
  const genderProducts = await genderResponse.json();

  const favouriteResponse = await fetch(`${BACKEND_URL}/favourites`);
  const favouriteProducts = await favouriteResponse.json();

  console.log(favouriteProducts);

  return (
    <>
      <Hero imageUrl={genderProducts.heroImageUrl} />
      {/* <Bestsellers
        bestsellersData={genderProducts.bestsellers}
        favouritesData={favouriteProducts}
      /> */}
    </>
  );
}
