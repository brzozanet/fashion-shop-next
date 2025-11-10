"use client";
import { useContext } from "react";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";
import { CURRENCIES } from "@/app/constants/currencies";
import { nanoid } from "nanoid";
import css from "./CurrencySelector.module.css";

export function CurrencySelector() {
  const [currency, setCurrency] = useContext(CurrencyContext);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <select
        className={css.currencySelector}
        value={currency}
        onChange={handleCurrencyChange}
      >
        {CURRENCIES.map((currency) => {
          return (
            <option value={currency.name} key={nanoid()}>
              {currency.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
