import { Bestsellers } from "../components/Bestsellers/Bestsellers";
import { Hero } from "../components/Hero/Hero";

export default function GenderPage() {
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
