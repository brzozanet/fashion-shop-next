"use client";
import { useContext } from "react";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";
import { CartContext } from "@/app/contexts/CartContext";
import css from "./CartProduct.module.css";
import { Notify } from "notiflix";

export function CartProduct({ id, brand, name, image, description, price }) {
  const [currency] = useContext(CurrencyContext);
  const [shoppingCart, setShoppingCart] = useContext(CartContext);

  const truncateTextSmart = (text, maxLength) => {
    if (text.length <= maxLength) return text;

    const truncated = text.slice(0, maxLength);
    const lastSpace = truncated.lastIndexOf(" ");

    return lastSpace === -1
      ? truncated + "..."
      : truncated.slice(0, lastSpace) + "...";
  };

  const handleDeleteFromCartButton = (id) => {
    const filteredShoppingCart = shoppingCart.filter(
      (product) => product.id !== id
    );
    setShoppingCart(filteredShoppingCart);
    Notify.success("Produkt został usunięty z koszyka");
  };

  return (
    <>
      <div className={css.cartProduct}>
        <div className={css.cartProductBox}>
          <div className={css.cartProductPhoto}>
            <img
              src={image}
              alt={name}
              title={name}
              className={css.cartProductPhotoImg}
            />
          </div>
        </div>
        <div className={css.cartProductBox}>
          <div className={css.cartProductSubBox}>
            <div className={css.cartProductSubBoxText}>
              <h3 className={css.cartProductTitle}>
                {brand} | {name}
              </h3>
              <p>{truncateTextSmart(description, 100)}</p>
            </div>
            <button
              className={css.cartButtonAction}
              onClick={() => handleDeleteFromCartButton(id)}
            >
              <img
                src="/icons/delete.svg"
                width="14"
                height="14"
                alt="Usuń"
                title="Usuń"
              />
              <span className={css.cartProductIconText}>Usuń z koszyka</span>
            </button>
          </div>
        </div>
        <div className={css.cartProductBox}>
          <p className={css.cartProductPrice}>
            {price} {currency}
          </p>
        </div>
      </div>
    </>
  );
}
