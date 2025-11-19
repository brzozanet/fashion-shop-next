import ContextProviders from "@/app/components/ContextProviders/ContextProviders";
import { Product } from "@/app/components/Product/Product";

export default {
  component: Product,
  title: "Product",
};

export const Default = {
  render: () => {
    return (
      <ContextProviders>
        <Product
          id={26}
          name={"Szpilki na obcasie"}
          price={249}
          photo={"http://localhost:3000/product-photos/women-shoes-2.jpg"}
          category={"obuwie"}
          subcategory={"eleganckie"}
          isProductInFavourites={true}
        />
      </ContextProviders>
    );
  },
};
