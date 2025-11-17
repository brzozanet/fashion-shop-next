"use client";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/app/contexts/CartContext";
import { CartContextType } from "@/app/types/cartContext";
import css from "./IconMenu.module.css";

export function IconMenu() {
  const [shoppingCart] = useContext(CartContext) as CartContextType;

  return (
    <>
      <ul className={css.iconMenuList}>
        <li className={css.iconMenuItem}>
          <Link href="/ulubione">
            <img src="/icons/heart.svg" alt="Ulubione" title="Ulubione"></img>
          </Link>
        </li>
        <li className={css.iconMenuItem}>
          <Link href="/koszyk">
            <img src="/icons/cart.svg" alt="Koszyk" title="Koszyk" />
            <div className={css.iconCounter}>{shoppingCart.length}</div>
          </Link>
        </li>
      </ul>
    </>
  );
}
