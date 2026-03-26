import { Breadcrumbs } from "@/app/components/Breadcrumbs/Breadcrumbs";
import { CenteredContent } from "@/app/components/CenteredContent/CenteredContent";
import { Detail } from "@/app/components/Detail/Detail";
import { ExpandableMenu } from "@/app/components/ExpandableMenu/ExpandableMenu";
import { FlexContainer } from "@/app/components/FlexContainer/FlexContainer";
import { Photos } from "@/app/components/Photos/Photos";
import { normalizePhotos } from "@/app/utils/imageNormalize";
import { Product } from "@/app/types/product";
import ErrorComponent from "@/app/components/Error/Error";
import css from "./page.module.css";

// INFO: Wymusza renderowanie dynamiczne - Next.js nie będzie próbował pre-renderować tej strony podczas buildowania (co wymagałoby dostępu do backendu)
export const dynamic = "force-dynamic";

type ProductDetailsPageProps = {
  params: Promise<{ id: number }>;
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const BACKEND_URL = process.env.BACKEND_URL;

  if (!BACKEND_URL) {
    return <ErrorComponent />;
  }

  const { id } = await params;

  try {
    const productResponse = await fetch(`${BACKEND_URL}/products/${id}`);

    if (!productResponse.ok) {
      throw new Error(
        `Błąd połączenia z bazą danych: ${productResponse.status}`
      );
    }

    const product: Product = await productResponse.json();

    const normalizedProduct = {
      ...product,
      photos: normalizePhotos(product.photos, BACKEND_URL),
    };

    return (
      <>
        <CenteredContent>
          <FlexContainer>
            <ExpandableMenu />
            <div className={css.productDetailsWithBreadcrumbs}>
              <Breadcrumbs
                // Breadcrumbs pobiera to z URL przez useParams()
                // id={normalizedProduct.id}
                // gender={normalizedProduct.gender}
                // category={normalizedProduct.category}
                // subcategory={normalizedProduct.subcategory}
                name={normalizedProduct.name}
              />
              <div className={css.productDetailContainer}>
                <Photos
                  photos={normalizedProduct.photos}
                  name={normalizedProduct.name}
                />
                <Detail product={normalizedProduct} />
              </div>
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
