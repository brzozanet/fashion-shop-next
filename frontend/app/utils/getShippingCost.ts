import { CurrencyAmount } from "../types/currencyAmount";

export const getShippingCost = (
  shippingCostOption: CurrencyAmount,
  currency: string
) => {
  switch (currency) {
    case "PLN":
      return shippingCostOption["PLN"];
    case "EUR":
      return shippingCostOption["EUR"];
    default:
      return shippingCostOption["PLN"];
  }
};
