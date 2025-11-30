import { getShippingCost } from "../front-end/app/utils/getShippingCost";
import { SHIPPING_COST } from "../front-end/app/constants/costs";

test("zwraca koszt dostawy dla PLN", () => {
  const result = getShippingCost(SHIPPING_COST, "PLN");
  expect(result).toBe(29);
});

test("zwraca koszt dostawy dla EUR", () => {
  const result = getShippingCost(SHIPPING_COST, "EUR");
  expect(result).toBe(5.5);
});
