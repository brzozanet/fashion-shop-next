"use client";
import { CartContext } from "@/app/contexts/CartContext";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { Accordion } from "../Accordion/Accordion";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { Notify } from "notiflix";
import css from "./Detail.module.css";

export function Detail({ product }) {
  const params = useParams();
  const [currency] = useContext(CurrencyContext);
  const [shoppingCart, setShoppingCart] = useContext(CartContext);

  const productAlreadyAddedToCart = shoppingCart.find(
    (product) => product.id === Number(params.id)
  );

  const handleAddToCartButton = () => {
    setShoppingCart((prevstate) => [...prevstate, product]);
    Notify.success("Produkt został dodany do koszyka");
  };

  return (
    <>
      <div className={css.detail}>
        <h3 className={css.detailBrand}>{product.brand}</h3>
        <p className={css.detailName}>{product.name}</p>
        <p className={css.detailPrice}>
          {product[`price${currency}`]} {currency}
        </p>
        <div className={css.detailBtnWrapper}>
          {!productAlreadyAddedToCart ? (
            <FullWidthButton onClick={handleAddToCartButton}>
              Dodaj do koszyka
            </FullWidthButton>
          ) : (
            <FullWidthButton disabled={true}>
              Produkt jest już w koszyku
            </FullWidthButton>
          )}
        </div>
        <p className={css.detailShipping}>Dostawa do 24h</p>
        <p className={css.detailReturn}>Zwrot do 30 dni</p>
        <Accordion
          description={product.description}
          maintenanceInfo={product.maintenanceInfo}
        />
      </div>
    </>
  );
}
