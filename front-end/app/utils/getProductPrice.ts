import { Product } from "../types/product";

export const getProductPrice = (currency: string, product: Product) => {
  switch (currency) {
    case "PLN":
      return product.pricePLN;
    case "EUR":
      return product.priceEUR;
    default:
      return product.pricePLN;
  }
};
