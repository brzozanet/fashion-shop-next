"use client";
import { useContext } from "react";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";
import { CartContext } from "@/app/contexts/CartContext";
import { CartProduct } from "../CartProduct/CartProduct";
import { nanoid } from "nanoid";
import { CurrencyContextType } from "@/app/types/currencyContext";
import { CartContextType } from "@/app/types/cartContext";
import { getProductPrice } from "@/app/utils/getProductPrice";
import css from "./CartProductsList.module.css";

export function CartProductsList() {
  const [currency] = useContext(CurrencyContext) as CurrencyContextType;
  const [shoppingCart] = useContext(CartContext) as CartContextType;

  return (
    <>
      <div className={css.cartProductsList}>
        {shoppingCart.map((product) => {
          return (
            <CartProduct
              id={product.id}
              brand={product.brand}
              name={product.name}
              image={product.photos[0]}
              description={product.description}
              price={getProductPrice(currency, product)}
              key={nanoid()}
            />
          );
        })}
      </div>
    </>
  );
}
