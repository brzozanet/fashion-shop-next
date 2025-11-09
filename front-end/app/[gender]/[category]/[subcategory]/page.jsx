import { Breadcrumbs } from "@/app/components/Breadcrumbs/Breadcrumbs";
import { CenteredContent } from "@/app/components/CenteredContent/CenteredContent";
import { ExpandableMenu } from "@/app/components/ExpandableMenu/ExpandableMenu";
import { FlexContainer } from "@/app/components/FlexContainer/FlexContainer";
import { Pagination } from "@/app/components/Pagination/Pagination";
import { Products } from "@/app/components/Products/Products";
import { GENDERS_MAPPING } from "@/app/constants/mappings";
import { CATEGORIES } from "@/app/constants/categories";
import { normalizePhotos } from "@/app/utils/imageUtils";
import Error from "@/app/components/Error/Error";

// INFO: Wymusza renderowanie dynamiczne - Next.js nie będzie próbował pre-renderować tej strony podczas buildowania (co wymagałoby dostępu do backendu)
export const dynamic = "force-dynamic";

export default async function SubcategoryPage({ params }) {
  const BACKEND_URL = process.env.BACKEND_URL;
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

    const products = await subcategoryResponse.json();
    const favourites = await favouritesResponse.json();

    // Normalizuj ścieżki obrazków w produktach
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
              <Breadcrumbs
                id={normalizedProducts.id}
                name={normalizedProducts.name}
              />
              <Products products={normalizedProducts} favourites={favourites} />
              <Pagination />
            </div>
          </FlexContainer>
        </CenteredContent>
      </>
    );
  } catch (error) {
    console.error("Błąd połączenia z bazą danych: ", error);
    return <Error />;
  }
}
