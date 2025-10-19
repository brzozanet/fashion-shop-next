"use client";
import { SHIPPING_COST, SHIPPING_FREE } from "@/app/constants/costs";
import { CartContext } from "@/app/contexts/CartContext";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";
import { useContext } from "react";
import css from "./CartSummary.module.css";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";

export function CartSummary() {
  const [currency] = useContext(CurrencyContext);
  const [shoppingCart] = useContext(CartContext);

  const productValue = shoppingCart.reduce(
    (sum, product) => sum + product[`price${currency}`],
    0
  );

  let shippingCost;
  if (productValue > SHIPPING_FREE[currency]) {
    shippingCost = 0;
  } else {
    shippingCost = SHIPPING_COST[currency];
  }

  let deliveryCostCalculation;

  if (productValue > SHIPPING_FREE[currency]) {
    deliveryCostCalculation = 0;
  } else {
    deliveryCostCalculation = SHIPPING_COST[currency];
  }

  const toBePaid = productValue + shippingCost;

  return (
    <>
      <div>
        <div className={css.cartSummary}>
          <h2 className={css.cartSummaryTitle}>Podsumowanie</h2>
          <div className={css.cartSummaryRow}>
            <p>Wartość produktów:</p>
            <p>
              {productValue} {currency}
            </p>
          </div>
          <div className={css.cartSummaryRow}>
            <p>Koszt dostawy:</p>
            <p>
              {productValue ? deliveryCostCalculation : 0} {currency}
            </p>
          </div>
          <div className={css.cartSummaryRow}>
            <p>
              <strong>Do zapłaty:</strong>
            </p>
            <p>
              <strong>
                {productValue ? toBePaid : 0} {currency}
              </strong>
            </p>
          </div>
          <FullWidthButton disabled={true}>Idź do kasy</FullWidthButton>
        </div>
        <div className={css.freeShipping}>
          <img
            src="/icons/shipping.svg"
            width="20"
            height="20"
            alt="Dostawa"
            title="Dostawa"
            className={css.freeShippingIcon}
          />
          <p>
            <strong>
              Darmowa dostawa od {SHIPPING_FREE[currency]} {currency}
            </strong>
          </p>
        </div>
      </div>
    </>
  );
}
