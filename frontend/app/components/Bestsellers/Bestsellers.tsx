"use client";
import { useContext } from "react";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { PageTitle } from "../PageTitle/PageTitle";
import { Product } from "../Product/Product";
import { Product as ProductType } from "@/app/types/product";
import { Favourites } from "@/app/types/favourites";
import { CurrencyContextType } from "@/app/types/currencyContext";
import { getProductPrice } from "@/app/utils/getProductPrice";
import css from "./Bestsellers.module.css";

type BestsellersProps = {
  bestsellersData: ProductType[];
  favouritesData: Favourites[];
};

export function Bestsellers({
  bestsellersData,
  favouritesData,
}: BestsellersProps) {
  const [currency] = useContext(CurrencyContext) as CurrencyContextType;

  return (
    <>
      <div className={css.bestsellers}>
        <CenteredContent>
          <PageTitle>Sprawdź nasze bestellery</PageTitle>
          <div className={css.bestsellersList}>
            {bestsellersData.map((product) => {
              // Znajdź odpowiedni rekord z favourites dla tego produktu
              const favouriteRecord = favouritesData.find(
                (favourite) => favourite.productId === product.id
              );
              return (
                <Product
                  id={product.id}
                  name={product.name}
                  price={getProductPrice(currency, product)}
                  photo={product.photos[0]}
                  category={product.category}
                  subcategory={product.subcategory}
                  // podwójna negacja konwertuje na boolean:
                  // jeśli favouriteRecord istnieje → true, jeśli undefined → false
                  isProductInFavourites={!!favouriteRecord}
                  key={product.id}
                />
              );
            })}
          </div>
        </CenteredContent>
      </div>
    </>
  );
}
