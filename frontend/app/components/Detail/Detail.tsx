"use client";
import { CartContext } from "@/app/contexts/CartContext";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { Accordion } from "../Accordion/Accordion";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { Notify } from "notiflix";
import { Product } from "@/app/types/product";
import { CurrencyContextType } from "@/app/types/currencyContext";
import { CartContextType } from "@/app/types/cartContext";
import { getProductPrice } from "@/app/utils/getProductPrice";
import css from "./Detail.module.css";

type DetailProps = {
  product: Product;
};

export function Detail({ product }: DetailProps) {
  const params = useParams();
  const [currency] = useContext(CurrencyContext) as CurrencyContextType;
  const [shoppingCart, setShoppingCart] = useContext(
    CartContext
  ) as CartContextType;

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
          {getProductPrice(currency, product)} {currency}
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
