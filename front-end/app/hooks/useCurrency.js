"use client";
import { useEffect, useState } from "react";
import { DEFAULT_CURRENCY } from "../constants/currencies";

export const useCurrency = () => {
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);

  // Inicjalizacja z localStorage, wykonywanie tylko w przeglądarce, podczas hydratacji
  useEffect(() => {
    try {
      const savedUserCurrency = localStorage.getItem("selectedCurrency");
      if (savedUserCurrency) {
        setCurrency(savedUserCurrency);
      }
    } catch (error) {
      console.error("Błąd podczas pobierania wybranej waluty z pamięci", error);
    }
  }, []);

  // Zapisywanie przy każdej zmianie
  useEffect(() => {
    try {
      localStorage.setItem("selectedCurrency", currency);
    } catch (error) {
      console.error("Błąd podczas zapisu wybranej waluty do pamięci", error);
    }
  }, [currency]);

  return [currency, setCurrency];
};
