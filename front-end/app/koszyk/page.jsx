"use client";
import { useContext } from "react";
import { CenteredContent } from "../components/CenteredContent/CenteredContent";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { CartContext } from "../contexts/CartContext";
import { FlexContainer } from "../components/FlexContainer/FlexContainer";
import { CartProductsList } from "../components/CartProductsList/CartProductsList";

export default function Cart() {
  const [shoppingCart] = useContext(CartContext);

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
