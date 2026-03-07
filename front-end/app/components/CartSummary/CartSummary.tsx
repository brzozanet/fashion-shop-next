"use client";
import { SHIPPING_COST, SHIPPING_FREE } from "@/app/constants/costs";
import { CartContext } from "@/app/contexts/CartContext";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";
import { useContext } from "react";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { CurrencyContextType } from "@/app/types/currencyContext";
import { CartContextType } from "@/app/types/cartContext";
import { getProductPrice } from "@/app/utils/getProductPrice";
import { getShippingCost } from "@/app/utils/getShippingCost";
import css from "./CartSummary.module.css";

export function CartSummary() {
  const [currency] = useContext(CurrencyContext) as CurrencyContextType;
  const [shoppingCart] = useContext(CartContext) as CartContextType;

  const productValue = shoppingCart.reduce(
    (sum, product) => sum + getProductPrice(currency, product),
    0,
  );

  let shippingCost;
  if (productValue > getShippingCost(SHIPPING_FREE, currency)) {
    shippingCost = 0;
  } else {
    shippingCost = getShippingCost(SHIPPING_COST, currency);
  }

  let deliveryCostCalculation;

  if (productValue > getShippingCost(SHIPPING_FREE, currency)) {
    deliveryCostCalculation = 0;
  } else {
    deliveryCostCalculation = getShippingCost(SHIPPING_COST, currency);
  }

  const toBePaid = productValue + shippingCost;

  const handleCartSummaryButton = () => {
    alert("Ta funcjonalność jest jeszcze niedostępna.");
  };

  return (
    <>
      <div className={css.cartSummaryColumn}>
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
          <FullWidthButton onClick={handleCartSummaryButton}>
            Idź do kasy
          </FullWidthButton>
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
              Darmowa dostawa od {getShippingCost(SHIPPING_FREE, currency)}{" "}
              {currency}
            </strong>
          </p>
        </div>
      </div>
    </>
  );
}
