"use client";
import { useContext } from "react";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";
import { CartContext } from "@/app/contexts/CartContext";
import { CartProduct } from "../CartProduct/CartProduct";
import { nanoid } from "nanoid";
import css from "./CartProductsList.module.css";

export function CartProductsList() {
  const [currency] = useContext(CurrencyContext);
  const [shoppingCart] = useContext(CartContext);

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
              // Dynamic access
              price={product[`price${currency}`]}
              key={nanoid()}
            />
          );
        })}
      </div>
    </>
  );
}
