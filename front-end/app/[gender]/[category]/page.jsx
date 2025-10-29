import { Breadcrumbs } from "@/app/components/Breadcrumbs/Breadcrumbs";
import { CenteredContent } from "@/app/components/CenteredContent/CenteredContent";
import { ExpandableMenu } from "@/app/components/ExpandableMenu/ExpandableMenu";
import { FlexContainer } from "@/app/components/FlexContainer/FlexContainer";
import { Pagination } from "@/app/components/Pagination/Pagination";
import { Products } from "@/app/components/Products/Products";
import { GENDERS_MAPPING } from "@/app/constants/mappings";

export default async function CategoryPage({ params }) {
  const BACKEND_URL = process.env.BACKEND_URL;
  const gender = GENDERS_MAPPING.get((await params).gender);
  const { category } = await params;

  const productsResponse = await fetch(
    `${BACKEND_URL}/products?gender=${gender}&category=${category}`
  );
  const products = await productsResponse.json();

  const favouritesResponse = await fetch(`${BACKEND_URL}/favourites`);
  const favourites = await favouritesResponse.json();

  return (
    <>
      <CenteredContent>
        <FlexContainer>
          <ExpandableMenu />
          <div>
            <Breadcrumbs id={products.id} name={products.name} />
            <Products products={products} favourites={favourites} />
            <Pagination />
          </div>
        </FlexContainer>
      </CenteredContent>
    </>
  );
}
