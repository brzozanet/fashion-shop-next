import { Breadcrumbs } from "@/app/components/Breadcrumbs/Breadcrumbs";
import { CenteredContent } from "@/app/components/CenteredContent/CenteredContent";
import { ExpandableMenu } from "@/app/components/ExpandableMenu/ExpandableMenu";
import { FlexContainer } from "@/app/components/FlexContainer/FlexContainer";
import { Pagination } from "@/app/components/Pagination/Pagination";
import { Products } from "@/app/components/Products/Products";
import { GENDERS_MAPPING } from "@/app/constants/mappings";
import { CATEGORIES } from "@/app/constants/categories";
import { normalizePhotos } from "@/app/utils/imageNormalize";
import ErrorComponent from "@/app/components/Error/Error";
import { Product } from "@/app/types/product";
import { Favourites } from "@/app/types/favourites";

// INFO: Wymusza renderowanie dynamiczne - Next.js nie będzie próbował pre-renderować tej strony podczas buildowania (co wymagałoby dostępu do backendu)
export const dynamic = "force-dynamic";

type SubcategoryPageProps = {
  params: Promise<{ gender: string; category: string; subcategory: string }>;
};

export default async function SubcategoryPage({
  params,
}: SubcategoryPageProps) {
  const BACKEND_URL = process.env.BACKEND_URL;

  if (!BACKEND_URL) {
    return <ErrorComponent />;
  }

  const gender = GENDERS_MAPPING.get((await params).gender);
  const { category, subcategory } = await params;

  const checkActiveCategory = CATEGORIES.find(
    (activeCategory) => activeCategory.path === category
  );

  if (!checkActiveCategory) {
    // INFO: Dynamiczny import - komponent i jego CSS są ładowane tylko gdy są potrzebne, co zapobiega niepotrzebnemu preloadowaniu zasobów przez Next.js
    const NotFound = (await import("@/app/not-found")).default;
    return <NotFound />;
  }

  const checkValidSubcategory = checkActiveCategory.subcategories.find(
    (validSubcategories) => validSubcategories.path === subcategory
  );

  try {
    const subcategoryResponse = await fetch(
      `${BACKEND_URL}/products?gender=${gender}&category=${category}&subcategory=${subcategory}`
    );
    const favouritesResponse = await fetch(`${BACKEND_URL}/favourites`);

    if (!checkValidSubcategory) {
      // Dynamiczny import - komponent i jego CSS są ładowane tylko gdy są potrzebne,
      // co zapobiega niepotrzebnemu preloadowaniu zasobów przez Next.js
      const NotFound = (await import("@/app/not-found")).default;
      return <NotFound />;
    }

    if (!subcategoryResponse.ok || !favouritesResponse.ok) {
      throw new Error(
        `Błąd połączenia z bazą danych: ${subcategoryResponse.status}`
      );
    }

    const products: Product = await subcategoryResponse.json();
    const favourites: Favourites = await favouritesResponse.json();

    const normalizedProducts = Array.isArray(products)
      ? products.map((product) => ({
          ...product,
          photos: normalizePhotos(product.photos, BACKEND_URL),
        }))
      : products;

    return (
      <>
        <CenteredContent>
          <FlexContainer>
            <ExpandableMenu />
            <div>
              <Breadcrumbs name={checkValidSubcategory.name} />
              <Products products={normalizedProducts} favourites={favourites} />
              <Pagination />
            </div>
          </FlexContainer>
        </CenteredContent>
      </>
    );
  } catch (error) {
    console.error("Błąd połączenia z bazą danych: ", error);
    return <ErrorComponent />;
  }
}
