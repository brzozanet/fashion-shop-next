"use client";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CenteredContent } from "../components/CenteredContent/CenteredContent";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { FlexContainer } from "../components/FlexContainer/FlexContainer";
import { CartProductsList } from "../components/CartProductsList/CartProductsList";
import { CartSummary } from "../components/CartSummary/CartSummary";
import { CartContextType } from "../types/cartContext";

export default function Cart() {
  const [shoppingCart] = useContext(CartContext) as CartContextType;

  return (
    <>
      <CenteredContent>
        {shoppingCart.length ? (
          <PageTitle>Koszyk {`(${shoppingCart.length})`}</PageTitle>
        ) : (
          <PageTitle>Twój koszyk jest pusty</PageTitle>
        )}

        <FlexContainer>
          <CartProductsList />
          <CartSummary />
        </FlexContainer>
      </CenteredContent>
    </>
  );
}
