"use client";
import { useEffect, useState } from "react";
import { DEFAULT_CURRENCY } from "../constants/currencies";
import { CurrencyContextType } from "../types/currencyContext";

export const useCurrency = (): CurrencyContextType => {
  const [currency, setCurrency] = useState<string>(DEFAULT_CURRENCY);

  // Inicjalizacja z localStorage, wykonywanie tylko w przeglądarce, podczas hydratacji
  useEffect(() => {
    try {
      const savedUserCurrency = localStorage.getItem("selectedCurrency");
      if (savedUserCurrency) {
        setCurrency(savedUserCurrency);
      }
    } catch (error: unknown) {
      console.error("Błąd podczas pobierania wybranej waluty z pamięci", error);
    }
  }, []);

  // Zapisywanie przy każdej zmianie
  useEffect(() => {
    try {
      localStorage.setItem("selectedCurrency", currency);
    } catch (error: unknown) {
      console.error("Błąd podczas zapisu wybranej waluty do pamięci", error);
    }
  }, [currency]);

  return [currency, setCurrency];
};
