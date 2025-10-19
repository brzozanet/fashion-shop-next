"use client";
import { useEffect, useState } from "react";

export const useCart = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  // Inicjalizacja z localStorage, wykonywanie tylko w przeglądarce, podczas hydratacji
  useEffect(() => {
    try {
      const savedShoppingCart = localStorage.getItem("shoppingCart");
      if (savedShoppingCart) {
        // setShoppingCart(savedShoppingCart);
        setShoppingCart(JSON.parse(savedShoppingCart));
      }
    } catch (error) {
      console.error("Błąd podczas pobierania koszyka", error);
    }
  }, []);

  // Zapisywanie przy każdej zmianie
  useEffect(() => {
    try {
      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    } catch (error) {
      console.error("Błąd podczas zapisywania koszyka", error);
    }
  }, [shoppingCart]);

  return [shoppingCart, setShoppingCart];
};
