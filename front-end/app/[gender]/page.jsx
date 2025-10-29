import { Bestsellers } from "../components/Bestsellers/Bestsellers";
import { Hero } from "../components/Hero/Hero";
import { GENDERS_MAPPING } from "../constants/mappings";

export default async function GenderPage({ params }) {
  const gender = GENDERS_MAPPING.get((await params).gender);

  const genderResponse = await fetch(`http://localhost:3000/${gender}`);
  const genderProducts = await genderResponse.json();

  console.log(genderResponse);
  console.log(genderProducts);

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
