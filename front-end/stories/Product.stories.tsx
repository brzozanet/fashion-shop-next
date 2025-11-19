import { Product } from "@/app/components/Product/Product";

export default {
  component: Product,
  title: "Product",
};

export const Default = {
  render: () => {
    return (
      <Product
        id={26}
        name={"Szpilki klasyczne"}
        price={249}
        photo={"http://localhost:3000/product-photos/women-shoes-1.jpg"}
        category={"obuwie"}
        subcategory={"eleganckie"}
        isProductInFavourites={true}
      />
    );
  },
};
