import { Breadcrumbs } from "@/app/components/Breadcrumbs/Breadcrumbs";
import { CenteredContent } from "@/app/components/CenteredContent/CenteredContent";
import { Detail } from "@/app/components/Detail/Detail";
import { ExpandableMenu } from "@/app/components/ExpandableMenu/ExpandableMenu";
import { FlexContainer } from "@/app/components/FlexContainer/FlexContainer";
import { Photos } from "@/app/components/Photos/Photos";
import css from "./page.module.css";

export default async function ProductDetailsPage({ params }) {
  const BACKEND_URL = process.env.BACKEND_URL;
  const { id } = await params;

  try {
    const productResponse = await fetch(`${BACKEND_URL}/products/${id}`);

    if (!productResponse.ok) {
      throw new Error(
        `Błąd połączenia z bazą danych: ${productResponse.status}`
      );
    }

    const product = await productResponse.json();

    return (
      <>
        <CenteredContent>
          <FlexContainer>
            <ExpandableMenu />
            <div className={css.productDetailsWithBreadcrumbs}>
              <Breadcrumbs
                id={product.id}
                gender={product.gender}
                category={product.category}
                subcategory={product.subcategory}
                name={product.name}
              />
              <div className={css.productDetailContainer}>
                <Photos photos={product.photos} name={product.name} />
                <Detail product={product} />
              </div>
            </div>
          </FlexContainer>
        </CenteredContent>
      </>
    );
  } catch (error) {
    console.error("Błąd połączenia z bazą danych: ", error);

    return (
      <>
        <CenteredContent>
          <div className={css.container}>
            <img
              src="/images/error.png"
              alt="Błąd połączenia z bazą danych"
              title="Błąd połączenia z bazą danych"
            />
            <h2>Błąd połączenia z bazą danych</h2>
            <p>Spróbuj ponownie za kilka minut</p>
          </div>
        </CenteredContent>
      </>
    );
  }
}
